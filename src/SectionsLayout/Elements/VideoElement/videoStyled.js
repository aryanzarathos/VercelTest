import styled from 'styled-components';


export const Video = styled.video`
 max-width: ${({ item }) => item?.desktop?.maxWidth ? item.desktop.maxWidth : ""};
  min-width: ${({ item }) => item?.desktop?.minWidth ? item.desktop.minWidth : ""};
  width: ${({ item }) => item?.desktop?.width ? item.desktop.width : ""};
  height: ${({ item }) => item?.desktop?.height ? item.desktop.height : ""};
  max-height: ${({ item }) => item?.desktop?.maxHeight ? item.desktop.maxHeight : ""};
  min-height: ${({ item }) => item?.desktop?.minHeight ? item.desktop.minHeight : ""};
  display: ${({ item }) => item?.desktop?.display ? item.desktop.display : ""};
  position: ${({ item }) => item?.desktop?.position ? item?.desktop?.position : ""};
  background: ${({ item }) => item?.desktop?.background ? item?.desktop?.background : ""};
  top: ${({ item }) => item?.desktop?.top ? item.desktop.top : ""};
  left: ${({ item }) => item?.desktop?.left ? item.desktop.left : ""};
  right: ${({ item }) => item?.desktop?.right ? item.desktop.right : ""};
  bottom: ${({ item }) => item?.desktop?.bottom ? item.desktop.bottom : ""};
  object-fit: ${({ item }) => item?.desktop?.objectFit ? item.desktop.objectFit : ""};
  object-position: ${({ item }) => item?.desktop?.objectPosition ? item.desktop.objectPosition : ""};
  border-top-left-radius: ${({ item }) => item?.desktop?.borderRadius?.borderTopLeftRadius ? item.desktop.borderRadius.borderTopLeftRadius : ""} ;
  border-top-right-radius: ${({ item }) => item?.desktop?.borderRadius?.borderTopRightRadius ? item.desktop.borderRadius.borderTopRightRadius : ""};
  border-bottom-left-radius:${({ item }) => item?.desktop?.borderRadius?.borderBottomLeftRadius ? item.desktop.borderRadius.borderBottomLeftRadius : ""} ;
  border-bottom-right-radius :${({ item }) => item?.desktop?.borderRadius?.borderBottomRightRadius ? item.desktop.borderRadius.borderBottomRightRadius : ""};
  margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
  margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
  margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
  margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
  order: ${({ item }) => item?.desktop?.order};


  @media(max-width: 1024px) {
    max-width: ${({ item }) => item?.tablet?.maxWidth ? item.tablet.maxWidth : ""};
  min-width: ${({ item }) => item?.tablet?.minWidth ? item.tablet.minWidth : ""};
  width: ${({ item }) => item?.tablet?.width ? item.tablet.width : ""};
  height: ${({ item }) => item?.tablet?.height ? item.tablet.height : ""};
  max-height: ${({ item }) => item?.tablet?.maxHeight ? item.tablet.maxHeight : ""};
  min-height: ${({ item }) => item?.tablet?.minHeight ? item.tablet.minHeight : ""};
  display: ${({ item }) => item?.tablet?.display ? item.tablet.display : ""};
  position: ${({ item }) => item?.tablet?.position ? item?.tablet?.position : ""};
  background: ${({ item }) => item?.tablet?.background ? item?.tablet?.background : ""};
  top: ${({ item }) => item?.tablet?.top ? item.tablet.top : ""};
  left: ${({ item }) => item?.tablet?.left ? item.tablet.left : ""};
  right: ${({ item }) => item?.tablet?.right ? item.tablet.right : ""};
  bottom: ${({ item }) => item?.tablet?.bottom ? item.tablet.bottom : ""};
  object-fit: ${({ item }) => item?.tablet?.objectFit ? item.tablet.objectFit : ""};
  object-position: ${({ item }) => item?.tablet?.objectPosition ? item.tablet.objectPosition : ""};
  border-top-left-radius: ${({ item }) => item?.tablet?.borderRadius?.borderTopLeftRadius ? item.tablet.borderRadius.borderTopLeftRadius : ""} ;
  border-top-right-radius: ${({ item }) => item?.tablet?.borderRadius?.borderTopRightRadius ? item.tablet.borderRadius.borderTopRightRadius : ""};
  border-bottom-left-radius:${({ item }) => item?.tablet?.borderRadius?.borderBottomLeftRadius ? item.tablet.borderRadius.borderBottomLeftRadius : ""} ;
  border-bottom-right-radius :${({ item }) => item?.tablet?.borderRadius?.borderBottomRightRadius ? item.tablet.borderRadius.borderBottomRightRadius : ""};
  order: ${({ item }) => item?.tablet?.order};

  }

  @media(max-width:768px) {
    max-width: ${({ item }) => item?.mobile?.maxWidth ? item.mobile.maxWidth : ""};
  min-width: ${({ item }) => item?.mobile?.minWidth ? item.mobile.minWidth : ""};
  width: ${({ item }) => item?.mobile?.width ? item.mobile.width : ""};
  height: ${({ item }) => item?.mobile?.height ? item.mobile.height : ""};
  max-height: ${({ item }) => item?.mobile?.maxHeight ? item.mobile.maxHeight : ""};
  min-height: ${({ item }) => item?.mobile?.minHeight ? item.mobile.minHeight : ""};
  display: ${({ item }) => item?.mobile?.display ? item.mobile.display : ""};
  position: ${({ item }) => item?.mobile?.position ? item?.mobile?.position : ""};
  background: ${({ item }) => item?.mobile?.background ? item?.mobile?.background : ""};
  top: ${({ item }) => item?.mobile?.top ? item.mobile.top : ""};
  left: ${({ item }) => item?.mobile?.left ? item.mobile.left : ""};
  right: ${({ item }) => item?.mobile?.right ? item.mobile.right : ""};
  bottom: ${({ item }) => item?.mobile?.bottom ? item.mobile.bottom : ""};
  object-fit: ${({ item }) => item?.mobile?.objectFit ? item.mobile.objectFit : ""};
  object-position: ${({ item }) => item?.mobile?.objectPosition ? item.mobile.objectPosition : ""};
  border-top-left-radius: ${({ item }) => item?.mobile?.borderRadius?.borderTopLeftRadius ? item.mobile.borderRadius.borderTopLeftRadius : ""} ;
  border-top-right-radius: ${({ item }) => item?.mobile?.borderRadius?.borderTopRightRadius ? item.mobile.borderRadius.borderTopRightRadius : ""};
  border-bottom-left-radius:${({ item }) => item?.mobile?.borderRadius?.borderBottomLeftRadius ? item.mobile.borderRadius.borderBottomLeftRadius : ""} ;
  border-bottom-right-radius :${({ item }) => item?.mobile?.borderRadius?.borderBottomRightRadius ? item.mobile.borderRadius.borderBottomRightRadius : ""};
  order: ${({ item }) => item?.mobile?.order};
  }


/* height: 300px;
width: 100%;
object-fit: cover; */

`