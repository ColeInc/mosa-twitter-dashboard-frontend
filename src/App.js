import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Queue from "./pages/Queue";
import Automation from "./pages/Automation";
import SavedTweets from "./pages/SavedTweets";
import Settings from "./pages/Settings";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/queue" element={<Queue />} />
                <Route path="/automation" element={<Automation />} />
                <Route path="/savedtweets" element={<SavedTweets />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </main>
    );
}

// cole was here - 23/03/2022

export default App;
