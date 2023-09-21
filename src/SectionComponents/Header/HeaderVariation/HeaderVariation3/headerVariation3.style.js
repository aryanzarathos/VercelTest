import { styled } from "styled-components";

export const MainHeader = styled.header`
display:flex;
/* background-color: ${({ item }) => item?.style?.desktop?.backgroundColor}; */
width:${({ item }) => item?.style?.desktop?.width};
gap:${({ item }) => item?.style?.desktop?.gap};
align-items:${({ item }) => item?.style?.desktop?.alignItems};
padding-left:${({ item }) => item?.style?.desktop?.paddingLeft};
padding-right:${({ item }) => item?.style?.desktop?.paddingRight};
box-shadow: ${({ item }) => item?.style?.desktop?.boxShadow};
min-height: 60px;
display: grid;
grid-template-columns: repeat(3,1fr);
&.sticky{
    position: sticky;
    width: 100%;
    top: 0;
    animation: headerSticky .95s ease forwards;
    /* box-shadow: 0px 3px 9px rgb(0 0 0 / 5%); */
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
}

`;
export const SearchCommonIcon = styled.div`
display:flex;
gap:10px;
align-items:center;
`;
export const BookIcon = styled.div`
margin-left:${({item})=>item?.desktop?.margin?.marginLeft};
display: ${({item})=>item?.desktop?.display};
align-items: ${({item})=>item?.desktop?.alignItems};
gap:${({item})=>item?.desktop?.gap};
min-width: 380px;
justify-content: end;

`;