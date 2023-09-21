import styled from "styled-components";


export const GridSection = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  padding-top: ${({ item }) =>
    item.desktop.padding.paddingTop ? item.desktop.padding.paddingTop : ""};
  padding-right: ${({ item }) =>
    item.desktop.padding.paddingRight ? item.desktop.padding.paddingRight : ""};
  padding-bottom: ${({ item }) =>
    item.desktop.padding.paddingBottom
      ? item.desktop.padding.paddingBottom
      : ""};
  padding-left: ${({ item }) =>
    item.desktop.padding.paddingLeft ? item.desktop.padding.paddingLeft : ""};
  margin-top: ${({ item }) =>
    item.desktop.margin.marginTop ? item.desktop.margin.marginTop : ""};
  margin-right: ${({ item }) =>
    item.desktop.margin.marginRight ? item.desktop.margin.marginRight : ""};
  margin-bottom: ${({ item }) =>
    item.desktop.margin.marginBottom ? item.desktop.margin.marginBottom : ""};
  margin-left: ${({ item }) =>
    item.desktop.margin.marginLeft ? item.desktop.margin.marginLeft : ""};
  background: ${({ item }) => item.desktop.background};
  grid-template-columns: ${({ item }) =>
    item.desktop.gridEqual
      ? item.desktop.gridColumns
      : `repeat( ${item.desktop.gridColumns} , 1fr )`};
  gap: ${({ item }) => item.desktop.gap};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  width: ${({ item }) => item.desktop.width};
  box-shadow: ${({ item }) =>
    item?.desktop?.boxShadow ? item?.desktop?.boxShadow : ""};
  border-top-left-radius: ${({ item }) =>
    item?.desktop?.borderRadius?.borderTopLeftRadius
      ? item?.desktop?.borderRadius?.borderTopLeftRadius
      : ""};
  border-top-right-radius: ${({ item }) =>
    item?.desktop?.borderRadius?.borderTopRightRadius
      ? item?.desktop?.borderRadius?.borderTopRightRadius
      : ""};
  border-bottom-right-radius: ${({ item }) =>
    item?.desktop?.borderRadius?.borderBottomRightRadius
      ? item?.desktop?.borderRadius?.borderBottomRightRadius
      : ""};
  border-bottom-left-radius: ${({ item }) =>
    item?.desktop?.borderRadius?.borderBottomLeftRadius
      ? item?.desktop?.borderRadius?.borderBottomLeftRadius
      : ""};
  border-width: ${({ item }) =>
    item?.desktop?.borderWidth ? item?.desktop?.borderWidth : ""};
  border-style: ${({ item }) =>
    item?.desktop?.borderStyle ? item?.desktop?.borderStyle : ""};
  border-color: ${({ item }) =>
    item?.desktop?.borderColor ? item?.desktop?.borderColor : ""};
  /* z-index: ${({ item }) =>
    item?.desktop?.zIndex ? item?.desktop?.zIndex : ""} ; */
  position: ${({ item }) =>
    item?.desktop?.position?.position ? item?.desktop?.position?.position : ""};
  height: ${({ item }) => (item?.desktop?.height ? item?.desktop?.height : "")};
  order: ${({ item }) => (item?.desktop?.order ? item?.desktop?.order : "")};

  /* isolation:isolate; */
  @media (max-width: 1024px) {
    display: ${({ item }) => item.tablet.display};
    padding-top: ${({ item }) =>
    item.tablet.padding.paddingTop ? item.tablet.padding.paddingTop : ""};
    padding-right: ${({ item }) =>
    item.tablet.padding.paddingRight ? item.tablet.padding.paddingRight : ""};
    padding-bottom: ${({ item }) =>
    item.tablet.padding.paddingBottom
      ? item.tablet.padding.paddingBottom
      : ""};
    padding-left: ${({ item }) =>
    item.tablet.padding.paddingLeft ? item.tablet.padding.paddingLeft : ""};
    margin-top: ${({ item }) =>
    item.tablet.margin.marginTop ? item.tablet.margin.marginTop : ""};
    margin-right: ${({ item }) =>
    item.tablet.margin.marginRight ? item.tablet.margin.marginRight : ""};
    margin-bottom: ${({ item }) =>
    item.tablet.margin.marginBottom ? item.tablet.margin.marginBottom : ""};
    margin-left: ${({ item }) =>
    item.tablet.margin.marginLeft ? item.tablet.margin.marginLeft : ""};
    background: ${({ item }) => item.tablet.background};
    gap: ${({ item }) => item.tablet.gap};
    width: ${({ item }) => item.tablet.width};
    grid-template-columns: repeat(
      ${({ item }) => item.tablet.gridColumns},
      1fr
    );
  }

  @media (max-width: 768px) {
    display: ${({ item }) => item.mobile.display};
    padding-top: ${({ item }) =>
    item.mobile.padding.paddingTop ? item.mobile.padding.paddingTop : ""};
    padding-right: ${({ item }) =>
    item.mobile.padding.paddingRight ? item.mobile.padding.paddingRight : ""};
    padding-bottom: ${({ item }) =>
    item.mobile.padding.paddingBottom
      ? item.mobile.padding.paddingBottom
      : ""};
    padding-left: ${({ item }) =>
    item.mobile.padding.paddingLeft ? item.mobile.padding.paddingLeft : ""};
    margin-top: ${({ item }) =>
    item.mobile.margin.marginTop ? item.mobile.margin.marginTop : ""};
    margin-right: ${({ item }) =>
    item.mobile.margin.marginRight ? item.mobile.margin.marginRight : ""};
    margin-bottom: ${({ item }) =>
    item.mobile.margin.marginBottom ? item.mobile.margin.marginBottom : ""};
    margin-left: ${({ item }) =>
    item.mobile.margin.marginLeft ? item.mobile.margin.marginLeft : ""};
    background: ${({ item }) => item.mobile.background};
    gap: ${({ item }) => item.mobile.gap};
    width: ${({ item }) => item.mobile.width};
    grid-template-columns: repeat(
      ${({ item }) => item.mobile.gridColumns},
      1fr
    );
  }
