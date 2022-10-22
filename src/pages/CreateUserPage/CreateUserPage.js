import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../assets/styles/GlobalStyle";
import Logo from "../../components/Logo/Logo";
import CreateUserForm from "./CreateUserForm";

export default function CreateUserPage({ }) {
    return(
        <Container login={true} >
        <Logo />
        <CreateUserForm />
        <Link to="/" >
            <Text>Já tem uma conta? Faça login!</Text>
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