package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(MCQOption.class)
public abstract class MCQOption_ {

	public static volatile SingularAttribute<MCQOption, Question> question;
	public static volatile SingularAttribute<MCQOption, Long> id;
	public static volatile SingularAttribute<MCQOption, String> value;

	public static final String QUESTION = "question";
	public static final String ID = "id";
	public static final String VALUE = "value";

}

