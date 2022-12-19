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
            <div className={classes["queue__center-content"]}>
                <CurvedContainer className={classes["queue__posts-container"]}>
                    <div className={classes["queue__posts-top-bar"]}>
                        <p className={classes["queue__post-date"]}>Tuesdayy</p>
                        <div className={classes["queue__queue-count"]}>
                            <p>{postsList.length}</p>
                            {/* <p>104</p> */}
                        </div>
                    </div>
                    {postsList.map(post => {
                        return <Tweet post={post} key={post.id} />;
                    })}
                </CurvedContainer>
                <div className={classes["queue__settings-container"]}>
                    <p>placeholder</p>
                </div>
            </div>
        </div>
    );
};

export default Queue;
