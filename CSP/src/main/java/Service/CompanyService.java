package Service;

import java.util.ArrayList;
import java.util.Collection;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.Response;

import Logger.ActionLog;
import WebBeans.WebCoupon;
import b.JavaBeans.Coupon;
import c.DAO.DAOException;
import e.Facades.CompanyFacade;
import e.Facades.clientType;
import g.CouponSystem.CouponSystem;

@Path("companyservice")
public class CompanyService {

	public CompanyService() {

	}
// Helps Create An Instance of The Facade.
	private CompanyFacade getFacade(String username, String password, String userType) {
		try {
			return (CompanyFacade) CouponSystem.getInstance().Login(username, password, clientType.valueOf(userType));
		} catch (DAOException e) {
			ActionLog.info("Error COMPANY getFacade: " + e);
			return null;
		}
	}

	@POST
	@Path("createcoupon/{username}/{password}/{userType}")
	public Response createCoupon(WebCoupon webCoupon, @PathParam("username") String username,
			@PathParam("password") String password, @PathParam("userType") String userType) {
		try {
			this.getFacade(username, password, userType).createCoupon(webCoupon.convertToCoupon());
			ActionLog.info("COMPANY createCoupon " + webCoupon.toString());
			return Response.ok().build();
		} catch (Exception e) {
			return ExceptionResponse.build(e);
		}

	}

	@DELETE
	@Path("deletecoupon/{id}/{username}/{password}/{userType}")
	@Consumes({ "application/json" })
	public Response deleteCoupon(@PathParam("id") long id, @PathParam("username") String username,
			@PathParam("password") String password, @PathParam("userType") String userType) {
		Coupon coupon = new Coupon();
		coupon.setId(id);

		try {
			this.getFacade(username, password, userType).removeCoupon(coupon);
			ActionLog.info("COMPANY deleteCoupon " + id);
			return Response.ok().build();
		} catch (Exception e) {
			return ExceptionResponse.build(e);
		}
	}

	@PUT
	@Path("updatecoupon/{username}/{password}/{userType}")
	@Consumes({ "application/json" })
	public Response updateCoupon(WebCoupon webCoupon, @PathParam("username") String username,
			@PathParam("password") String password, @PathParam("userType") String userType) {
		Coupon coupon = new Coupon(webCoupon.getId(), webCoupon.getTitle(), webCoupon.getStartDate(),
				webCoupon.getEndDate(), webCoupon.getAmount(), webCoupon.getType(), webCoupon.getMessage(),
				webCoupon.getPrice(), webCoupon.getImage());

		try {
			this.getFacade(username, password, userType).updateCoupon(coupon.getId(), coupon.getEndDate(),
					coupon.getPrice());
			ActionLog.info("COMPANY updateCoupon " + webCoupon.toString());
			return Response.ok().build();
		} catch (Exception e) {
			return ExceptionResponse.build(e);
		}

	}

	@GET
	@Path("getallcoupons/{username}/{password}/{userType}")
	@Produces({ "application/json" })
	public Response getAllCoupons(@PathParam("username") String username, @PathParam("password") String password,
			@PathParam("userType") String userType) {
		Collection<WebCoupon> webCoupons = new ArrayList<>();
		try {
			for (Coupon coupon : this.getFacade(username, password, userType).getAllCoupons()) {
				webCoupons.add(new WebCoupon(coupon));
			}
			ActionLog.info("COMPANY getAllCoupons");
			return Response.ok(new GenericEntity<Collection<WebCoupon>>(webCoupons) {
			}).build();
		} catch (Exception var5) {
			return ExceptionResponse.build(var5);
		}
	}
}
