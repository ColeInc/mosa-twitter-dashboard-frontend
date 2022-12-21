import React from "react";
import classes from "./Queue.module.scss";
import { useSelector } from "react-redux";
import { sortQueuePosts } from "../store/posts-actions";
import CurvedContainer from "../components/UI/CurvedContainer";
import Tweet from "../components/UI/Tweet";
import { groupPostsByDay } from "../utils/groupPostsByDay";
import { formatDateTime } from "../utils/formatDateTime";

const Queue = () => {
    const postsList = useSelector(sortQueuePosts);
    const groupedPosts = groupPostsByDay(postsList);

    // rather ugly and inefficient way of injecting that first "posts count" ting in very top right of queue:
    const postsHeader = (index: number, currentDayHeading: string) => {
        if (index === 0) {
            return (
                <div className={classes["queue__posts-top-bar"]}>
                    <p className={classes["queue__post-date"]}>{currentDayHeading}</p>
                    <div className={classes["queue__queue-count"]}>
                        <p>{postsList.length}</p>
                    </div>
                </div>
            );
        } else {
            return <h1 className={classes["queue__post-date"]}>{currentDayHeading}</h1>;
        }
    };

    return (
        <div className={classes["queue__container"]}>
            <div className={classes["queue__center-content"]}>
                <CurvedContainer className={classes["queue__posts-container"]}>
                    {Object.entries(groupedPosts).map(([day, posts], index) => {
                        const currentDayHeading = formatDateTime(day);
                        return (
                            <>
                                {postsHeader(index, currentDayHeading[1])}
                                {posts.map(post => (
                                    <Tweet post={post} key={post.id} />
                                ))}
                            </>
                        );
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
