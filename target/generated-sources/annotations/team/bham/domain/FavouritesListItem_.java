package team.bham.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import team.bham.domain.enumeration.Category;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(FavouritesListItem.class)
public abstract class FavouritesListItem_ {

	public static volatile SingularAttribute<FavouritesListItem, Caterers> caterer;
	public static volatile SingularAttribute<FavouritesListItem, VenueInformation> venue;
	public static volatile SingularAttribute<FavouritesListItem, FavouritesList> favouritesList;
	public static volatile SingularAttribute<FavouritesListItem, ActivitySelf> activity;
	public static volatile SingularAttribute<FavouritesListItem, String> name;
	public static volatile SingularAttribute<FavouritesListItem, String> description;
	public static volatile SingularAttribute<FavouritesListItem, Long> id;
	public static volatile SingularAttribute<FavouritesListItem, Category> category;

	public static final String CATERER = "caterer";
	public static final String VENUE = "venue";
	public static final String FAVOURITES_LIST = "favouritesList";
	public static final String ACTIVITY = "activity";
	public static final String NAME = "name";
	public static final String DESCRIPTION = "description";
	public static final String ID = "id";
	public static final String CATEGORY = "category";

}

