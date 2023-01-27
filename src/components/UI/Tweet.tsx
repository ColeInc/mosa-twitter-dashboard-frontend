import React, { useMemo, useState } from "react";
import classes from "./Tweet.module.scss";
import PostType from "../../models/Post.model";
import { useDispatch } from "react-redux";
import { formatDateTime } from "../../utils/formatDateTime";
import { deleteTweetThunk, updatePostDataThunk } from "../../store/posts-actions";
import SettingsIcon from "../../assets/icons/noun-settings-2650508.svg";
import TimerIcon from "../../assets/icons/timer-clock.svg";
import EditPostModal from "../UI/EditPostModal";
import PieCharacterCount from "../Graphs/PieCharacterCount";

const Tweet: React.FC<{ post: PostType }> = props => {
    const [modalShown, setModalShown] = useState(false);
    const dispatch = useDispatch();

    const { scheduledTime } = props.post;
    const formattedTime = useMemo(() => formatDateTime(scheduledTime), [scheduledTime]);

    const moveToDraftsHandler = () => {
        dispatch(
            updatePostDataThunk({
                ...props.post,
                type: "drafts",
            })
        );
    };

    const deleteTweetHandler = () => {
        dispatch(deleteTweetThunk(props.post));
    };

    const toggleModalHandler = () => {
        setModalShown(s => {
            return !s;
        });
    };

    return (
        <div className={classes["tweet__container"]}>
            <div className={classes["tweet__left-column"]}>
                <div className={classes["tweet__icon-container"]}>
                    <TimerIcon />
                </div>
            </div>
            <div className={classes["tweet__right-column"]}>
                <div className={classes["tweet__right-column-header"]}>
                    <h1>
                        <b>{formattedTime[0]}</b>
                    </h1>

                    <div className={classes["dropdown-parent"]}>
                        <button className={classes["dropdown-button"]}>
                            <SettingsIcon />
                        </button>
                        <ul className={classes["dropdown-content"]}>
                            <li onClick={toggleModalHandler}>Edit</li>
                            <li onClick={moveToDraftsHandler}>Move to Drafts</li>
                            <li onClick={deleteTweetHandler}>Delete Tweet</li>
                        </ul>
                    </div>
                </div>

                <p>{props.post.body}</p>

                {modalShown && <EditPostModal post={props.post} onConfirm={toggleModalHandler} />}

                <div className={classes["tweet__bottom-bar"]}>
                    <div className={classes["tweet__thread-counter"]}>
                        <p>3 / 12</p>
                    </div>
                    <div className={classes["tweet__char-max-graph"]}>
                        <PieCharacterCount characterCount={props.post.body.length} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweet;
