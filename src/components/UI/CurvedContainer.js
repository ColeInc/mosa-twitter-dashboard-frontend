import React from "react";
import classes from "./CurvedContainer.module.css";
const CurvedContainer = (props) => {
    // console.log(props.style);
    const style = props.style ? props.style : {};

    return (
        <div className={classes["curved-container"]} style={style}>
            {props.children}
        </div>
    );
};

export default CurvedContainer;
