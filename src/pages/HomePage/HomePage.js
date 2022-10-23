import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../assets/styles/GlobalStyle";
import UserContext from "../../components/Context/context";
import Logo from "../../components/Logo/Logo";
import LoginForm from "./LoginForm";

export default function HomePage({}) {
    
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.length !== 0) {
      navigate("/habitos");
    }
  }, []);

  return (
    <Container login={true}>
      <Logo />
      <LoginForm />
      <Link to="/cadastro">
        <Text>Não tem uma conta? Cadastre-se!</Text>
      </Link>
    </Container>
  );
}

const Text = styled.p`
  margin-top: 25px;
  font-size: 14px;
  line-height: 17.47px;
  color: #52b6ff;
  text-decoration: underline;
`;
