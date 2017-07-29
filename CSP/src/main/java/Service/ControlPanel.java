package Service;

import java.io.IOException;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import Logger.ActionLog;
import WebBeans.WebUser;
import c.DAO.DAOException;
import e.Facades.clientType;
import g.CouponSystem.CouponSystem;

@Path("controlpanel")
public class ControlPanel {

	/**
	 * <p>
	 * Serves the login process of the application.
	 * </p>
	 * Checks if the given credentials are valid and if so, sends a new WebUser To the Client Side.
	 * Also Initialize the ActionLog.
	 * 
	 * @param username
	 *            user name
	 * @param password
	 *            password
	 * @param userType
	 *            {@link ClientType} as string (and case insensitive).
	 * @return Status 200 if login succeeded. Otherwise, a message describing
	 *         the error.
	 */
	@Path("login/{username}/{password}/{userType}")
	@POST
	public Response loginSPA(@PathParam("username") String username, @PathParam("password") String password,
			@PathParam("userType") String userType) {
		try {
			ActionLog.initialize();
		} catch (SecurityException | IOException e1) {
			return Response.status(400).entity(e1.getMessage()).build();
		}

		String type = userType.toUpperCase();
		try {
			CouponSystem.getInstance().Login(username, password, clientType.valueOf(type));
			WebUser webUser = new WebUser();
			webUser.setUserName(username);
			webUser.setPassword(password);
			webUser.setType(clientType.valueOf(type));
			return Response.ok().entity(webUser).build();
		} catch (DAOException e) {
			return Response.status(400).entity(e.getMessage()).build();
		}
	}
}