import styled from "styled-components";
import { DAYS } from "../../constants/days";
import { DayButton, DaysBox } from "./styles";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import UserContext from "../../components/Context/context";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default function HabitCard({ habit, userHabits, setUserHabits }) {
  const { id, name, days } = habit;
  const { user, change, setChange } = useContext(UserContext);

  function deleteHabit(id) {
    const confirmation = window.confirm(
      `Deseja realmente excluir o hábito ${name}?`
    );
    if (confirmation) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      axios
        .delete(`${BASE_URL}/habits/${id}`, config)
        .then(() => {
          setChange([!change])
          setUserHabits(userHabits.filter((item) => item.id !== id));
        })
        .catch((err) => {
          alert("Erro: ", err.response.data);
        });
    }
  }

  return (
    <HabitBox>
      <h3>{name}</h3>
      <DaysBox>
        {DAYS.map((d, i) => (
          <DayButton key={i} selected={days.includes(i)}>
            {d[0]}
          </DayButton>
        ))}
      </DaysBox>
      <DeleteHabit onClick={() => deleteHabit(id)}>
        <BsTrash />
      </DeleteHabit>
    </HabitBox>
  );
}

const HabitBox = styled.div`
  position: relative;
  background-color: #fff;
  width: 340px;
  min-height: 91px;
  border-radius: 5px;
  padding: 18.5px;
  box-sizing: border-box;
  max-width: 90%;
  margin-bottom: 10px;
  h3 {
    text-align: start;
    margin-bottom: 8px;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  div {
    max-width: 100%;
    button {
      cursor: inherit;
      :hover {
        opacity: initial;
      }
    }
  }
`;
const DeleteHabit = styled.div`
  font-size: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #666666;
  cursor: pointer;
  :hover {
    opacity: 60%;
  }
`;
