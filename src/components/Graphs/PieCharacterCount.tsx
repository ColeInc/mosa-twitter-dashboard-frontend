import React from "react";
import { VictoryAnimation, VictoryPie, VictoryLabel } from "victory";
import classes from "./PieCharacterCount.module.scss";

interface PieCharacterCountProps {
    characterCount: number;
}

const PieCharacterCount = ({ characterCount }: PieCharacterCountProps) => {
    const graphPercent = [
        { x: 1, y: characterCount },
        { x: 2, y: 100 - characterCount / 280 },
    ];

    return (
        <div className={classes["pie-graph__container"]}>
            <svg viewBox="0 0 50 50" width="100%" height="100%">
                <VictoryPie
                    standalone={false}
                    width={50}
                    height={50}
                    padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    data={[{ x: 2, y: 100 }]}
                    innerRadius={17.5}
                    labels={() => null}
                    style={{
                        data: {
                            fill: "#1E1E1E",
                        },
                    }}
                />
                <VictoryPie
                    standalone={false}
                    width={50}
                    height={50}
                    padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    data={graphPercent}
                    innerRadius={17.5}
                    labels={() => null}
                    style={{
                        data: {
                            fill: ({ datum }: any) => {
                                const color = "#8C66DD";
                                return datum.x === 1 ? color : "#1E1E1E";
                            },
                        },
                    }}
                />
            </svg>
        </div>
    );
};

export default PieCharacterCount;
