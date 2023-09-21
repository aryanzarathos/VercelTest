import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  display:  ${({ item }) => item.desktop.display};
  grid-template-columns: ${({ item }) => item.desktop.gridTemplateColumns};
  gap: ${({ item }) => item.desktop.gap};
  margin-top: ${({ item }) => item.desktop.marginTop};


  @media(max-width:768px) {
    grid-template-columns: ${({ item }) => item.mobile.gridTemplateColumns};
  }

`
export const ImageWrapper = styled.div`
   width: ${({ item }) => item.desktop.width};
   height: ${({ item }) => item.desktop.height};

`



export const ContentLeftWrapperexport = styled.div`

`
export const ContentRightWrapper = styled.div`

`
export const BookButton = styled.button`
    padding: ${({ item }) => item.desktop.padding};
    outline: ${({ item }) => item.desktop.outline};
    font-size: ${({ item }) => item.desktop.fontSize};
    background:${({ item }) => item.desktop.background};
    color:${({ item }) => item.desktop.textAlign};
    border: ${({ item }) => item.desktop.textAlign};
    margin-top: ${({ item }) => item.desktop.textAlign};
    border-radius: ${({ item }) => item.desktop.textAlign};
    width: ${({ item }) => item.desktop.textAlign};
    font-weight: ${({ item }) => item.desktop.textAlign};
    cursor: ${({ item }) => item.desktop.textAlign};

`

export const HeadingWrapper = styled.div`
     margin-bottom: ${({ item }) => item.desktop.marginBottom};
`

export const ParaWrapper = styled.div`

`


