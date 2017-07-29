package WebBeans;

import b.JavaBeans.Coupon;
import b.JavaBeans.CouponType;

import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;

@XmlRootElement
public class WebCoupon implements Serializable {

	private static final long serialVersionUID = 7704978447152925823L;
	private long id;
	private String title;
	private Date startDate;
	private Date endDate;
	private int amount;
	private CouponType type;
	private String message;
	private double price;
	private String image;

	public WebCoupon(Coupon coupon) {
		this.id = coupon.getId();
		this.title = coupon.getTitle();
		this.startDate = coupon.getStartDate();
		this.endDate = coupon.getEndDate();
		this.amount = coupon.getAmount();
		this.type = coupon.getCouponType();
		this.message = coupon.getMessage();
		this.price = coupon.getPrice();
		this.image = coupon.getImage();
	}

	public WebCoupon(long id, String title, Date startDate, Date endDate, int amount, CouponType type, String message,
			double price, String image) {
		this.id = id;
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.type = type;
		this.message = message;
		this.price = price;
		this.image = image;
	}

	public WebCoupon() {
	}

	public static Collection<Coupon> convertToCoupons(Collection<WebCoupon> webCoupons) {
		Collection<Coupon> coupons = new ArrayList<Coupon>();

		for (WebCoupon webCoupon : webCoupons) {
			coupons.add(webCoupon.convertToCoupon());
		}

		return coupons;
	}

	public static Collection<WebCoupon> convertToWebCoupons(Collection<Coupon> coupons) {
		Collection<WebCoupon> webCoupons = new ArrayList<WebCoupon>();

		for (Coupon coupon : coupons) {
			webCoupons.add(new WebCoupon(coupon));
		}

		return webCoupons;
	}

	public Coupon convertToCoupon() {
		return new Coupon(this.id, this.title, this.startDate, this.endDate, this.amount, this.type, this.message,
				this.price, this.image);
	}

	public WebCoupon convertToWebCoupon(Coupon coupon) {
		return new WebCoupon(coupon);
	}

	public Date getStartDate() {
		return this.startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return this.endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getAmount() {
		return this.amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public CouponType getType() {
		return this.type;
	}

	public void setType(CouponType type) {
		this.type = type;
	}

	public String getMessage() {
		return this.message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public double getPrice() {
		return this.price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "WebCoupon [id=" + id + ", title=" + title + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", amount=" + amount + ", type=" + type + ", message=" + message + ", price=" + price + ", image="
				+ image + "]";
	}
}
