import styled from "styled-components";

export const PageNotFoundSubContainer = styled.div`
display: ${({ item }) => item.desktop.display};
grid-template-columns: ${({ item }) => item.desktop.gridTemplateColumns};
place-items: ${({ item }) => item.desktop.placeItems};
margin-top: ${({ item }) => item.desktop.margin.marginTop};
margin-right: ${({ item }) => item.desktop.margin.marginRight};
margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};
margin-left: ${({ item }) => item.desktop.margin.marginLeft};
`;

export const SubContainerHeading = styled.div`
display: ${({ item }) => item.desktop.display};
flex-wrap: ${({ item }) => item.desktop.flexWrap};
gap: ${({ item }) => item.desktop.gap};
align-items: ${({ item }) => item.desktop.alignItems};
justify-content: ${({ item }) => item.desktop.justifyContent};
`;

export const SubContainerImg = styled.div`
width:  ${({ item }) => item.desktop.width};
height:  ${({ item }) => item.desktop.heigth};
margin-top:  ${({ item }) => item.desktop.margin.marginTop};
`;
