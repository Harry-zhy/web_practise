package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Questionnaire.class)
public abstract class Questionnaire_ {

	public static volatile SingularAttribute<Questionnaire, ZonedDateTime> date;
	public static volatile SingularAttribute<Questionnaire, Intro> questionnaire;
	public static volatile SetAttribute<Questionnaire, Question> questions;
	public static volatile SingularAttribute<Questionnaire, Long> id;
	public static volatile SingularAttribute<Questionnaire, String> userName;

	public static final String DATE = "date";
	public static final String QUESTIONNAIRE = "questionnaire";
	public static final String QUESTIONS = "questions";
	public static final String ID = "id";
	public static final String USER_NAME = "userName";

}

