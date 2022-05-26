import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import { auth, TwitterAuthProvider, signInWithPopup } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as TwitterIcon } from "../assets/icons/iconmonstr-twitter-1.svg";
import CurvedContainer from "../components/UI/CurvedContainer";
import classes from "./Login.module.css";

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
                        twitterHandle: "fixxxxx thissssss",
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
    };

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
                    {/* <input placeholder="username" className={classes["login__item"]}></input>
                    <input placeholder="password" className={classes["login__item"]} type="password"></input>
                    <button className={classes["login__button"]}>Login</button> */}
                </form>
            </CurvedContainer>
        </div>
    );
};

export default Login;
