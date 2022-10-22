import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
    font-family: 'Lexend Deca', sans-serif;
	font-weight: 400;
	background-color: #FFFFFF;
}
input{
		background: #FFFFFF;
		width: 303px;
        height: 45px;
        border-radius: 5px;
        border: solid 1px #D4D4D4;
        margin-bottom: 6px;
        display: flex;
		align-items: center;
        box-sizing: border-box;
		font-family: 'Lexend Deca', sans-serif;
		font-weight: 400;
		font-size: 20px;
		padding: 0 11px;
        ::placeholder{
        color: #DBDBDB;
        }
    }
`;

export const Container = styled.div`
  background-color: ${(props) => (props.login ? "#FFFFFF" : "#F2F2F2")};
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default GlobalStyle;
