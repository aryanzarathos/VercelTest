import { styled } from "styled-components";

export const MainMobileNavbar = styled.div`
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
display: ${({ item }) => item?.desktop?.display};
align-items: ${({ item }) => item?.desktop?.alignItems};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
background: ${({ item }) => item?.desktop?.background};
box-shadow: ${({ item }) => item?.desktop?.boxShadow};
width: ${({ item }) => item?.desktop?.width};
`;

export const MainLogo = styled.div`
height:${({ item }) => item?.desktop?.height};
/* img{
    object-fit: cover;
    height: auto;
    max-height: 100%;
} */
`;
export const MainSearch = styled.div`
position:${({ item }) => item?.desktop?.position};`;
export const SlidenavOverlay = styled.div`
  overflow: ${({ item }) => item?.desktop?.overflow};
  &.active {
    height: ${({ itemActive }) => itemActive?.desktop?.height};
    width: ${({ itemActive }) => itemActive?.desktop?.width};
    background-color: ${({ itemActive }) => itemActive?.desktop?.backgroundColor};
    z-index: ${({ itemActive }) => itemActive?.desktop?.zIndex};
    position: ${({ itemActive }) => itemActive?.desktop?.position};
    top: ${({ itemActive }) => itemActive?.desktop?.top};
    left: ${({ itemActive }) => itemActive?.desktop?.left};
 
  }
`;

export const HumBurgar = styled.div`
  border: ${({ item }) => item?.desktop?.border};
  outline: ${({ item }) => item?.desktop?.outline};
  background-color: ${({ item }) => item?.desktop?.backgroundColor};
  display: ${({ item }) => item?.desktop?.display};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  flex-direction: ${({ item }) => item?.desktop?.flexDirection};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  gap: ${({ item }) => item?.desktop?.gap};
  order: ${({ item }) => item?.desktop?.order};
  cursor: ${({ item }) => item?.desktop?.cursor};
  max-width: ${({ item }) => item?.desktop?.maxWidth};
`;
export const HumLine = styled.span`
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  background-color: ${({ item }) => item?.desktop?.backgroundColor};
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  overflow: ${({ item }) => item?.desktop?.overflow};
`;
export const CurrencySearch = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:10px;
`;

