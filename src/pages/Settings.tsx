import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import classes from "./Settings.module.css";

const Settings = () => {
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(userActions.logout());
    };
    return (
        <div>
            Settings
            <button onClick={logoutUser} className={classes["settings__button"]}>
                LOG OUT
            </button>
        </div>
    );
};

export default Settings;
