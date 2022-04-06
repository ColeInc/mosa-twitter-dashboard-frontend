import React, { useState } from "react";
import classes from "./CreateTweet.module.css";

import { ReactComponent as SettingsIcon } from "../../../assets/icons/noun-settings-2650508.svg";
import CurvedSubContainer from "../../UI/CurvedSubContainer";
import UploadImage from "../../UI/UploadImage";
import Dropdown from "../../UI/Dropdown";

const dropdownItems = ["QUEUE", "DRAFT", "TWEET"];

const CreateTweet = () => {
    const [currentDropdown, setCurrentDropdown] = useState("queue");

    const onFormSubmit = (event) => {
        event.preventDefault();

        // do something with the inputted tweet
    };

    return (
        <CurvedSubContainer className={classes["create-tweet__container"]}>
            <h1>CREATE TWEET</h1>
            <form
                className={classes["create-tweet__form"]}
                onSubmit={onFormSubmit}
            >
                <div className={classes["create-tweet__text-input-box"]}>
                    <textarea
                        className={classes["create-tweet__input"]}
                        placeholder="Type a tweet..."
                    />
                    <div
                        className={
                            classes["create-tweet__input-bottom-container"]
                        }
                    >
                        <p className={classes["create-tweet__remaining-chars"]}>
                            0 / 4000
                        </p>
                        <UploadImage />
                    </div>
                </div>
                <div className={classes["create-tweet__buttons-container"]}>
                    <button
                        className={classes["create-tweet__button-settings"]}
                    >
                        <SettingsIcon />
                    </button>

                    <Dropdown
                        items={dropdownItems}
                        currentItem={currentDropdown}
                        onDropdownClick={setCurrentDropdown}
                        className={classes["create-tweet__button-dropdown"]}
                    />
                </div>
            </form>
        </CurvedSubContainer>
    );
};

export default CreateTweet;
