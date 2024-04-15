package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Event.class)
public abstract class Event_ {

	public static volatile SingularAttribute<Event, ZonedDateTime> date;
	public static volatile SingularAttribute<Event, MockVenueEntity> venue;
	public static volatile SetAttribute<Event, Caterers> caterers;
	public static volatile SetAttribute<Event, ActivitySelf> activities;
	public static volatile SingularAttribute<Event, Integer> spaces;
	public static volatile SingularAttribute<Event, Long> id;
	public static volatile SingularAttribute<Event, String> title;

	public static final String DATE = "date";
	public static final String VENUE = "venue";
	public static final String CATERERS = "caterers";
	public static final String ACTIVITIES = "activities";
	public static final String SPACES = "spaces";
	public static final String ID = "id";
	public static final String TITLE = "title";

}

