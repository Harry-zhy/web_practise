package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Rating.class)
public abstract class Rating_ {

	public static volatile SingularAttribute<Rating, ActivityCompany> activityCompany;
	public static volatile SingularAttribute<Rating, Caterers> caterers;
	public static volatile SingularAttribute<Rating, BookedActivity> bookedActivity;
	public static volatile SingularAttribute<Rating, Long> id;
	public static volatile SingularAttribute<Rating, Integer> value;
	public static volatile SingularAttribute<Rating, ActivitySelf> activitySelf;

	public static final String ACTIVITY_COMPANY = "activityCompany";
	public static final String CATERERS = "caterers";
	public static final String BOOKED_ACTIVITY = "bookedActivity";
	public static final String ID = "id";
	public static final String VALUE = "value";
	public static final String ACTIVITY_SELF = "activitySelf";

}

