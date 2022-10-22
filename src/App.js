import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import HomePage from "./pages/HomePage/HomePage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CreateUserPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/historico" element={<HistoryPage />} />

      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
