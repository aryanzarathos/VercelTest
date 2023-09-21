import styled from "styled-components";

export const SubmitSection1 = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  width: ${({ item }) => item?.desktop?.width};
  gap: ${({ item }) => item?.desktop?.gap};
  /* overflow: ${({ item }) => item?.desktop?.overflow}; */

  @media screen and (max-width: 1024px) {
    height: ${({ item }) => item?.tablet?.height};
    width: ${({ item }) => item?.tablet?.width};
    gap: ${({ item }) => item?.tablet?.gap};
  }

  @media screen and (max-width: 767px) {
    flex-wrap: ${({ item }) => item?.mobile?.flexWrap};
    gap: ${({ item }) => item?.mobile?.gap};
  }
`;
// export const SubmitSection1LT = styled.figure`
//   width: ${({ item }) => item?.desktop?.width};
//   max-height: ${({ item }) => item?.desktop?.maxHeight};

//   @media screen and (max-width: 1040px) {
//     height: ${({ item }) => item?.tablet?.height};
//     width: ${({ item }) => item?.tablet?.width};
//   }

//   @media screen and (max-width: 800px) {
//     width: ${({ item }) => item?.mobile?.width};
//   }
// `;

// export const H1 = styled.h1`
//     font-size: 32px;
//     font-weight: 600;
//     line-height: 48px;

//     @media screen and (max-width: 1000px) {
//       font-size: 28px;
//       line-height: 35px;
//   }
//   `;
export const SubmitSection1RT = styled.div`
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  display: ${({ item }) => item?.desktop?.display};
  flex-direction: ${({ item }) => item?.desktop?.flexDirection};
  gap: ${({ item }) => item?.desktop?.gap};

  @media screen and (max-width: 1040px) {
    height: ${({ item }) => item?.tablet?.height};
    width: ${({ item }) => item?.tablet?.width};
    gap: ${({ item }) => item?.tablet?.gap};
  }

  @media screen and (max-width: 800px) {
    width: ${({ item }) => item?.mobile?.width};
    height: ${({ item }) => item?.mobile?.height};
  }

  /* h2 {

  } */

  button {
    /* font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 184px;
    height: 48px;
     background-color:#202020;
     color:#FFFFFF;
    border: none; */
    &:hover {
      /* cursor: pointer;
      background-color: #4a4a3a;
      transition: 1.15s; */
    }
    /* @media screen and (max-width:800px) {
        width: 100%;
    } */
  }
`;

export const FeedText = styled.div`
  padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};

  @media screen and (max-width: 1000px) {
    padding-bottom: ${({ item }) => item?.tablet?.padding?.paddingBottom};
  }
`;
// export const TextArea = styled.textarea`
//   width: 100%;
//   padding: 12px 0px 87px 16px;
//   border: 1px solid rgba(32, 32, 32, 0.2);

//   &::placeholder {
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 21px;
//     color:rgba(32, 32, 32, 0.4);
//   }

//   @media screen and (max-width: 1000px) {
//     padding: 10px 0px 0px 14px;
//   }
// `;

// export const ContactTxt = styled.div`
//   text-align: center;

//   padding: 60px 0px 55px 0px;
//   max-width: 100%;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   h1 {
//     font-size: 32px;
//     font-weight: 600;
//     line-height: 48px;
//     color:#BA9C00;
//   }
//   h2 {
//     font-size: 24px;
//     font-weight: 600;
//     line-height: 48px;
//     color:#000;
//   }
// `;

export const SubmitSection1RTContent = styled.div`
  position: ${({ item }) => item?.desktop?.position};
`;
export const FormContent = styled.div`
  position: ${({ item }) => item?.desktop?.position};
  .react-tel-input {
    margin-top: 20px;
    .special-label {
      display: block;
      font-size: 16px;
      font-weight: 400;
      color: #000;
      line-height: normal;
      left: 0px;
      top: -22px;
    }
    .form-control {
      height: 40px;
      width: 100%;
    }
  }
`;
