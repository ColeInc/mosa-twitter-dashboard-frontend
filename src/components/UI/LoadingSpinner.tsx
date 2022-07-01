import React from "react";
import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner: React.FC<{ className?: string }> = props => {
    return <span className={`${classes["loading-spinner"]} ${props.className && props.className}`}></span>;
};

export default LoadingSpinner;
