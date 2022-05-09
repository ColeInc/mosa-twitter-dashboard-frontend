import React, { useEffect, useState } from "react";
import BarGraph from "../../Graphs/BarGraph";
import CurvedContainer from "../../UI/CurvedContainer";
import classes from "./WeeklyPerformance.module.css";
import BarGraphData from "../../../models/BarGraphData";

const defaultGraphData: BarGraphData[] = [
    { x: "Monday", y: 0 },
    { x: "Tuesday", y: 0 },
    { x: "Wednesday", y: 0 },
    { x: "Thursday", y: 0 },
    { x: "Friday", y: 0 },
    { x: "Saturday", y: 0 },
    { x: "Sunday", y: 0 },
];

const WeeklyPerformance = () => {
    const [graphData, setGraphData] = useState<BarGraphData[]>(defaultGraphData);

    useEffect(() => {
        // TODO: fetch weekly performance bar chart data from backend

        setGraphData([
            { x: "Monday", y: 3 },
            { x: "Tuesday", y: 2 },
            { x: "Wednesday", y: 6 },
            { x: "Thursday", y: 4 },
            { x: "Friday", y: 5 },
            { x: "Saturday", y: 7 },
            { x: "Sunday", y: 8.5 },
        ]);
    }, []);

    return (
        <CurvedContainer className={classes["weekly-notifications__container"]}>
            <h1>WEEKLY PERFORMANCE</h1>

            <div className={classes["weekly-notifications__bar-graph-container"]}>
                <BarGraph barGraphData={graphData} />
            </div>
        </CurvedContainer>
    );
};

export default WeeklyPerformance;
