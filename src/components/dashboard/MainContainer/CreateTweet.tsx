import React, { useState } from "react";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/noun-settings-2650508.svg";
import { useDispatch } from "react-redux";
import { sendPostData } from "../../../store/posts-actions";

import classes from "./CreateTweet.module.css";
import CurvedSubContainer from "../../UI/CurvedSubContainer";
import UploadImage from "../../UI/UploadImage";
import Dropdown from "../../UI/Dropdown";

const dropdownItems = ["QUEUE", "DRAFT", "TWEET"];

const CreateTweet = () => {
    const [dropdownItem, setDropdownItem] = useState("queue");
    const [tweetInput, setTweetInput] = useState<string>("");
    const dispatch = useDispatch();

    const charCount = tweetInput?.length || 0;
    const tooLong = charCount > 280 ? true : false;

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (charCount < 1) {
            return;
        }

        // if user selects QUEUE and tweet is less than 280 chars, add tweet to "posts" redux slice:
        if (!tooLong && dropdownItem === "QUEUE") {
            dispatch(
                sendPostData({
                    type: "queue",
                    body: tweetInput,
                    scheduledTime: new Date().toLocaleString(),
                })
            );
            // clear current tweet in input box:
            setTweetInput("");
        }
        // if user selects DRAFT (and character length does not matter), add tweet to "drafts" list in redux slice:
        else if (dropdownItem === "DRAFT") {
            dispatch(
                sendPostData({
                    type: "drafts",
                    body: tweetInput,
                    scheduledTime: new Date().toLocaleString(),
                })
            );
            // clear current tweet in input box:
            // setTweetInput("");
        }
        // if user input is valid, tweet instantly:
        else if (!tooLong && dropdownItem === "TWEET") {
            // clear current tweet in input box:
            setTweetInput("");
        }
    };

    return (
        <CurvedSubContainer className={classes["create-tweet__container"]}>
            <h1>CREATE TWEET</h1>
            <form className={classes["create-tweet__form"]} onSubmit={onFormSubmit}>
                <div className={classes["create-tweet__text-input-box"]}>
                    <textarea
                        className={classes["create-tweet__input"]}
                        placeholder="Type a tweet..."
                        onChange={event => setTweetInput(event.target.value)}
                        value={tweetInput || ""}
                    />
                    <div className={classes["create-tweet__input-bottom-container"]}>
                        <p
                            className={`${classes["create-tweet__remaining-chars"]} ${
                                tooLong && classes["error-text"]
                            }`}
                        >
                            {charCount} / 280
                        </p>
                        <UploadImage />
                    </div>
                </div>
                <div className={classes["create-tweet__buttons-container"]}>
                    <button className={classes["create-tweet__button-settings"]}>
                        <SettingsIcon />
                    </button>

                    <Dropdown
                        items={dropdownItems}
                        currentItem={dropdownItem}
                        onDropdownClick={setDropdownItem}
                        className={classes["create-tweet__button-dropdown"]}
                    />
                </div>
            </form>
        </CurvedSubContainer>
    );
};

export default CreateTweet;
