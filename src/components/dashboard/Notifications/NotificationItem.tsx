import React from "react";
import classes from "./NotificationItem.module.scss";
import Notification from "../../../models/Notification.model";
import CurvedContainer from "../../UI/CurvedContainer";
import moment from "moment";

moment.locale("en", {
    relativeTime: {
        future: "in %s",
        past: "%s",
        s: "1sec",
        ss: "%ssec",
        m: "1m",
        mm: "%dm",
        h: "1hr",
        hh: "%dh",
        d: "1day",
        dd: "%dday",
        M: "1mo",
        MM: "%dmo",
        y: "1yr",
        yy: "%dyr",
    },
});

const NotificationItem: React.FC<{ data: Notification }> = props => {
    return (
        <a href={props.data.tweetUrl} className={classes["notification-item__tweet-link"]}>
            <CurvedContainer className={classes["notification-item__container"]}>
                <div className={classes["notification-item__blue-dot"]} />
                <img
                    src={props.data.userImage}
                    className={classes["notification-item__profile-img"]}
                    alt="user profile pic"
                />

                <div className={classes["notification-item__text-container"]}>
                    <h1>
                        <b>{props.data.username}</b> {props.data.action}
                    </h1>
                    <h2>{props.data.description}</h2>
                </div>
                <p>{moment(props.data.time).fromNow(true)}</p>
            </CurvedContainer>
        </a>
    );
};

export default NotificationItem;
