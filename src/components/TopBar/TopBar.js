import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../Context/context";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


export default function TopBar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function logout(){
    const confirmation = window.confirm(
      "Deseja realmente sair?"
    );
    if (confirmation) {
      localStorage.clear();
      window.location.reload();
    }
  }

  return (
    <Box>
      TrackIt
      <div>
      <img src={user.image} alt="Foto do usuário" />
      <LogoutIcon>
      <HiOutlineLogout onClick={logout} />
      </LogoutIcon>
      </div>      
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
    margin-right: 10px;
  }
  div{
    display: flex;
    align-items: center;
  }
`;
const LogoutIcon = styled.div`
cursor: pointer;
font-size: 35px;
      :hover{
        opacity: 60%;
      }
`
