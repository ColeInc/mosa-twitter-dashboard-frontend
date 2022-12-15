import React from "react";
import classes from "./Queue.module.scss";
import { useSelector } from "react-redux";
import { sortQueuePosts } from "../store/posts-actions";
import CurvedContainer from "../components/UI/CurvedContainer";
import Tweet from "../components/UI/Tweet";

const Queue = () => {
    const postsList = useSelector(sortQueuePosts);

    return (
        <div className={classes["queue__container"]}>
            <CurvedContainer className={classes["queue__posts-container"]}>
                {postsList.map(post => {
                    return <Tweet post={post} key={post.id} />;
                })}
            </CurvedContainer>
        </div>
    );
};

export default Queue;
