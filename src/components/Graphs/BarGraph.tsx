import React, { useCallback, useState } from "react";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory";
import BarGraphData from "../../models/BarGraphData.model";
import classes from "./BarGraph.module.scss";

const templateGraphData: BarGraphData[] = [
    { x: "Monday", y: 10 },
    { x: "Tuesday", y: 10 },
    { x: "Wednesday", y: 10 },
    { x: "Thursday", y: 10 },
    { x: "Friday", y: 10 },
    { x: "Saturday", y: 10 },
    { x: "Sunday", y: 10 },
];

const BarGraph: React.FC<{ barGraphData: BarGraphData[] }> = props => {
    const [boundingRect, setBoundingRect] = useState({ width: 0, height: 0 });

    const graphRef = useCallback((node: any) => {
        if (node !== null) {
            setBoundingRect(node.getBoundingClientRect());
        }
    }, []);

    return (
        <div className={classes["bar-graph__container"]} ref={graphRef}>
            <svg viewBox="0 0 100% 100%" width="100%" height="100%">
                <VictoryChart
                    standalone={false}
                    height={boundingRect.height}
                    width={boundingRect.width}
                    padding={{ top: 0, right: 10, bottom: 25, left: 10 }}
                    // padding={{ top: 0, right: 20, bottom: 0, left: 20 }}
                    // animate={{ duration: 0, onLoad: { duration: 0 } }}
                >
                    <VictoryBar
                        standalone={false}
                        data={templateGraphData}
                        cornerRadius={{ top: 6, bottom: 6 }}
                        style={{
                            data: { fill: "#1E1E1E", width: 12 },
                            parent: { height: "100%" },
                        }}
                        // animate={{
                        //     onLoad: { duration: 0 },
                        // }}
                    />
                    <VictoryBar
                        data={props.barGraphData}
                        cornerRadius={{ top: 6, bottom: 6 }}
                        standalone={false}
                        style={{
                            data: { fill: "#2BEAB8", width: 12 },
                            parent: { height: "100%" },
                        }}
                        animate={{
                            onLoad: { duration: 1200 },
                        }}
                    />
                    <VictoryAxis
                        crossAxis
                        standalone={false}
                        style={{
                            axis: { stroke: "transparent" },
                            ticks: { stroke: "transparent" },
                            tickLabels: {
                                fill: "#9F9696",
                                fontSize: 11,
                                fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                                sans-serif`,
                            },
                        }}
                        tickValues={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
                        tickFormat={currentTick => {
                            return `${currentTick.toString().substring(0, 1)}`;
                        }}
                    />
                </VictoryChart>
            </svg>
        </div>
    );
};

export default BarGraph;
