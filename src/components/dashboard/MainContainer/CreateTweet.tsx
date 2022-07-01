import React, { useRef, useState } from "react";
import SettingsIcon from "../../../assets/icons/noun-settings-2650508.svg";
import CurvedSubContainer from "../../UI/CurvedSubContainer";
import usePostsThunk from "../../../hooks/use-posts-thunk";
import useKeyPress from "../../../hooks/use-key-press";
import classes from "./CreateTweet.module.scss";
import Post from "../../../models/Post.model";
import TweetForm from "../../UI/TweetForm";
import Dropdown from "../../UI/Dropdown";

const dropdownItems = ["QUEUE", "DRAFT", "TWEET"];
const defaultPost: Partial<Post> = {
    type: "queue",
    body: "",
    scheduledTime: "",
};

const CreateTweet = () => {
    const [dropdownItem, setDropdownItem] = useState("queue");
    const [tweetInput, setTweetInput] = useState<Partial<Post>>(defaultPost);
    const dispatchPost = usePostsThunk();
    const tweetFormRef = useRef<any>();

    const charCount = tweetInput?.body?.length || 0;

    const onKeyPress = (event: React.KeyboardEvent) => {
        // if user hits CTRL + ENTER, submit the form:
        if (event.ctrlKey && event.key === "Enter") {
            onFormSubmit(event);
        }
    };
    useKeyPress([], onKeyPress);

    const onFormChangeHandler = (tweet: string) => {
        setTweetInput(prevState => {
            return { ...prevState, body: tweet };
        });
    };

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (charCount < 1) {
            return null;
        }

        const response = dispatchPost(tweetInput, dropdownItem, "add");
        if (response.isValid) {
            // if tweet was successfully saved, clear the input of current tweet text input box:
            setTweetInput(prevState => {
                return { ...prevState, body: "" };
            });
        } else {
            // TODO: display error msg back to user.
        }
    };

    return (
        <CurvedSubContainer className={classes["create-tweet__container"]}>
            <h1>CREATE TWEET</h1>
            <form className={classes["create-tweet__form"]} onSubmit={onFormSubmit} ref={tweetFormRef}>
                <TweetForm onTextChange={onFormChangeHandler} tweetValue={tweetInput.body || ""} />
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
