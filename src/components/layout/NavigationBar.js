import React from "react";
import classes from "./NavigationBar.module.css";
import { ReactComponent as DashboardIcon } from "../../assets/icons/noun-home-4688386.svg";
import { ReactComponent as QueueIcon } from "../../assets/icons/noun-queue-4342391.svg";
import { ReactComponent as AutomationIcon } from "../../assets/icons/noun-process-2473979.svg";
import { ReactComponent as SavedTweetsIcon } from "../../assets/icons/noun-save-1054863.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/noun-settings-2650508.svg";

import NavButton from "../UI/NavButton";

const USER_DATA = {
    name: "Billy Jimbson",
    twitterHandle: "billy_jimbson283",
    imageUrl:
        "https://lh3.googleusercontent.com/dJR03rG6P8A_sjPIdIQ0PUK956iI0Ki2S2S47WiXvuP5OuCIMrJ9GYK-uxeH5gMe3J3m-D8ikwtGyOE4gMzp2EKNxC6wgOfjhkD7OQBI0RmJVe10zpeubOq_Q8MG6AZpNPz10pp-AgM",
};

const NavigationBar = () => {
    return (
        <div className={classes["nav-container"]}>
            <div className={classes["upper-container"]}>
                <div className={classes["user-container"]}>
                    <img
                        src={USER_DATA.imageUrl}
                        className={classes["profile-img"]}
                        alt="profile pic"
                    />
                    <div className={classes["user-text"]}>
                        <h1>{USER_DATA.name}</h1>
                        <h2>@{USER_DATA.twitterHandle}</h2>
                    </div>
                </div>

                <NavButton to="/" icon={<DashboardIcon />}>
                    Dashboard
                </NavButton>
                <NavButton to="/queue" icon={<QueueIcon />}>
                    Queue
                </NavButton>
                <NavButton to="/automation" icon={<AutomationIcon />}>
                    Automation
                </NavButton>
                <NavButton to="/savedtweets" icon={<SavedTweetsIcon />}>
                    Saved Tweets
                </NavButton>
                <NavButton to="/settings" icon={<SettingsIcon />}>
                    Settings
                </NavButton>
            </div>

            <div className={classes.footer}>
                <p>
                    Designed by Cole McConnell.
                    <br />
                    All Rights Reserved. Copyright 2022 &copy;
                </p>
                <h3>Cole’s Twitter Dashboard</h3>
            </div>
        </div>
    );
};

export default NavigationBar;
