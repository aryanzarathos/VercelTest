const { styled } = require("styled-components");


export const HyperLink = styled.a`
letter-spacing: ${({ item }) => item?.desktop?.letterSpacing};
font-size: ${({ item }) => item?.desktop?.fontSize ? item?.desktop?.fontSize : "var(--global-typography-fontSizeAnchor)" };
font-weight: ${({ item }) => item?.desktop?.fontWeight ? item?.desktop?.fontWeight : "var(--global-typography-fontWightLight)"} ; 
line-height: ${({ item }) => item?.desktop?.lineHeight ? item?.desktop?.lineHeight : "var(--global-typography-lineHeightAnchor)" }; 
text-align: ${({ item }) => item?.desktop?.textAlign ? item?.desktop?.textAlign : "" }; 
text-transform: ${({ item }) => item?.desktop?.textTransform}; 
font-style: ${({ item }) => item?.desktop?.fontStyle ? item?.desktop?.fontStyle : "var(--global-typography-fontStyleAnchor)"}; 
font-family: ${({ item }) => item?.desktop?.fontFamily ? item?.desktop?.fontFamily : "var(--global-typography-fontFamilyAnchor)" }; 
width:"";
position:"";
top:"";
right:"";
bottom:"";
left:"";
width:"";
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

`