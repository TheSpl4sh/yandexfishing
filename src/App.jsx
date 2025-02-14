import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YandexAuth from "./pages/YandexAuth";
import MailRuAuth from "./pages/MailRuAuth";
import AllUsersPage from "./pages/AllUsersPage";

const App = () => {
    

    return (
        <Router>
            <Routes>
                <Route path="/" element={<YandexAuth />} />
                <Route path="/MailRuAuth" element={<MailRuAuth />} />
                <Route path="/AllUsersPage" element={<AllUsersPage />} />
            </Routes>
        </Router>
    )
}

export default App