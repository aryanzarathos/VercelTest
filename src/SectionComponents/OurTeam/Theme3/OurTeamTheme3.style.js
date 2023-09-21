import styled from "styled-components";

export const MainTeamWrapper = styled.div`
position:${({ item }) => item?.desktop?.position};
min-width: 1px;

background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;

`;

export const ContainerFirst = styled.div`
  display:${({ item }) => item.desktop.display};
  grid-template-columns: repeat( ${({ gridCount }) => gridCount.desktop.gridCount},1fr) ;
  width: ${({ item }) => item.desktop.width};
  gap:${({ item }) => item.desktop.gap};
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat( ${({ gridCount }) => gridCount.tablet.gridCount},1fr) ;
  }
  `;

