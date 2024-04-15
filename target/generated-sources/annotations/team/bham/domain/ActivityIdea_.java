package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ActivityIdea.class)
public abstract class ActivityIdea_ {

	public static volatile SingularAttribute<ActivityIdea, String> link;
	public static volatile SingularAttribute<ActivityIdea, String> description;
	public static volatile SingularAttribute<ActivityIdea, Long> id;
	public static volatile SingularAttribute<ActivityIdea, ActivitySelf> activitySelf;

	public static final String LINK = "link";
	public static final String DESCRIPTION = "description";
	public static final String ID = "id";
	public static final String ACTIVITY_SELF = "activitySelf";

}

