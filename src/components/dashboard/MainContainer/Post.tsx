import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTweetThunk, updatePostDataThunk } from "../../../store/posts-actions";
import QueueIcon from "../../../assets/icons/noun-time-4691990.svg";
import SettingsIcon from "../../../assets/icons/noun-settings-2650508.svg";
import PencilIcon from "../../../assets/icons/noun-pencil-2473979.svg";
import CurvedContainer from "../../UI/CurvedContainer";
import PostType from "../../../models/Post.model";
import classes from "./Post.module.scss";
import EditPostModal from "../../UI/EditPostModal";
import { formatDateTime } from "../../../utils/formatDateTime";

const Post: React.FC<{ post: PostType }> = props => {
    const [modalShown, setModalShown] = useState(false);
    const dispatch = useDispatch();

    const { scheduledTime } = props.post;
    const formattedTime = useMemo(() => formatDateTime(scheduledTime), [scheduledTime]);

    const moveToDraftsHandler = () => {
        dispatch(
            updatePostDataThunk({
                ...props.post,
                type: "drafts",
                // threadId: null,
                // media: null,
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
        <CurvedContainer className={classes["post__container"]}>
            <div className={classes.icon}>
                <QueueIcon />
            </div>
            <div className={classes["post__right-column"]}>
                <div className={classes["post__right-column-heading"]}>
                    <h1>
                        <b>{formattedTime[0]}</b> - {formattedTime[1]}
                    </h1>

                    <button className={classes["post__pencil-icon"]} onClick={toggleModalHandler} title="Edit Tweet">
                        <PencilIcon />
                    </button>

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
                <div className={classes["post__divider"]} />
                <p>{props.post.body}</p>
                {modalShown && <EditPostModal post={props.post} onConfirm={toggleModalHandler} />}
            </div>
        </CurvedContainer>
    );
};

export default React.memo(Post);
