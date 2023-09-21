import Link from "next/link";
import styled from "styled-components";




export const Anchor = styled(Link)`

letter-spacing: ${({ item }) => item?.desktop?.letterSpacing};
font-size: ${({ item }) => item?.desktop?.fontSize};
font-weight: ${({ item }) => item?.desktop?.fontWeight}; 
line-height: ${({ item }) => item?.desktop?.lineHeight}; 
text-align: ${({ item }) => item?.desktop?.textAlign}; 
text-transform: ${({ item }) => item?.desktop?.textTransform}; 
font-style: ${({ item }) => item?.desktop?.fontStyle}; 
font-family: ${({ item }) => item?.desktop?.fontFamily}; 
width:${({ item }) => item?.desktop?.width};
position:${({ item }) => item?.desktop?.position?.position};
top:${({ item }) => item?.desktop?.position?.top};
right:${({ item }) => item?.desktop?.position?.right};
bottom:${({ item }) => item?.desktop?.position?.bottom};
left:${({ item }) => item?.desktop?.position?.left};;
display: ${({ item }) => item?.desktop?.display};
align-items: ${({ item }) => item?.desktop?.alignItems};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
gap:${({ item }) => item?.desktop?.gap};
background:${({ item }) => item?.desktop?.background};
color:${({ item }) => item?.desktop?.color ? item?.desktop?.color : ''};
min-height:${({ item }) => item?.desktop?.minHeight ? item?.desktop?.minHeight : ''};
margin-top:${({ item }) => item?.desktop?.margin?.marginTop ? item?.desktop?.margin?.marginTop : ''};
margin-right:${({ item }) => item?.desktop?.margin?.marginRight ? item?.desktop?.margin?.marginRight : ''};
margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom ? item?.desktop?.margin?.marginBottom : ''};
margin-left:${({ item }) => item?.desktop?.margin?.marginLeft ? item?.desktop?.margin?.marginLeft : ''};
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop ? item?.desktop?.padding?.paddingTop : ''};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight ? item?.desktop?.padding?.paddingRight : ''};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom ? item?.desktop?.padding?.paddingBottom : ''};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft ? item?.desktop?.padding?.paddingLeft : ''};
text-decoration:${({ item }) => item?.desktop?.textDecoration ? item?.desktop?.textDecoration : ''};
box-shadow:${({ item }) => item?.desktop?.boxShadow ? item?.desktop?.boxShadow : ""};
border-radius:${({ item }) => item?.desktop?.borderRadius ? item?.desktop?.borderRadius : ""};
white-space : ${({ item }) => item?.desktop?.whiteSpace ? item?.desktop?.whiteSpace : ""};
-webkit-line-clamp: ${({ item }) => item?.desktop?.webkitLineClamp};
-webkit-box-orient: ${({ item }) => item?.desktop?.webkitBoxOrient};
line-clamp: ${({ item }) => item?.desktop?.lineClamp};
overflow: ${({ item }) => item?.desktop?.overflow};
&:hover{
color:${({ item }) => item?.desktop?.hover?.color ? item?.desktop?.hover?.color : ''};
background:${({ item }) => item?.desktop?.hover?.background ? item?.desktop?.hover?.background : ''};

}
@media screen and (max-width:767px) {
    font-size: ${({ item }) => item?.mobile?.fontSize};
    display: ${({ item }) => item?.mobile?.display};
}
@media screen and (max-width:1024px) {
    font-size: ${({ item }) => item?.tablet?.fontSize};
    display: ${({ item }) => item?.tablet?.display};
    margin-top:${({ item }) => item?.tablet?.margin?.marginTop ? item?.tablet?.margin?.marginTop : ''};
    margin-right:${({ item }) => item?.tablet?.margin?.marginRight ? item?.tablet?.margin?.marginRight : ''};
    margin-bottom:${({ item }) => item?.tablet?.margin?.marginBottom ? item?.tablet?.margin?.marginBottom : ''};
    margin-left:${({ item }) => item?.tablet?.margin?.marginLeft ? item?.tablet?.margin?.marginLeft : ''};
}
`;

