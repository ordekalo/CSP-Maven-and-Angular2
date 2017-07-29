package WebBeans;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

import e.Facades.clientType;

@XmlRootElement
public class WebUser implements Serializable {

	private static final long serialVersionUID = 1L;
	private String userName;
	private String password;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public clientType getType() {
		return type;
	}

	public void setType(clientType type) {
		this.type = type;
	}

	private clientType type;

	@Override
	public String toString() {
		return "WebUser [userName=" + userName + ", password=" + password + ", type=" + type + "]";
	}
}
