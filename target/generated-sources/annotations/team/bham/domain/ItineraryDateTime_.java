package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ItineraryDateTime.class)
public abstract class ItineraryDateTime_ {

	public static volatile SingularAttribute<ItineraryDateTime, ZonedDateTime> date;
	public static volatile SetAttribute<ItineraryDateTime, EventItinerary> eventItineraries;
	public static volatile SingularAttribute<ItineraryDateTime, ZonedDateTime> startTime;
	public static volatile SingularAttribute<ItineraryDateTime, Long> id;
	public static volatile SingularAttribute<ItineraryDateTime, ZonedDateTime> endTime;

	public static final String DATE = "date";
	public static final String EVENT_ITINERARIES = "eventItineraries";
	public static final String START_TIME = "startTime";
	public static final String ID = "id";
	public static final String END_TIME = "endTime";

}

