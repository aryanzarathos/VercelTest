import { styled } from "styled-components";

export const MapContainer = styled.div`
   /* width:${({ item }) => item?.desktop?.width ? item.desktop.width : ""};
   min-width :${({ item }) => item?.desktop?.minWidth ? item.desktop.minWidth : "" };
   max-width: ${({ item }) => item?.desktop?.maxWidth ? item.desktop.maxWidth : ""};
   height: ${({ item }) => item?.desktop.height ? item.desktop.height : ""};
   min-height: ${({ item }) => item?.desktop.minHeight ? item.desktop.minHeight : ""};
   min-height: ${({ item }) => item?.desktop.maxHeight ? item.desktop.maxHeight : ""};
   margin-bottom: ${({ item }) => item?.desktop.marginBottom ? item.desktop.marginBottom : ""};
   border-radius: ${({ item }) => item?.desktop.borderRadius ? item.desktop.borderRadius : ""};
   overflow: ${({ item }) => item?.desktop.overflow ?  item.desktop.overflow : ""};
   border-top-left-radius:  ${({ item }) => item?.desktop?.borderTopLeftRadius ? item?.desktop?.borderTopLeftRadius : ""} ;
   border-top-right-radius: ${({ item }) => item?.desktop?.borderTopRightRadius ? item?.desktop?.borderTopRightRadius : ""};
   border-bottom-right-radius:  ${({ item }) => item?.desktop?.borderBottomRightRadius ? item?.desktop?.borderBottomRightRadius : ""};
   border-bottom-left-radius: ${({ item }) => item?.desktop?.borderBottomLeftRadius ? item?.desktop?.borderBottomLeftRadius : ""}; 
   margin-top:${({ item }) => item?.desktop?.margin?.marginTop ? item?.desktop?.margin?.marginTop : ""};
   margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
   margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
   margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
   padding-top:  ${({ item }) => item?.desktop?.padding?.paddingTop ? item?.desktop?.padding?.paddingTop : ""};
   padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom ? item?.desktop?.padding?.paddingBottom : ""};
   padding-left:  ${({ item }) => item?.desktop?.padding?.paddingLeft ? item?.desktop?.padding?.paddingLeft : ""};
   padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight ? item?.desktop?.padding?.paddingRight : ""};
   position: ${({ item }) => item?.desktop?.position ? item?.desktop?.position : ""};    */
   position: relative;
   margin-top:${({ item }) => item?.desktop?.margin?.marginTop ? item?.desktop?.margin?.marginTop : ""};
   margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
   margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
   margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
   padding-top:  ${({ item }) => item?.desktop?.padding?.paddingTop ? item?.desktop?.padding?.paddingTop : ""};
   padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom ? item?.desktop?.padding?.paddingBottom : ""};
   padding-left:  ${({ item }) => item?.desktop?.padding?.paddingLeft ? item?.desktop?.padding?.paddingLeft : ""};
   padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight ? item?.desktop?.padding?.paddingRight : ""};
   position: ${({ item }) => item?.desktop?.position ? item?.desktop?.position : ""}; 
   width:${({ item }) => item?.desktop?.width ? item.desktop.width : ""};
   height: ${({ item }) => item?.desktop.height ? item.desktop.height : ""};
   min-height: ${({ item }) => item?.desktop.minHeight ? item.desktop.minHeight : ""};
   max-height: ${({ item }) => item?.desktop.maxHeight ? item.desktop.maxHeight : ""};
`

export const Iframe = styled.iframe`
     width:${({ item }) => item?.desktop?.width ? item.desktop.width : ""};
    min-width :${({ item }) => item?.desktop?.minWidth ? item.desktop.minWidth : "" };
    max-width: ${({ item }) => item?.desktop?.maxWidth ? item.desktop.maxWidth : ""};
    height: ${({ item }) => item?.desktop.maxHeight ? item.desktop.maxHeight : ""};
   min-height: ${({ item }) => item?.desktop.minHeight ? item.desktop.minHeight : ""};
   max-height: ${({ item }) => item?.desktop.maxHeight ? item.desktop.maxHeight : ""};
   margin-bottom: ${({ item }) => item?.desktop.marginBottom ? item.desktop.marginBottom : ""};
   border-radius: ${({ item }) => item?.desktop.borderRadius ? item.desktop.borderRadius : ""};
   overflow: ${({ item }) => item?.desktop.overflow ?  item.desktop.overflow : ""};
   border-top-left-radius:  ${({ item }) => item?.desktop?.borderTopLeftRadius ? item?.desktop?.borderTopLeftRadius : ""} ;
   border-top-right-radius: ${({ item }) => item?.desktop?.borderTopRightRadius ? item?.desktop?.borderTopRightRadius : ""};
   border-bottom-right-radius:  ${({ item }) => item?.desktop?.borderBottomRightRadius ? item?.desktop?.borderBottomRightRadius : ""};
   border-bottom-left-radius: ${({ item }) => item?.desktop?.borderBottomLeftRadius ? item?.desktop?.borderBottomLeftRadius : ""}; 

   border: none;

`