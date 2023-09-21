import styled from "styled-components";

export const MainSection = styled.section`
min-width: 1px;
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`;

export const MainContent = styled.div`

    display: ${({ item }) => item.desktop.display} ;
    flex-wrap: ${({ item }) => item.desktop.flexWrap};
    gap: ${({ item }) => item.desktop.gap};
    grid-template-columns: repeat(${({gridCount}) => gridCount}, 1fr);
  `;

export const MainImage = styled.div`
    width: ${({ item }) => item.desktop.width};
    height: ${({ item }) => item.desktop.height};
    flex-grow: ${({ item }) => item.desktop.flexGrow};
    flex-basis: calc(100%/${({ gridCount }) => gridCount.desktop.gridCount} - ${({ item2 }) => item2.desktop.gap});
    background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;
    @media screen and (max-width: 1024px) {
      flex-basis: calc(100%/${({ gridCount }) => gridCount.tablet.gridCount} - ${({ item2 }) => item2.desktop.gap});
    }

    @media screen and (max-width: 767px) {
      flex-basis: calc(100%/${({ gridCount }) => gridCount.mobile.gridCount} - ${({ item2 }) => item2.desktop.gap});
      height: ${({ item }) => item.mobile.height};
    }
  `;