export const Button = styled.button`

letter-spacing: ${({ item }) => item?.desktop?.letterSpacing};
font-size: ${({ item }) => item?.desktop?.fontSize};
font-weight: ${({ item }) => item?.desktop?.fontWeight}; 
line-height: ${({ item }) => item?.desktop?.lineHeight}; 
text-align: ${({ item }) => item?.desktop?.textAlign}; 
text-transform: ${({ item }) => item?.desktop?.textTransform}; 
font-style: ${({ item }) => item?.desktop?.fontStyle}; 
border: none;
outline: none;
background: transparent;
font-family: ${({ item }) => item?.desktop?.fontFamily}; 
width:${({ item }) => item?.desktop?.width};
position:${({ item }) => item?.desktop?.position?.position};
top:${({ item }) => item?.desktop?.position?.top};
right:${({ item }) => item?.desktop?.position?.right};
bottom:${({ item }) => item?.desktop?.position?.bottom};
left:${({ item }) => item?.desktop?.position?.left};;
display: ${({ item }) => item?.desktop?.display};
align-items: ${({ item }) => item?.desktop?.alignItems};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
gap:${({ item }) => item?.desktop?.gap};
background:${({ item }) => item?.desktop?.background};
color:${({ item }) => item?.desktop?.color ? item?.desktop?.color : ''};
min-height:${({ item }) => item?.desktop?.minHeight ? item?.desktop?.minHeight : ''};
margin-top:${({ item }) => item?.desktop?.margin?.marginTop ? item?.desktop?.margin?.marginTop : ''};
margin-right:${({ item }) => item?.desktop?.margin?.marginRight ? item?.desktop?.margin?.marginRight : ''};
margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom ? item?.desktop?.margin?.marginBottom : ''};
margin-left:${({ item }) => item?.desktop?.margin?.marginLeft ? item?.desktop?.margin?.marginLeft : ''};
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop ? item?.desktop?.padding?.paddingTop : ''};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight ? item?.desktop?.padding?.paddingRight : ''};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom ? item?.desktop?.padding?.paddingBottom : ''};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft ? item?.desktop?.padding?.paddingLeft : ''};
text-decoration:${({ item }) => item?.desktop?.textDecoration ? item?.desktop?.textDecoration : ''};
box-shadow:${({ item }) => item?.desktop?.boxShadow ? item?.desktop?.boxShadow : ""};
border-radius:${({ item }) => item?.desktop?.borderRadius ? item?.desktop?.borderRadius : ""};
white-space : ${({ item }) => item?.desktop?.whiteSpace ? item?.desktop?.whiteSpace : ""};
-webkit-line-clamp: ${({ item }) => item?.desktop?.webkitLineClamp};
-webkit-box-orient: ${({ item }) => item?.desktop?.webkitBoxOrient};
line-clamp: ${({ item }) => item?.desktop?.lineClamp};
overflow: ${({ item }) => item?.desktop?.overflow};
&:hover{
color:${({ item }) => item?.desktop?.hover?.color ? item?.desktop?.hover?.color : ''};
background:${({ item }) => item?.desktop?.hover?.background ? item?.desktop?.hover?.background : ''};

}
@media screen and (max-width:767px) {
    font-size: ${({ item }) => item?.mobile?.fontSize};
    display: ${({ item }) => item?.mobile?.display};
}
@media screen and (max-width:1024px) {
    font-size: ${({ item }) => item?.tablet?.fontSize};
    display: ${({ item }) => item?.tablet?.display};
    margin-top:${({ item }) => item?.tablet?.margin?.marginTop ? item?.tablet?.margin?.marginTop : ''};
    margin-right:${({ item }) => item?.tablet?.margin?.marginRight ? item?.tablet?.margin?.marginRight : ''};
    margin-bottom:${({ item }) => item?.tablet?.margin?.marginBottom ? item?.tablet?.margin?.marginBottom : ''};
    margin-left:${({ item }) => item?.tablet?.margin?.marginLeft ? item?.tablet?.margin?.marginLeft : ''};
}
`;