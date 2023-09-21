import styled from "styled-components";
export const MainLogoContainer = styled.div`
width:${({ item }) => item?.desktop?.width};
max-width:${({ item }) => item?.desktop?.maxWidth};
/* padding-top: ${({item})=>item?.desktop?.padding?.paddingTop}; */
/* padding-bottom: ${({item})=>item?.desktop?.padding?.paddingBottom}; */

`

export const MainLogo = styled.div`
    display:${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    justify-content: center;
    
    `

export const MainImage = styled.div`
    
    max-width: ${({ item }) => item?.desktop?.maxWidth};
    height: ${({ itemApperance }) => itemApperance?.logo_size};
    min-width: ${({ item }) => item?.desktop?.minWidth};
    display: ${({ item }) => item?.desktop?.display};
    max-height: ${({ item }) => item?.desktop?.maxHeight};
    /* img{
        max-width: ${({ item }) => item?.desktop?.maxWidth};
        height: ${({ item }) => item?.desktop?.height};
        max-height: ${({ item }) => item?.desktop?.maxHeight};
        display: ${({ item }) => item?.desktop?.display};
    } */
    `;

