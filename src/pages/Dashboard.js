import React from "react";
import CreateTweet from "../components/dashboard/CreateTweet";
import StatisticsHeader from "../components/dashboard/StatisticsHeader";

import NavigationBar from "../components/layout/NavigationBar";
import CurvedContainer from "../components/UI/CurvedContainer";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={classes["dashboard-container"]}>
            <NavigationBar />
            <div className={classes["components-container"]}>
                <section className={classes["container-left-column"]}>
                    <StatisticsHeader />
                    <CreateTweet />
                </section>
                <section className={classes["container-right-column"]}>
                    <CurvedContainer style={{ flex: 1.2 }}>
                        this is the right column 1
                    </CurvedContainer>
                    <CurvedContainer style={{ flex: 0.5 }}>
                        this is the right column 2
                    </CurvedContainer>
                    <CurvedContainer style={{ flex: 0.95 }}>
                        this is the right column 3
                    </CurvedContainer>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
