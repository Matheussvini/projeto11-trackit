import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../Context/context";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Oval } from "react-loader-spinner";

export default function NavBar() {
  const { todayProgress } = useContext(UserContext);
  return (
    <Box>
      <Link to="/habitos">
        <PageButton>Hábitos</PageButton>
      </Link>
      <Link to="/hoje">
        <TodayButton>
          {todayProgress === null || todayProgress === "NaN" ? (
            <Oval
              color="#FFF"
              text="Hoje"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#52b6ff"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          ) : (
            <CircularProgressbar
              value={todayProgress}
              text="Hoje"
              styles={buildStyles({
                textColor: "#FFF",
                textSize: "18px",
                lineHeigth: "22px",
                trailColor: "#52b6ff",
                pathColor: "#FFF",
              })}
            />
          )}
        </TodayButton>
      </Link>
      <Link to="/historico">
        <PageButton>Histórico</PageButton>
      </Link>
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
const PageButton = styled.button`
  border: none;
  background-color: #fff;
  width: 84px;
  height: 35px;
  font-size: 18px;
  line-height: 22px;
  color: #52b6ff;
  border-radius: 4.64px;
  &:hover {
    background-color: #52b6ff;
    color: #fff;
  }
`;
