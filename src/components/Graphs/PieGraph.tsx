import React, { useEffect, useState } from "react";
import { VictoryAnimation, VictoryPie, VictoryLabel } from "victory";
import PieChartData from "../../models/PieChartData";

// an algorithm to calculate an arbitrary milestone relatively close in proximity to their current metric value, to represent "100%" of the pie graph.
const nextMilestone = (num: number) => {
    const div = Number(num.toString().substring(0, 1)) <= 5 ? 2 : 1;
    const nearestTen = Number("1" + "0".repeat(num.toString().length)) / div;
    return nearestTen;
};

const PieGraph: React.FC<{
    graphData: PieChartData;
}> = props => {
    const [graphPercent, setGraphPercent] = useState<{ x: number; y: number }[]>([
        { x: 1, y: 0 },
        { x: 2, y: 100 },
    ]);

    const { total } = props.graphData;
    useEffect(() => {
        const percentage = Math.round((total / nextMilestone(total)) * 100);
        setGraphPercent(getData(percentage));
    }, [total]);

    const getData = (percent: number) => {
        return [
            { x: 1, y: percent },
            { x: 2, y: 100 - percent },
        ];
    };

    return (
        <div>
            <svg viewBox="0 0 400 400" width="100%" height="100%">
                <VictoryPie
                    standalone={false}
                    width={400}
                    height={400}
                    padding={{ top: 0, right: 20, bottom: 0, left: 20 }}
                    data={[{ x: 2, y: 100 }]}
                    innerRadius={140}
                    labels={() => null}
                    style={{
                        data: {
                            fill: "#1E1E1E",
                        },
                    }}
                />
                <VictoryPie
                    standalone={false}
                    animate={{
                        duration: 2000,
                        //  easing: "exp"
                    }}
                    width={400}
                    height={400}
                    padding={{ top: 0, right: 20, bottom: 0, left: 20 }}
                    data={graphPercent}
                    innerRadius={140}
                    cornerRadius={25}
                    labels={() => null}
                    style={{
                        data: {
                            fill: ({ datum }: any) => {
                                const color = props.graphData.color || "#2BEAB8";
                                return datum.x === 1 ? color : "#1E1E1E";
                            },
                        },
                    }}
                />
                <VictoryAnimation duration={1500} data={graphPercent[0]}>
                    {newProps => {
                        return (
                            <VictoryLabel
                                textAnchor="middle"
                                verticalAnchor="middle"
                                x={200}
                                y={200}
                                text={`${Math.round(
                                    (Number(newProps.y) / graphPercent[0].y) * props.graphData.total
                                ).toLocaleString()}`}
                                style={{
                                    fill: "#fff",
                                    fontSize: 45,
                                    fontFamily:
                                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                                }}
                            />
                        );
                    }}
                </VictoryAnimation>
            </svg>
        </div>
    );
};

export default PieGraph;
