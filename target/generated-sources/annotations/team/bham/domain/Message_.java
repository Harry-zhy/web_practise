package team.bham.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import team.bham.domain.enumeration.MessageType;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Message.class)
public abstract class Message_ {

	public static volatile SingularAttribute<Message, Notification> notification;
	public static volatile SingularAttribute<Message, String> senderName;
	public static volatile SingularAttribute<Message, ZonedDateTime> sentDate;
	public static volatile SingularAttribute<Message, Long> id;
	public static volatile SingularAttribute<Message, MessageType> type;
	public static volatile SingularAttribute<Message, String> content;

	public static final String NOTIFICATION = "notification";
	public static final String SENDER_NAME = "senderName";
	public static final String SENT_DATE = "sentDate";
	public static final String ID = "id";
	public static final String TYPE = "type";
	public static final String CONTENT = "content";

}

