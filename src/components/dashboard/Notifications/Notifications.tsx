import React, { useState, useEffect } from "react";
import CurvedContainer from "../../UI/CurvedContainer";
import classes from "./Notifications.module.scss";
import Notification from "../../../models/Notification.model";
import NotificationItem from "./NotificationItem";
import SeeMore from "../../UI/SeeMore";

const Notifications = () => {
    const [notificationList, setNotificationList] = useState<Notification[]>();
    useEffect(() => {
        // TODO: replace with fetch for all notifications in last 24 hours from backend API:

        const fetchedNotifs = [
            {
                username: "Alyssa Merlin",
                action: "liked your reply",
                // description: "My cat does the exact same thing!",
                description: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
                time: new Date(new Date().getTime()).toLocaleString(),
                // time: "23 mins",
                userImage: "https://lh3.googleusercontent.com/d/1hP41GOYN1-a2GPmZoKeHXaUFcYpbfK1E",
                tweetUrl: "https://twitter.com/elonmusk/status/1519480761749016577",
            },
            {
                username: "Carlos Zach",
                action: "commented on a Post",
                description: "I swear you must own at least seventeen cats..",
                time: "4/30/2022, 11:30:58 PM",
                // time: "1hr",
                userImage: "https://lh3.googleusercontent.com/d/11Xd6k4-I-heVr8F0gBxQX5RGsQGSW_w6",
                tweetUrl: "https://twitter.com/elonmusk/status/1519480761749016577",
            },

            {
                username: "Joelle Becka",
                action: "liked a tweet",
                description: "“Say hello to my new kitten!”",
                time: "4/1/2022, 11:30:58 AM",
                userImage: "https://lh3.googleusercontent.com/d/1Nj2o3fIVuhzM2CYU7kGDpYRCYmhPtagr",
                tweetUrl: "https://twitter.com/elonmusk/status/1519480761749016577",
            },
            {
                username: "Alyssa Merlin",
                action: "retweeted your tweet",
                description: "“Sometimes you just have to sit back and...”",
                time: "3/1/2022, 11:30:58 AM",
                userImage: "https://lh3.googleusercontent.com/d/1hP41GOYN1-a2GPmZoKeHXaUFcYpbfK1E",
                tweetUrl: "https://twitter.com/elonmusk/status/1519480761749016577",
            },
            {
                username: "Carlos Zach",
                action: "liked a tweet",
                description: "“Say hello to my new kitten!”",
                time: "1/1/2021, 11:30:58 AM",
                userImage: "https://lh3.googleusercontent.com/d/11Xd6k4-I-heVr8F0gBxQX5RGsQGSW_w6",
                tweetUrl: "https://twitter.com/elonmusk/status/1519480761749016577",
            },
        ];
        setNotificationList(fetchedNotifs);
    }, []);

    return (
        <CurvedContainer className={classes["notifications__container"]}>
            <h1>NOTIFICATIONS</h1>

            <div className={classes["notifications__list-container"]}>
                {notificationList?.map(notification => {
                    return (
                        <NotificationItem data={notification} key={notification.username.concat(notification.time)} />
                    );
                })}
                <div className={classes["notifications__bottom-bar"]}>
                    <a href={"https://twitter.com/notifications"}>
                        <SeeMore />
                    </a>
                </div>
            </div>
        </CurvedContainer>
    );
};

export default Notifications;
