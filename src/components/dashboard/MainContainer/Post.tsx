import React, { useMemo } from "react";
import classes from "./Post.module.css";
import PostType from "../../../models/Post";
import CurvedContainer from "../../UI/CurvedContainer";
import { useDispatch } from "react-redux";
import { updatePostData, deleteTweet } from "../../../store/posts-actions";
import { ReactComponent as QueueIcon } from "../../../assets/icons/noun-time-4691990.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/noun-settings-2650508.svg";

const formatAMPM = (date: Date) => {
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + ampm;
    return strTime;
};

const Post: React.FC<{ post: PostType }> = props => {
    const dispatch = useDispatch();
    const { scheduledTime } = props.post;

    const formattedTime = useMemo(() => {
        return formatAMPM(new Date(scheduledTime));
    }, [scheduledTime]);

    const moveToDraftsHandler = () => {
        // dispatch(deleteTweet({ id: props.post.id, type: props.post.type }));
        dispatch(
            updatePostData({
                ...props.post,
                type: "draft",
                threadId: undefined,
                media: undefined,

                // id: props.post.id,
                // type: "draft",
                // body: props.post.body,
                // scheduledTime: new Date().toLocaleString(),
            })
        );
    };

    const deleteTweetHandler = () => {
        dispatch(deleteTweet({ id: props.post.id, type: props.post.type }));
    };

    return (
        <CurvedContainer className={classes["post__container"]}>
            <div className={classes.icon}>
                <QueueIcon />
            </div>
            <div className={classes["post__right-column"]}>
                <div className={classes["post__right-column-heading"]}>
                    <h1>
                        <b>{formattedTime}</b> - {props.post.scheduledTime.toString()}
                    </h1>

                    <div className={classes["dropdown-parent"]}>
                        <button className={classes["dropdown-button"]}>
                            <SettingsIcon />
                        </button>
                        <ul className={classes["dropdown-content"]}>
                            <li>Edit</li>
                            <li onClick={moveToDraftsHandler}>Move to Drafts</li>
                            <li onClick={deleteTweetHandler}>Delete Tweet</li>
                        </ul>
                    </div>
                </div>
                <div className={classes["post__divider"]} />
                <p>{props.post.body}</p>
            </div>
        </CurvedContainer>
    );
};

export default React.memo(Post);
