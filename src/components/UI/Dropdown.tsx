import React, { useEffect, useRef, useState } from "react";
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
    const clickOffDropdownRef = useRef<HTMLDivElement>(null);

    // if user clicks outside the opened dropdown menu then close it:
    const handleClickOutside = (event: MouseEvent) => {
        if (clickOffDropdownRef.current && !clickOffDropdownRef.current.contains(event.target as Node)) {
            setDropdownActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const onDropdownClick = (userChoice: string) => {
        // pass the user's choice back up to CreateTweet parent:
        props.onDropdownClick(userChoice);
        // close dropdown now that user has clicked something:
        setDropdownActive(prev => !prev);
    };

    return (
        <div
            className={classes["dropdown__container"]}
            onClick={event => {
                event.preventDefault();
                event.stopPropagation();
                setDropdownActive(prev => !prev);
            }}
            ref={clickOffDropdownRef}
        >
            <button
                className={`${classes["dropdown__button"]} ${props.className && props.className} ${
                    dropdownActive && classes["dropdown__button--active"]
                }`}
            >
                <p>{props.currentItem}</p>

                <div className={classes["dropdown__chevron-selector"]}>
                    <RightChevron />
                </div>
            </button>
            <div className={`${classes["dropdown__items-drawer"]} ${dropdownActive && classes.active}`}>
                {props.items.map(item => {
                    return (
                        <div onClick={onDropdownClick.bind(this, item)} key={item}>
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Dropdown;
