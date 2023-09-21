import { styled } from "styled-components";


export const SideNavbarWrapper = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  border: ${({ item }) => item?.desktop?.border};
  z-index: ${({ item }) => item?.desktop?.zIndex};
  background-color: ${({ item }) => item?.desktop?.backgroundColor};
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  transform: ${({ item }) => item?.desktop?.transform};
  transition: ${({ item }) => item?.desktop?.transition};
  position: ${({ item }) => item?.desktop?.position};
  top: ${({ item }) => item?.desktop?.top};
  left: ${({ item }) => item?.desktop?.left};
  overflow-y: ${({ item }) => item?.desktop?.overflowY};
  scroll-behavior: ${({ item }) => item?.desktop?.scrollBehaviour};

  &.active {
    transform: ${({ itemActive }) => itemActive?.desktop?.transform};
  }`;
export const UserProfile = styled.div`
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
display: ${({ item }) => item?.desktop?.display};
flex-direction: ${({ item }) => item?.desktop?.flexDirection};
gap: ${({ item }) => item?.desktop?.gap};
border-bottom: ${({ item }) => item?.desktop?.borderBottom};
`;
export const LoginSignUpBtn = styled.div`
display:${({ item }) => item?.desktop?.display};
align-items: ${({ item }) => item?.desktop?.alignItems};
gap: ${({ item }) => item?.desktop?.gap};
color:${({ item }) => item?.desktop?.color};

`;
export const MenuList = styled.ul`
position:${({ item }) => item?.desktop?.position};
`;
export const MenuListItem = styled.li`
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
border-bottom: ${({ item }) => item?.desktop?.borderBottom};
`;
export const MenuListContent = styled.div`

display: ${({ item }) => item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};

`;
export const MenuSubListItem = styled.li`
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
border-bottom: ${({ item }) => item?.desktop?.borderBottom};
&:last-child{
    border-bottom: ${({ item }) => item?.desktop?.lastChild?.borderBottom};
}
`;
export const MenuSubList = styled.ul`
position:${({ item }) => item?.desktop?.position};
`;
export const MenuSubListContent = styled.div`

display: ${({ item }) => item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};
`;
export const MenuSubSubListContent = styled.div`

display: ${({ item }) => item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};

`;
export const MenuSubSubList = styled.ul`
position:${({ item }) => item?.desktop?.position};
`;
export const MenuSubSubListItem = styled.li`
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
`;
