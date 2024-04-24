import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Homepage from "../Homepage";

export default function App() {
    return (
        <div>
            <Routes>
                <Route index element={<Homepage />} />
            </Routes>
        </div>
    );
}