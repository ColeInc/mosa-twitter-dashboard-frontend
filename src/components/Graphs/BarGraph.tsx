import React, { useCallback, useState } from "react";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory";
import classes from "./BarGraph.module.css";

const defaultGraphData = [
    { x: "Monday", y: 10 },
    { x: "Tuesday", y: 10 },
    { x: "Wednesday", y: 10 },
    { x: "Thursday", y: 10 },
    { x: "Friday", y: 10 },
    { x: "Saturday", y: 10 },
    { x: "Sunday", y: 10 },
];

const barGraphData = [
    { x: "Monday", y: 2 },
    { x: "Tuesday", y: 3 },
    { x: "Wednesday", y: 5 },
    { x: "Thursday", y: 4 },
    { x: "Friday", y: 1 },
    { x: "Saturday", y: 6 },
    { x: "Sunday", y: 10 },
];

const BarGraph = () => {
    const [boundingRect, setBoundingRect] = useState({ width: 0, height: 0 });

    const graphRef = useCallback(node => {
        if (node !== null) {
            setBoundingRect(node.getBoundingClientRect());
        }
    }, []);

    return (
        <div className={classes["bar-graph__container"]} ref={graphRef}>
            <svg
                viewBox="0 0 400 400"
                height={boundingRect.height}
                width={boundingRect.width}
                className={classes["bar-graph__svg-container"]}
            >
                <VictoryChart
                    height={400}
                    width={400}
                    standalone={false}
                    animate={{
                        duration: 800,
                        onLoad: { duration: 200 },
                    }}
                    padding={{ top: 0, right: 0, bottom: 25, left: 0 }}
                >
                    <VictoryBar
                        standalone={false}
                        data={defaultGraphData}
                        cornerRadius={{ top: 8, bottom: 8 }}
                        style={{
                            data: { fill: "#1E1E1E", width: 15 },
                            parent: { height: "100%" },
                        }}
                    />
                    <VictoryBar
                        data={barGraphData}
                        cornerRadius={{ top: 8, bottom: 8 }}
                        standalone={false}
                        style={{
                            data: { fill: "#2BEAB8", width: 15 },
                            parent: { height: "100%" },
                        }}
                    />
                    <VictoryAxis
                        crossAxis
                        axisComponent={
                            <p>
                                {(value: any) => {
                                    <p>{value} </p>;
                                }}
                            </p>
                        }
                        standalone={false}
                        style={{
                            axis: { stroke: "transparent" },
                            ticks: { stroke: "transparent" },
                            tickLabels: { fill: "#fff" },
                        }}
                        tickValues={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
                        tickFormat={sentiment => {
                            console.log(sentiment.toString());
                            return `${sentiment.toString().substring(0, 1)}`;
                        }}
                    />
                </VictoryChart>
            </svg>
        </div>
    );
};

export default BarGraph;
