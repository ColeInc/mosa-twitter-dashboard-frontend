import React from "react";
import StatisticsHeader from "../components/dashboard/StatisticsHeader/StatisticsHeader";
import ThreeComponentsContainer from "../components/dashboard/ThreeComponentsContainer/ThreeComponentsContainer";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import CurvedContainer from "../components/UI/CurvedContainer";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={classes["dashboard__container"]}>
            <NavigationBar />
            <div className={classes["dashboard__components-container"]}>
                <div className={classes["dashboard__components-bundle"]}>
                    <div
                        className={classes["dashboard__container-left-column"]}
                    >
                        <StatisticsHeader />
                        <ThreeComponentsContainer />
                    </div>
                    <div
                        className={classes["dashboard__container-right-column"]}
                    >
                        <div
                            className={
                                classes["dashboard__container-right-col-1"]
                            }
                        >
                            <CurvedContainer
                                className={
                                    classes[
                                        "dashboard__container-notifications"
                                    ]
                                }
                            >
                                this is the right column 1
                            </CurvedContainer>
                        </div>
                        <div
                            className={
                                classes["dashboard__container-right-col-2"]
                            }
                        >
                            <CurvedContainer
                                className={
                                    classes["dashboard__container-pie-charts"]
                                }
                            >
                                this is the right column 2
                            </CurvedContainer>
                            <CurvedContainer
                                className={
                                    classes["dashboard__container-bar-graphs"]
                                }
                            >
                                this is the right column 3
                            </CurvedContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
