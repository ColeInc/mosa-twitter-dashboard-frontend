import React from "react";
import classes from "./CurvedSubContainer.module.css";

const CurvedSubContainer = (props) => {
    return (
        <div
            className={`${classes["curved-sub-container"]} ${
                props.className && props.className
            }`}
        >
            {props.children}
        </div>
    );
};

export default CurvedSubContainer;
