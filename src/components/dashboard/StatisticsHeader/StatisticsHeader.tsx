import React, { useState } from "react";
import classes from "./StatisticsHeader.module.css";

import StatisticsItem from "./StatisticsItem";
import CurvedContainer from "../../UI/CurvedContainer";
import RangePicker from "../../UI/RangePicker";

const StatisticsHeader: React.FC<{ className?: string }> = (props) => {
    const [timeRange, setTimeRange] = useState("daily");

    const onClickHandler = (range: string) => {
        setTimeRange(range);
    };

    return (
        <CurvedContainer
            className={`${classes["statistics-header__curved-container"]} ${
                props.className && props.className
            }`}
        >
            <div className={classes["statistics-header__items-container"]}>
                <StatisticsItem metric="impressions" timeRange={timeRange} />
                <StatisticsItem metric="retweets" timeRange={timeRange} />
                <StatisticsItem metric="follows" timeRange={timeRange} />
            </div>

            <RangePicker onClickHandler={onClickHandler} active={timeRange} />
        </CurvedContainer>
    );
};

export default StatisticsHeader;
