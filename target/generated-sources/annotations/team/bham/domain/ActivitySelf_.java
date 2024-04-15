package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ActivitySelf.class)
public abstract class ActivitySelf_ {

	public static volatile SetAttribute<ActivitySelf, ActivityImage> activityImages;
	public static volatile SetAttribute<ActivitySelf, Rating> ratings;
	public static volatile SingularAttribute<ActivitySelf, String> name;
	public static volatile SingularAttribute<ActivitySelf, String> description;
	public static volatile SingularAttribute<ActivitySelf, Long> id;
	public static volatile SetAttribute<ActivitySelf, ActivitySaved> activitySaveds;
	public static volatile SingularAttribute<ActivitySelf, Event> event;
	public static volatile SetAttribute<ActivitySelf, ActivityIdea> activityIdeas;

	public static final String ACTIVITY_IMAGES = "activityImages";
	public static final String RATINGS = "ratings";
	public static final String NAME = "name";
	public static final String DESCRIPTION = "description";
	public static final String ID = "id";
	public static final String ACTIVITY_SAVEDS = "activitySaveds";
	public static final String EVENT = "event";
	public static final String ACTIVITY_IDEAS = "activityIdeas";

}

