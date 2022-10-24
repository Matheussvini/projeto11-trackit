import styled from "styled-components";

export const DaysBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const DayButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "#FFF")};
  color: ${(props) => (props.selected ? "#FFF" : "#DBDBDB")};
  border: solid 1px ${(props) => (props.selected ? "#CFCFCF" : "#D4D4D4")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 25px;
  margin-right: 4px;
  :disabled {
    background-color: ${(props) => (props.selected ? "#CFCFCF" : "#FFF")};
    color: ${(props) => (props.selected ? "#FFF" : "#DBDBDB")};
    border: solid 1px ${(props) => (props.selected ? "#CFCFCF" : "#D4D4D4")};
  }
`;
