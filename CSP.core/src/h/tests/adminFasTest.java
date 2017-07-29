package h.tests;

import java.sql.Date;
import java.util.Iterator;

import a.ConnectionPool.DBcreateWithTables;
import a.ConnectionPool.DBdropAlltables;
import b.JavaBeans.Company;
import b.JavaBeans.Coupon;
import b.JavaBeans.CouponType;
import b.JavaBeans.Customer;
import c.DAO.DAOException;
import e.Facades.AdminFacade;
import e.Facades.CompanyFacade;
import e.Facades.CustomerFacade;
import e.Facades.clientType;
import g.CouponSystem.CouponSystem;

/**
 * The admin fassad Test class checks and runs all authorized methods for the
 * Admin type of object.<br>
 * When the class is run, the database is regenerated and all of the methods are
 * run one by one.<br>
 * This class should not be part of the project and created for <strong>testing
 * and for the programmer only</strong>.
 */
public class adminFasTest {
	// ************************************************************
	public static void main(String[] args) throws DAOException {
		// A_LoadDataBase.getInstance().loadDataBase();
		// B_ConnectToDataBase.getInstance().connectToDateBase();
		// C_Statements.getInstance().resetTables();
		DBdropAlltables.dropAll();
		DBcreateWithTables.DBInit();
		AdminFacade admin = (AdminFacade) CouponSystem.getInstance().Login("admin", "1234", clientType.ADMIN);
		// ************************************************************
		// Creating An Object Of Coupon Class (Worked)
		Coupon coupon1 = new Coupon(1L, "Test1", Date.valueOf("2017-3-19"), Date.valueOf("2018-3-23"), 1,
				CouponType.CAMPING, "test1", 150.4, "1.img");
		Coupon coupon2 = new Coupon(2L, "Test2", Date.valueOf("2017-2-2"), Date.valueOf("2018-4-20"), 2,
				CouponType.ELECTRICITY, "test2", 202.5, "2.img");
		Coupon coupon3 = new Coupon(3L, "Test3", Date.valueOf("2017-4-2"), Date.valueOf("2018-5-20"), 2,
				CouponType.FOOD, "test3", 43.5, "3.img");
		// ************************************************************
		// Creating An Object Of Customer Class (Worked)
		Customer customer1 = new Customer(1L, "Test1", "PassTest1");
		Customer customer2 = new Customer(2L, "Test2", "PassTest2");
		Customer customer3 = new Customer(3L, "Test3", "PassTest3");
		// ************************************************************
		// Creating An Object Of Company Class (Worked)
		Company company1 = new Company(111L, "Test1", "password1", "test1@test.com");
		Company company2 = new Company(222L, "Test2", "password2", "test2@test.com");
		Company company3 = new Company(333L, "Test3", "password3", "test3@test.com");
		// ************************************************************
		admin.createCompany(company1);
		admin.createCompany(company2);
		admin.createCompany(company3);
		// ************************************************************
		admin.createCustomer(customer1);
		admin.createCustomer(customer2);
		admin.createCustomer(customer3);
		// ************************************************************
		// ************************************************************
		CompanyFacade company = (CompanyFacade) CouponSystem.getInstance().Login("Test1", "password1",
				clientType.COMPANY);
		CustomerFacade customer = (CustomerFacade) CouponSystem.getInstance().Login("Test1", "PassTest1",
				clientType.CUSTOMER);
		// Creates Coupon For The Current Company Using Company Facade (Worked)
		company.createCoupon(coupon1);
		company.createCoupon(coupon2);
		company.createCoupon(coupon3);
		// ************************************************************
		// Adding Coupons To The Customer On Customer_Coupon Table
		customer.purchaseCoupon(coupon1);
		customer.purchaseCoupon(coupon2);
		customer.purchaseCoupon(coupon3);
		// ************************************************************
		Company company4 = new Company(4L, "Test4", "password4", "test4@test.com");
		admin.createCompany(company4);
		// ************************************************************
		Customer customer4 = new Customer(4L, "Test4", "PassTest4");
		admin.createCustomer(customer4);
		// ************************************************************
		admin.removeCompany(company3);
		// ************************************************************
		admin.removeCustomer(customer1);
		// ************************************************************
		Iterator<Company> it = admin.getAllCompanies().iterator();
		while (it.hasNext()) {
			System.out.println(it.next().toString());
		}
		// ************************************************************
		Iterator<Customer> iter = admin.getAllCustomer().iterator();
		while (iter.hasNext()) {
			System.out.println(iter.next().toString());
		}
		// ************************************************************
		company4.setCompName("ChangedName4");
		company4.setPassword("ChangedPass4");
		admin.updateCompany(company4);
		// ************************************************************
		System.out.println(admin.getCompany(4L).toString());
		// ************************************************************
		customer2.setCustName("ChangedCast2");
		customer2.setPassword("ChangedPass2");
		customer2.setId(2L);
		admin.updateCustomer(customer2);
		// ************************************************************
		System.out.println(admin.getCustomer(2L).toString());
		// ************************************************************

	}
}
