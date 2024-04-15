package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DecoSavedTheme.class)
public abstract class DecoSavedTheme_ {

	public static volatile SingularAttribute<DecoSavedTheme, String> name;
	public static volatile SingularAttribute<DecoSavedTheme, Long> id;
	public static volatile SetAttribute<DecoSavedTheme, DecoThemes> decoThemes;

	public static final String NAME = "name";
	public static final String ID = "id";
	public static final String DECO_THEMES = "decoThemes";

}

