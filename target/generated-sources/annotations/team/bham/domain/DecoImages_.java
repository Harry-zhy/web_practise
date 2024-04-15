package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DecoImages.class)
public abstract class DecoImages_ {

	public static volatile SingularAttribute<DecoImages, DecoCompany> decoCompany;
	public static volatile SingularAttribute<DecoImages, Long> id;
	public static volatile SingularAttribute<DecoImages, String> pictureContentType;
	public static volatile SingularAttribute<DecoImages, byte[]> picture;
	public static volatile SingularAttribute<DecoImages, DecoThemes> decoThemes;

	public static final String DECO_COMPANY = "decoCompany";
	public static final String ID = "id";
	public static final String PICTURE_CONTENT_TYPE = "pictureContentType";
	public static final String PICTURE = "picture";
	public static final String DECO_THEMES = "decoThemes";

}

