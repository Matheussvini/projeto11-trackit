import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { DAYS } from "../../constants/days";
import { BASE_URL } from "../../constants/urls";
import UserContext from "../../components/Context/context";
import { DayButton, DaysBox } from "./styles";

export default function HabitForm({
  showForm,
  setShowForm,
  userHabits,
  setUserHabits,
}) {
  const [form, setForm] = useState({ name: "", days: [] });
  const { user } = useContext(UserContext);

  function handleForm(e) {
    const { value } = e.target;
    setForm({ ...form, name: value });
  }

  function avaliaOnclick(i) {
    if (form.days.includes(i)) {
      setForm({ ...form, days: form.days.filter((item) => item !== i) });
    } else {
      setForm({ ...form, days: [...form.days, i] });
    }
  }

  function createHabit(e) {
    e.preventDefault();

    if (form.days.length === 0) {
      return alert("Por favor, selecione pelo menos um dia para o hábito!");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .post(`${BASE_URL}/habits`, form, config)
      .then((res) => setUserHabits([...userHabits, res.data]))
      .catch((err) =>
        err.response.data.details
          ? alert(err.response.data.details[0])
          : alert(err.response.data.message)
      );

    setForm({ name: "", days: [] });
    setShowForm(false);
  }

  return (
    <Form showForm={showForm} onSubmit={createHabit}>
      <input
        name="habit"
        type="text"
        placeholder="nome do hábito"
        onChange={handleForm}
        required
        value={form.name}
      />
      <DaysBox>
        {DAYS.map((d, i) => (
          <DayButton
            key={i}
            onClick={() => avaliaOnclick(i)}
            selected={form.days.includes(i)}
            type="button"
          >
            {d[0]}
          </DayButton>
        ))}
      </DaysBox>

      <ButtonsBox>
        <CancelButton onClick={() => setShowForm(false)} type="button">
          Cancelar
        </CancelButton>
        <CreateHabitButton type="submit">Salvar</CreateHabitButton>
      </ButtonsBox>
    </Form>
  );
}

const Form = styled.form`
  display: ${(props) => !props.showForm && "none"};
  background-color: #fff;
  width: 340px;
  min-height: 180px;
  border-radius: 5px;
  padding: 18.5px;
  box-sizing: border-box;
  max-width: 90%;
  margin-bottom: 29px;
  input,
  div {
    max-width: 100%;
  }
`;
const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 29px;
  flex-wrap: wrap;
`;
const CancelButton = styled.button`
  border: none;
  background-color: #fff;
  width: 84px;
  height: 35px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #52b6ff;
  border-radius: 4.64px;
  margin-left: 20px;
  &:hover {
    background-color: #52b6ff;
    color: #fff;
  }
`;
const CreateHabitButton = styled(CancelButton)`
  background-color: #52b6ff;
  color: #fff;
`;
