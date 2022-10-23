import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../Context/context";

export default function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <Box>
      Hábitos
      <Link to="/hoje" >
      <TodayButton>Hoje</TodayButton>
      </Link>
      Histórico
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #52b6ff;
  box-sizing: border-box;
  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;
const TodayButton = styled.button`
  width: 91px;
  height: 91px;
  border-radius: 100%;
  border: none;
  background-color: #52b6ff;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
`;
