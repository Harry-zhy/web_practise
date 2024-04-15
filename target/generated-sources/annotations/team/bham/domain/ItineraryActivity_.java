package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ItineraryActivity.class)
public abstract class ItineraryActivity_ {

	public static volatile SingularAttribute<ItineraryActivity, Float> activityCost;
	public static volatile SingularAttribute<ItineraryActivity, String> activityHost;
	public static volatile SingularAttribute<ItineraryActivity, String> activityName;
	public static volatile SingularAttribute<ItineraryActivity, ZonedDateTime> activityTime;
	public static volatile SingularAttribute<ItineraryActivity, Long> id;

	public static final String ACTIVITY_COST = "activityCost";
	public static final String ACTIVITY_HOST = "activityHost";
	public static final String ACTIVITY_NAME = "activityName";
	public static final String ACTIVITY_TIME = "activityTime";
	public static final String ID = "id";

}

