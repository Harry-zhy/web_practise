package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DecoSavedCompany.class)
public abstract class DecoSavedCompany_ {

	public static volatile SetAttribute<DecoSavedCompany, DecoCompany> decoCompanies;
	public static volatile SingularAttribute<DecoSavedCompany, String> name;
	public static volatile SingularAttribute<DecoSavedCompany, Long> id;

	public static final String DECO_COMPANIES = "decoCompanies";
	public static final String NAME = "name";
	public static final String ID = "id";

}

