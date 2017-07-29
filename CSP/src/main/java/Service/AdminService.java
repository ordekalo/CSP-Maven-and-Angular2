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
import WebBeans.WebCompany;
import WebBeans.WebCustomer;
import b.JavaBeans.Company;
import b.JavaBeans.Customer;
import c.DAO.DAOException;
import e.Facades.AdminFacade;
import e.Facades.clientType;
import g.CouponSystem.CouponSystem;

@Path("adminservice")
public class AdminService {

	public AdminService() {
	}

	private AdminFacade getFacade() {
		try {
			return (AdminFacade) CouponSystem.getInstance().Login("admin", "1234", clientType.ADMIN);
		} catch (DAOException e) {
			ActionLog.info("Error ADMIN getFacade: " + e);
			return null;
		}
	}

	@POST
	@Path("createcompany")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response createCompany(WebCompany webCompany) {
		try {
			this.getFacade().createCompany(webCompany.convertToCompany());
			ActionLog.info("ADMIN createCompany " + webCompany.toString());
			return Response.ok().build();
		} catch (Exception var3) {
			return ExceptionResponse.build(var3);
		}
	}

	@DELETE
	@Path("deletecompany/{id}")
	@Consumes({ "application/json" })
	public Response deleteCompany(@PathParam("id") long id) {
		try {
			this.getFacade().removeCompany(new Company(id, "", "", ""));
			ActionLog.info("ADMIN deleteCompany " + id);
			return Response.ok().build();
		} catch (Exception var5) {
			return ExceptionResponse.build(var5);
		}
	}

	@PUT
	@Path("updatecompany")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response updateCompany(WebCompany webCompany) {
		try {
			if (webCompany.getPassword() == null) {
				webCompany.setPassword(this.getFacade().getCompany(webCompany.getId()).getPassword());
			}

			this.getFacade().updateCompany(webCompany.convertToCompany());
			ActionLog.info("ADMIN updateCompany " + webCompany.toString());
			return Response.ok().build();
		} catch (Exception var3) {
			System.err.println(var3.getMessage());
			return ExceptionResponse.build(var3);
		}
	}

	@GET
	@Path("getallcompanies")
	@Produces({ "application/json" })
	public Response getAllCompanies() {
		Collection<WebCompany> webCompanies = new ArrayList<>();
		try {
			for (Company company : this.getFacade().getAllCompanies()) {
				webCompanies.add(new WebCompany(company));
			}

			ActionLog.info("ADMIN getAllCustomers");
			return Response.ok(new GenericEntity<Collection<WebCompany>>(webCompanies) {
			}).build();
		} catch (Exception var5) {
			return ExceptionResponse.build(var5);
		}
	}

	@GET
	@Path("getcompany/{id}")
	@Produces({ "application/json" })
	public Response getCompany(@PathParam("id") long id) {
		try {
			ActionLog.info("ADMIN getCompany " + id);
			return Response.ok().entity(new WebCompany(this.getFacade().getCompany(id))).build();
		} catch (Exception e) {
			e.printStackTrace();
			return ExceptionResponse.build(e);
		}
	}

	@POST
	@Path("createcustomer")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response createCustomer(WebCustomer webCustomer) {
		try {
			this.getFacade().createCustomer(webCustomer.convertToCustomer());
			ActionLog.info("ADMIN createCustomer " + webCustomer.toString());
			return Response.ok().build();
		} catch (Exception e) {
			return ExceptionResponse.build(e);
		}

	}

	@DELETE
	@Path("deletecustomer/{id}")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response deleteCustomer(@PathParam("id") long id) {
		try {
			this.getFacade().removeCustomer(new Customer(id, "", ""));
			ActionLog.info("ADMIN deleteCustomer " + id);
			return Response.ok().build();
		} catch (Exception e) {
			return ExceptionResponse.build(e);
		}

	}

	@PUT
	@Path("updatecustomer")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response updetCustomer(WebCustomer webCustomer) {
		try {
			this.getFacade().updateCustomer(webCustomer.convertToCustomer());
			ActionLog.info("ADMIN updetCustomer " + webCustomer.toString());
			return Response.ok().build();
		} catch (Exception e) {
			return ExceptionResponse.build(e);
		}

	}

	@GET
	@Path("getcustomer/{id}")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response getCustomer(@PathParam("id") long id) {
		try {
			ActionLog.info("ADMIN getCustomer " + id);
			return Response.ok().entity(new WebCustomer(this.getFacade().getCustomer(id))).build();
		} catch (Exception e) {
			return ExceptionResponse.build(e);
		}
	}

	@GET
	@Path("getallcustomers")
	@Produces({ "application/json" })
	public Response getAllCustomers() {
		Collection<WebCustomer> webCustomers = new ArrayList<>();
		try {
			for (Customer customer : this.getFacade().getAllCustomer()) {
				webCustomers.add(new WebCustomer(customer));
			}

			ActionLog.info("ADMIN getAllCustomers");
			return Response.ok(new GenericEntity<Collection<WebCustomer>>(webCustomers) {
			}).build();
		} catch (Exception e) {
			return ExceptionResponse.build(e);
		}
	}
}
