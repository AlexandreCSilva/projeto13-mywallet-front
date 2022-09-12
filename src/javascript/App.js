import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from '../stylesheet/reset'
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";
import Entries from "./Entries";
import DrawOuts from "./DrawOuts";
import PrivatePage from "./PrivateRoutes";
import EditedEntries from "./EditEntries";
import EditedDrawOuts from './EditDrawOuts';

function App() {
	return (
        <>
        <Reset />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/homepage" element={<PrivatePage><HomePage /></PrivatePage>} />
                    <Route path="/entries" element={<PrivatePage><Entries /></PrivatePage>} />
                    <Route path="/editAdd" element={<PrivatePage><EditedEntries /></PrivatePage>} />
                    <Route path="/editDraw" element={<PrivatePage><EditedDrawOuts /></PrivatePage>} />
                    <Route path="/drawouts" element={<PrivatePage><DrawOuts /></PrivatePage>} />
                </Routes>
            </BrowserRouter>
        </>
	);
}

export default App;
