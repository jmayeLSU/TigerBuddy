import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login/login";
import Deadlines from "./pages/deadlines/deadlines";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/deadlines" element={<Deadlines />}/>
            </Routes>
        </Router>
    );
}

export default App;