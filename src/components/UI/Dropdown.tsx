import React, { useState } from "react";
import classes from "./Dropdown.module.css";
import { ReactComponent as RightChevron } from "../../assets/icons/noun-right-chevron-4695692.svg";

const Dropdown: React.FC<{
    items: string[];
    currentItem: string;
    onDropdownClick: (item: string) => void;
    className: string;
}> = props => {
    const [dropdownActive, setDropdownActive] = useState(false);

    const onDropdownClick = (userChoice: string) => {
        // pass the user's choice back up to CreateTweet parent:
        props.onDropdownClick(userChoice);
        // close dropdown now that user's clicked something:
        setDropdownActive(prev => !prev);
    };

    return (
        <div className={classes["dropdown__container"]}>
            <button
                className={`${classes["dropdown__button"]} ${props.className && props.className} ${
                    dropdownActive && classes["dropdown__button--active"]
                }`}
            >
                <p>{props.currentItem.toUpperCase()}</p>

                <div className={classes["dropdown__chevron-selector"]} onClick={() => setDropdownActive(prev => !prev)}>
                    <RightChevron />
                </div>
            </button>
            <ul className={`${classes["dropdown__items-drawer"]} ${dropdownActive && classes.active}`}>
                {props.items.map(item => {
                    return (
                        <React.Fragment key={item}>
                            <li onClick={onDropdownClick.bind(this, item)}>{item.toUpperCase()}</li>
                            {/* <hr /> */}
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
};

export default Dropdown;
