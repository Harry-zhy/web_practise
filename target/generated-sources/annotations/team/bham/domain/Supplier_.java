package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Supplier.class)
public abstract class Supplier_ {

	public static volatile SingularAttribute<Supplier, ActivityCompany> activityCompany;
	public static volatile SetAttribute<Supplier, BusinessInformation> businessInformations;
	public static volatile SingularAttribute<Supplier, Notification> notification;
	public static volatile SetAttribute<Supplier, VenueInformation> venueInformations;
	public static volatile SetAttribute<Supplier, Caterers> caterers;
	public static volatile SingularAttribute<Supplier, Boolean> isSupplier;
	public static volatile SetAttribute<Supplier, AdsManagement> adsManagements;
	public static volatile SingularAttribute<Supplier, DecoCompany> decoCompany;
	public static volatile SetAttribute<Supplier, Feedbacks> feedbacks;
	public static volatile SingularAttribute<Supplier, Long> id;

	public static final String ACTIVITY_COMPANY = "activityCompany";
	public static final String BUSINESS_INFORMATIONS = "businessInformations";
	public static final String NOTIFICATION = "notification";
	public static final String VENUE_INFORMATIONS = "venueInformations";
	public static final String CATERERS = "caterers";
	public static final String IS_SUPPLIER = "isSupplier";
	public static final String ADS_MANAGEMENTS = "adsManagements";
	public static final String DECO_COMPANY = "decoCompany";
	public static final String FEEDBACKS = "feedbacks";
	public static final String ID = "id";

}

