package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ItineraryVenue.class)
public abstract class ItineraryVenue_ {

	public static volatile SingularAttribute<ItineraryVenue, String> venueName;
	public static volatile SingularAttribute<ItineraryVenue, Float> venueCost;
	public static volatile SingularAttribute<ItineraryVenue, Long> id;
	public static volatile SingularAttribute<ItineraryVenue, String> venueAddress;
	public static volatile SingularAttribute<ItineraryVenue, String> venueHost;

	public static final String VENUE_NAME = "venueName";
	public static final String VENUE_COST = "venueCost";
	public static final String ID = "id";
	public static final String VENUE_ADDRESS = "venueAddress";
	public static final String VENUE_HOST = "venueHost";

}

