import React from "react";
import CurvedContainer from "../UI/CurvedContainer";
import classes from "./StatisticsHeader.module.css";

const StatisticsHeader = () => {
    return (
        <CurvedContainer style={{ flex: 1 }}>
            <div
                className={classes["statistics-header-container"]}
                // style={{ flex: 1 }}
            >
                StatisticsHeader
            </div>
        </CurvedContainer>
    );
};

export default StatisticsHeader;
