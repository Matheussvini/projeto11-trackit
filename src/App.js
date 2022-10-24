import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import HomePage from "./pages/HomePage/HomePage";
import TodayPage from "./pages/TodayPage/TodayPage";
import { useEffect, useState } from "react"
import UserContext from "./components/Context/context";
import axios from "axios";
import { BASE_URL } from "./constants/urls";

function App() {

  const [user, setUser] = useState([]);
  const [todayUserHabits, setTodayUserHabits] = useState([]);
  const [todayProgress, setTodayProgress] = useState(0);
  const [habitsDone, setHabitsDone] = useState([]);
  const [change, setChange] = useState(false);
  const [error, setError] = useState(null);

  const localUserSerializado = localStorage.getItem("localUser");
  const localUser = JSON.parse(localUserSerializado);

  if(localUser !== null && user.length === 0){
    setUser(localUser)
  }

  useEffect(() => {
    if(user.length !== 0){
    let localHabitsDone = todayUserHabits.filter((item) => item.done === true);
  setHabitsDone(localHabitsDone);
  const userProgress = ((localHabitsDone.length / todayUserHabits.length) * 100).toFixed(0);
  setTodayProgress(userProgress);

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get(`${BASE_URL}/habits/today`, config)
      .then((res) => {
        setTodayUserHabits(res.data)
        let localHabitsDone = res.data.filter((item) => item.done === true);
        setHabitsDone(localHabitsDone);
        const userProgress = ((localHabitsDone.length / res.data.length) * 100).toFixed(0);
        setTodayProgress(userProgress);
      })
      .catch((err) => {
        setError(err.message);
        err.response.data.details
          ? alert(err.response.data.details[0])
          : alert(err.response.data.message)
      });
  }}, [change]);

  if (error !== null) {
    return <div>Erro {error}! Tente de novo</div>;
  }

  if (error === null && !todayUserHabits) {
    return <div>Carregando...</div>;
  }



  return (
    <UserContext.Provider value={{
      user, 
      setUser, 
      todayProgress, 
      setTodayProgress, 
      todayUserHabits,
      setTodayUserHabits,
      change, 
      setChange,
      habitsDone}}>

    <BrowserRouter>
    

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CreateUserPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayPage error={error} setError={setError} />} />
        <Route path="/historico" element={<HistoryPage />} />

      </Routes>

      <GlobalStyle />
    </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
