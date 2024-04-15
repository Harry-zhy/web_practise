package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(EventItinerary.class)
public abstract class EventItinerary_ {

	public static volatile SetAttribute<EventItinerary, Caterers> caterers;
	public static volatile SetAttribute<EventItinerary, VenueInformation> venueInformations;
	public static volatile SetAttribute<EventItinerary, ItineraryGuest> itineraryGuests;
	public static volatile SingularAttribute<EventItinerary, Integer> numberOfGuests;
	public static volatile SingularAttribute<EventItinerary, Long> id;
	public static volatile SetAttribute<EventItinerary, ActivitySaved> activitySaveds;
	public static volatile SingularAttribute<EventItinerary, ItineraryDateTime> eventDate;

	public static final String CATERERS = "caterers";
	public static final String VENUE_INFORMATIONS = "venueInformations";
	public static final String ITINERARY_GUESTS = "itineraryGuests";
	public static final String NUMBER_OF_GUESTS = "numberOfGuests";
	public static final String ID = "id";
	public static final String ACTIVITY_SAVEDS = "activitySaveds";
	public static final String EVENT_DATE = "eventDate";

}

