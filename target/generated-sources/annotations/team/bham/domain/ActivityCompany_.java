package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ActivityCompany.class)
public abstract class ActivityCompany_ {

	public static volatile SetAttribute<ActivityCompany, ActivityImage> activityImages;
	public static volatile SetAttribute<ActivityCompany, Rating> ratings;
	public static volatile SingularAttribute<ActivityCompany, Supplier> supplier;
	public static volatile SingularAttribute<ActivityCompany, String> name;
	public static volatile SingularAttribute<ActivityCompany, String> about;
	public static volatile SingularAttribute<ActivityCompany, BookedActivity> bookedActivity;
	public static volatile SingularAttribute<ActivityCompany, ActivityContactDetails> activityContactDetails;
	public static volatile SingularAttribute<ActivityCompany, Long> id;

	public static final String ACTIVITY_IMAGES = "activityImages";
	public static final String RATINGS = "ratings";
	public static final String SUPPLIER = "supplier";
	public static final String NAME = "name";
	public static final String ABOUT = "about";
	public static final String BOOKED_ACTIVITY = "bookedActivity";
	public static final String ACTIVITY_CONTACT_DETAILS = "activityContactDetails";
	public static final String ID = "id";

}

