import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CurvedSubContainer from "../../UI/CurvedSubContainer";
import classes from "./UpcomingTweets.module.css";
import PostType from "../../../models/Post";
import Post from "./Post";

interface RootState {
    posts: {
        queue: PostType[];
    };
}

const UpcomingTweets = () => {
    const postsList = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        // TODO:
        // call redux reducer function to fetch all posts scheduled within next 24 hours/7 days, etc. here
        //
        // we need a slice which stores an array of Post[]s
        // a reducer function to fetch all posts from backend
        // a reducer function to just fetch upcoming queued posts in next 24 hours/7 days, etc.
        //
        // a function that takes the post's schedule time and returns back a simple string which will be outputted in UI, E.g. convert DateTime into "8.30pm" or "Tuesday".
    }, []);

    return (
        <CurvedSubContainer className={classes["upcoming-tweets__container"]}>
            <h1>UPCOMING TWEETS</h1>

            <div className={classes["upcoming-tweets__posts-container"]}>
                {postsList.queue.map(post => {
                    return <Post post={post} key={post.id} />;
                })}
            </div>

            <Link to="/queue">
                <button>SEE ALL</button>
            </Link>
        </CurvedSubContainer>
    );
};

export default UpcomingTweets;
