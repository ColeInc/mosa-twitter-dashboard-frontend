import React from "react";
import classes from "./Dropdown.module.css";

import { ReactComponent as RightChevron } from "../../assets/icons/noun-right-chevron-4695692.svg";

const Dropdown = (props) => {
    return (
        <div>
            <button
                className={`${classes["dropdown__container"]} ${
                    props.className && props.className
                }`}
                onClick={() => props.toggleDropdown((prev) => !prev)}
            >
                {props.currentItem}

                <RightChevron />
            </button>
            <ul
                className={`${classes["dropdown__items-drawer"]} ${
                    props.dropdownState && classes.active
                }`}
            >
                {props.items.map((item) => {
                    return (
                        <li onClick={props.onDropdownClick(item)}>{item}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Dropdown;
