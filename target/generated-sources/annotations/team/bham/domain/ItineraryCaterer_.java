package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ItineraryCaterer.class)
public abstract class ItineraryCaterer_ {

	public static volatile SingularAttribute<ItineraryCaterer, ZonedDateTime> catererTime;
	public static volatile SingularAttribute<ItineraryCaterer, String> catererName;
	public static volatile SingularAttribute<ItineraryCaterer, Float> catererCost;
	public static volatile SingularAttribute<ItineraryCaterer, Long> id;
	public static volatile SingularAttribute<ItineraryCaterer, String> catererHost;

	public static final String CATERER_TIME = "catererTime";
	public static final String CATERER_NAME = "catererName";
	public static final String CATERER_COST = "catererCost";
	public static final String ID = "id";
	public static final String CATERER_HOST = "catererHost";

}

