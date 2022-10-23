import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Context/context";

export default function TopBar() {
  const { user } = useContext(UserContext);
  return (
    <Box>
      TrackIt
      <img src={user.image} alt="Foto do usuário" />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Playball", cursive;
  font-size: 39px;
  line-height: 48.73px;
  color: #ffffff;
  padding: 0 18px;
  box-sizing: border-box;
  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    font-size: 18px;
    line-height: 14px;
  }
`;
