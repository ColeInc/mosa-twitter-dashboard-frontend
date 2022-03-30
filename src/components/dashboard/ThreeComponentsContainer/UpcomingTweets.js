import React from "react";
import classes from "./UpcomingTweets.module.css";
import CurvedSubContainer from "../../UI/CurvedSubContainer";

const UpcomingTweets = () => {
    return (
        <CurvedSubContainer className={classes["upcoming-tweets__container"]}>
            <div>UpcomingTweets</div>
        </CurvedSubContainer>
    );
};

export default UpcomingTweets;
