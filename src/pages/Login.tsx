import React from "react";
import CurvedContainer from "../components/UI/CurvedContainer";
import classes from "./Login.module.css";

const Login = () => {
    return (
        <div className={classes["login__container"]}>
            <CurvedContainer className={classes["login__main-box"]}>
                <form className={classes["login__form"]}>
                    <p style={{ color: "white" }}>{process.env.REACT_APP_TWITTER_API_KEY}</p>
                    <input placeholder="username" className={classes["login__item"]}></input>
                    <input placeholder="password" className={classes["login__item"]} type="password"></input>
                    <button className={classes["login__button"]}>Login</button>
                </form>
            </CurvedContainer>
        </div>
    );
};

export default Login;
