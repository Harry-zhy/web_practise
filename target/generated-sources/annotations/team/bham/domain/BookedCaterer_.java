package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(BookedCaterer.class)
public abstract class BookedCaterer_ {

	public static volatile SingularAttribute<BookedCaterer, Caterers> caterers;
	public static volatile SingularAttribute<BookedCaterer, Boolean> confirmationStatus;
	public static volatile SingularAttribute<BookedCaterer, Itinerary> itinerary;
	public static volatile SingularAttribute<BookedCaterer, Long> id;

	public static final String CATERERS = "caterers";
	public static final String CONFIRMATION_STATUS = "confirmationStatus";
	public static final String ITINERARY = "itinerary";
	public static final String ID = "id";

}

