package Service;

import javax.security.auth.login.LoginException;
import javax.ws.rs.core.Response;

import Logger.ActionLog;
import c.DAO.DAOException;

public class ExceptionResponse {

	public ExceptionResponse() {
	}

	public static Response build(String msg, int status) {
		return Response.status(status).entity(msg).type("text/plain").build();
	}

	public static Response build(Exception e) {
		if (e instanceof DAOException) {
			ActionLog.info("CSP-Log:" + e.getMessage());
			return build(e.getMessage(), 400);
		} else if (e instanceof LoginException) {
			ActionLog.info("CSP-Log:" + e.getMessage());
			return build(e.getMessage(), 401);
		} else {
			ActionLog.severe("CSP-Log: ", e);
			return build("Somthing Is Wrong With The Server. Please try again later! (ERROR 500)", 500);
		}
	}
}
