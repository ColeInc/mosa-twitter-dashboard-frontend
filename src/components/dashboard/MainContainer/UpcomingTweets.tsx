import React from "react";
import { useSelector } from "react-redux";
import { sortQueuePosts } from "../../../store/posts-actions";
import { Link } from "react-router-dom";
import CurvedSubContainer from "../../UI/CurvedSubContainer";
import classes from "./UpcomingTweets.module.scss";
import SeeMore from "../../UI/SeeMore";
import Post from "./Post";

const UpcomingTweets = () => {
    const postsList = useSelector(sortQueuePosts);

    // useEffect(() => {
    // TODO:
    // call redux reducer function to fetch all posts scheduled within next 24 hours/7 days, etc. here
    //
    // we need a slice which stores an array of Post[]s
    // a reducer function to fetch all posts from backend
    // a reducer function to just fetch upcoming queued posts in next 24 hours/7 days, etc.
    //
    // a function that takes the post's schedule time and returns back a simple string which will be outputted in UI, E.g. convert DateTime into "8.30pm" or "Tuesday".
    // }, []);

    return (
        <CurvedSubContainer className={classes["upcoming-tweets__container"]}>
            <h1>UPCOMING TWEETS</h1>

            <div className={classes["upcoming-tweets__posts-container"]}>
                {postsList.map(post => {
                    return <Post post={post} key={post.id} />;
                })}

                <div className={classes["upcoming-tweets__bottom-bar"]}>
                    <Link to="/queue" style={{ textDecoration: "none" }}>
                        <SeeMore />
                    </Link>
                </div>
            </div>
        </CurvedSubContainer>
    );
};

export default UpcomingTweets;
