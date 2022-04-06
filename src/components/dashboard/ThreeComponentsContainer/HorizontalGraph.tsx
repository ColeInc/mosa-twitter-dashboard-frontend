import React from "react";
import classes from "./HorizontalGraph.module.css";
import CurvedSubContainer from "../../UI/CurvedSubContainer";

const HorizontalGraph = () => {
    return (
        <CurvedSubContainer className={classes["horizontal-graph__container"]}>
            <div>HorizontalGraph</div>
        </CurvedSubContainer>
    );
};

export default HorizontalGraph;
