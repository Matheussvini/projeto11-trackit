import styled from "styled-components";

export default function FormButton({ children }) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  width: 303px;
  height: 45px;
  border-radius: 5px;
  border: none;
  background-color: #52b6ff;
  color: #ffffff;
  text-align: center;
  font-size: 21px;
  line-height: 26px;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 60%;
  }
`;
