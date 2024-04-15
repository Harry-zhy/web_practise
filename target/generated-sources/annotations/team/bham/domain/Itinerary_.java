package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Itinerary.class)
public abstract class Itinerary_ {

	public static volatile SetAttribute<Itinerary, BookedCaterer> bookedCaterers;
	public static volatile SingularAttribute<Itinerary, ZonedDateTime> startTime;
	public static volatile SingularAttribute<Itinerary, String> location;
	public static volatile SingularAttribute<Itinerary, Long> id;
	public static volatile SingularAttribute<Itinerary, ZonedDateTime> endTime;

	public static final String BOOKED_CATERERS = "bookedCaterers";
	public static final String START_TIME = "startTime";
	public static final String LOCATION = "location";
	public static final String ID = "id";
	public static final String END_TIME = "endTime";

}

