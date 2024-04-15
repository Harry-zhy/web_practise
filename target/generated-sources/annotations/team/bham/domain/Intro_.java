package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Intro.class)
public abstract class Intro_ {

	public static volatile SingularAttribute<Intro, Long> id;
	public static volatile SingularAttribute<Intro, String> salutation;
	public static volatile SingularAttribute<Intro, String> title;
	public static volatile SingularAttribute<Intro, String> body;

	public static final String ID = "id";
	public static final String SALUTATION = "salutation";
	public static final String TITLE = "title";
	public static final String BODY = "body";

}

