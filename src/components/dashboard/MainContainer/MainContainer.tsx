import React from "react";
import classes from "./MainContainer.module.css";

import CreateTweet from "./CreateTweet";
import CurvedContainer from "../../UI/CurvedContainer";
import UpcomingTweets from "./UpcomingTweets";
import HorizontalGraph from "./HorizontalGraph";

const MainContainer: React.FC<{ className?: string }> = props => {
    return (
        <CurvedContainer
            className={`${classes["three-components-container__container"]} ${props.className && props.className}`}
        >
            <div className={classes["three-components-container__create-upcoming-container"]}>
                <CreateTweet />
                <UpcomingTweets />
            </div>
            <HorizontalGraph />
        </CurvedContainer>
    );
};

export default MainContainer;
