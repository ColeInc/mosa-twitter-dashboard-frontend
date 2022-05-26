import { useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/user-slice";
import { RootState } from "./store";
import Layout from "./components/UI/Layout";
import Login from "./pages/Login";
import { useLocation, useNavigate } from "react-router-dom";

type LocationState = {
    from: {
        pathname: string;
    };
};

const App = () => {
    // const userData = useSelector((state: RootState) => state.user);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const location = useLocation();

    // Global check for whether user is logged into firebase:
    // useEffect(() => {
    //     onAuthStateChanged(auth, userAuth => {
    //         if (userAuth) {
    //             // user is logged in, send the user's details to redux, store the current user in the state
    //             dispatch(
    //                 userActions.login({
    //                     id: userAuth.uid,
    //                     name: userAuth.displayName ?? undefined,
    //                     email: userAuth.email ?? undefined,
    //                     twitterHandle: "fixxxxx thissssss",
    //                     imageUrl: userAuth.photoURL ?? undefined,
    //                     loggedIn: true,
    //                 })
    //             );
    //             // if successfully logged in, navigate to the last page user was on OR main dashboard page:
    //             const { from } = location.state as LocationState;
    //             const origin = from.pathname || "/";
    //             navigate(origin);
    //         } else {
    //             dispatch(userActions.logout());
    //         }
    //     });
    // }, [dispatch, navigate, location.state]);

    // return userData.loggedIn ? <Layout /> : <Login />;
    return <Layout />;
};

export default App;
