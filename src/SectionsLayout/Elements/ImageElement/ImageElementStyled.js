import styled from 'styled-components'

export const Image = styled.img`
  max-width: ${({ item }) => item.desktop.maxWidth ? item.desktop.maxWidth : ""};
  width: ${({ item }) => item.desktop.width ? item.desktop.width : ""};
  height: ${({ item }) => item.desktop.height ? item.desktop.height : ""};
  max-height: ${({ item }) => item.desktop.maxHeight ? item.desktop.maxHeight : ""} ;
  display:  ${({ item }) => item.desktop.display ? item.desktop.display : ""};
  top:${({ item }) => item?.desktop?.position?.top ? item?.desktop?.position?.top : ""};
  left: ${({ item }) => item?.desktop?.position?.left ? item?.desktop?.position?.left : ""};
  right: ${({ item }) => item?.desktop?.position?.right ? item?.desktop?.position?.right : ""};
  bottom:  ${({ item }) => item?.desktop?.position?.bottom ? item?.desktop?.position?.bottom : ""} ;
  object-fit: ${({ item }) => item.desktop.objectFit ? item.desktop.objectFit : ""} ;
  object-position: ${({ item }) => item.desktop.objectPosition ? item.desktop.objectPosition : ""} ;
  mix-blend-mode: ${({ item }) => item.desktop.mixBlendMode ? item.desktop.mixBlendMode : ""} ;
  position: ${({ item }) => item?.desktop?.position?.position ? item?.desktop?.position?.position : ""};
`