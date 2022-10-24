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
import Loading from "../../components/Loading/Loading";

export default function TodayPage({error, setError}) {
  const { user, todayProgress, setTodayProgress, todayUserHabits,
    setTodayUserHabits,change, setChange,habitsDone } = useContext(UserContext);
  const navigate = useNavigate();
  const [localHabits, setLocalHabits] = useState(null)

  let customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  require("dayjs/locale/pt-br");
  let today = dayjs().locale("pt-br").format("dddd, DD/MM").replace("-feira" , "");
  today = today.charAt(0).toUpperCase() + today.slice(1);
  
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
      .then((res) => {
        setTodayUserHabits(res.data)
        setLocalHabits(res.datay)
      })
      .catch((err) => {
        setError(err.message);
        alert(err.response.data);
      });
  }, [change]);
  if (error !== null) {
    return <div>Erro {error}! Tente de novo</div>;
  }

  if (error === null && localHabits === null) {
    return (
      <Loading />
    );
  }

  return (
    <Container>
      <TopBar />
      <Title>{today}</Title>
      <Subtitle done={!habitsDone.length}>
        {!habitsDone.length
          ? "Nenhum hábito concluído ainda"
          : `${todayProgress}% dos hábitos concluídos`}
      </Subtitle>
      {todayUserHabits.map((h) => (
        <HabitCard habit={h} key={h.id} />
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
