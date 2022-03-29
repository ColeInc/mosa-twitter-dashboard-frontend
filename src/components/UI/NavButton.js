import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavButton.module.css";
import { ReactComponent as RightChevron } from "../../assets/icons/noun-right-chevron-4695692.svg";

const NavButton = (props) => {
    const style = props.style ? props.style : {};
    const icon = <div className={classes.icon}>{props.icon}</div>;

    return (
        <NavLink
            {...props}
            className={classes["nav-font"]}
            activeClassName={classes.active}
        >
            <div className={classes["nav-button"]} style={style}>
                {icon}
                <p>{props.children}</p>
                <RightChevron className={classes.chevron} />
            </div>
        </NavLink>
    );
};

export default NavButton;
