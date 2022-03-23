import React from "react";
import CurvedContainer from "../UI/CurvedContainer";
import classes from "./CreateTweet.module.css";

const CreateTweet = () => {
    return (
        <CurvedContainer style={{ flex: 3.5 }}>
            <div className={classes["create-tweet-container"]}>CreateTweet</div>
        </CurvedContainer>
    );
};

export default CreateTweet;
