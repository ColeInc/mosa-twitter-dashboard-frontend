import React, { useState } from "react";
import classes from "./Dropdown.module.css";

import { ReactComponent as RightChevron } from "../../assets/icons/noun-right-chevron-4695692.svg";

const Dropdown = (props: {
    items: string[];
    currentItem: string;
    onDropdownClick: (item: string) => void;
    className: string;
}) => {
    const [dropdown, setDropdown] = useState(false);

    const onDropdownClick = (userChoice: string) => {
        // pass the user's choice back up to CreateTweet parent:
        props.onDropdownClick(userChoice);
        // close dropdown now that user's clicked something:
        setDropdown((prev) => !prev);
    };

    return (
        <div className={classes["dropdown__container"]}>
            <button
                className={`${classes["dropdown__button"]} ${
                    props.className && props.className
                } ${dropdown && classes["dropdown__button--active"]}`}
                onClick={() => setDropdown((prev) => !prev)}
            >
                {props.currentItem.toUpperCase()}

                <RightChevron />
            </button>
            <ul
                className={`${classes["dropdown__items-drawer"]} ${
                    dropdown && classes.active
                }`}
            >
                {props.items.map((item) => {
                    return (
                        <React.Fragment key={item}>
                            <li onClick={onDropdownClick.bind(this, item)}>
                                {item.toUpperCase()}
                            </li>
                            {/* <hr /> */}
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default Dropdown;
