import React from "react";
import classes from "./Dashboard.module.scss";
import MainContainer from "../components/dashboard/MainContainer/MainContainer";
import StatisticsHeader from "../components/dashboard/StatisticsHeader/StatisticsHeader";
import Notifications from "../components/dashboard/Notifications/Notifications";
import PieChartPanel from "../components/dashboard/PieChartPanel/PieChartPanel";
import WeeklyPerformance from "../components/dashboard/WeeklyPerformance/WeeklyPerformance";

const Dashboard = () => {
    return (
        <div className={classes["dashboard__components-container"]}>
            <div className={classes["dashboard__components-grid-container"]}>
                <StatisticsHeader className={classes["dashboard__statistics-header"]} />
                <MainContainer className={classes["dashboard__main-container"]} />
                <div className={classes["dashboard__notifications"]}>
                    <Notifications />
                </div>
                <div className={classes["dashboard__pie-charts"]}>
                    <PieChartPanel />
                </div>
                <div className={classes["dashboard__bar-graphs"]}>
                    <WeeklyPerformance />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
