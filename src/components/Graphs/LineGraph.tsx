import React from "react";
import classes from "./LineGraph.module.css";
import {
    VictoryChart,
    VictoryLine,
    VictoryScatter,
    VictoryAxis,
} from "victory";

// const data = [
//     { x: 0, y: 0 },
//     { x: 1, y: 2 },
//     { x: 2, y: 1 },
//     { x: 3, y: 4 },
//     { x: 4, y: 3 },
//     { x: 5, y: 5 },
// ];

// const cartesianInterpolations = [
//     "basis",
//     "bundle",
//     "cardinal",
//     "catmullRom",
//     "linear",
//     "monotoneX",
//     "monotoneY",
//     "natural",
//     "step",
//     "stepAfter",
//     "stepBefore",
// ];

const LineGraph: React.FC<{
    graphData: { x: number; y: number }[];
    color: string;
}> = (props) => {
    return (
        <div className={classes["line-graph__container"]}>
            <VictoryChart
                //height={"100%"}
                padding={{ top: 7, right: 10, bottom: 7, left: 10 }}
            >
                <VictoryLine
                    interpolation="monotoneX"
                    data={props.graphData}
                    // style={lineStyle}
                    style={{
                        ...lineStyle,
                        data: {
                            stroke: props.color,
                            fillOpacity: 0.6,
                            strokeWidth: 5,
                        },
                    }}
                />

                <VictoryScatter
                    data={props.graphData}
                    size={7}
                    style={{ ...scatterStyle, data: { fill: props.color } }}
                    // style={{
                    //     ...scatterStyle,
                    //     ...props.color,
                    // }}
                />

                {/* to remove x and y axis: */}
                <VictoryAxis
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        tickLabels: { fill: "transparent" },
                    }}
                />
            </VictoryChart>
        </div>
    );
};

export default LineGraph;

const lineStyle = {
    parent: {
        border: "1px solid #ccc",
    },
    data: {
        fillOpacity: 0.6,
        stroke: "#1FC1FB",
        strokeWidth: 5,
    },
    labels: {
        fontSize: 1,
        fill: "transparent",
    },
};

const scatterStyle = {
    parent: {
        border: "1px solid #ccc",
    },
    data: {
        fill: "#1FC1FB",
    },
    labels: {
        fontSize: 1,
        fill: "transparent",
    },
};
