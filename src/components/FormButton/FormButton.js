import styled from "styled-components";

export default function FormButton({ children, disabled }) {
  return <Button disabled={disabled}>{children}</Button>;
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
`;
