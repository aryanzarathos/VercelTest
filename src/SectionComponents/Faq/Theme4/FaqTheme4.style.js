import styled from "styled-components";

export const MainConatainer = styled.div`
position: ${({ item }) => item?.desktop?.position};
background: ${({ item }) => item?.desktop?.background};
padding: ${({ item }) => item?.desktop?.padding?.paddingTop};
`;
export const HeadingWrapper = styled.div`
position: ${({ item }) => item?.desktop?.position};
  /* h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    text-align: left;
    color: #202020;
    letter-spacing: inherit;
    word-spacing: inherit;
    @media screen and (max-width: 991px) {
      font-size: 42px;
      line-height: 55px;
    }
    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 30px;
      line-height: 35px;
    }
  }
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: left;
    color: #202020;
    letter-spacing: inherit;
    word-spacing: inherit;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  } */
`;
export const FaqWrapper = styled.div`
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
`;
export const FaqWrap = styled.div`
  cursor: ${({ item }) => item?.desktop?.cursor};
  padding: ${({ item }) => item?.desktop?.padding?.paddingTop};
  background: ${({ item }) => item?.desktop?.background};
  border: ${({item})=>item?.desktop?.borderWidth};
  border-style: ${({item})=>item?.desktop?.borderStyle};
  border-color: ${({item})=>item?.desktop?.borderColor};
  border-radius:${({ item }) => item?.desktop?.borderRadius};
  margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
  &:hover{
    background: ${({ item }) => item?.desktop?.hover.background};

  }
`;
export const TitleWrapper = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  /* h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
  } */
`;

// export const Description = styled.div`
//   p {
//     color: rgba(32, 32, 32, 0.6);
//     font-family: "Poppins";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 21px;
//     margin-bottom: 0;
//     opacity: 0;
//     transition: all 0.3s;
//     height: 0;
//   }
//   .show {
//     height: auto;
//     margin-bottom: 18px;
//     opacity: 1;
//   }
// `;
export const MainContent = styled.div`
  /* display: ${({ item }) => item?.desktop?.display}; */
  /* grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
  gap: ${({ item }) => item?.desktop?.gap}; */
  width:${({ item }) => item?.desktop?.width};
  /* justify-content: ${({ item }) => item?.desktop?.justifyContent}; */
  @media screen and (max-width: 1024px) {
  grid-template-columns: ${({ item }) => item?.tablet?.gridTemplateColumns};
  }
  @media screen and (max-width: 767px) {
  grid-template-columns: ${({ item }) => item?.mobile?.gridTemplateColumns};
    
  }
`;
export const Description = styled.div` 
      transition: ${({ item }) => item?.desktop?.transition};
         opacity: ${({ item }) => item?.desktop?.opacity};
    height: ${({ item }) => item?.desktop?.height};
    visibility: hidden;
  /* p{
    font-family: 'Futura Md BT',sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(32, 32, 32, 0.6);
 
} */
&.show{
    padding-top: 4px;
    height: auto;
    opacity: 1;
    visibility: visible;
} `;