import React, { useEffect, useState } from "react";
import classes from "./StatisticsItem.module.css";
import CurvedSubContainer from "../../UI/CurvedSubContainer";
import LineGraph from "../../Graphs/LineGraph";
import GraphData from "../../../models/GraphData";

const metricColors: any = {
    impressions: "#1FC1FB",
    retweets: "#2BEAB8",
    follows: "#EE31E0",
};

const StatisticsItem: React.FC<{ metric: string; timeRange: string }> = props => {
    const [statisticValue, setStatisticValue] = useState("");
    const [statisticData, setStatisticData] = useState<GraphData[]>([{ x: 0, y: 0 }]);

    const { metric } = props;

    const timeRange = (() => {
        switch (props.timeRange) {
            case "daily":
                return "24h";
            case "weekly":
                return "1W";
            case "monthly":
                return "30D";
            default:
                return "24h";
        }
    })();

    useEffect(() => {
        if (metric.toLowerCase() === "impressions") {
            // replace with api call to fetch impression data from backend
            setStatisticValue("12.4K");
            setStatisticData([
                { x: 0, y: 5 },
                { x: 1, y: 2.3 },
                { x: 2, y: 2 },
                { x: 3, y: 6 },
                { x: 4, y: 2.5 },
                { x: 5, y: 0 },
            ]);
        } else if (metric.toLowerCase() === "retweets") {
            // replace with api call to fetch retweet data from backend
            setStatisticValue("1,032");
            setStatisticData([
                { x: 0, y: 3 },
                { x: 1, y: 0 },
                { x: 2, y: 3.5 },
                { x: 3, y: 6 },
                { x: 4, y: 2 },
                { x: 5, y: 3 },
            ]);
        } else if (metric.toLowerCase() === "follows") {
            // replace with api call to fetch followers data from backend
            setStatisticValue("348");
            setStatisticData([
                { x: 0, y: 3 },
                { x: 1, y: 3.8 },
                { x: 2, y: 2.5 },
                { x: 3, y: 2.1 },
                { x: 4, y: 3.6 },
                { x: 5, y: 4.3 },
            ]);
        } else {
            console.log("other");
        }
    }, [metric]);

    return (
        <CurvedSubContainer className={classes["item__container"]}>
            <div className={classes["item__upper-items"]}>
                <h2>{statisticValue}</h2>
                <div className={classes["item__graph-container"]}>
                    <LineGraph graphData={statisticData} color={metricColors[metric]} />
                </div>
            </div>
            <div className={classes["item__bottom-text"]}>
                <h1>{metric.toUpperCase()}</h1>
                <h3>{timeRange}</h3>
            </div>
        </CurvedSubContainer>
    );
};

export default React.memo(StatisticsItem);
