import styled from "styled-components";
export const BlogThemeContainer = styled.div`
 min-width: 1px;
 background: ${({ item }) => item?.desktop?.background} ;
 padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`;
export const MainContent = styled.div`
    display:${({ item }) => item.desktop.display} ;
    grid-template-columns: ${({ item }) => item.desktop.gridtemplateColumns};
    gap: ${({ item }) => item.desktop.gap};
    margin-top: ${({ item }) => item.desktop.marginTop};
    width: ${({ item }) => item.desktop.width};
    @media screen and (max-width:1024px) {
      grid-template-columns: ${({ item }) => item.tablet.gridtemplateColumns};
    }
    @media screen and (max-width:768px) {
      grid-template-columns: ${({ item }) => item.mobile.gridtemplateColumns};
    }
  `;
export const BlogCard = styled.div`
    overflow: ${({ item }) => item.desktop.overflow};
    cursor: ${({ item }) => item.desktop.cursor};
    position: ${({ item }) => item.desktop.position};

    background:${({ item }) => item?.desktop?.background};
    padding: ${({ item }) => item?.desktop?.padding.paddingTop};
    border-style : ${({ item }) => item?.desktop?.borderStyle};
    border-width : ${({ item }) => item?.desktop?.borderWidth};
   border-color: ${({ item }) => item?.desktop?.borderColor};
    &::before {
      width:  ${({ item }) => item?.desktop?.before?.width};
      height: ${({ item }) => item?.desktop?.before?.height};
      background: ${({ item }) => item?.desktop?.before?.background};
    }
  `;
export const BlogImage = styled.div`
    width: ${({ item }) => item.desktop.width};
    height: ${({ item }) => item.desktop.height};
   
  `;
export const BlogContent = styled.div`
    position: ${({ item }) => item.desktop.position};
    bottom: ${({ item }) => item.desktop.bottom};
    padding: ${({ item }) => item.desktop.padding};
   
  `;