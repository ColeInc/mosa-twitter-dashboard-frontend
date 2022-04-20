import React from "react";
import classes from "./Dashboard.module.css";
import MainContainer from "../components/Dashboard/MainContainer/MainContainer";
import CurvedContainer from "../components/UI/CurvedContainer";
import StatisticsHeader from "../components/Dashboard/StatisticsHeader/StatisticsHeader";

const Dashboard = () => {
    return (
        <div className={classes["dashboard__components-container"]}>
            <div className={classes["dashboard__components-grid-container"]}>
                <StatisticsHeader className={classes["dashboard__statistics-header"]} />
                <MainContainer className={classes["dashboard__main-container"]} />
                <div className={classes["dashboard__notifications"]}>
                    <CurvedContainer className={classes["dashboard__right-column-item"]}>
                        this is the right column 1
                    </CurvedContainer>
                </div>{" "}
                <div className={classes["dashboard__pie-charts"]}>
                    <CurvedContainer className={classes["dashboard__right-column-item"]}>
                        this is the right column 2
                    </CurvedContainer>
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
