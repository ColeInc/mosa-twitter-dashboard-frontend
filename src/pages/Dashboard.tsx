import React from "react";
import classes from "./Dashboard.module.css";
import MainContainer from "../components/Dashboard/MainContainer/MainContainer";
import CurvedContainer from "../components/UI/CurvedContainer";
import StatisticsHeader from "../components/Dashboard/StatisticsHeader/StatisticsHeader";
import Notifications from "../components/Dashboard/Notifications/Notifications";
import PieChartPanel from "../components/Dashboard/PieChartPanel/PieChartPanel";

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
                    {/* <CurvedContainer className={classes["dashboard__right-column-item"]}>
                        this is the right column 2
                    </CurvedContainer> */}
                </div>
                <div className={classes["dashboard__bar-graphs"]}>
                    <CurvedContainer className={classes["dashboard__right-column-item"]}>
                        this is the right column 3
                    </CurvedContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
