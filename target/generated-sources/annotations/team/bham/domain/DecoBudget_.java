package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DecoBudget.class)
public abstract class DecoBudget_ {

	public static volatile SingularAttribute<DecoBudget, Integer> money;
	public static volatile SetAttribute<DecoBudget, DecoCompany> decoCompanies;
	public static volatile SingularAttribute<DecoBudget, Long> id;

	public static final String MONEY = "money";
	public static final String DECO_COMPANIES = "decoCompanies";
	public static final String ID = "id";

}

