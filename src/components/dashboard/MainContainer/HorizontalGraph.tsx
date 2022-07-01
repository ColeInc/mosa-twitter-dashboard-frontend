import React, { useEffect, useState } from "react";
import classes from "./HorizontalGraph.module.scss";
import CurvedSubContainer from "../../UI/CurvedSubContainer";
import RangePicker from "../../UI/RangePicker";
import GraphData from "../../../models/GraphData.model";
import LineGraph from "../../Graphs/LineGraph";

const HorizontalGraph = () => {
    const [timeRange, setTimeRange] = useState<string>("daily");
    const [statisticData, setStatisticData] = useState<GraphData[]>([{ x: 0, y: 0 }]);

    useEffect(() => {
        // TODO: replace with api call to fetch graph data from backend
        setStatisticData([
            { x: 0, y: 6 },
            { x: 1, y: 1.5 },
            { x: 2, y: 1 },
            { x: 3, y: 5.6 },
            { x: 4, y: 6 },
            { x: 5, y: 1 },
            { x: 6, y: 4 },
            { x: 7, y: 2.5 },
            { x: 8, y: 3.5 },
            { x: 9, y: 4.2 },
            { x: 10, y: 2.5 },
            { x: 11, y: 5 },
            { x: 12, y: 5.2 },
            { x: 13, y: 2.5 },
            { x: 14, y: 2.8 },
            { x: 15, y: 2.3 },
            { x: 16, y: 2.9 },
            { x: 17, y: 5.5 },
            { x: 18, y: 0 },
            { x: 19, y: 5.5 },
            { x: 20, y: 4.8 },
            { x: 21, y: 3 },
            { x: 22, y: 1.5 },
            { x: 23, y: 5.5 },
            { x: 24, y: 1.5 },
            { x: 25, y: 5 },
            { x: 26, y: 3.2 },
            { x: 27, y: 1 },
            { x: 28, y: 2.5 },
            { x: 29, y: 3.5 },
            { x: 30, y: 4.5 },
            { x: 31, y: 3 },
        ]);
    }, []);

    const onClickHandler = (range: string) => {
        setTimeRange(range);
    };

    return (
        <CurvedSubContainer className={classes["horizontal-graph__container"]}>
            <RangePicker onClickHandler={onClickHandler} active={timeRange} />
            <div className={classes["item__graph-container"]}>
                <LineGraph graphData={statisticData} color={"#4B8169"} lineWidth={3} dotSize={4} />
            </div>
        </CurvedSubContainer>
    );
};

export default HorizontalGraph;
