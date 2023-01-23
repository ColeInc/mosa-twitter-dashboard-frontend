import React, { useState } from "react";
import classes from "./Dropdown.module.scss";
import RightChevron from "../../assets/icons/noun-right-chevron-4695692.svg";

interface DropdownProps {
    items: string[];
    currentItem: string;
    onDropdownClick: (item: string) => void;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = props => {
    const [dropdownActive, setDropdownActive] = useState(false);

    const onDropdownClick = (userChoice: string) => {
        // pass the user's choice back up to CreateTweet parent:
        props.onDropdownClick(userChoice);
        // close dropdown now that user has clicked something:
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

                <div
                    className={classes["dropdown__chevron-selector"]}
                    onClick={event => {
                        event.preventDefault();
                        event.stopPropagation();
                        setDropdownActive(prev => !prev);
                    }}
                >
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
