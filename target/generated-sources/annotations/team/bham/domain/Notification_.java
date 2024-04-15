package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import team.bham.domain.enumeration.NotificationStatus;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Notification.class)
public abstract class Notification_ {

	public static volatile SingularAttribute<Notification, Supplier> supplier;
	public static volatile SingularAttribute<Notification, Long> id;
	public static volatile SingularAttribute<Notification, Message> message;
	public static volatile SingularAttribute<Notification, ZonedDateTime> receivedDate;
	public static volatile SingularAttribute<Notification, NotificationStatus> status;

	public static final String SUPPLIER = "supplier";
	public static final String ID = "id";
	public static final String MESSAGE = "message";
	public static final String RECEIVED_DATE = "receivedDate";
	public static final String STATUS = "status";

}

