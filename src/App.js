import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </main>
    );
}

// cole was here - 23/03/2022

export default App;
