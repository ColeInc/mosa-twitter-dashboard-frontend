import React from "react";
import classes from "./CurvedContainer.module.css";

const CurvedContainer: React.FC<{ className: string }> = (props) => {
    return (
        <div
            className={`${classes["curved-container"]} ${
                props.className && props.className
            }`}
        >
            {props.children}
        </div>
    );
};

export default CurvedContainer;
