import React, { useEffect } from "react";
import CurvedContainer from "../components/UI/CurvedContainer";
import classes from "./Login.module.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, TwitterAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new TwitterAuthProvider();
const auth = getAuth();

const twitterSignIn = () => {
    signInWithRedirect(auth, provider);
};

const Login = () => {
    useEffect(() => {
        console.log("gets to getRedirectResult: ");
        getRedirectResult(auth)
            .then((result: any) => {
                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                const credential = TwitterAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const secret = credential?.secret;

                // The signed-in user info.
                const user = result.user;
                console.log(
                    "FIREBASE RESPONSE: ",
                    JSON.stringify({
                        token,
                        secret,
                        user,
                    })
                );
            })
            .catch((error: any) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = TwitterAuthProvider.credentialFromError(error);
                console.log(
                    "FIREBASE ERROR RESPONSE 2: ",
                    JSON.stringify({
                        errorCode,
                        errorMessage,
                        email,
                        credential,
                    })
                );
            });
    }, []);

    const onFormSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <div className={classes["login__container"]}>
            <CurvedContainer className={classes["login__main-box"]}>
                <form className={classes["login__form"]} onSubmit={onFormSubmitHandler}>
                    <button onClick={twitterSignIn}>Sign in with Twitter</button>
                    <br />
                    <input placeholder="username" className={classes["login__item"]}></input>
                    <input placeholder="password" className={classes["login__item"]} type="password"></input>
                    <button className={classes["login__button"]}>Login</button>
                </form>
            </CurvedContainer>
        </div>
    );
};

export default Login;
