import styled from "styled-components";
import { BoxText, Container, Title } from "../../assets/styles/GlobalStyle";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";

export default function HistoryPage({ }) {
    return(
        <Container>
        <TopBar />
        <Title>
            Histórico
        </Title>
        <BoxText>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
        </BoxText>


        <NavBar />
        </Container>
    )
}