import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { ReactComponent as DashboardIcon } from "../../assets/icons/noun-home-4688386.svg";
import { ReactComponent as QueueIcon } from "../../assets/icons/noun-queue-4342391.svg";
import { ReactComponent as AutomationIcon } from "../../assets/icons/noun-process-2473979.svg";
import { ReactComponent as SavedTweetsIcon } from "../../assets/icons/noun-save-1054863.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/noun-settings-2650508.svg";
import classes from "./NavigationBar.module.css";
import NavButton from "./NavButton";

const NavigationBar = () => {
    const userData = useSelector((state: RootState) => state.user);

    return (
        <div className={classes["nav-bar__main-container"]}>
            <div className={classes["nav-bar__upper-container"]}>
                <div className={classes["nav-bar__user-data-box"]}>
                    <img src={userData.imageUrl} className={classes["nav-bar__profile-img"]} alt="profile pic" />
                    <div className={`${classes["nav-bar__username"]} ${classes.tablet}`}>
                        <h1>{userData.name}</h1>
                        <h2>@{userData.twitterHandle}</h2>
                    </div>
                </div>
            </div>
            <div className={classes["nav-bar__nav-container"]}>
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

            <div className={`${classes["nav-bar__footer"]} ${classes.tablet}`}>
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
