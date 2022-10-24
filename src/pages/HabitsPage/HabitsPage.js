import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BoxText, Container, Title } from "../../assets/styles/GlobalStyle";
import UserContext from "../../components/Context/context";
import TopBar from "../../components/TopBar/TopBar";
import NavBar from "../../components/NavBar/NavBar";
import HabitForm from "./HabitForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import HabitCard from "./HabitCard";
import { useNavigate } from "react-router-dom";

export default function HabitsPage({}) {
  const { user } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [userHabits, setUserHabits] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    if(user.length === 0){
        return navigate("/")
      }

    const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

    axios.get(`${BASE_URL}/habits`, config)
        .then(res => setUserHabits(res.data))
        .catch(err => {
            setError(err.message)
            alert(err.response.data)})
}, [])
if (error !== null) {
    return <div>Erro {error}! Tente de novo</div>;
  }

  if (error === null && !userHabits) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <TopBar />
      <Title>
        Meus hábitos
        <AddHabitButton onClick={() => setShowForm(!showForm)} >+</AddHabitButton>
      </Title>
      <HabitForm showForm={showForm} setShowForm={setShowForm} userHabits={userHabits} setUserHabits={setUserHabits} />
      {userHabits.map((h, i) => (
        <HabitCard habit={h} userHabits={userHabits} setUserHabits={setUserHabits} key={h.id} />
      ))}
      <BoxText hasHabit={userHabits.length > 0} >
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
      </BoxText>
      <NavBar />
    </Container>
  );
}

const AddHabitButton = styled.button`
  width: 40px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;
  font-size: 26.976px;
  line-height: 34px;
  text-align: center;
  color: #fff;
`;
