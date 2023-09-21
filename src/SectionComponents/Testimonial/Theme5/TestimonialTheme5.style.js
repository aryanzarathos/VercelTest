import styled from "styled-components";

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
export const Container5 = styled.div`
margin-top: 90px;
margin-bottom: 142px;
`;
export const CardContainer2 = styled.div`
padding: 100px 53px 54px 53px;
border-radius: 20px;
box-shadow: 0px 8px 20px 2px rgba(0, 0, 0, 0.08);
text-align: center;
margin: 100px 10px 10px 10px;

p {
  margin-top: 36px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  color: #202020;
 
  }

`;
export const ProfileContainer2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
position: relative;
`;
export const CardImgcontainer2 = styled.figure`
width: 118px;
height: 118px;
border-radius: 50%;
position: absolute;
bottom: 90px;
`;
export const NameContainer2 = styled.div`
text-align: center;

h2 {
  font-size: 16px;
  line-height: 21.79px;
  font-weight: 700;
  color: #000000;
  margin-bottom: -30px;
}

p {
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  color: #202020;

}
`;
export const StarContainer = styled.figure`
margin-top: 25px;
display: flex;
justify-content: center;
svg {
  width: 20px;
  height: 30px;
  fill: red;
}
`;
export const StarImg = styled.img`
width: 16.67px;
height: 15.83px;
padding: 4px;
`;
export const InnerImg = styled.img`
max-width: 100%;
display: block;
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


