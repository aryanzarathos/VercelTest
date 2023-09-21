import styled from "styled-components";


export const ContactusSubContainer = styled.div`
background-color: ${({ item }) => item.desktop.backgroundColor};
border-radius: ${({ item }) => item.desktop.borderRadius};
padding: ${({ item }) => item.desktop.padding};
box-shadow:${({ item }) => item.desktop.boxShadow};
margin:${({ item }) => item.desktop.margin};

@media (max-width: 767px) {
    margin:${({ item }) => item.mobile.margin};
}

`;

export const SubContainerTopHeading = styled.h3`

`;

export const SubContainerTopContent = styled.p`

`;

export const SubMidContainer = styled.div`
padding-top: ${({ item }) => item.desktop.paddingTop};
gap: ${({ item }) => item.desktop.gap};
display: ${({ item }) => item.desktop.display};
justify-content: ${({ item }) => item.desktop.justifyContent};
align-items: baseline;

@media (max-width: 767px) {
    flex-direction: ${({ item }) => item.mobile.flexDirection};
}
`;

export const MidLeftContainer = styled.form`
display: ${({ item }) => item.desktop.display};
grid-template-rows: ${({ item }) => item.desktop.gridTemplateRows};
width: ${({ item }) => item.desktop.width};
@media (max-width:767px) {
    order: ${({ item }) => item.mobile.order};;
}
`;
export const MidRightContainer = styled.div`
`;

export const MidLeftList = styled.div`
margin-bottom: ${({ item }) => item.desktop.marginBottom};
`;

export const FormButton = styled.button`
`;

export const MidRightContent = styled.div`
display: ${({ item }) => item.desktop.display};
grid-template-columns: ${({ item }) => item.desktop.gridTemplateColumns};
justify-content: ${({ item }) => item.desktop.justifyContent};
gap: ${({ item }) => item.desktop.gap};
margin-bottom: ${({ item }) => item.desktop.marginBottom};
align-items: ${({ item }) => item.desktop.alignItems};

`;

export const IconOutline = styled.div`
border:  ${({ item }) => item.desktop.border};
border-radius: ${({ item }) => item.desktop.borderRadius};
padding: ${({ item }) => item.desktop.padding};

`;


export const MidRightImg = styled.div`
    margin-top:${({ item }) => item.desktop.marginTop};
    width: ${({ item }) => item.desktop.width};
    height: ${({ item }) => item.desktop.height};
    max-width: ${({ item }) => item.desktop.maxWidth};
`;
export const IFrame = styled.iframe`
    width: ${({ item }) => item.desktop.width};
    height: ${({ item }) => item.desktop.height};
`;