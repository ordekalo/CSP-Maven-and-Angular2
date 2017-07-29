
package Logger;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

/**
 * A Logger object is used to log messages for the current system.
 * <p>
 * In the system all messages are sent to here.
 * </p>
 */
public class ActionLog {
static Logger logger;
	/**
	 * create a logger singleton for the system.
	 * 
	 * @throws SecurityException
	 *             if a security manager exists, and the caller does not have
	 *             LoggingPermission("control").
	 * @throws IOException
	 *             if there are IO problems opening the files.
	 */
	public static void initialize() throws SecurityException, IOException {
		logger = Logger.getLogger("CSP-Log");
		logger.setLevel(Level.INFO);
		SimpleDateFormat dt = new SimpleDateFormat("yyyyy-mm-dd hh-mm-ss");
		FileHandler fh = new FileHandler("CSP Log - " + dt.format(Calendar.getInstance().getTime()) + ".log");
		SimpleFormatter formatter = new SimpleFormatter();
		fh.setFormatter(formatter);
		logger.addHandler(fh);
	}

	/**
	 * <p>
	 * Log an INFO message.
	 * </p>
	 * 
	 * If the logger is currently enabled for the INFO message level then the
	 * given message is forwarded to all the registered output Handler objects.
	 * 
	 * @param msg
	 *            The string message (or a key in the message catalog)
	 */
	public static synchronized void info(String msg) {
		logger.info(msg);
	}

	/**
	 * Log a SEVERE message.
	 * <p>
	 * If the logger is currently enabled for the SEVERE message level then the
	 * given message is forwarded to all the registered output Handler objects.
	 * <p>
	 * 
	 * @param msg
	 *            The string message.
	 * @param e
	 *            Throwable associated with log message.
	 */
	public static synchronized void severe(String msg, Exception e) {
		logger.log(Level.SEVERE, msg, e);
	}
}
