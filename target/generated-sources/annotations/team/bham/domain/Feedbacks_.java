package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Feedbacks.class)
public abstract class Feedbacks_ {

	public static volatile SingularAttribute<Feedbacks, ZonedDateTime> date;
	public static volatile SetAttribute<Feedbacks, OneFeedback> oneFeedbacks;
	public static volatile SingularAttribute<Feedbacks, Supplier> supplier;
	public static volatile SingularAttribute<Feedbacks, Rating> rating;
	public static volatile SingularAttribute<Feedbacks, Long> id;
	public static volatile SingularAttribute<Feedbacks, String> userName;

	public static final String DATE = "date";
	public static final String ONE_FEEDBACKS = "oneFeedbacks";
	public static final String SUPPLIER = "supplier";
	public static final String RATING = "rating";
	public static final String ID = "id";
	public static final String USER_NAME = "userName";

}

