package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import team.bham.domain.enumeration.QuesType;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Question.class)
public abstract class Question_ {

	public static volatile SingularAttribute<Question, Questionnaire> questionnaire;
	public static volatile SingularAttribute<Question, String> question;
	public static volatile SetAttribute<Question, Question> parentQues;
	public static volatile SetAttribute<Question, MCQOption> options;
	public static volatile SingularAttribute<Question, Long> id;
	public static volatile SingularAttribute<Question, Question> subQues;
	public static volatile SingularAttribute<Question, QuesType> quesType;

	public static final String QUESTIONNAIRE = "questionnaire";
	public static final String QUESTION = "question";
	public static final String PARENT_QUES = "parentQues";
	public static final String OPTIONS = "options";
	public static final String ID = "id";
	public static final String SUB_QUES = "subQues";
	public static final String QUES_TYPE = "quesType";

}

