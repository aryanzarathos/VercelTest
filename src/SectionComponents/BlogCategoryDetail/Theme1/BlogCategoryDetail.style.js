import styled from "styled-components";

export const BlogCategoryDetailContainer = styled.div`
`;
export const TextWrap = styled.div`
`;
export const HeaderBlogGridWrap = styled.div`
display: ${({ item }) => item?.desktop?.display};
grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
align-items: ${({ item }) => item?.desktop?.alignItems};
gap: ${({ item }) => item?.desktop?.gap};
margin-bottom: ${({ item }) => item?.desktop?.marginBottom};

@media screen and (max-width: 768px) {
      grid-template-columns: ${({ item }) => item?.mobile?.gridTemplateColumns};
    }
`;
export const ImageContainer = styled.section`
    height: ${({ item }) => item?.desktop?.height};
    width: ${({ item }) => item?.desktop?.width};
`;
export const MainSection = styled.section``;

export const MainContent = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
    grid-gap: ${({ item }) => item?.desktop?.gridGap};
    margin-top: ${({ item }) => item?.desktop?.marginTop};
  `;

export const BlogCard = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
    grid-gap: ${({ item }) => item?.desktop?.gridGap};
    @media screen and (max-width: 768px) {
      grid-template-columns: ${({ item }) => item?.mobile?.gridTemplateColumns};
    }
  `;
export const MainImage = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
  `;
export const BlogContent = styled.div`
    
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