
import styled from "styled-components";



export const OtherContainers = styled.div`
 display: ${({ item }) => item?.desktop?.display};
    grid-template-columns: ${({ item }) => item.desktop.gridEqual ? item.desktop.gridColumns : `repeat( ${item.desktop.gridColumns} , 1fr )`} ;
    row-gap:${({ item }) => item?.desktop?.rowGap};
    column-gap:${({ item }) => item?.desktop?.columnGap};
    justify-content:${({ item }) => item?.desktop?.justifyContent};
    align-items:${({ item }) => item?.desktop?.alignItems};
    flex-direction: ${({ item }) => item?.desktop?.flexDirection};
  background: ${({ item }) => item?.desktop?.background ? item?.desktop?.background : ""};
  box-shadow: ${({ item }) => item?.desktop?.boxShadow ? item?.desktop?.boxShadow : ""};
  border-top-left-radius :${({ item }) => item?.desktop?.borderRadius?.borderTopLeftRadius ? item?.desktop?.borderRadius?.borderTopLeftRadius : ""};
  border-top-right-radius :${({ item }) => item?.desktop?.borderRadius?.borderTopRightRadius ? item?.desktop?.borderRadius?.borderTopRightRadius : ""};
  border-bottom-left-radius :${({ item }) => item?.desktop?.borderRadius?.borderBottomLeftRadius ? item?.desktop?.borderRadius?.borderBottomLeftRadius : ""};
  border-bottom-right-radius :${({ item }) => item?.desktop?.borderRadius?.borderBottomRightRadius ? item?.desktop?.borderRadius?.borderBottomRightRadius : ""};
  padding-top:  ${({ item }) => item?.desktop?.padding?.paddingTop ? item?.desktop?.padding?.paddingTop : ""};
  padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom ? item?.desktop?.padding?.paddingBottom : ""};
  padding-left:  ${({ item }) => item?.desktop?.padding?.paddingLeft ? item?.desktop?.padding?.paddingLeft : ""};
  padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight ? item?.desktop?.padding?.paddingRight : ""};
  margin-top:  ${({ item }) => item?.desktop?.margin?.marginTop ? item?.desktop?.margin?.marginTop : ""};
  margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom ? item?.desktop?.margin?.marginBottom : ""};
  margin-left:  ${({ item }) => item?.desktop?.margin?.marginLeft ? item?.desktop?.margin?.marginLeft : ""};
  margin-right: ${({ item }) => item?.desktop?.margin?.marginRight ? item?.desktop?.margin?.marginRight : ""};
  position: relative;
  height:${({ item }) => item?.desktop?.height ? item?.desktop?.height : ""};
  min-height:${({ item }) => item?.desktop?.minHeight ? item?.desktop?.minHeight : ""};
  width: ${({ item }) => item?.desktop?.width ? item?.desktop?.width : ""};
  max-width: ${({ item }) => item?.desktop?.maxWidth ? item?.desktop?.maxWidth : ""};
  border-radius: ${({ item }) => item?.desktop?.borderRadius ? item?.desktop?.borderRadius : " "};
  @media screen and (max-width:1024px){
    width: ${({ item }) => item?.tablet?.width ? item?.tablet?.width : ""}; 
 }
  @media screen and (max-width:767px){
    padding-top:  ${({ item }) => item?.mobile?.padding?.paddingTop ? item?.mobile?.padding?.paddingTop : ""};
    padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom ? item?.mobile?.padding?.paddingBottom : ""};
    padding-left:  ${({ item }) => item?.mobile?.padding?.paddingLeft ? item?.mobile?.padding?.paddingLeft : ""};
    padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight ? item?.mobile?.padding?.paddingRight : ""};
    width: ${({ item }) => item?.mobile?.width ? item?.mobile?.width : ""}; 
      grid-template-columns: ${({ item }) => item.mobile.gridEqual ? item.mobile.gridColumns : `repeat( ${item.mobile.gridColumns} , 1fr )`} ;
 }

`;