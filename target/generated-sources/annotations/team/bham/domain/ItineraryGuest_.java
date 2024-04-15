package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ItineraryGuest.class)
public abstract class ItineraryGuest_ {

	public static volatile SingularAttribute<ItineraryGuest, Boolean> rsvpStatus;
	public static volatile SingularAttribute<ItineraryGuest, String> name;
	public static volatile SetAttribute<ItineraryGuest, EventItinerary> eventItineraries;
	public static volatile SingularAttribute<ItineraryGuest, Long> id;
	public static volatile SingularAttribute<ItineraryGuest, String> email;

	public static final String RSVP_STATUS = "rsvpStatus";
	public static final String NAME = "name";
	public static final String EVENT_ITINERARIES = "eventItineraries";
	public static final String ID = "id";
	public static final String EMAIL = "email";

}

