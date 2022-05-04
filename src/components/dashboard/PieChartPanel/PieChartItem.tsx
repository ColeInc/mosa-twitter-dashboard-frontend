import React from "react";
import classes from "./PieChartItem.module.css";
import PieGraph from "../../Graphs/PieGraph";
import PieChartData from "../../../models/PieChartData";

const PieChartItem: React.FC<{ data: PieChartData }> = props => {
    const change24color = props.data.change24h < 0 ? "negative" : "positive";
    const posNeg = Math.sign(props.data.change24h) > 0 ? "+" : "";
    return (
        <div className={classes["pie-chart-item__container"]}>
            <PieGraph graphData={props.data} />
            <h1>{props.data.title.toUpperCase()}</h1>
            <div className={`${classes["pie-chart-item__change24-container"]} ${classes[change24color]}`}>
                <p>
                    {posNeg}
                    {props.data.change24h}%
                </p>
            </div>
        </div>
    );
};

export default PieChartItem;
