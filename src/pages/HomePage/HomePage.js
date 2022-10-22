import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../assets/styles/GlobalStyle";
import Logo from "../../components/Logo/Logo";
import LoginForm from "./LoginForm";

export default function HomePage({ }) {
    return(
        <Container login={true} >
        <Logo />
        <LoginForm />
        <Link to="/cadastro" >
            <Text>Não tem uma conta? Cadastre-se!</Text>
        </Link>
        </Container>
    )
}

const Text = styled.p`
    margin-top: 25px;
    font-size: 14px;
    line-height: 17.47px;
    color: #52B6FF;
    text-decoration: underline;
`