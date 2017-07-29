package Service;

import java.util.ArrayList;
import java.util.Collection;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import Logger.ActionLog;
import WebBeans.WebCoupon;
import b.JavaBeans.Coupon;
import c.DAO.DAOException;
import e.Facades.CustomerFacade;
import e.Facades.clientType;
import g.CouponSystem.CouponSystem;

@Path("customerservice")
public class CustomerService {
	public CustomerService() {
	}

	// Helps Create An Instance of The Facade.
	private CustomerFacade getFacade(String username, String password, String userType) {
		try {
			return (CustomerFacade) CouponSystem.getInstance().Login(username, password, clientType.valueOf(userType));
		} catch (DAOException e) {
			ActionLog.info("Error CUSTOMER getFacade: " + e);
			return null;
		}
	}

	@POST
	@Path("purchasecoupon/{id}/{username}/{password}/{userType}")
	public Response purchaseCoupon(@PathParam("id") long id, @PathParam("username") String username,
			@PathParam("password") String password, @PathParam("userType") String userType) {
		Coupon coupon = new Coupon();
		coupon.setId(id);
		try {
			this.getFacade(username, password, userType).purchaseCoupon(coupon);
			ActionLog.info("CUSTOMER purchaseCoupon " + id);
			return Response.ok().build();
		} catch (Exception e) {
			return ExceptionResponse.build(e);
		}
	}

	@GET
	@Path("getallpurchasedcoupons/{username}/{password}/{userType}")
	@Produces({ "application/json" })
	public Collection<WebCoupon> getAllPurchasedCoupons(@PathParam("username") String username,
			@PathParam("password") String password, @PathParam("userType") String userType) {
		Collection<WebCoupon> webCoupons = new ArrayList<WebCoupon>();

		try {
			Collection<Coupon> coupons = this.getFacade(username, password, userType).getAllPurchases();

			for (Coupon coupon : coupons) {
				webCoupons.add(new WebCoupon(coupon));
			}

			ActionLog.info("CUSTOMER getAllPurchasedCoupons");
			return webCoupons;
		} catch (DAOException var5) {
			System.err.println(var5.getMessage());
			return webCoupons;
		}
	}
}
