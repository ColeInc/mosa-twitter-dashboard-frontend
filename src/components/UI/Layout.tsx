import { Routes, Route } from "react-router-dom";
import classes from "./Layout.module.css";

import NavigationBar from "../NavigationBar/NavigationBar";
import Dashboard from "../../pages/Dashboard";
import Queue from "../../pages/Queue";
import Automation from "../../pages/Automation";
import SavedTweets from "../../pages/SavedTweets";
import Settings from "../../pages/Settings";
import NotFound from "../../pages/NotFound";

const Layout = () => {
    return (
        <main className={classes["layout__container"]}>
            <div className={classes["layout__horizontal-container"]}>
                <NavigationBar />

                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/queue" element={<Queue />} />
                    <Route path="/automation" element={<Automation />} />
                    <Route path="/savedtweets" element={<SavedTweets />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </main>
    );
};

export default Layout;
