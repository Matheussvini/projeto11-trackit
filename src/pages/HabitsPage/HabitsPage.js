import { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../assets/styles/GlobalStyle";
import UserContext from "../../components/Context/context";
import TopBar from "../../components/TopBar/TopBar";
import NavBar from "../../components/NavBar/NavBar";

export default function HabitsPage({ }) {
    const {user} = useContext(UserContext);

    console.log("user", user)

    return(
        <Container>
        Bem vindo a HabitsPage
        <TopBar />
        </Container>
    )
}