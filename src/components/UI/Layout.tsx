import React, { ReactElement } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import classes from "./Layout.module.css";

import NavigationBar from "../NavigationBar/NavigationBar";
import Dashboard from "../../pages/Dashboard";
import Queue from "../../pages/Queue";
import Automation from "../../pages/Automation";
import SavedTweets from "../../pages/SavedTweets";
import Settings from "../../pages/Settings";
import NotFound from "../../pages/NotFound";
import Login from "../../pages/Login";

import { useDispatch, useSelector } from "react-redux";
// import { userActions } from "../../store/user-slice";
import { RootState } from "../../store";

// import { auth, onAuthStateChanged } from "../../firebase";

// const ProtectedRoute = ({ children }) => {
const ProtectedRoute: React.FC<{ children: ReactElement }> = props => {
    const userData = useSelector((state: RootState) => state.user);
    const location = useLocation();
    //TODO: change this to be actual bearer token, not loggedIn value:
    const token = userData.loggedIn;

    if (!token) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return props.children;
};

const Layout = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const protectComponent = (component: ReactElement) => {
        return <ProtectedRoute>{component}</ProtectedRoute>;
    };

    return (
        <main className={classes["layout__container"]}>
            <div className={classes["layout__horizontal-container"]}>
                <NavigationBar />

                <Routes>
                    <Route path="/" element={protectComponent(<Dashboard />)} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/queue" element={protectComponent(<Queue />)} />
                    <Route path="/automation" element={protectComponent(<Automation />)} />
                    <Route path="/savedtweets" element={protectComponent(<SavedTweets />)} />
                    <Route path="/settings" element={protectComponent(<Settings />)} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </main>
    );
};

export default Layout;
