import { styled } from "styled-components";

export const MainMobileNavbar = styled.header`
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
display: ${({ item }) => item?.desktop?.display};
align-items: ${({ item }) => item?.desktop?.alignItems};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
/* background: ${({ item }) => item?.desktop?.background}; */
box-shadow: ${({ item }) => item?.desktop?.boxShadow};
width: ${({ item }) => item?.desktop?.width};
min-height: 60px;

&.sticky{
    position: sticky;
    width: 100%;
    top: 0;
    animation: headerSticky .95s ease forwards;
    box-shadow: 0px 3px 9px rgb(0 0 0 / 5%);
    z-index: 99;
    }
    @keyframes headerSticky {
    0% {
    transform: translateY(-100%); }
    100% {
    transform: translateY(0); } 
    }


`;

export const MainLogo = styled.div`
max-width: ${({item})=>item?.desktop?.maxWidth};
    height: ${({item})=>item?.desktop?.height};
    min-width: ${({item})=>item?.desktop?.minWidth};
    display: ${({item})=>item?.desktop?.display};
    max-height: ${({item})=>item?.desktop?.maxHeight};
    
img{
     max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
}
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
export const MenuIcon = styled.div`
display:${({item})=>item?.desktop?.display};
gap:${({item})=>item?.desktop?.gap};
align-items: ${({item})=>item?.desktop?.alignItems};

`;
export const MainLogoContainer = styled.div`
max-width:${({item})=>item?.desktop?.maxWidth};
padding-top: ${({item})=>item?.desktop?.padding?.paddingTop};
padding-bottom: ${({item})=>item?.desktop?.padding?.paddingBottom};
`;
export const LogoContent = styled.div`
display: ${({item})=>item?.desktop?.display};
gap: ${({item})=>item?.desktop?.gap};
align-items: ${({item})=>item?.desktop?.alignItems};
`;
export const BookIcon = styled.div`
margin-left:${({item})=>item?.desktop?.margin?.marginLeft};
display: ${({item})=>item?.desktop?.display};
align-items: ${({item})=>item?.desktop?.alignItems};
gap:${({item})=>item?.desktop?.gap};
`;
