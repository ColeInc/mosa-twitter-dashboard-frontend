import React from "react";
import classes from "./MainContainer.module.scss";

import CreateTweet from "./CreateTweet";
import CurvedContainer from "../../UI/CurvedContainer";
import UpcomingTweets from "./UpcomingTweets";
import HorizontalGraph from "./HorizontalGraph";

const MainContainer: React.FC<{ className?: string }> = props => {
    return (
        <CurvedContainer
            className={`${classes["three-components-container__container"]} ${props.className && props.className}`}
        >
            <div className={classes["three-components-container__css-grid"]}>
                <CreateTweet />
                <UpcomingTweets />
                <HorizontalGraph />
            </div>
        </CurvedContainer>
    );
};

export default MainContainer;
