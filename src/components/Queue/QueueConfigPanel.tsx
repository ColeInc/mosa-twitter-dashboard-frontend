import React from "react";
import classes from "./QueueConfigPanel.module.scss";
import FormDropdown from "../UI/FormDropdown";
import Dropdown from "../UI/Dropdown";

const QueueConfigPanel = () => {
    return (
        <div className={classes["queue-panel__container"]}>
            <h1>QUEUE SETTINGS</h1>
            <div className={classes.line}>
                <p>Tweet from queue</p>
                {/* <FormDropdown
                    defaultValue="5"
                    data={[
                        { id: 0, label: "1" },
                        { id: 1, label: "5" },
                        { id: 2, label: "10" },
                    ]}
                /> */}
                <Dropdown
                    items={["1", "2", "3", "4", "5", "6", "7"]}
                    currentItem={"bean"}
                    onDropdownClick={() => {}}
                    className={classes["create-tweet__button-dropdown"]}
                />
                <p>times a day</p>
            </div>
            <div className={classes.line}>
                <p>between</p>
                <FormDropdown
                    defaultValue="3am"
                    data={[
                        { id: 0, label: "Istanbul, TR (AHL)" },
                        { id: 1, label: "Paris, FR (CDG)" },
                    ]}
                />
                <p>and</p>
                <FormDropdown
                    defaultValue="5pm"
                    data={[
                        { id: 0, label: "Istanbul, TR (AHL)" },
                        { id: 1, label: "Paris, FR (CDG)" },
                    ]}
                />
            </div>
            <div className={classes["queue-panel__divider"]} />
            <h2>TIMEZONE</h2>
            <FormDropdown
                defaultValue="Europe/London (GMT+1)"
                data={[
                    { id: 0, label: "Istanbul, TR (AHL)" },
                    { id: 1, label: "Paris, FR (CDG)" },
                ]}
            />
            <FormDropdown
                defaultValue="SHUFFLE"
                data={[
                    { id: 0, label: "Istanbul, TR (AHL)" },
                    { id: 1, label: "Paris, FR (CDG)" },
                ]}
            />
            <div className={classes["queue-panel__divider"]} />
            pause all
        </div>
    );
};

export default QueueConfigPanel;
