import React from "react";
import BarGraph from "../../Graphs/BarGraph";
import CurvedContainer from "../../UI/CurvedContainer";
import classes from "./WeeklyPerformance.module.css";

const WeeklyPerformance = () => {
    return (
        <CurvedContainer className={classes["weekly-notifications__container"]}>
            <h1>WEEKLY PERFORMANCE</h1>

            <div className={classes["weekly-notifications__bar-graph-container"]}>
                <BarGraph />
            </div>
        </CurvedContainer>
    );
};

export default WeeklyPerformance;
