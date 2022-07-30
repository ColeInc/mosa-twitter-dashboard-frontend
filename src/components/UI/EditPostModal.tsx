import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import CrossIcon from "../../assets/icons/noun-exit-cross-1208142.svg";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTweetThunk } from "../../store/posts-actions";
import usePostsThunk from "../../hooks/use-posts-thunk";
import useKeyPress from "../../hooks/use-key-press";
import Post from "../../models/Post.model";
import classes from "./EditPostModal.module.scss";
import TweetForm from "./TweetForm";
import Dropdown from "./Dropdown";

const dropdownMappings: any = {
    SAVE: "queue",
    DRAFTS: "drafts",
    TWEET: "tweet",
};

const Backdrop: React.FC<{ onConfirm: () => void }> = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay: React.FC<{ post: Post; onConfirm: () => void }> = props => {
    const [dropdownItem, setDropdownItem] = useState("SAVE");
    const [tweetInput, setTweetInput] = useState<Post>(props.post);
    const dispatchPost = usePostsThunk();
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.user);

    const charCount = tweetInput.body?.length || 0;

    const onKeyPress = (event: React.KeyboardEvent) => {
        // if user hits CTRL + ENTER, submit the form:
        if (event.ctrlKey && event.key === "Enter") {
            onFormSubmit(event);
        }
    };
    useKeyPress([], onKeyPress);

    const deleteTweetHandler = () => {
        dispatch(deleteTweetThunk(props.post as Post));
        props.onConfirm();
    };

    // stop child divs being effected by onClick --> close modal
    const toggle = (event: any) => {
        if (event.currentTarget !== event.target) return;
        props.onConfirm();
        event.preventDefault();
        event.stopPropagation();
    };

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

        const response = dispatchPost(tweetInput as Post, dropdownMappings[dropdownItem], "update");
        // if tweet was successfully saved, close the modal:
        if (response.isValid) {
            props.onConfirm();
        } else {
            // TODO: display error msg back to user.
            alert("Failed to save tweet! D:");
        }
    };

    return (
        <div className={classes["modal__container"]} onClick={event => toggle(event)}>
            <div className={classes["modal__box"]}>
                <div className={classes["modal__user-data-container"]}>
                    <img src={userData.imageUrl} className={classes["modal__profile-pic"]} alt="profile pic" />
                    <h1>@{userData.twitterHandle}</h1>
                    <div className={classes["modal__close-button"]} onClick={props.onConfirm} title="Discard Changes">
                        <CrossIcon />
                    </div>
                </div>

                <form className={classes["modal__form"]} onSubmit={onFormSubmit}>
                    <TweetForm onTextChange={onFormChangeHandler} tweetValue={tweetInput.body} />

                    <div className={classes["modal__bottom-buttons-container"]}>
                        <button
                            className={classes["modal__delete-tweet-button"]}
                            onClick={deleteTweetHandler}
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

const ErrorModal: React.FC<{ post: Post; onConfirm: () => void }> = props => {
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
