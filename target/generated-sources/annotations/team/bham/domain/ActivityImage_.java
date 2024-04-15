package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ActivityImage.class)
public abstract class ActivityImage_ {

	public static volatile SingularAttribute<ActivityImage, ActivityCompany> activityCompany;
	public static volatile SingularAttribute<ActivityImage, Long> id;
	public static volatile SingularAttribute<ActivityImage, String> pictureContentType;
	public static volatile SingularAttribute<ActivityImage, byte[]> picture;
	public static volatile SingularAttribute<ActivityImage, ActivitySelf> activitySelf;

	public static final String ACTIVITY_COMPANY = "activityCompany";
	public static final String ID = "id";
	public static final String PICTURE_CONTENT_TYPE = "pictureContentType";
	public static final String PICTURE = "picture";
	public static final String ACTIVITY_SELF = "activitySelf";

}

