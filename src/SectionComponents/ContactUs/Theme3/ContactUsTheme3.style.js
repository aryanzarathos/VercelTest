import styled from "styled-components";

export const SubmitSection2 = styled.div`
position: ${({item})=>item?.desktop?.position};
height:${({item})=>item?.desktop?.height} ;
  /* display: flex;
  gap: 175px;
  padding-bottom: 240px;

  @media screen and (max-width: 1040px) {
    height: auto;
    width: auto;
    gap: 10px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    gap: 50px;
    padding-bottom: 50px;


  } */
`;
// export const SubmitSection2LT = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   gap: 34px;

//   @media screen and (max-width: 1040px) {
//     height: auto;
//     width: 50%;
//     gap: 10px;
//   }

//   @media screen and (max-width: 800px) {
//     width: 100%;
//     height: auto;
//   }

//   h1 {
//     max-width: 100%;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }

//   p {
//     font-size: 16px;
//     font-weight: 400;
//     line-height: 28px;
//       color:#000000;
//     max-width: 100%;
//     display: -webkit-box;
//     max-width: 100%;
//     -webkit-line-clamp: 3;
//     -webkit-box-orient: vertical;
//     overflow: hidden;

//     @media screen and (max-width: 1000px) {
//       font-size: 14px;
//     }
//   }

//   input {
//     border: none;
//    background-color:#F5F5F5;
//   }

//   textarea {
//    background-color:#F5F5F5;
//     border: none;
//   }

  
// `;
// export const H1 = styled.h1`
//   font-size: 32px;
//   font-weight: 600;
//   line-height: 48px;

//   @media screen and (max-width: 1000px) {
//     font-size: 28px;
//     line-height: 35px;
// }
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 10px 0px 9px 16px;
//   border: 1px solid rgba(32, 32, 32, 0.2);

//   &::placeholder {
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 21px;
//     color:rgba(32, 32, 32, 0.4);

//     @media screen and (max-width: 1000px) {
//       font-size: 12px;
//     }

//     @media screen and (max-width: 700px) {
//       font-size: 10px;
//     }

//     @media screen and (max-width: 600px) {
//       font-size: 14px;
//     }
//   }

//   @media screen and (max-width: 1000px) {
//     font-size: 11px;
//     padding: 10px 10px 10px 10px;
//   }
// `;
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

// export const SubmitSection2RT = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: flex-end;

//   @media screen and (max-width: 1040px) {
//     height: auto;
//     width: 50%;
//   }

//   @media screen and (max-width: 800px) {
//     width: 100%;
//     height: auto;
//   }
// `;

// export const SubmitSection2InnerImg = styled.figure`
//   width: 521px;
//   height: 415px;

//   @media screen and (max-width: 1000px) {
//     height: auto;
//     width: auto;
//   }

//   img {
//     max-width: 100%;
//   width: 100%;
//   max-height: 100%;
//   height: 100%;
//   display: block;
//   object-fit: cover;
//   object-position: center;
//   }
// `;
// export const InnerImg = styled.img`

// `;




// export const ContactButton = styled.button`
//  font-size: 16px;
//     font-weight: 400;
//     line-height: 24px;
//     width: 184px;
//     height: 48px;
    
//      background-color:#202020;
//    color:#FFFFFF;
//     border: none;
//     &:hover{
//       cursor: pointer;
//       background-color: #3a3a3a;
//       transition: 1.15s;
//     }

//     @media screen and (max-width: 1000px) {
//       height: 35px;
//       width: 150px;
//       font-size: 14px;
//     }
  
// `;
   