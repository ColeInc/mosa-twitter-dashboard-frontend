import React, { useEffect, useState } from "react";
import classes from "./PieChartItem.module.css";
import PieGraph from "../../Graphs/PieGraph";
import PieChartData from "../../../models/PieChartData";

const PieChartItem: React.FC<{ data: PieChartData }> = props => {
    return (
        <div>
            <PieGraph graphData={props.data} />
        </div>
    );
};

export default PieChartItem;
