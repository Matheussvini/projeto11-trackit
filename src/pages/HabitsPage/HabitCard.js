import styled from "styled-components";
import { DAYS } from "../../constants/days";
import { DayButton, DaysBox } from "./styles";

export default function HabitCard({ habit }) {
  const { id, name, days } = habit;

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
    </HabitBox>
  );
}

const HabitBox = styled.div`
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
