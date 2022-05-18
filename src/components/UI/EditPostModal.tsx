import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import { ReactComponent as CrossIcon } from "../../assets/icons/noun-exit-cross-1208142.svg";
import { useDispatch } from "react-redux";
import { deleteTweetThunk } from "../../store/posts-actions";
import usePostsThunk from "../../hooks/use-posts-thunk";
import PostMetadata from "../../models/PostMetadata";
import PostType from "../../models/Post";
import classes from "./EditPostModal.module.css";
import TweetForm from "./TweetForm";
import Dropdown from "./Dropdown";

const USER_DATA = {
    name: "Billy Jimbson",
    twitterHandle: "banana_mafia123",
    imageUrl:
        "https://lh3.googleusercontent.com/dJR03rG6P8A_sjPIdIQ0PUK956iI0Ki2S2S47WiXvuP5OuCIMrJ9GYK-uxeH5gMe3J3m-D8ikwtGyOE4gMzp2EKNxC6wgOfjhkD7OQBI0RmJVe10zpeubOq_Q8MG6AZpNPz10pp-AgM",
};

const dropdownMappings: any = {
    SAVE: "queue",
    DRAFTS: "draft",
    TWEET: "tweet",
};

const Backdrop: React.FC<{ onConfirm: () => void }> = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay: React.FC<{ post: PostType; onConfirm: () => void }> = props => {
    const [dropdownItem, setDropdownItem] = useState("SAVE");
    const [tweetInput, setTweetInput] = useState<PostType>(props.post);
    const dispatchPost = usePostsThunk();
    const dispatch = useDispatch();

    // stop child divs being effected by onClick --> close modal
    const toggle = (event: any) => {
        if (event.currentTarget !== event.target) return;
        props.onConfirm();
        event.preventDefault();
        event.stopPropagation();
    };

    const charCount = tweetInput.body?.length || 0;

    const deleteTweetHandler = () => {
        dispatch(deleteTweetThunk(props.post as PostMetadata));
        props.onConfirm();
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

        const response = dispatchPost(tweetInput as PostMetadata, dropdownMappings[dropdownItem], "update");
        if (response.isValid) {
            // if tweet was successfully saved, close the modal:
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
                    <img src={USER_DATA.imageUrl} className={classes["modal__profile-pic"]} alt="profile pic" />
                    <h1>@{USER_DATA.twitterHandle}</h1>
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
