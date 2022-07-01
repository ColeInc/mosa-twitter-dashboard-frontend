import React from "react";
import classes from "./TweetForm.module.scss";
import UploadImage from "./UploadImage";

const TweetForm: React.FC<{ onTextChange: (item: string) => void; tweetValue: string }> = props => {
    // calculate tweet total characters:
    const charCount = props.tweetValue?.length || 0;
    const tooLong = charCount > 280 ? true : false;

    return (
        <div className={classes["tweet-form__text-input-box"]}>
            <textarea
                className={classes["tweet-form__input"]}
                placeholder="Type a tweet..."
                onChange={event => props.onTextChange(event.target.value)}
                value={props.tweetValue || ""}
            />
            <div className={classes["tweet-form__input-bottom-container"]}>
                <p className={`${classes["tweet-form__remaining-chars"]} ${tooLong && classes["error-text"]}`}>
                    {charCount} / 280
                </p>
                <UploadImage />
            </div>
        </div>
    );
};

export default TweetForm;
