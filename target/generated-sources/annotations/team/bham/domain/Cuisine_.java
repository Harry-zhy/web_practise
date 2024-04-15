package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Cuisine.class)
public abstract class Cuisine_ {

	public static volatile SetAttribute<Cuisine, Caterers> caterers;
	public static volatile SingularAttribute<Cuisine, Long> id;
	public static volatile SingularAttribute<Cuisine, String> region;

	public static final String CATERERS = "caterers";
	public static final String ID = "id";
	public static final String REGION = "region";

}

