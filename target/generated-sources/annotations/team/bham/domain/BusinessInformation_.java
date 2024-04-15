package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(BusinessInformation.class)
public abstract class BusinessInformation_ {

	public static volatile SingularAttribute<BusinessInformation, String> specialServicesAvailable;
	public static volatile SingularAttribute<BusinessInformation, Supplier> supplier;
	public static volatile SingularAttribute<BusinessInformation, String> businessHours;
	public static volatile SingularAttribute<BusinessInformation, String> information;
	public static volatile SingularAttribute<BusinessInformation, Long> id;

	public static final String SPECIAL_SERVICES_AVAILABLE = "specialServicesAvailable";
	public static final String SUPPLIER = "supplier";
	public static final String BUSINESS_HOURS = "businessHours";
	public static final String INFORMATION = "information";
	public static final String ID = "id";

}

