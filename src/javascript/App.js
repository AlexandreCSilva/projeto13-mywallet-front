import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from '../stylesheet/reset'
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";

function App() {
	return (
        <>
        <Reset />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/homepage" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
	);
}

export default App;
