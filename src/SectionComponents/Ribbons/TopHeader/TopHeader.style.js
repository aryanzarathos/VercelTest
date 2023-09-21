import styled from "styled-components";




export const SocialLinks = styled.div`
    display: ${({ item }) => item.desktop?.display};
    gap:  ${({ item }) => item.desktop?.gap};
    align-items: ${({ item }) => item.desktop?.aligItems};
    width: ${({ item }) => item?.desktop?.width};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    @media screen and (max-width:1024px){
        justify-content: ${({ item }) => item?.tablet?.justifyContent};

    }
    .Twitter{
       height:  ${({ itemTwitter }) => itemTwitter?.desktop?.height};
        min-width:  ${({ itemTwitter }) => itemTwitter?.desktop?.minWidth};
        fill:  ${({ itemApperance }) => itemApperance?.social_icons}; 
    }
    .facebook{
         height:  ${({ itemFacebook }) => itemFacebook?.desktop?.height};
        min-width:  ${({ itemFacebook }) => itemFacebook?.desktop?.minWidth};
                fill:  ${({ itemApperance }) => itemApperance?.social_icons}; 

    }
    .gmail{
        height:  ${({ itemGmail }) => itemGmail?.desktop?.height};
        min-width:  ${({ itemGmail }) => itemGmail?.desktop?.minWidth};
                fill:  ${({ itemApperance }) => itemApperance?.social_icons}; 

    }
    .instagram{
         height:  ${({ itemInsta }) => itemInsta?.desktop?.height};
        min-width:  ${({ itemInsta }) => itemInsta?.desktop?.minWidth};
                fill:  ${({ itemApperance }) => itemApperance?.social_icons}; 
 
    }
`;
export const MainSection = styled.section`
background: ${({ item }) => item.desktop?.background};
padding: ${({ item }) => item.desktop?.padding};
`;
export const MainContent = styled.div`
display: ${({ item }) => item.desktop?.display};
align-items: ${({ item }) => item.desktop?.aligItems};
justify-content: ${({ item }) => item.desktop?.justifyContent};
gap: ${({ item }) => item.desktop?.gap};

@media screen and(max-width: 580px) {
    flex-direction: ${({ item }) => item.mobile?.flexDirection};
}
`;

export const PersonalInfo = styled.div`
display: ${({ item }) => item.desktop?.display};
align-items: ${({ item }) => item.desktop?.aligItems};
gap: ${({ item }) => item.desktop?.gap};
width:${({ item }) => item?.desktop?.width};
    @media screen and (max-width: 1024px) {
        display: ${({ item }) => item?.tablet?.display};
    }
`;
export const PersonalInfoData = styled.div`
    display: ${({ item }) => item.desktop?.display};
    align-items: ${({ item }) => item.desktop?.aligItems};
    gap: ${({ item }) => item.desktop?.gap};
    /* svg {
        height:${({ item }) => item.desktop?.svg.height};
        width:${({ item }) => item.desktop?.svg.width};
        display: ${({ item }) => item.desktop?.svg.display};

    } */
    .callIcon{
        width: ${({ itemCall }) => itemCall?.desktop?.width};
        height: ${({ itemCall }) => itemCall?.desktop?.height};
        fill:${({ itemApperance }) => itemApperance?.icons};
    
    }
    .emailIcon{
           width: ${({ itemEmail }) => itemEmail?.desktop?.width};
        height: ${({ itemEmail }) => itemEmail?.desktop?.height};
        fill:none;
        path{
            stroke:${({ itemApperance }) => itemApperance?.icons};
        }
    }
    .location{
          width: ${({ itemLocation }) => itemLocation?.desktop?.width};
        height: ${({ itemLocation }) => itemLocation?.desktop?.height};
        fill:${({ itemApperance }) => itemApperance?.icons};
    }

`;
export const LeftDivider = styled.div`
width:${({ item }) => item?.desktop?.width};
height:${({ item }) => item?.desktop?.height};
background:${({ itemMultiLanguageColor }) => itemMultiLanguageColor?.text};
@media screen and (max-width:1024px) {
    display: ${({ item }) => item?.tablet?.display};
}
`;

export const IconWrapper = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
`;
export const FollowSection = styled.div`
display:${({ item }) => item?.desktop?.display};
gap:${({ item }) => item?.desktop?.gap};
`;