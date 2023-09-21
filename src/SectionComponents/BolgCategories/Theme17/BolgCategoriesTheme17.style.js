import styled from "styled-components";

export const MainSection = styled.section``;

export const MainContent = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
    grid-gap: ${({ item }) => item?.desktop?.gridGap};
    margin-top: ${({ item }) => item?.desktop?.marginTop};
     background: ${({ item }) => item?.desktop?.background} ;
 padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;

  `;

export const BlogCard = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
    grid-gap: ${({ item }) => item?.desktop?.gridGap};
    background:${({ item }) => item?.desktop?.background};
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop};
    border-style : ${({ item }) => item?.desktop?.borderStyle};
    border-width : ${({ item }) => item?.desktop?.borderWidth};
   border-color: ${({ item }) => item?.desktop?.borderColor};
    @media screen and (max-width: 768px) {
      grid-template-columns: ${({ item }) => item?.mobile?.gridTemplateColumns};
    }
  `;
export const MainImage = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
  `;
export const BlogContent = styled.div`
.se-component {
  display:none;
} 


.blogDec{
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


         p {
        figure , image {
            display: none;
        }
     }
  `;
export const Button = styled.button`
    font-family: ${({ item }) => item?.desktop?.fontFamily};
    font-style: ${({ item }) => item?.desktop?.fontStyle};
    font-weight: ${({ item }) => item?.desktop?.fontWeight};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    color: ${({ item }) => item?.desktop?.color};
    padding: ${({ item }) => item?.desktop?.padding};
    background: ${({ item }) => item?.desktop?.background};
    border: ${({ item }) => item?.desktop?.border};
    cursor: ${({ item }) => item?.desktop?.cursor};
    transition: ${({ item }) => item?.desktop?.transition};
    &:hover {
      background: ${({ item }) => item?.desktop?.hover?.background};
      color: ${({ item }) => item?.desktop?.hover?.color};
    }
  `;