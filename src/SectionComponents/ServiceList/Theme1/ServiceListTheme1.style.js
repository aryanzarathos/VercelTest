import { styled } from "styled-components";

export const ServiceListWrapper = styled.div`
  width: ${({ item }) => item.desktop?.width};
  display: ${({ item }) => item.desktop?.display};
  align-items: ${({ item }) => item.desktop?.alignItems};
  justify-content:${({ item }) => item.desktop?.justifyContent};
  height: ${({ item }) => item.desktop?.height};
  margin-top: ${({ item }) => item.desktop?.margin?.marginTop};
  margin-right: ${({ item }) => item.desktop?.margin?.marginRight};
  margin-bottom: ${({ item }) => item.desktop?.margin?.marginBottom};
  margin-left: ${({ item }) => item.desktop?.margin?.marginLeft};
  @media (max-width: 767px) {
    /* height: ${({ item }) => item.mobile.height}; */
  }
`;
export const ImageWrapper = styled.div`
height:${({ item }) => item.desktop?.height};
width: ${({ item }) => item.desktop?.width};
`
export const ServiceListCard = styled.div`
  max-width: ${({ item }) => item.desktop?.maxWidth};
  display: ${({ item }) => item.desktop?.display};
  flex-direction: ${({ item }) => item.desktop?.flexDirection};
  gap: ${({ item }) => item.desktop?.gap};
  background:${({ item }) => item.desktop?.background};
  box-shadow: ${({ item }) => item.desktop?.boxShadow};

`;
export const Cardbody = styled.div`
  padding-top: ${({ item }) => item.desktop?.padding?.paddingTop};
  padding-right: ${({ item }) => item.desktop?.padding?.paddingRight};
  padding-bottom: ${({ item }) => item.desktop?.padding?.paddingBottom};
  padding-left: ${({ item }) => item.desktop?.padding?.paddingLeft};
  
`;
export const FormFieldwrap = styled.div`
   padding-bottom: ${({ item }) => item.desktop?.padding?.paddingBottom};
  .cstmSelectWrap{
    .form-group {
      &::before{
        left: auto;
        right: 16px;
        bottom: 50%;
      }
      .dropbtn{
        border-width: ${({ item2 }) => item2.desktop?.borderWidth};
        border-style: ${({ item2 }) => item2.desktop?.borderStyle};
        border-radius: ${({ item2 }) => item2.desktop?.borderRadius};
        border-color: ${({ item2 }) => item2.desktop?.borderColor};
        font-size: ${({ item2 }) => item2.desktop?.fontSize};
        font-family: ${({ item2 }) => item2.desktop?.fontFamily};
        font-style: ${({ item2 }) => item2.desktop?.fontStyle};
        font-weight: ${({ item2 }) => item2.desktop?.fontWeight};
        color: ${({ item2 }) => item2.desktop?.color};
        line-height: ${({ item2 }) => item2.desktop?.lineHeight};
        margin-top: ${({ item2 }) => item2.desktop?.margin.marginTop};
        height: auto;
        padding-left: ${({ item2 }) => item2.desktop?.padding?.paddingLeft};
      }
    }
  }
`;
export const TermConditionWrap = styled.div`
   
`
