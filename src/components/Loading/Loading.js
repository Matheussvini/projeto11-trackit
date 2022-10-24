import { Container, LoadingText } from "../../assets/styles/GlobalStyle";
import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";
import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
    return (
        <Container>
        <TopBar />
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#126ba5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        <LoadingText>
          Loading
        </LoadingText>
        <NavBar />
      </Container>
    )
}