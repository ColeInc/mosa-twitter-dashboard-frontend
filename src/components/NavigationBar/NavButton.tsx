import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavButton.module.css";
import RightChevron from "../../assets/icons/noun-right-chevron-4695692.svg";

const NavButton: React.FC<{ to: string; icon: React.ReactNode; children?: React.ReactNode }> = props => {
    // SVG Icon
    const icon = <div className={classes["nav-button__icon"]}>{props.icon}</div>;

    return (
        <NavLink
            {...props}
            className={navItem => {
                return navItem.isActive
                    ? `${classes.active} ${classes["nav-button__font"]}`
                    : classes["nav-button__font"];
            }}
        >
            <div className={classes["nav-button__button"]}>
                {icon}
                <p className={classes.tablet}>{props.children}</p>
                <RightChevron className={`${classes["nav-button__chevron"]} ${classes.tablet}`} />
            </div>
        </NavLink>
    );
};

export default NavButton;
