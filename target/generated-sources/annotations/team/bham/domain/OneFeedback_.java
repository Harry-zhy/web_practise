package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(OneFeedback.class)
public abstract class OneFeedback_ {

	public static volatile SingularAttribute<OneFeedback, String> videoPath;
	public static volatile SingularAttribute<OneFeedback, String> imagePath;
	public static volatile SingularAttribute<OneFeedback, Boolean> withMultiMedia;
	public static volatile SingularAttribute<OneFeedback, Feedbacks> feedbacks;
	public static volatile SingularAttribute<OneFeedback, Long> id;
	public static volatile SingularAttribute<OneFeedback, String> content;

	public static final String VIDEO_PATH = "videoPath";
	public static final String IMAGE_PATH = "imagePath";
	public static final String WITH_MULTI_MEDIA = "withMultiMedia";
	public static final String FEEDBACKS = "feedbacks";
	public static final String ID = "id";
	public static final String CONTENT = "content";

}

