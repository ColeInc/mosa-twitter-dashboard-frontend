import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";

import DashboardIcon from "../../assets/icons/noun-home-4688386.svg";
import QueueIcon from "../../assets/icons/noun-queue-4342391.svg";
import AutomationIcon from "../../assets/icons/noun-process-2473979.svg";
import SavedTweetsIcon from "../../assets/icons/noun-save-1054863.svg";
import SettingsIcon from "../../assets/icons/noun-settings-2650508.svg";
import LogoutIcon from "../../assets/icons/noun-log-out-2149602.svg";

import classes from "./NavigationBar.module.scss";
import NavButton from "./NavButton";

const NavigationBar = () => {
    const userData = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(userActions.logout());
    };

    return (
        <div className={classes["nav-bar__main-container"]}>
            <div className={classes["nav-bar__upper-container"]}>
                <div className={classes["nav-bar__user-data-box"]}>
                    <div className={classes["nav-bar__img-container"]}>
                        <img src={userData.imageUrl} className={classes["nav-bar__profile-img"]} alt="profile pic" />
                    </div>
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
                <button onClick={logoutUser} className={classes["nav-bar__logout-button"]} title="Log out">
                    <LogoutIcon />
                </button>
                <h3>Mosa</h3>
                <p>
                    Designed by Cole McConnell.
                    <br />
                    All Rights Reserved. Copyright 2022 &copy;
                </p>
            </div>
        </div>
    );
};

export default NavigationBar;
