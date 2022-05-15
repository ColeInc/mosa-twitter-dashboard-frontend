import React from "react";
import * as ReactDOM from "react-dom";
import classes from "./EditPostModal.module.css";
import PostType from "../../models/Post";

const Backdrop: React.FC<{ onConfirm: () => void }> = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay: React.FC<{ post: PostType; onConfirm: () => void }> = props => {
    return (
        <div className={classes["modal__container"]} onClick={props.onConfirm}>
            <div className={classes["modal__box"]}>
                <h2>{props.post.body}</h2>
                <button onClick={props.onConfirm}>Save</button>
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
