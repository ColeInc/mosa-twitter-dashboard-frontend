import React from "react";
import classes from "./ThreeComponentsContainer.module.css";

import CreateTweet from "./CreateTweet";
import CurvedContainer from "../../UI/CurvedContainer";
import UpcomingTweets from "./UpcomingTweets";
import HorizontalGraph from "./HorizontalGraph";

const ThreeComponentsContainer = () => {
    return (
        <CurvedContainer
            className={classes["three-components-container__container"]}
        >
            <div
                className={
                    classes[
                        "three-components-container__create-upcoming-container"
                    ]
                }
            >
                <CreateTweet />
                <UpcomingTweets />
            </div>
            <HorizontalGraph />
        </CurvedContainer>
    );
};

export default ThreeComponentsContainer;
