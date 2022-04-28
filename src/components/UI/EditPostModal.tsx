import React from "react";
// import ReactDOM from "react-dom/client";
import classes from "./EditPostModal.module.css";

const Backdrop: React.FC<{ onConfirm: () => void }> = props => {
    // const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay: React.FC<{ title: string; message: string; onConfirm: () => void }> = props => {
    // const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <button onClick={props.onConfirm}>Okay</button>
            </footer>
        </div>
    );
};

const ErrorModal: React.FC<{ title: string; message: string; onConfirm: () => void }> = props => {
    // const ErrorModal = props => {
    // const backdropRoot = document.getElementById("backdrop") as HTMLElement;
    // const overlayRoot = document.getElementById("overlay") as HTMLElement;
    return (
        <React.Fragment>
            {/* {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById("backdrop"))}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
                document.getElementById("overlay")
            )} */}
        </React.Fragment>
    );
};

export default ErrorModal;
