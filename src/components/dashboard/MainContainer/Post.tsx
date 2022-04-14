import React from "react";
import classes from "./Post.module.css";
import PostType from "../../../models/Post";
import CurvedContainer from "../../UI/CurvedContainer";

const Post: React.FC<{ postData: PostType }> = (props) => {
    return (
        <CurvedContainer className={classes["post__container"]}>
            <h1>{props.postData.scheduledTime.toString()}</h1>
            <h2>{props.postData.body}</h2>
        </CurvedContainer>
    );
};

export default Post;
