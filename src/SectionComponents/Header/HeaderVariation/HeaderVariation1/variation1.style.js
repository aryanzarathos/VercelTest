import styled from "styled-components";

export const MainHeader = styled.header`
display:${({ item }) => item?.style?.desktop?.display};
// background-color: ${({ item }) => item?.style?.desktop?.backgroundColor};
width:${({ item }) => item?.style?.desktop?.width};
gap:${({ item }) => item?.style?.desktop?.gap};
align-items:${({ item }) => item?.style?.desktop?.alignItems};
padding-left:${({ item }) => item?.style?.desktop?.paddingLeft};
padding-right:${({ item }) => item?.style?.desktop?.paddingRight};
box-shadow: ${({ item }) => item?.style?.desktop?.boxShadow};
justify-content:${({ item }) => item?.style?.desktop?.justifyContent} ;
min-height: 60px;
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
&:hover{
}
.ml-auto{
    margin-left:auto;
}`;
export const ImageWrapper = styled.div`
width: 100%;
height: 700px;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
export const BookIcon = styled.div`
margin-left:${({item})=>item?.desktop?.margin?.marginLeft};
display: ${({item})=>item?.desktop?.display};
align-items: ${({item})=>item?.desktop?.alignItems};
gap:${({item})=>item?.desktop?.gap};
`;
