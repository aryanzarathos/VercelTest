import { styled } from "styled-components";

export const MainHeader = styled.header`
display:flex;
/* background-color: ${({ item }) => item?.style?.desktop?.backgroundColor}; */
width:${({ item }) => item?.style?.desktop?.width};
/* gap:${({ item }) => item?.style?.desktop?.gap}; */
align-items:${({ item }) => item?.style?.desktop?.alignItems};
padding-left:${({ item }) => item?.style?.desktop?.paddingLeft};
padding-right:${({ item }) => item?.style?.desktop?.paddingRight};
box-shadow: ${({ item }) => item?.style?.desktop?.boxShadow};
flex-direction: column;
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
.centerdLogo{
    margin:  0 auto;
    flex-grow: 1;
    /* padding-top: 16px; */
}
.centeredNav{
    justify-self: center;
}
`;
export const SearchCommonIcon = styled.div`
display: grid;
width: 100%;
grid-template-columns: 1fr auto;
align-items: center;
`;
export const BookIcon = styled.div`
margin-left:${({item})=>item?.desktop?.margin?.marginLeft};
display: ${({item})=>item?.desktop?.display};
align-items: ${({item})=>item?.desktop?.alignItems};
gap:${({item})=>item?.desktop?.gap};
max-width: 380px;
justify-content: end;

`;
export const HeaderButtonWrapper = styled.div`
display: flex;
gap: 10px;
align-items: center;
padding-top: 16px;
width: 100%;


`;
    