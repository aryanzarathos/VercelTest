import styled from "styled-components";

// export const JustSendSection = styled.div`
//   display: grid;

//   padding-bottom: 240px;
//   gap: 72px;
//   overflow: hidden;

//   @media screen and (max-width: 1040px) {
//     height: auto;
//     width: 100%;
//     gap: 10px;
//     padding-bottom: 100px;
//   }

//   @media screen and (max-width: 800px) {
//     flex-wrap: wrap;
//     gap: 50px;
//     padding-bottom: 50px;
//   }
// `;

// export const JustSendSectionLT = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 36px;

//   @media screen and (max-width: 1040px) {
//     height: auto;
//     width: 50%;
//     gap: 20px;
//   }

//   @media screen and (max-width: 800px) {
//     width: 100%;
//     height: auto;
//   }

//   h1 {
//     padding-right: 40%;
//    color:#000000;
//     max-width: 100%;
//     display: -webkit-box;
//     max-width: 100%;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     overflow: hidden;

//     @media screen and (max-width: 1000px) {
//       padding-right: 0;
//     }
//   }


//   button {
//     width: 360px;
//     height: 48px;
//       background-color:#202020;
//     color:#FFFFFF;
//     font-size: 16px;
//     font-weight: 400;
//     line-height: 24px;
//     border: none;
//     &:hover{
//       cursor: pointer;
//       background-color: #3a3a3a;
//       transition: 1.15s;
//     }

//     @media screen and (max-width: 800px) {
//         width: 100%;
//     }
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

// export const InputName = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   gap: 36px;
//   margin-bottom: 30px;
//   @media screen and (max-width:800px) {
//         flex-wrap: wrap;
//     }
// `;
// export const FirstName = styled.div`
//   width: 50%;
//   @media screen and (max-width:800px) {
//         width: 100%;
//     }
// `
// export const SecondName = styled.div`
//   width: 50%;
//   @media screen and (max-width:800px) {
//         width: 100%;
//     }
// `
// export const MobNumber = styled.div`
//   width: 50%;
//   @media screen and (max-width:800px) {
//         width: 100%;
//     }
// `
// export const Email = styled.div`
//   width: 50%;
//   @media screen and (max-width:800px) {
//         width: 100%;
//     }
// `
// export const Label = styled.label`
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 24px;
//   color:#000000;
//   max-width: 100%;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;

//   @media screen and (max-width: 1000px) {
//     font-size: 14px;
//   }
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 10px 0px 9px 16px;
//   border: 1px solid rgba(32, 32, 32, 0.2);

//   &::placeholder {
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 21px;
//       color:rgba(32, 32, 32, 0.4);
//   }
// `;
// export const InputMobEmail = styled.div`
//   width: 100%;
//   display: flex;
//   gap: 36px;
//   @media screen and (max-width:800px) {
//         flex-wrap: wrap;
//     }
// `;
// export const FeedText = styled.div`
//   padding-bottom: 40px;

//   @media screen and (max-width: 1000px) {
//     padding-bottom: 20px;
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
//       color:rgba(32, 32, 32, 0.4);
//   }

//   @media screen and (max-width: 1000px) {
//     padding: 10px 0px 0px 14px;
//   }
// `;
// export const JustSendSectionRT = styled.div`
//   width: 35%;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media screen and (max-width: 1040px) {
//     height: auto;
//     width: 50%;
//   }

//   @media screen and (max-width: 800px) {
//     width: 100%;
//     height: auto;
// }
// `;
// export const MapInnerImg = styled.figure`
//   max-width: 398px;
//   height: 380px;

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
export const JustSendSection = styled.div`
position: ${({item})=>item?.desktop?.position};
height: ${({item})=>item?.desktop?.height};
`;

