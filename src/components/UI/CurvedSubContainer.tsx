import React from "react";
import classes from "./CurvedSubContainer.module.scss";

const CurvedSubContainer: React.FC<{ className: string; children?: React.ReactNode }> = (props: any) => {
    return (
        <div className={`${classes["curved-sub-container"]} ${props.className && props.className}`}>
            {props.children}
        </div>
    );
};

export default CurvedSubContainer;
