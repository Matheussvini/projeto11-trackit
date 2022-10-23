import styled from "styled-components";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useContext } from "react";
import UserContext from "../../components/Context/context";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default function HabitCard({ habit, change, setChange }) {
  const { name, id, done, currentSequence, highestSequence } = habit;
  const { user } = useContext(UserContext);

  function checkButton(e) {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    if (done) {
      axios
        .post(`${BASE_URL}/habits/${id}/uncheck`,"", config)
        .then(() => setChange([!change]))
        .catch((err) =>
          err.response.data.details
            ? alert(err.response.data.details[0])
            : alert(err.response.data.message)
        );
    } else {
      axios
        .post(`${BASE_URL}/habits/${id}/check`,"", config)
        .then(() => setChange([!change]))
        .catch((err) =>
          err.response.data.details
            ? alert(err.response.data.details[0])
            : alert(err.response.data.message)
        );
    }
  }

  return (
    <HabitBox>
      <TextBox>
        <h3>{name}</h3>
        <span>Sequência atual: {currentSequence} dias</span>
        <br />
        <span>Seu recorde: {highestSequence} dias</span>
      </TextBox>
      <CheckButton done={done} onClick={checkButton}>
        <BsFillCheckSquareFill />
      </CheckButton>
    </HabitBox>
  );
}

const HabitBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  min-width: 340px;
  min-height: 94px;
  border-radius: 5px;
  padding: 18.5px;
  box-sizing: border-box;
  max-width: 90%;
  margin-bottom: 10px;
`;
const TextBox = styled.div`
  max-width: calc(100% - 69px);
  text-align: start;
  color: #666666;
  h3 {
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 25px;
  }
  span {
    font-size: 13px;
    line-height: 16px;
  }
`;
const CheckButton = styled.div`
  width: 69px;
  height: 69px;
  font-size: 69px;
  text-align: center;
  color: ${(props) => (props.done ? "#8FC549" : "#ebebeb")};
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    opacity: 60%;
    color: #8fc549;
  }
`;
