import styled from "styled-components"


export const AboutSectionTheme = styled.div`
    display : flex;
    align-items: center;
    padding: 70px 0 70px 0;
    gap: 20px;
    @media screen and (max-width:1000px) {
        flex-wrap: wrap;
    }
`
export const SectionLt = styled.div`
    width: 50%;
    @media screen and (max-width:1000px) {
        width: 100%;
    }
`
export const SectionRt = styled.div`
    display: block;
    width: 50%;
    padding: 0 0 0 20px ;
    @media screen and (max-width:1000px) {
        width: 100%;
        padding: 0;
    }
`
export const ImgSection = styled.div`
    display: contents;
    height: 305px;
    width: 100%;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    overflow: hidden;
    img{
      width: 100% !important;
      height: 100% !important;
    }
`
export const InnerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
`
export const AboutHeading = styled.p`
    font-size: 48px;
    line-height: 47.74px;
    color: #000000;
    font-family:  'Futura Md BT',sans-serif;
    font-weight: 700;
    margin-bottom: 42px;
    span{
        font-weight: 400;
    }
    @media screen and (max-width:600px) {
        font-size: 38px;
    }
`
export const FirstPara = styled.p`
    font-size: 24px;
    line-height: 28.77px;
    color: #000000;
    font-family:  'Futura Md BT',sans-serif;
    font-weight: 400;
    @media screen and (max-width:600px) {
        font-size: 18px;
    }
`
export const SecondPara = styled.p`
    font-size: 24px;
    line-height: 28.77px;
    color: #000000;
    font-family:  'Futura Md BT',sans-serif;
    font-weight: 400;
    @media screen and (max-width:600px) {
        font-size: 18px;
    }
`
export const ThirdPara = styled.p`
    font-size: 24px;
    line-height: 28.77px;
    color: #000000;
    font-family:  'Futura Md BT',sans-serif;
    font-weight: 400;
    @media screen and (max-width:600px) {
        font-size: 18px;
    }
`
export const ConnectSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 50px;

  @media screen and (max-width: 1040px) {
    height: auto;
    width: auto;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 50px;
    gap: 50px;
}

`;

export const ConnectSectionLT = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 20px 50px 20px 50px;

  @media screen and (max-width: 1200px) {
    padding: 20px;
    gap: 15px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
    line-height: 31.83px;
    color:#000000;
    max-width: 100%;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
    span{
      font-size: 32px;
    font-weight: 700;
    line-height: 31.83px;
    color:#000000;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color:#000000;
    max-width: 100%;
   

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 250px;
`;
export const CallIconWrap = styled.div`
  display: flex;
  gap: 18.5px;
  align-items: center;



  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 17.07px;
    color:#000000;
    max-width: 100%;
    

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

// export const CallIcon =styled.i`
// -webkit-mask: url(${CallIconsvg}) no-repeat center;
// mask-image: url(${CallIconsvg}) no-repeat center;
// display: block;
// width: 15px;
// height: 15px;
// background-color: #000;
// `;

// export const MailIcon =styled.i`
// -webkit-mask: url(${MailIconsvg}) no-repeat center;
// mask-image: url(${MailIconsvg}) no-repeat center;
// display: block;
// width: 15px;
// height: 15px;
// background-color: #000;
// `

// export const LocationIcon =styled.i`
// -webkit-mask: url(${LocationIconsvg}) no-repeat center;
// mask-image: url(${LocationIconsvg}) no-repeat center;
// display: block;
// width: 15px;
// height: 15px;
// background-color: #000;
// `
// export const InnerImg = styled.img`
//   width: 100%;
//   height: 100%;
//   display: block;
//   object-fit: cover;
//   object-position: center;
// `;
export const MsgIcon = styled.div`
  display: flex;
  gap: 18.5px;
  align-items: center;

  img {
    width: 16.67px;
    height: 15.83px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color:#000000;
    max-width: 100%;
    

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
export const LocationIconWrap = styled.div`
  display: flex;
  gap: 18.5px;
  align-items: center;

  img {
    width: 11.67px;
    height: 16.67px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: $colorh1black;
    max-width: 100%;
    display: -webkit-box;
    max-width: 100%;
    
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

export const ContactMapInnerImg = styled.figure`
  width: 100%;
  height: 179px;
  padding-left: 25px;

`;


export const ConnectSectionRT = styled.div`
  width: 50%;
  height: 100vh;
  background-color:#F4F4F4;
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding: 20px 78px 20px 72px;
  justify-content: center;

  @media screen and (max-width: 1040px) {
    padding: 20px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;

  }
  

  h3 {
  font-size: 20px;
  font-weight: 700;
  color:#000000;
  max-width: 100%;
 
  }

  input {
 background-color:#F5F5F5;
  }

  textarea {
 background-color:#F5F5F5;
  }

  button {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color:#FFFFFF;
background-color:#254927;
  width: 184px;
  height: 48px;
  border: none;
  &:hover{
    cursor: pointer;
    background: #10f01b;
    transition: 1.15s;
  }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0px 9px 16px;
  border: 1px solid rgba(32, 32, 32, 0.2);

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color:rgba(32, 32, 32, 0.4);
  }
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color:#000000;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 0px 87px 16px;
  border: 1px solid rgba(32, 32, 32, 0.2);

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color:rgba(32, 32, 32, 0.4);
  }

  @media screen and (max-width: 1000px) {
    padding: 10px 0px 0px 14px;
  }
`;


export const Headertext = styled.p`
    font-size: 40px;
    line-height: 36px;
    font-weight: 700;
    color: #003459;
    text-align: center;
    font-family: "Gilroy-Bold", sans-serif;
    margin-bottom: 64px;
`

export const ImageSection = styled.div`
    display: grid;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: repeat(4,1fr);
    @media screen and (max-width: 1250px) {
        grid-template-columns: repeat(3,1fr);
}
    @media screen and (max-width: 950px) {
        grid-template-columns:  repeat(2,1fr);
    @media screen and (max-width: 650px) {
        grid-template-columns: 1fr;
    }
}
`
export const ImageSectionEight = styled.div`
text-align: center;
margin-bottom: 50px;
position: relative;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;
export const ImageContainerEight = styled.div`
border-radius: 50%;
height: 274px;
width: 274px;
display: block;
overflow: hidden;
margin-bottom: 16px;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
`;
export const NameEight = styled.p`
font-size: 20px;
font-weight: 500;
line-height: 26.56px;
color: #202020;
margin-bottom: 8px;
font-family: 'Nunito', sans-serif;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const PositionEight = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 18.59px;
color: #202020;
font-family: 'Nunito', sans-serif;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const InnerImgTeam = styled.img`
display: block;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
`;

