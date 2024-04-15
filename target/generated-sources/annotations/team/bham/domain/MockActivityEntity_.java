package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(MockActivityEntity.class)
public abstract class MockActivityEntity_ {

	public static volatile SingularAttribute<MockActivityEntity, Integer> quantity;
	public static volatile SingularAttribute<MockActivityEntity, String> companyName;
	public static volatile SingularAttribute<MockActivityEntity, String> contact;
	public static volatile SingularAttribute<MockActivityEntity, String> name;
	public static volatile SingularAttribute<MockActivityEntity, Integer> rating;
	public static volatile SingularAttribute<MockActivityEntity, String> description;
	public static volatile SingularAttribute<MockActivityEntity, Long> id;

	public static final String QUANTITY = "quantity";
	public static final String COMPANY_NAME = "companyName";
	public static final String CONTACT = "contact";
	public static final String NAME = "name";
	public static final String RATING = "rating";
	public static final String DESCRIPTION = "description";
	public static final String ID = "id";

}

