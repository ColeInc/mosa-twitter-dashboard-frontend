import React from "react";
import { Link } from "react-router-dom";
import CurvedContainer from "../components/UI/CurvedContainer";
import classes from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={classes["not-found__container"]}>
            <CurvedContainer className={`${classes["not-found__panel"]} ${classes["animated-bg"]}`}>
                <div className={classes["not-found__text-container"]}>
                    <h1>Oops!</h1>
                    <h2>404 Page Not Found</h2>
                    <p>Sadly, the page you're looking for doesn't exist.</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <button>Go Home</button>
                    </Link>
                </div>
            </CurvedContainer>
        </div>
    );
};

export default NotFound;