`;

export const SubGridSection = styled.div`
background :  ${({ item }) => item.desktop.background};
min-width: 1px;
   display: ${({ item }) => item.desktop.display}; 
   padding-top: ${({ item }) => item.desktop.padding.paddingTop ? item.desktop.padding.paddingTop : ''}  ;   
   padding-right: ${({ item }) => item.desktop.padding.paddingRight ? item.desktop.padding.paddingRight : ''} ; 
   padding-bottom: ${({ item }) => item.desktop.padding.paddingBottom ? item.desktop.padding.paddingBottom : ''} ; 
   padding-left: ${({ item }) => item.desktop.padding.paddingLeft ? item.desktop.padding.paddingLeft : ''} ;   
     margin-top: ${({ item }) => item.desktop.margin.marginTop ? item.desktop.margin.marginTop : ""} ;   
   margin-right: ${({ item }) => item.desktop.margin.marginRight ? item.desktop.margin.marginRight : ""} ; 
   margin-bottom: ${({ item }) => item.desktop.margin.marginBottom ? item.desktop.margin.marginBottom : ""} ; 
   margin-left: ${({ item }) => item.desktop.margin.marginLeft ? item.desktop.margin.marginLeft : ""} ; 
   background :  ${({ item }) => item.desktop.background};
   grid-template-columns: ${({ item }) => item.desktop.gridEqual ? item.desktop.gridColumns : `repeat( ${item.desktop.gridColumns} , 1fr )`} ;
   gap: ${({ item }) => item.desktop.gap};
   align-items: ${({ item }) => item?.desktop?.alignItems};
   justify-content: ${({ item }) => item?.desktop?.justifyContent ? item?.desktop?.justifyContent : ""} ;
    width:  ${({ item }) => item?.desktop?.width ? item?.desktop?.width : "100%"};
    box-shadow: ${({ item }) => item?.desktop?.boxShadow ? item?.desktop?.boxShadow : ""};
    border-top-left-radius:${({ item }) => item?.desktop?.borderRadius?.borderTopLeftRadius ? item?.desktop?.borderTopLeftRadius : ""};
    border-top-right-radius:${({ item }) => item?.desktop?.borderRadius?.borderTopRightRadius ? item?.desktop?.borderTopRightRadius : ""};
    border-bottom-right-radius:${({ item }) => item?.desktop?.borderRadius?.borderBottomRightRadius ? item?.desktop?.borderBottomRightRadius : ""};
    border-bottom-left-radius:${({ item }) => item?.desktop?.borderRadius?.borderBottomLeftRadius ? item?.desktop?.borderBottomLeftRadius : ""};
    border-width: ${({ item }) => item?.desktop?.borderWidth ? item?.desktop?.borderWidth : ""};
    border-style: ${({ item }) => item?.desktop?.borderStyle ? item?.desktop?.borderStyle : ""} ;
    border-color: ${({ item }) => item?.desktop?.borderColor ? item?.desktop?.borderColor : ""} ;
    order:${({ item }) => item?.desktop?.order ? item?.desktop?.order : ""} ;
    z-index:${({ item }) => item?.desktop?.zIndex ? item?.desktop?.zIndex : ""} ;
    position:${({ item }) => item?.desktop?.position?.position ? item?.desktop?.position?.position : ""} ;
    top:${({ item }) => item?.desktop?.position?.top ? item?.desktop?.position?.top : ""} ;
    right:${({ item }) => item?.desktop?.position?.right ? item?.desktop?.position?.right : ""} ;
    bottom:${({ item }) => item?.desktop?.position?.bottom ? item?.desktop?.position?.bottom : ""} ;
    left:${({ item }) => item?.desktop?.position?.left ? item?.desktop?.position?.left : ""} ;
    flex-wrap:${({ item }) => item?.desktop?.flexWrap ? item?.desktop?.flexWrap : ""};
    height: ${({ item }) => item?.desktop?.height ? item?.desktop?.height : ""} ;
    border-left-style: ${({ item }) => item?.desktop?.borderLeftStyle ? item?.desktop?.borderLeftStyle : ""};
    border-left-width: ${({ item }) => item?.desktop?.borderLeftWidth ? item?.desktop?.borderLeftWidth : ""};
    border-left-color: ${({ item }) => item?.desktop?.borderLeftColor ? item?.desktop?.borderLeftColor : ""};
    
    border-right-style: ${({ item }) => item?.desktop?.borderRightStyle ? item?.desktop?.borderRightStyle : ""};
    border-right-width: ${({ item }) => item?.desktop?.borderRightWidth ? item?.desktop?.borderRightWidth : ""};
    border-Right-color: ${({ item }) => item?.desktop?.borderRightColor ? item?.desktop?.borderRightColor : ""};
   
    border-top-style: ${({ item }) => item?.desktop?.borderTopStyle ? item?.desktop?.borderTopStyle : ""};
    border-top-width: ${({ item }) => item?.desktop?.borderTopWidth ? item?.desktop?.borderTopWidth : ""};
    border-top-color: ${({ item }) => item?.desktop?.borderTopColor ? item?.desktop?.borderTopColor : ""};

   
    border-bottom-style: ${({ item }) => item?.desktop?.borderBottomStyle ? item?.desktop?.borderBottomStyle : ""};
    border-bottom-width: ${({ item }) => item?.desktop?.borderBottomWidth ? item?.desktop?.borderBottomWidth : ""};
    border-bottom-color: ${({ item }) => item?.desktop?.borderBottomColor ? item?.desktop?.borderBottomColor : ""};


    @media (max-width:1024px) {
      position:${({ item }) => item?.tablet?.position?.position ? item?.tablet?.position?.position : ""} ;
      top:${({ item }) => item?.tablet?.position?.top ? item?.tablet?.position?.top : ""} ;
      right:${({ item }) => item?.tablet?.position?.right ? item?.tablet?.position?.right : ""} ;
      bottom:${({ item }) => item?.tablet?.position?.bottom ? item?.tablet?.position?.bottom : ""} ;
      left:${({ item }) => item?.tablet?.position?.left ? item?.tablet?.position?.left : ""} ;
      width:  ${({ item }) => item?.tablet?.width ? item?.tablet?.width : "100%"};
      height: ${({ item }) => item?.desktop?.height ? item?.desktop?.height : ""} ;
    }
    @media (max-width:768px) {
      position:${({ item }) => item?.mobile?.position?.position ? item?.mobile?.position?.position : ""} ;
      top:${({ item }) => item?.mobile?.position?.top ? item?.mobile?.position?.top : ""} ;
      right:${({ item }) => item?.mobile?.position?.right ? item?.mobile?.position?.right : ""} ;
      bottom:${({ item }) => item?.mobile?.position?.bottom ? item?.mobile?.position?.bottom : ""} ;
      left:${({ item }) => item?.mobile?.position?.left ? item?.mobile?.position?.left : ""} ;
      width:  ${({ item }) => item?.mobile?.width ? item?.mobile?.width : "100%"};
    margin-top: ${({ item }) => item?.mobile?.margin?.marginTop ? item?.mobile?.margin?.marginTop : ""};
    height: ${({ item }) => item?.desktop?.height ? item?.desktop?.height : ""} ;
    border-left-style: ${({ item }) => item?.mobile?.borderLeftStyle ? item?.mobile?.borderLeftStyle : ""};
    border-left-width: ${({ item }) => item?.mobile?.borderLeftWidth ? item?.mobile?.borderLeftWidth : ""};
    border-left-color: ${({ item }) => item?.mobile?.borderLeftColor ? item?.mobile?.borderLeftColor : ""};
    
    border-right-style: ${({ item }) => item?.mobile?.borderRightStyle ? item?.mobile?.borderRightStyle : ""};
    border-right-width: ${({ item }) => item?.mobile?.borderRightWidth ? item?.mobile?.borderRightWidth : ""};
    border-Right-color: ${({ item }) => item?.mobile?.borderRightColor ? item?.mobile?.borderRightColor : ""};
   
    border-top-style: ${({ item }) => item?.mobile?.borderTopStyle ? item?.mobile?.borderTopStyle : ""};
    border-top-width: ${({ item }) => item?.mobile?.borderTopWidth ? item?.mobile?.borderTopWidth : ""};
    border-top-color: ${({ item }) => item?.mobile?.borderTopColor ? item?.mobile?.borderTopColor : ""};

   
    border-bottom-style: ${({ item }) => item?.mobile?.borderBottomStyle ? item?.mobile?.borderBottomStyle : ""};
    border-bottom-width: ${({ item }) => item?.mobile?.borderBottomWidth ? item?.mobile?.borderBottomWidth : ""};
    border-bottom-color: ${({ item }) => item?.mobile?.borderBottomColor ? item?.mobile?.borderBottomColor : ""};

    padding-top: ${({ item }) => item.mobile.padding.paddingTop ? item.mobile.padding.paddingTop : ''}  ;   
   padding-right: ${({ item }) => item.mobile.padding.paddingRight ? item.mobile.padding.paddingRight : ''} ; 
   padding-bottom: ${({ item }) => item.mobile.padding.paddingBottom ? item.mobile.padding.paddingBottom : ''} ; 
   padding-left: ${({ item }) => item.mobile.padding.paddingLeft ? item.mobile.padding.paddingLeft : ''} ;  

    }
`