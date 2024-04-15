package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(BookedActivity.class)
public abstract class BookedActivity_ {

	public static volatile SetAttribute<BookedActivity, ActivityCompany> activityCompanies;
	public static volatile SetAttribute<BookedActivity, Rating> ratings;
	public static volatile SingularAttribute<BookedActivity, String> name;
	public static volatile SingularAttribute<BookedActivity, Long> id;
	public static volatile SetAttribute<BookedActivity, ActivitySaved> activitySaveds;

	public static final String ACTIVITY_COMPANIES = "activityCompanies";
	public static final String RATINGS = "ratings";
	public static final String NAME = "name";
	public static final String ID = "id";
	public static final String ACTIVITY_SAVEDS = "activitySaveds";

}

