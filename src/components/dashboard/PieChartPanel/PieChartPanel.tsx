import React, { useEffect, useState } from "react";
import CurvedContainer from "../../UI/CurvedContainer";
import PieChartItem from "./PieChartItem";
import classes from "./PieChartPanel.module.css";
import PieChartData from "../../../models/PieChartData";

const PieChartPanel = () => {
    const [pieData, setPieData] = useState<PieChartData[]>([
        {
            title: "",
            total: 0,
            change24h: 0,
            color: "",
        },
    ]);

    useEffect(() => {
        // TODO: fetch each pie chart's data from backend. for now hardcoding:

        setPieData([
            {
                title: "engagement",
                total: 1284272,
                change24h: 14.7,
                color: "#1FC1FB",
            },
            {
                title: "unique viewers",
                total: 24063,
                change24h: 8.2,
                color: "#2BEAB8",
            },
            {
                title: "page visits",
                total: 428,
                change24h: -3.9,
                color: "#EE31E0",
            },
        ]);
    }, []);

    return (
        <CurvedContainer className={classes["pie-chart-panel__container"]}>
            {pieData.map(pieItem => {
                return <PieChartItem data={pieItem} key={pieItem.title} />;
            })}
        </CurvedContainer>
    );
};

export default PieChartPanel;
