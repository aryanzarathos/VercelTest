import styled from "styled-components";

export const ButtonElement = styled.button`
background: ${({ item }) => item?.desktop?.backgroundColor ? item?.desktop?.backgroundColor : "trasparent"};
padding-top:  ${({ item }) => item?.desktop?.padding?.paddingTop ? item?.desktop?.padding?.paddingTop : ""};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom ? item?.desktop?.padding?.paddingBottom : ""};
padding-left:  ${({ item }) => item?.desktop?.padding?.paddingLeft ? item?.desktop?.padding?.paddingLeft : ""};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight ? item?.desktop?.padding?.paddingRight : ""};
cursor: ${({ item }) => item?.desktop?.cursor ? item?.desktop?.cursor : "pointer"} ;
display:  ${({ item }) => item?.desktop?.display ? item?.desktop?.display : "inline-block"};
justify-content:${({ item }) => item?.desktop?.justifyContent ? item?.desktop?.justifyContent : ""};
gap:${({ item }) => item?.desktop?.gap};
font-size: ${({ item }) => item?.desktop?.fontSize ? item?.desktop?.fontSize : "16px"};
border-width: ${({ item }) => item?.desktop?.borderWidth ? item?.desktop?.borderWidth : ""};
border-style: ${({ item }) => item?.desktop?.borderStyle ? item?.desktop?.borderStyle : "none"} ;
border-color: ${({ item }) => item?.desktop?.borderColor ? item?.desktop?.borderColor : ""} ;
text-align: ${({ item }) => item?.desktop?.TextAlign ? item?.desktop?.TextAlign : ""} ;
border-radius: ${({ item }) => item?.desktop?.borderRadius ? item?.desktop?.borderRadius : ""};
color: ${({ item }) => item?.desktop?.color ? item?.desktop?.color : ""};
text-transform:${({ item }) => item?.desktop?.textTransform ? item?.desktop?.textTransform : ""} ;
transition:${({ item }) => item?.desktop?.transition ? item?.desktop?.transition : ""} ;
letter-spacing: ${({ item }) => item?.desktop?.transition ? item?.desktop?.letterSpacing : ""} ;
width: ${({ item }) => item?.desktop?.width ? item?.desktop?.width : ""} ;
max-width: ${({ item }) => item?.desktop?.maxWidth ? item?.desktop?.maxWidth : ""} ;
min-width: ${({ item }) => item?.desktop?.minWidth ? item?.desktop?.minWidth : ""} ;
height:  ${({ item }) => item?.desktop?.height ? item?.desktop?.height : ""};
appearance: ${({ item }) => item?.desktop?.appearance ? item?.desktop?.appearance : ""} ;
align-items: ${({ item }) => item?.desktop?.alignItems ? item?.desktop?.alignItems : ""} ;
justify-content: ${({ item }) => item?.desktop?.justifyContent ? item?.desktop?.justifyContent : ""} ;
gap: ${({ item }) => item?.desktop?.justifyContent ? item?.desktop?.gap : ""} ;
line-height: ${({ item }) => item?.desktop?.lineHeight ? item?.desktop?.lineHeight : ""} ;
font-family: ${({ item }) => item?.desktop?.fontFamily ? item?.desktop?.fontFamily : ""} ;
font-weight: ${({ item }) => item?.desktop?.fontWeight ? item?.desktop?.fontWeight : ""} ;
font-style: ${({ item }) => item?.desktop?.fontStyle ? item?.desktop?.fontStyle : ""} ;
white-space: ${({ item }) => item?.desktop?.whiteSpace ? item?.desktop?.whiteSpace : ""} ;
white-space: ${({ item }) => item?.desktop?.whiteSpace ? item?.desktop?.whiteSpace : ""} ;
position:${({ item }) => item?.desktop?.position ? item?.desktop?.position : ""};
top:${({ item }) => item?.desktop?.top ? item?.desktop?.top : ""};
left:${({ item }) => item?.desktop?.left ? item?.desktop?.left : ""};
bottom:${({ item }) => item?.desktop?.bottom ? item?.desktop?.bottom : ""};
right:${({ item }) => item?.desktop?.right ? item?.desktop?.right : ""};
z-index: ${({ item }) => item?.desktop?.zIndex ? item?.desktop?.zIndex : ""} ;
box-shadow: ${({ item }) => item?.desktop?.boxShadow ? item?.desktop?.boxShadow : ""} ;
transform: ${({ item }) => item?.desktop?.transform ? item?.desktop?.transform : ""} ;
text-decoration: ${({ item }) => item?.desktop?.textDecoration ? item?.desktop?.textDecoration : ""};
&:hover{
    background: ${({ item }) => item?.desktop?.hover?.backgroundColor ? item?.desktop?.hover?.backgroundColor : ""};
    color: ${({ item }) => item?.desktop?.hover?.color ? item?.desktop?.hover?.color : ""};
    border-color: ${({ item }) => item?.desktop?.hover?.borderColor ? item?.desktop?.hover?.borderColor : ""};
    
}
&::before{
    position:${({ item }) => item?.desktop?.before?.position ? item?.desktop?.before?.position : ""};
    content:${({ item }) => item?.desktop?.before?.content ? item?.desktop?.before?.content : ""};
    width: ${({ item }) => item?.desktop?.before?.width ? item?.desktop?.before?.width : ""} ;
    height:  ${({ item }) => item?.desktop?.before?.height ? item?.desktop?.before?.height : ""};
    top:${({ item }) => item?.desktop?.before?.top ? item?.desktop?.before?.top : ""};
    left:${({ item }) => item?.desktop?.before?.left ? item?.desktop?.before?.left : ""};
    bottom:${({ item }) => item?.desktop?.before?.bottom ? item?.desktop?.before?.bottom : ""};
    right:${({ item }) => item?.desktop?.before?.right ? item?.desktop?.before?.right : ""};
    background: ${({ item }) => item?.desktop?.before?.backgroundColor ? item?.desktop?.before?.backgroundColor : ""};
}

&.active{
    background: ${({ item }) => item?.desktop?.active?.backgroundColor ? item?.desktop?.active?.backgroundColor : ""};
    color: ${({ item }) => item?.desktop?.active?.color ? item?.desktop?.active?.color : ""};  
}

@media(max-width: 1024px) {
    white-space: ${({ item }) => item?.tablet?.whiteSpace ? item?.tablet?.whiteSpace : ""} ;
    
}
@media screen and ( max-width : 767px) {
    background: ${({ item }) => item?.mobile?.backgroundColor ? item?.mobile?.backgroundColor : ""};
    padding-top:  ${({ item }) => item?.mobile?.padding?.paddingTop ? item?.mobile?.padding?.paddingTop : ""};
    padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom ? item?.mobile?.padding?.paddingBottom : ""};
    padding-left:  ${({ item }) => item?.mobile?.padding?.paddingLeft ? item?.mobile?.padding?.paddingLeft : ""};
    padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight ? item?.mobile?.padding?.paddingRight : ""};
    cursor: ${({ item }) => item?.mobile?.cursor ? item?.mobile?.cursor : "pointer"} ;
    display:  ${({ item }) => item?.mobile?.display ? item?.mobile?.display : ""};
    font-size: ${({ item }) => item?.mobile?.fontSize ? item?.mobile?.fontSize : ""};
    border-width: ${({ item }) => item?.mobile?.borderWidth ? item?.mobile?.borderWidth : ""};
    border-style: ${({ item }) => item?.mobile?.borderStyle ? item?.mobile?.borderStyle : ""} ;
    border-color: ${({ item }) => item?.mobile?.borderColor ? item?.mobile?.borderColor : ""} ;
    text-align: ${({ item }) => item?.mobile?.TextAlign ? item?.mobile?.TextAlign : ""} ;
    margin-top:  ${({ item }) => item?.mobile?.margin?.marginTop ? item?.mobile?.margin?.marginTop : ""};
    margin-bottom: ${({ item }) => item?.mobile?.margin?.marginBottom ? item?.mobile?.margin?.marginBottom : ""};
    margin-left:  ${({ item }) => item?.mobile?.margin?.marginLeft ? item?.mobile?.margin?.marginLeft : ""};
    margin-right: ${({ item }) => item?.mobile?.margin?.marginRight ? item?.mobile?.margin?.marginRight : ""};
    border-radius: ${({ item }) => item?.mobile?.borderRadius ? item?.mobile?.borderRadius : ""};
    color: ${({ item }) => item?.mobile?.color ? item?.mobile?.color : ""};
    font-family:${({ item }) => item?.mobile?.fontFamily ? item?.mobile?.fontFamily : ""};
    text-transform:${({ item }) => item?.mobile?.textTransform ? item?.mobile?.textTransform : ""} ;
    transition:${({ item }) => item?.mobile?.transition ? item?.mobile?.transition : ""} ;
    letter-spacing: ${({ item }) => item?.mobile?.transition ? item?.mobile?.letterSpacing : ""} ;
    width: ${({ item }) => item?.mobile?.width ? item?.mobile?.width : ""} ;
    appearance: ${({ item }) => item?.mobile?.appearance ? item?.mobile?.appearance : ""} ;
    align-items: ${({ item }) => item?.mobile?.alignItems ? item?.mobile?.alignItems : ""} ;
    justify-content: ${({ item }) => item?.mobile?.justifyContent ? item?.mobile?.justifyContent : ""} ;
    gap: ${({ item }) => item?.mobile?.justifyContent ? item?.mobile?.gap : ""} ;
    line-height: ${({ item }) => item?.mobile?.lineHeight ? item?.mobile?.lineHeight : ""} ;
    font-family: ${({ item }) => item?.mobile?.fontFamily ? item?.mobile?.fontFamily : ""} ;
    font-weight: ${({ item }) => item?.mobile?.fontWeight ? item?.mobile?.fontWeight : ""} ;
    font-style: ${({ item }) => item?.mobile?.fontStyle ? item?.mobile?.fontStyle : ""} ;
    white-space: ${({ item }) => item?.mobile?.whiteSpace ? item?.mobile?.whiteSpace : ""} ;
    height: ${({ item }) => item?.mobile?.height ? item?.mobile?.height : ""};
   
}

`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom ? item?.desktop?.margin?.marginBottom : ""};
  margin-left:  ${({ item }) => item?.desktop?.margin?.marginLeft ? item?.desktop?.margin?.marginLeft : ""};
  margin-right: ${({ item }) => item?.desktop?.margin?.marginRight ? item?.desktop?.margin?.marginRight : ""};
  justify-content: ${({ item }) => item?.desktop?.ButtonAlign ? item?.desktop?.ButtonAlign : ""} ;
  margin-top:  ${({ item }) => item?.desktop?.margin?.marginTop ? item?.desktop?.margin?.marginTop : ""};
  width: ${({ item }) => item?.desktop?.width ? item?.desktop?.width : "100%"} ;
  position: relative;
  @media(max-width: 1024px) {
      justify-content: ${({ item }) => item?.tablet?.ButtonAlign ? item?.tablet?.ButtonAlign : ""} ;
    }
    @media(max-width: 767px) {
        justify-content: ${({ item }) => item?.mobile?.ButtonAlign ? item?.mobile?.ButtonAlign : ""} ;
        margin-bottom: ${({ item }) => item?.mobile?.margin?.marginBottom ? item?.mobile?.margin?.marginBottom : ""};
      margin-left:  ${({ item }) => item?.mobile?.margin?.marginLeft ? item?.mobile?.margin?.marginLeft : ""};
      margin-right: ${({ item }) => item?.mobile?.margin?.marginRight ? item?.mobile?.margin?.marginRight : ""};
      position:${({ item }) => item?.mobile?.position?.position ? item?.mobile?.position?.position : ""};
    top:${({ item }) => item?.mobile?.position?.top ? item?.mobile?.position?.top : ""};
    left:${({ item }) => item?.mobile?.position?.left ? item?.mobile?.position?.left : ""};
    bottom:${({ item }) => item?.mobile?.position?.bottom ? item?.mobile?.position?.bottom : ""};
    right:${({ item }) => item?.mobile?.position?.right ? item?.mobile?.position?.right : ""};
}`