package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(DecoContactDetails.class)
public abstract class DecoContactDetails_ {

	public static volatile SingularAttribute<DecoContactDetails, String> website;
	public static volatile SingularAttribute<DecoContactDetails, String> twitter;
	public static volatile SingularAttribute<DecoContactDetails, String> phoneNumber;
	public static volatile SingularAttribute<DecoContactDetails, String> tiktok;
	public static volatile SingularAttribute<DecoContactDetails, String> facebook;
	public static volatile SingularAttribute<DecoContactDetails, DecoCompany> decoCompany;
	public static volatile SingularAttribute<DecoContactDetails, Long> id;
	public static volatile SingularAttribute<DecoContactDetails, String> instagram;

	public static final String WEBSITE = "website";
	public static final String TWITTER = "twitter";
	public static final String PHONE_NUMBER = "phoneNumber";
	public static final String TIKTOK = "tiktok";
	public static final String FACEBOOK = "facebook";
	public static final String DECO_COMPANY = "decoCompany";
	public static final String ID = "id";
	public static final String INSTAGRAM = "instagram";

}

