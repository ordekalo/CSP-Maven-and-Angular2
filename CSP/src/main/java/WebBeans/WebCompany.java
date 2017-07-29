package WebBeans;

import b.JavaBeans.Company;
import b.JavaBeans.Coupon;

import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

@XmlRootElement
public class WebCompany implements Serializable {
    private static final long serialVersionUID = 1L;
    private long id;
    private String compName;
    private String password;
    private String email;
    private Collection<Coupon> coupons;

    public WebCompany() {
    }

    public WebCompany(Company company) {
        this.id = company.getId();
        this.compName = company.getCompName();
        this.email = company.getEmail();
    }

    public static Collection<Company> convertToCompanies(Collection<WebCompany> wc) {
        Collection<Company> companies = new ArrayList<Company>();

        for (WebCompany webCompany : wc) {
            companies.add(webCompany.convertToCompany());
        }

        return companies;
    }

    public static Collection<WebCompany> convertToWebCompanies(Collection<Company> companies) {
        Collection<WebCompany> WebCompanies = new ArrayList<WebCompany>();

        for (Company company : companies) {
            WebCompanies.add(new WebCompany(company));
        }

        return WebCompanies;
    }

    @Override
	public String toString() {
		return "WebCompany [id=" + id + ", compName=" + compName + ", password=" + password + ", email=" + email + "]";
	}

    public Company convertToCompany() {
        return new Company(this.id, this.compName, this.password, this.email);
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCompName() {
        return this.compName;
    }

    public void setCompName(String compName) {
        this.compName = compName;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Collection<Coupon> getCoupons() {
        return this.coupons;
    }

    public void setCoupons(Collection<Coupon> coupons) {
        this.coupons = coupons;
    }
}
