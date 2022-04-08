import React from "react";
import classes from "./RangePicker.module.css";

const RangePicker = (props: {
    onClickHandler: (range: string) => void;
    active: string;
}) => {
    const buttonList = ["daily", "weekly", "monthly"];

    return (
        <div className={classes["range-picker__container"]}>
            {buttonList.map((currentButton) => {
                return (
                    <button
                        className={
                            props.active === currentButton ? classes.active : ""
                        }
                        onClick={props.onClickHandler.bind(this, currentButton)}
                        key={currentButton}
                    >
                        {currentButton.toUpperCase()}
                    </button>
                );
            })}
        </div>
    );
};

export default RangePicker;