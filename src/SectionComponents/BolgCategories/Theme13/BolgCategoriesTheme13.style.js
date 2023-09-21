import styled from "styled-components";

export const MainWrapper = styled.div`
    background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    display: ${({ item }) => item?.desktop?.display};
    flex-direction :  ${({ item }) => item?.desktop?.flexDirection};
    gap: ${({ item }) => item?.desktop?.gap};
`

export const MainContent = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
    gap:${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};

    background:${({ item }) => item?.desktop?.background};
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop};
    border-style : ${({ item }) => item?.desktop?.borderStyle};
    border-width : ${({ item }) => item?.desktop?.borderWidth};
    border-color: ${({ item }) => item?.desktop?.borderColor};

  
    @media screen and (max-width: 767px) {
      grid-template-columns: ${({ item }) => item?.mobile?.gridTemplateColumns};
    }
  `;
export const MainImage = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    
  `;
export const RightContent = styled.div`
    width:${({ item }) => item?.desktop?.width};
    overflow: ${({ item }) => item?.desktop?.overflow};
  `;
export const ProfileContent = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    gap:  ${({ item }) => item?.desktop?.gap};
    margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
    
  `;
export const ProfileImage = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
  `;
export const BlogContent = styled.div`
    .blogDec {
        color:${({ paraStyle }) => paraStyle?.desktop?.color} !important;
    font-size: ${({ paraStyle }) => paraStyle?.desktop?.fontSize} !important;
    font-weight: ${({ paraStyle }) => paraStyle?.desktop?.fontWeight}  !important;
    font-family: ${({ paraStyle }) => paraStyle?.desktop?.fontFamily} !important;
    line-height:  ${({ paraStyle }) => paraStyle?.desktop?.lineHeight} !important;
    font-style:  ${({ paraStyle }) => paraStyle?.desktop?.fontStyle} !important;
    p {
        color:${({ paraStyle }) => paraStyle?.desktop?.color} !important;
    font-size: ${({ paraStyle }) => paraStyle?.desktop?.fontSize} !important;
    font-weight: ${({ paraStyle }) => paraStyle?.desktop?.fontWeight}  !important;
    font-family: ${({ paraStyle }) => paraStyle?.desktop?.fontFamily} !important;
    line-height:  ${({ paraStyle }) => paraStyle?.desktop?.lineHeight} !important;
    font-style:  ${({ paraStyle }) => paraStyle?.desktop?.fontStyle} !important;
    span {
        color:${({ paraStyle }) => paraStyle?.desktop?.color} !important;
    font-size: ${({ paraStyle }) => paraStyle?.desktop?.fontSize} !important;
    font-weight: ${({ paraStyle }) => paraStyle?.desktop?.fontWeight}  !important;
    font-family: ${({ paraStyle }) => paraStyle?.desktop?.fontFamily} !important;
    line-height:  ${({ paraStyle }) => paraStyle?.desktop?.lineHeight} !important;
    font-style:  ${({ paraStyle }) => paraStyle?.desktop?.fontStyle} !important;
    }
    }
    }
  `;
