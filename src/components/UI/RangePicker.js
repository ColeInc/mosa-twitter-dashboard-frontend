import React from "react";
import classes from "./RangePicker.module.css";

const RangePicker = (props) => {
    // let current = false;
    const buttonList = ["daily", "weekly", "monthly"];

    // const className = props.active === "daily" ? "active" : "";
    // const className = props.active === "daily" ? "active" : "";
    // const className = props.active === "daily" ? "active" : "";
    // if (props.active === 'daily') {

    // }
    return (
        <div className={classes["range-picker__container"]}>
            {buttonList.map((currentButton) => {
                return (
                    <button
                        className={
                            props.active === currentButton
                                ? classes["active"]
                                : ""
                        }
                        onClick={props.onClickHandler.bind(this, currentButton)}
                    >
                        {currentButton}
                    </button>
                );
            })}
            {/* <button onClick={props.onClickHandler.bind(this, "daily")}>
                DAILY
            </button>
            <button onClick={props.onClickHandler.bind(this, "weekly")}>
                WEEKLY
            </button>
            <button onClick={props.onClickHandler.bind(this, "monthly")}>
                MONTHLY
            </button> */}
        </div>
    );
};

export default RangePicker;
