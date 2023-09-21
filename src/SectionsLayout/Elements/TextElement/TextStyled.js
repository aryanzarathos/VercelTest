import styled from "styled-components";


export const TextElement = styled.h1`
color: ${({item}) => item.desktop.color};
font-size: ${({item}) => item.desktop.fontSize};
font-weight: ${({item}) => item.desktop.fontWeight};
line-height: ${({item}) => item.desktop.lineHeight};
background: ${({item}) => item.desktop.backgroundColor};
text-align: ${({item}) => item.desktop.textAlign};
letter-spacing: "";
width:"";
position:"";
top:"";
right:"";
bottom:"";
left:"";
width:"";
`