import styled from "styled-components";

export const CoverImgMedium = styled.div`
position: relative;
.slick-dots{
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
  }
}
.slick-dots li.slick-active button:before{
  color:#000000;
  font-size:12px;
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
}
.slick-dots li button:before{
  color: white;
  font-size: 10px;
  opacity: 90%;
  @media screen and (max-width: 600px) {
    font-size: 6px;
  }
}
.slick-dots li{
  margin: 0px 2px;
}
.slick-next {
  z-index: 1;
  right: 15px;
  @media screen and (max-width: 600px) {
    right: 3px;
  }
}
  
.slick-prev {
  z-index: 1;
  left: 15px;
  @media screen and (max-width: 600px) {
    left: 7px;
  }
}
.slick-prev:before {
  border-right: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  transform: rotate(135deg);
  color: transparent;
  width: 12px;
  height: 12px;
}

.slick-next:before {
  font-size: 40px;
  border-right: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  color: transparent;
  width: 12px;
  height: 12px;
  transform: rotate(-45deg);
}

  height: 480px;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 2560px) {
    height: auto ;
  }
  img{
    max-width: 100%;
  width: 100%;
  object-fit: cover;
  height:100%;
  display:block;
  }
`;
// export const InnerImg = styled.img`

// `;


