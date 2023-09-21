import { styled } from "styled-components";

export const MoreContainer = styled.div`
 
 position: ${({ item }) => item?.desktop?.position};
  left:${({ item }) => item?.desktop?.left};
  width: ${({ item }) => item?.desktop?.width};
  max-width: ${({ item }) => item?.desktop?.maxWidth};
  z-index: 99;
  opacity:${({ item }) => item?.desktop?.opacity};
  visibility:${({ item }) => item?.desktop?.visibility};
  background:${({ item }) => item?.desktop?.background};
  box-shadow: ${({ item }) => item?.desktop?.boxShadow};
  transform: ${({ item }) => item?.desktop?.transform};
  transition: ${({ item }) => item?.desktop?.transition};
  max-height: ${({ item }) => item?.desktop?.maxHeight};
  min-height: ${({ item }) => item?.desktop?.minHeight};
  overflow: ${({ item }) => item?.desktop?.overflow};
  padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
  padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
  padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
  padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
  &::-webkit-scrollbar-thumb {
      background-color: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.backgroundColor};
      border: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.border};
      border-radius: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.borderRadius};
      background-clip: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.backgroundClip};
  }
  &::-webkit-scrollbar {
      width: ${({ item }) => item?.desktop?.webkitScrollbar?.width};
  }`;
export const MoreList = styled.ul`
display:${({ item }) => item?.desktop?.display};
flex-direction:${({ item }) => item?.desktop?.flexDirection};
gap:${({ item }) => item?.desktop?.gap};
`;
export const MoreListItem = styled.li`
display:${({ item }) => item?.desktop?.display};
justify-content:${({ item }) => item?.desktop?.justifyContent};
align-items:${({ item }) => item?.desktop?.alignItems};
svg{
    path{
        stroke:${({ itemDownSvg }) => itemDownSvg?.desktop?.fill}
    }
}

`;
export const MoreSubListItem = styled.li`
display:${({ item }) => item?.desktop?.display};
align-items:${({ item }) => item?.desktop?.alignItems};
gap:${({ item }) => item?.desktop?.gap};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
svg{
    path{
        stroke:${({ itemLeftIcon }) => itemLeftIcon?.desktop?.fill}

    }
}
&.border{
    border-bottom: ${({ itemBorder }) => itemBorder?.desktop?.borderBottom};

}
`;
// export const MoreSubLinkSection = styled.div``;
// export const MoreSubLink = styled.a`
// font-size: 14px;
// line-height: 24px;
// color: #003459;
// padding:4px 16px;
// display: flex;
// justify-content: space-between;
// align-items:center;
// border-left: 1px solid rgba(32, 32, 32, 0.1);
// font-family: 'Gilroy-Regular';

// `;
