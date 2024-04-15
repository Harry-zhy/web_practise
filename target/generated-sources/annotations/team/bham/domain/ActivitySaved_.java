package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ActivitySaved.class)
public abstract class ActivitySaved_ {

	public static volatile SingularAttribute<ActivitySaved, ZonedDateTime> date;
	public static volatile SetAttribute<ActivitySaved, ActivitySelf> activitySelves;
	public static volatile SetAttribute<ActivitySaved, BookedActivity> bookedActivities;
	public static volatile SingularAttribute<ActivitySaved, String> name;
	public static volatile SingularAttribute<ActivitySaved, String> company;
	public static volatile SingularAttribute<ActivitySaved, EventItinerary> eventItinerary;
	public static volatile SingularAttribute<ActivitySaved, Long> id;

	public static final String DATE = "date";
	public static final String ACTIVITY_SELVES = "activitySelves";
	public static final String BOOKED_ACTIVITIES = "bookedActivities";
	public static final String NAME = "name";
	public static final String COMPANY = "company";
	public static final String EVENT_ITINERARY = "eventItinerary";
	public static final String ID = "id";

}

