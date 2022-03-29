import React, { useEffect, useState } from "react";
import classes from "./StatisticsItem.module.css";
import CurvedSubContainer from "../../UI/CurvedSubContainer";

const StatisticsItem = (props) => {
    const [itemStatistics, setItemStatistics] = useState("");

    const { metric } = props;

    const timeRange = (() => {
        switch (props.timeRange) {
            case "daily":
                return "24h";
            case "weekly":
                return "1w";
            case "monthly":
                return "30d";
            default:
                return "24h";
        }
    })();

    useEffect(() => {
        if (metric.toLowerCase() === "impressions") {
            // api call to fetch impression data from backend
            setItemStatistics("12.4K");
        } else if (metric.toLowerCase() === "retweets") {
            // api call to fetch retweet data from backend
            setItemStatistics("1,032");
        } else if (metric.toLowerCase() === "follows") {
            // api call to fetch followers data from backend
            setItemStatistics("348");
        } else {
            console.log("other");
        }
    }, [metric]);

    return (
        <CurvedSubContainer className={classes["item__container"]}>
            <div className={classes["item__upper-items"]}>
                <h2>{itemStatistics}</h2>
                <div className={classes["item__graph-container"]}>
                    ***imagine there's a graph here***
                </div>
            </div>
            <div className={classes["item__bottom-text"]}>
                <h1>{metric.toUpperCase()}</h1>
                <h3>{timeRange}</h3>
            </div>
        </CurvedSubContainer>
    );
};

export default StatisticsItem;
