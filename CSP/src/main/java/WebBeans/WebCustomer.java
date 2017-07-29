package WebBeans;

import b.JavaBeans.Coupon;
import b.JavaBeans.Customer;

import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

@XmlRootElement
public class WebCustomer implements Serializable {
    @Override
	public String toString() {
		return "WebCustomer [id=" + id + ", custName=" + custName + ", password=" + password + "]";
	}

	private static final long serialVersionUID = 1L;
    private long id;
    private String custName;
    private String password;
    private Collection<Coupon> coupons;

    public WebCustomer() {
    }

    public WebCustomer(long id, String custName, String password) {
        this.id = id;
        this.custName = custName;
        this.password = password;
    }

    public WebCustomer(Customer customer) {
        this.id = customer.getId();
        this.custName = customer.getCustName();
        this.coupons = customer.getCoupons();
    }

    public static Collection<Customer> convertToCustomers(Collection<WebCustomer> webCustomers) {
        Collection<Customer> customers = new ArrayList<Customer>();

        for (WebCustomer webCustomer : webCustomers) {
            customers.add(webCustomer.convertToCustomer());
        }

        return customers;
    }

    public static Collection<WebCustomer> convertToWebCustomers(Collection<Customer> customers) {
        Collection<WebCustomer> webCustomers = new ArrayList<WebCustomer>();

        for (Customer customer : customers) {
            webCustomers.add(new WebCustomer(customer));
        }

        return webCustomers;
    }

    public Customer convertToCustomer() {
        return new Customer(this.id, this.custName, this.password);
    }

    public WebCustomer convertToWebCustomer(Customer customer) {
        return new WebCustomer(customer);
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Coupon> getCoupons() {
        return this.coupons;
    }

    public void setCoupons(Collection<Coupon> coupons) {
        this.coupons = coupons;
    }

    public String getCustName() {
        return this.custName;
    }

    public void setCustName(String custName) {
        this.custName = custName;
    }
}
