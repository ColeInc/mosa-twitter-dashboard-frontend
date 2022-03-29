import React from "react";
import classes from "./CreateTweetContainer.module.css";

import CreateTweet from "./CreateTweet";
import CurvedContainer from "../../UI/CurvedContainer";

const CreateTweetContainer = () => {
    return (
        <CurvedContainer
            className={classes["create-tweet-container__container"]}
        >
            <div>
                <p>
                    This is the main container for CreateTweet, upcoming queue,
                    and that long horizontal overall performance graph.
                </p>
            </div>
            <CreateTweet />
        </CurvedContainer>
    );
};

export default CreateTweetContainer;
