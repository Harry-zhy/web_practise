package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(MockCatererEntity.class)
public abstract class MockCatererEntity_ {

	public static volatile SingularAttribute<MockCatererEntity, Integer> quantity;
	public static volatile SingularAttribute<MockCatererEntity, String> contact;
	public static volatile SingularAttribute<MockCatererEntity, String> name;
	public static volatile SingularAttribute<MockCatererEntity, Integer> rating;
	public static volatile SingularAttribute<MockCatererEntity, String> cuisine;
	public static volatile SingularAttribute<MockCatererEntity, String> description;
	public static volatile SingularAttribute<MockCatererEntity, Long> id;

	public static final String QUANTITY = "quantity";
	public static final String CONTACT = "contact";
	public static final String NAME = "name";
	public static final String RATING = "rating";
	public static final String CUISINE = "cuisine";
	public static final String DESCRIPTION = "description";
	public static final String ID = "id";

}

