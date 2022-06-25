import { ReactElement, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Layout from "./components/UI/Layout";
import Dashboard from "./pages/Dashboard";
import Queue from "./pages/Queue";
import Automation from "./pages/Automation";
import SavedTweets from "./pages/SavedTweets";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import usePersistLogin from "./hooks/use-persist-login";

const ProtectedRoute: React.FC<{ children: ReactElement }> = props => {
    const userData = useSelector((state: RootState) => state.user);
    const location = useLocation();

    if (!userData.loggedIn) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return props.children;
};

const App = () => {
    // check if user was previously logged in upon full page reload:
    const checkPersistLogin = usePersistLogin();

    useEffect(() => {
        console.log("first bing");
        checkPersistLogin();
    }, [checkPersistLogin]);

    // only if user is Authenticated to Twitter are they allowed to see these pages:
    const securedPage = (component: ReactElement) => {
        return (
            <ProtectedRoute>
                <Layout>{component}</Layout>
            </ProtectedRoute>
        );
    };

    return (
        <Routes>
            <Route path="/" element={securedPage(<Dashboard />)} />
            <Route path="/login" element={<Login />} />
            <Route path="/queue" element={securedPage(<Queue />)} />
            <Route path="/automation" element={securedPage(<Automation />)} />
            <Route path="/savedtweets" element={securedPage(<SavedTweets />)} />
            <Route path="/settings" element={securedPage(<Settings />)} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
