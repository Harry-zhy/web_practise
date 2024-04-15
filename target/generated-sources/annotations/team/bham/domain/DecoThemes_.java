package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DecoThemes.class)
public abstract class DecoThemes_ {

	public static volatile SetAttribute<DecoThemes, DecoImages> decoImages;
	public static volatile SetAttribute<DecoThemes, DecoSavedTheme> decoSavedThemes;
	public static volatile SingularAttribute<DecoThemes, String> name;
	public static volatile SingularAttribute<DecoThemes, String> description;
	public static volatile SingularAttribute<DecoThemes, Long> id;

	public static final String DECO_IMAGES = "decoImages";
	public static final String DECO_SAVED_THEMES = "decoSavedThemes";
	public static final String NAME = "name";
	public static final String DESCRIPTION = "description";
	public static final String ID = "id";

}

