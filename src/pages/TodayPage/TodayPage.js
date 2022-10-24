import dayjs from "dayjs";
import styled from "styled-components";
import { Container, Title } from "../../assets/styles/GlobalStyle";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import HabitCard from "./HabitCard";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../components/Context/context";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";

export default function TodayPage({}) {
  const { user } = useContext(UserContext);
  const [todayUserHabits, setTodayUserHabits] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [change, setChange] = useState(false);

  let customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  require("dayjs/locale/pt-br");
  let today = dayjs().locale("pt-br").format("dddd, DD/MM");
  today = today.charAt(0).toUpperCase() + today.slice(1);

  let habitsDone = todayUserHabits.filter((item) => item.done === true);
  const userProgress = ((habitsDone.length / todayUserHabits.length) * 100).toFixed(0);

  useEffect(() => {
    if (user.length === 0) {
      return navigate("/");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get(`${BASE_URL}/habits/today`, config)
      .then((res) => setTodayUserHabits(res.data))
      .catch((err) => {
        setError(err.message);
        console.log(err.response.data);
      });
  }, [change]);
  if (error !== null) {
    return <div>Erro {error}! Tente de novo</div>;
  }

  if (error === null && !todayUserHabits) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <TopBar />
      <Title>{today}</Title>
      <Subtitle done={!habitsDone.length}>
        {!habitsDone.length
          ? "Nenhum hábito concluído ainda"
          : `${userProgress}% dos hábitos concluídos`}
      </Subtitle>
      {todayUserHabits.map((h) => (
        <HabitCard habit={h} key={h.id} change={change} setChange={setChange} />
      ))}

      <NavBar />
    </Container>
  );
}

const Subtitle = styled.h2`
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => (props.done ? "#BABABA" : "#8FC549")};
  margin-top: -22px;
  margin-bottom: 28px;
`;
