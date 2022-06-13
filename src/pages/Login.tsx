import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import { useLocation, useNavigate } from "react-router-dom";
import CurvedContainer from "../components/UI/CurvedContainer";
import TwitterIcon from "../assets/icons/iconmonstr-twitter-1.svg";
import classes from "./Login.module.css";

import { auth, TwitterAuthProvider, signInWithPopup } from "../firebase";
const provider = new TwitterAuthProvider();

type LocationState = {
    from: {
        pathname: string;
    };
};

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // any time the /login page is loaded, always run logout reducer function to log user out first:
    useEffect(() => {
        userActions.logout();
    }, []);

    const twitterSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result: any) => {
                console.log("result: ", result);
                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                const credential = TwitterAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const secret = credential?.secret;

                // The signed-in user info.
                console.log(
                    "FIREBASE RESPONSE: ",
                    JSON.stringify({
                        credential,
                        token,
                        secret,
                        user: result.user,
                    })
                );

                dispatch(
                    userActions.login({
                        id: result.user.uid,
                        name: result.user.displayName ?? undefined,
                        email: result.user.email ?? undefined,
                        twitterHandle: "fixxxxx_thissssss",
                        imageUrl: result.user.photoURL ?? undefined,
                        loggedIn: true,
                    })
                );
                // if successfully logged in, navigate to the last page user was on OR main dashboard page:
                const { from } = location.state as LocationState;
                const origin = from.pathname || "/";
                navigate(origin);
            })
            .catch((error: any) => {
                // handle firebase login errors
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("FIREBASE ERROR RESPONSE: ", errorCode, errorMessage);

                alert("An error occurred while logging into Twitter. Please try again");
            });

        /* ------------------------------------------------------------------------------------------------------------------------------------------- */
    };

    // const twitterLoginOAuth1 = () => {
    //     const url = "https://api.twitter.com/oauth/request_token";
    //     const callback = "http://localtest.me";

    //     // fetch(url, { method: "get" })
    //     //     .then(response => {
    //     //         response.json();
    //     //     })
    //     //     .then(data => {
    //     //         console.log("3 leg resp:", data);
    //     //     })
    //     //     .catch((error: any) => {
    //     //         console.log(error);
    //     //     });

    //     const myHeaders = undefined;
    //     const oauth_token = "3WugvQAAAAABczGHAAABgRhzs10";
    //     const oauth_token_secret = "yofjbqxQFrxjBf92PYBDbzay9x9FFVL5";

    //     const requestOptions: RequestInit = {
    //         method: "GET",
    //         headers: myHeaders,
    //         redirect: "follow",
    //     };

    //     fetch(
    //         `https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}&oauth_token_secret=${oauth_token_secret}&oauth_callback_confirmed=true`,
    //         requestOptions
    //     )
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log("error", error));
    // };

    const onFormSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <div className={classes["login__container"]}>
            <CurvedContainer className={classes["login__main-box"]}>
                <form className={classes["login__form"]} onSubmit={onFormSubmitHandler}>
                    <h1>LOG IN</h1>
                    <button onClick={twitterSignIn} className={classes["login__twitter-button"]}>
                        <TwitterIcon />
                        <p>Sign in with Twitter</p>
                    </button>
                    {/* <button onClick={twitterLoginOAuth1} className={classes["login__twitter-button"]}>
                        <TwitterIcon />
                        <p>Testing OAuth 1.0</p>
                    </button> */}
                    {/* <input placeholder="username" className={classes["login__item"]}></input>
                    <input placeholder="password" className={classes["login__item"]} type="password"></input>
                    <button className={classes["login__button"]}>Login</button> */}
                </form>
            </CurvedContainer>
        </div>
    );
};

export default Login;
