import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import classes from "./EditPostModal.module.css";
import TweetForm from "./TweetForm";
import Dropdown from "./Dropdown";
import usePostsThunk from "../../hooks/use-posts-thunk";
import PostMetadata from "../../models/PostMetadata";
import PostType from "../../models/Post";

// hardcoded values, therefore leaving as "any" type. no reason to define entire custom type.
const dropdownMappings: any = {
    SAVE: "queue",
    "ADD TO DRAFTS": "draft",
    "TWEET NOW": "tweet",
};

const Backdrop: React.FC<{ onConfirm: () => void }> = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay: React.FC<{ post: PostType; onConfirm: () => void }> = props => {
    const [dropdownItem, setDropdownItem] = useState("SAVE");
    const [tweetInput, setTweetInput] = useState<PostType>(props.post);
    const dispatchPost = usePostsThunk();

    // stop child divs being effected by onClick --> close modal
    const toggle = (event: any) => {
        if (event.currentTarget !== event.target) return;
        props.onConfirm();
        event.preventDefault();
        event.stopPropagation();
    };

    const charCount = tweetInput.body?.length || 0;

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

        const response = dispatchPost(tweetInput as PostMetadata, dropdownMappings[dropdownItem], "update");
        if (response.isValid) {
            // if tweet was successfully saved, close the modal:
            props.onConfirm();
        } else {
            // TODO: display error msg back to user.
        }
    };

    return (
        <div className={classes["modal__container"]} onClick={event => toggle(event)}>
            <div className={classes["modal__box"]}>
                <div className={classes["modal__user-data-container"]}>
                    <div className={classes["modal__profile-pic"]}></div>
                    <h1 className={classes["modal__username"]}>@banana_mafia123</h1>
                    <button
                        className={classes["modal__close-button"]}
                        onClick={props.onConfirm}
                        title="Discard Changes"
                    >
                        X
                    </button>
                </div>

                <form className={classes["modal__form"]} onSubmit={onFormSubmit}>
                    <TweetForm onTextChange={onFormChangeHandler} tweetValue={tweetInput.body} />

                    <div className={classes["modal__bottom-buttons-container"]}>
                        <button
                            className={classes["modal__delete-tweet-button"]}
                            onClick={props.onConfirm}
                            title="Delete tweet"
                        >
                            Delete
                        </button>
                        <Dropdown
                            items={Object.keys(dropdownMappings)}
                            currentItem={dropdownItem}
                            onDropdownClick={setDropdownItem}
                            className={classes["modal__button-dropdown"]}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

const ErrorModal: React.FC<{ post: PostType; onConfirm: () => void }> = props => {
    const backdropRoot = document.getElementById("backdrop") as HTMLElement;
    const overlayRoot = document.getElementById("overlay") as HTMLElement;
    // Need to make this check in React 18 for typescript for some reason.
    if (!backdropRoot || !overlayRoot) throw new Error("Failed to find the root element");

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, backdropRoot)}
            {ReactDOM.createPortal(<ModalOverlay post={props.post} onConfirm={props.onConfirm} />, overlayRoot)}
        </React.Fragment>
    );
};

export default ErrorModal;
