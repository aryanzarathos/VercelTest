import styled from "styled-components"

export const MyProfileContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    height: ${({ item }) => item?.desktop?.height};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    background-color: ${({ item }) => item?.desktop?.backgroundColor};
;

    /* @media screen and (max-width: 620px) {
        .addCss{
        width: 100%;
        padding: 0;
        }
    } */


`
export const MainContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    background: ${({ item }) => item?.desktop?.background};
    box-shadow: ${({ item }) => item?.desktop?.boxShadow};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    max-width: ${({ item }) => item?.desktop?.maxWidth};
    width: ${({ item }) => item?.desktop?.width};
    @media screen and (max-width:1024px){
        width: ${({ item }) => item?.tablet?.width};
        
    }

    /* @media screen and (max-width: 620px) {
      height: 100vh;
    } */
    /* .OverflowInitial{
        overflow-y: initial !important;
    } */
`;
export const ContainerRytMain = styled.div`
width: ${({ item }) => item?.desktop?.width};
padding: ${({ item }) => item?.desktop?.padding};
position: ${({ item }) => item?.desktop?.position};
    @media screen and (max-width: 1024px) {
        width: ${({ item }) => item?.tablet?.width};
    }
    @media screen and (max-width: 767px) {
        display: ${({ item }) => item?.mobile?.display};
    }
`;

export const ContainerRight = styled.div`
    max-height: ${({ item }) => item?.desktop?.maxHeight};
    overflow-y: ${({ item }) => item?.desktop?.overflowY};
    overflow-x: hidden;
    @media screen and (max-width: 1024px) {
        overflow-y: ${({ item }) => item?.tablet?.overflowY};
    } 
`