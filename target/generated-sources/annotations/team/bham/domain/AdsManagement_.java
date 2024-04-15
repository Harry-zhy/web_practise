package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(AdsManagement.class)
public abstract class AdsManagement_ {

	public static volatile SingularAttribute<AdsManagement, String> gender;
	public static volatile SingularAttribute<AdsManagement, String> preference;
	public static volatile SingularAttribute<AdsManagement, Supplier> supplier;
	public static volatile SingularAttribute<AdsManagement, String> location;
	public static volatile SingularAttribute<AdsManagement, Long> id;
	public static volatile SingularAttribute<AdsManagement, Integer> age;

	public static final String GENDER = "gender";
	public static final String PREFERENCE = "preference";
	public static final String SUPPLIER = "supplier";
	public static final String LOCATION = "location";
	public static final String ID = "id";
	public static final String AGE = "age";

}

