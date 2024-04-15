package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Caterers.class)
public abstract class Caterers_ {

	public static volatile SingularAttribute<Caterers, Integer> guestLimit;
	public static volatile SingularAttribute<Caterers, EventItinerary> eventItinerary;
	public static volatile SingularAttribute<Caterers, String> pictureContentType;
	public static volatile SingularAttribute<Caterers, byte[]> picture;
	public static volatile SetAttribute<Caterers, Cuisine> cuisines;
	public static volatile SetAttribute<Caterers, DietaryRequirements> dietaryRequirements;
	public static volatile SingularAttribute<Caterers, BookedCaterer> bookedCaterer;
	public static volatile SetAttribute<Caterers, Rating> ratings;
	public static volatile SingularAttribute<Caterers, Supplier> supplier;
	public static volatile SingularAttribute<Caterers, String> name;
	public static volatile SingularAttribute<Caterers, Double> pricePerPerson;
	public static volatile SingularAttribute<Caterers, Long> id;
	public static volatile SingularAttribute<Caterers, Event> event;

	public static final String GUEST_LIMIT = "guestLimit";
	public static final String EVENT_ITINERARY = "eventItinerary";
	public static final String PICTURE_CONTENT_TYPE = "pictureContentType";
	public static final String PICTURE = "picture";
	public static final String CUISINES = "cuisines";
	public static final String DIETARY_REQUIREMENTS = "dietaryRequirements";
	public static final String BOOKED_CATERER = "bookedCaterer";
	public static final String RATINGS = "ratings";
	public static final String SUPPLIER = "supplier";
	public static final String NAME = "name";
	public static final String PRICE_PER_PERSON = "pricePerPerson";
	public static final String ID = "id";
	public static final String EVENT = "event";

}

