import React from "react";
import StatisticsHeader from "../components/dashboard/StatisticsHeader/StatisticsHeader";
import ThreeComponentsContainer from "../components/dashboard/ThreeComponentsContainer/ThreeComponentsContainer";

import NavigationBar from "../components/layout/NavigationBar";
import CurvedContainer from "../components/UI/CurvedContainer";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={classes["dashboard__container"]}>
            <NavigationBar />
            <div className={classes["dashboard__components-container"]}>
                <section
                    className={classes["dashboard__container-center-column"]}
                >
                    <StatisticsHeader />
                    <ThreeComponentsContainer />
                </section>
                <section
                    className={classes["dashboard__container-right-column"]}
                >
                    <CurvedContainer
                        className={
                            classes["dashboard__container-notifications"]
                        }
                    >
                        this is the right column 1
                    </CurvedContainer>
                    <CurvedContainer
                        className={classes["dashboard__container-pie-charts"]}
                    >
                        this is the right column 2
                    </CurvedContainer>
                    <CurvedContainer
                        className={classes["dashboard__container-bar-graphs"]}
                    >
                        this is the right column 3
                    </CurvedContainer>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
