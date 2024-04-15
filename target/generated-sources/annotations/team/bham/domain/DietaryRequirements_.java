package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DietaryRequirements.class)
public abstract class DietaryRequirements_ {

	public static volatile SetAttribute<DietaryRequirements, Caterers> caterers;
	public static volatile SingularAttribute<DietaryRequirements, Long> id;
	public static volatile SingularAttribute<DietaryRequirements, String> option;

	public static final String CATERERS = "caterers";
	public static final String ID = "id";
	public static final String OPTION = "option";

}

