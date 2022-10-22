import styled from "styled-components"
import logo from "../../assets/images/logo.png"

export default function Logo() {
    return <Img src={logo} alt="Logo TrackiIt" />
}

const Img = styled.img`
    width: 180px;
    margin: 68px auto 33px auto ;    
`