import React, { useEffect, useMemo } from "react";
import classes from "./Post.module.css";
import PostType from "../../../models/Post";
import CurvedContainer from "../../UI/CurvedContainer";
import { useDispatch } from "react-redux";
import { deleteTweet } from "../../../store/posts-actions";
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

function nl2br(str: any, is_xhtml: any) {
    if (typeof str === "undefined" || str === null) {
        return "";
    }
    var breakTag = is_xhtml || typeof is_xhtml === "undefined" ? "<br />" : "<br />";
    return (str + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + breakTag + "$2");
}

const Post: React.FC<{ post: PostType }> = props => {
    const dispatch = useDispatch();
    const { scheduledTime } = props.post;

    const formattedTime = useMemo(() => {
        return formatAMPM(new Date(scheduledTime));
    }, [scheduledTime]);

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

                    <button onClick={deleteTweetHandler}>
                        <SettingsIcon />
                    </button>
                </div>
                <div className={classes["post__divider"]} />
                <p>{props.post.body}</p>
                {/* <p>`{nl2br(props.post.body, false)}`</p> */}
            </div>
        </CurvedContainer>
    );
};

export default React.memo(Post);
