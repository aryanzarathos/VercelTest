import styled from "styled-components";

export const Container4 = styled.div`
margin-bottom: 126px;
`;
export const CardContainer1 = styled.div`
position: relative;
margin-top: 11px;
padding: 30px 20px 33px 36px;
border-radius: 20px;
box-shadow: 0px 8px 20px 2px rgba(0, 0, 0, 0.08);
margin: 10px;

p {
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  color: #202020;
 
}
`;

export const ProfileContainer = styled.div`
display: flex;
margin-bottom: 16px;
`;
export const CardImgcontainer = styled.figure`
width: 57px;
height: 57px;
border-radius: 50%;
margin-right: 16px;
`;
export const NameContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 60%;

h2 {
  font-size: 16px;
  line-height: 21.79px;
  font-weight: 700;
  color: #000000;
}

p {
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  color: #202020;
  
}
`;
export const ColonBlack = styled.img`
height: 24.53px;
width: 24px;
cursor: pointer;
position: absolute;
right: 24px;
`;
export const InnerImg = styled.img`
max-width: 100%;
display: block;
`;
export const Containers = styled.div`
margin-bottom: 100px;
.slick-dots li button:before{
  font-size: 10px;
}
.slick-dots li{
  margin: 0px 2px;
}
.slick-next {
  right: 0px;
  width: 40px;
  height: 40px;
  @media screen and (max-width: 800px) {
    right: 0px; 
  }
}
  
.slick-prev {
  z-index: 1;
  left: 0px;
  width: 40px;
  height: 40px;
  @media screen and (max-width: 800px) {
    left: 5px; 
  }

}
 
.slick-prev:before {
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  transform: rotate(135deg);
  color: transparent;
  width: 12px;
  height: 12px;
  top: 12px;
  left: 12px;
}

.slick-next:before {
  font-size: 40px;
  border-right: 2px solid #000000;
  border-bottom: 2px solid #000000;
  color: transparent;
  width: 12px;
  height: 12px;
  top: 12px;
  left: 8px;
  transform: rotate(-45deg);
}

`;

export const BlockTitle = styled.div`
text-align: center;
margin-bottom: 36px;
padding: 0 18% 0 18%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 700px) {
  padding: 0;
}


h1 {
  font-size: 24px;
  font-weight: 500;
  line-height: 31.88px;
  margin-bottom: 8px;
}

p {
  font-size: 16px;
  font-weight: 500;
  line-height: 21.25px;
  @media screen and (max-width: 400px) {
    text-align: start;
  }
}
`;


// export const QuatationMarkContainer = styled.div`
//   position: absolute;
//   top:75%;
//   right: 0;
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   background-color: #fff;
// `

// export const QuatationMark = styled.div`
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   background-color: #000;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%,-50%);
//   svg {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%,-50%);
//         width: 16px;
//         height: 12px;
//         fill: red;
//   }
// `
