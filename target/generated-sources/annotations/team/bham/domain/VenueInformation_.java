package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(VenueInformation.class)
public abstract class VenueInformation_ {

	public static volatile SingularAttribute<VenueInformation, ZonedDateTime> openingTimeUntil;
	public static volatile SingularAttribute<VenueInformation, Float> price;
	public static volatile SingularAttribute<VenueInformation, ZonedDateTime> openingTimeFrom;
	public static volatile SingularAttribute<VenueInformation, Supplier> supplier;
	public static volatile SingularAttribute<VenueInformation, String> name;
	public static volatile SingularAttribute<VenueInformation, String> location;
	public static volatile SingularAttribute<VenueInformation, EventItinerary> eventItinerary;
	public static volatile SingularAttribute<VenueInformation, Long> id;
	public static volatile SingularAttribute<VenueInformation, String> pictureContentType;
	public static volatile SingularAttribute<VenueInformation, byte[]> picture;
	public static volatile SingularAttribute<VenueInformation, Integer> capacity;

	public static final String OPENING_TIME_UNTIL = "openingTimeUntil";
	public static final String PRICE = "price";
	public static final String OPENING_TIME_FROM = "openingTimeFrom";
	public static final String SUPPLIER = "supplier";
	public static final String NAME = "name";
	public static final String LOCATION = "location";
	public static final String EVENT_ITINERARY = "eventItinerary";
	public static final String ID = "id";
	public static final String PICTURE_CONTENT_TYPE = "pictureContentType";
	public static final String PICTURE = "picture";
	public static final String CAPACITY = "capacity";

}

