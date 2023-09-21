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
export const ClientContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-bottom: 10px;
`;

export const ImageContainer = styled.figure`
display: block;
width: 135px;
height: 135px;
border-radius: 50%;
position: relative;
margin-bottom: 16px;
img {
  max-width: 100%;
display: block;
}
`;
export const InnerImg = styled.img`
max-width: 100%;
display: block;
`;
export const ColonWhite = styled.img`
padding: 12px 10px 12px 10px;
border-radius: 50px;
background-color: #000000;
z-index: 1;
position: absolute;
bottom: 5px;
right: 0px;
border: 1px solid #FFFFFF;
`;
export const AboutContainer = styled.div`
text-align: center;
width: 72%;

@media screen and (max-width: 699px) {
  width: 100%;
}

h3 {
  font-size: 20px;
  font-weight: 500;
  line-height: 26.56px;
  margin-bottom: 24px;
  color: #000000;
}

p {
  font-size: 14px;
  font-weight: 500;
  line-height: 18.59px;
  color: #000000;
  @media screen and (max-width: 400px) {
    text-align: start;
  }
}

`;

export const QuatationMarkContainer = styled.div`
  position: absolute;
  top:75%;
  right: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #fff;
`

export const QuatationMark = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 16px;
        height: 12px;
        fill: red;
  }
`

// export const QuoteIcon = styled(Quote)`
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%,-50%);
// height: 30px;
// height: 30px;
// fill: blue;
// `

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




