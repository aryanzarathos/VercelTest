import styled from "styled-components";

export const SectionBlue = styled.figure`
  min-height: 320px;
  height: 320px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  @media screen and (max-width: 768px) {
    min-height: auto;
  }
  img{
      width:100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
  }
`;

// export const Image2 = styled.img`
//   width:100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;
// `;

export const InnerContent = styled.figcaption`  
position: absolute;
top: 72px;
width: 100%;
margin-bottom: 20px;
padding: 0px 40px;
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;

@media screen and (max-width: 1440px) {
  min-height: auto;
}

@media screen and (max-width: 768px) {
  min-height: auto;
  }
`;

export const Text = styled.div`
  width: 442px;
  display: flex;
  flex-direction: column;
  gap: 20px;

 @media screen and (max-width: 1100px) {
    max-width: 400px;
 }
 @media screen and (max-width: 950px) {
    width: 350px;
 }
 @media screen and (max-width: 835px) {
    width: 300px;
 }
 @media screen and (max-width: 700px) {
    width: 100%;
 }

 h2 {
    font-size: 24px;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
 p {
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    max-width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: 1440px) {
      max-width: 100%;
    }

   @media screen and (max-width: 768px) {
      max-width: 100%;
     font-size: 12px;
     line-height: auto;
    }

   @media screen and (max-width: 420px) {
      font-size: 57%;
      line-height: 15px;
      font-weight: 400;
      max-width: 100%;
    }  
  }
`;
export const Button = styled.button`
background-color: #000000;
color: #E5E5E5;
  width: 120px;
  padding: 10px 30px;
  border: none;

  &:hover {
    cursor: pointer;
    background: #2b2b2b;
    transition-duration: 0.125s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all; 
  }
`;
export const CallText = styled.div`
  text-align: center;
  /* h2{
    FontWeight: ,
    FontSize:,
    LineHeight: ,
    FontFamily: ,
    FontStyle:,
    LetterSpacing: ,
    Color: ,
    Alignment: ,
    TextTransform: , 
    } */
`;
export const CallSubText = styled.div`
  text-align: center;
  /* h3{
    FontWeight: ,
    FontSize:,
    LineHeight: ,
    FontFamily: ,
    FontStyle:,
    LetterSpacing: ,
    Color: ,
    Alignment: ,
    TextTransform: ,
  } */
`;