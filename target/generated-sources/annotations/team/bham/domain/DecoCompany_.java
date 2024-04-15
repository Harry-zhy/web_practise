package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DecoCompany.class)
public abstract class DecoCompany_ {

	public static volatile SetAttribute<DecoCompany, DecoSavedCompany> decoSavedCompanies;
	public static volatile SetAttribute<DecoCompany, DecoImages> decoImages;
	public static volatile SingularAttribute<DecoCompany, Supplier> supplier;
	public static volatile SingularAttribute<DecoCompany, String> name;
	public static volatile SingularAttribute<DecoCompany, String> about;
	public static volatile SingularAttribute<DecoCompany, Integer> rating;
	public static volatile SingularAttribute<DecoCompany, Long> id;
	public static volatile SingularAttribute<DecoCompany, DecoContactDetails> decoContactDetails;
	public static volatile SetAttribute<DecoCompany, DecoBudget> decoBudgets;

	public static final String DECO_SAVED_COMPANIES = "decoSavedCompanies";
	public static final String DECO_IMAGES = "decoImages";
	public static final String SUPPLIER = "supplier";
	public static final String NAME = "name";
	public static final String ABOUT = "about";
	public static final String RATING = "rating";
	public static final String ID = "id";
	public static final String DECO_CONTACT_DETAILS = "decoContactDetails";
	public static final String DECO_BUDGETS = "decoBudgets";

}

