import styled from "styled-components";

export const MainContainer = styled.div`
position: relative;
.slick-dots{
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
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
.slick-dots li.slick-active button:before{
  color:#000000;
  font-size: 12px;
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
} 
.slick-dots li{
  color: white;
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
`;
export const CoverRc = styled.figure`
.slick-dots{
  margin-bottom: 40px;
}
.slick-dots li.slick-active button:before{
  color: white;
}
  position: relative;
   &:after{
    display:block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(32, 32, 32, 0.1);
    }

  @media screen and (max-width: 2560px) {
    width: auto;
    height: auto;
  }
  margin-top: 40px;
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
export const TextRc = styled.figcaption`
  display: flex;
  flex-direction: column;
  color:#ffffff;
  font-family: 'Poppins', sans-serif;
  width: 50%;
  
  @media screen and (max-width: 1040px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 65%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    margin-bottom: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: 'Poppins', sans-serif;
    @media screen and (max-width: 900px) {
      font-size: 30px;
    }
    @media screen and (max-width: 768px) {
      font-size: 25px;
      line-height: 30px;
      font-weight: 450;
    }
    @media screen and (max-width: 500px) {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 10px;
      line-height:25px;
    }
    @media screen and (max-width: 420px) {
      font-size: 15px;
      font-weight: 300;
      line-height:17px;
      margin-bottom: 5px;

    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 27px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;

    @media screen and (max-width: 768px) {
      max-width: 100%;
      font-weight: 350;
      font-size: 12px;
    }
    @media screen and (max-width: 500px) {
      max-width: 100%;
      font-weight: 300;
      font-size: 11px;
      margin-bottom: 15px;
      line-height:15px;
    }
    @media screen and (max-width: 420px) {
      max-width: 100%;
      font-weight: 250;
      font-size: 10px;
      line-height:12px;
      margin-bottom: 8px;
      
    }
  }
  position: absolute;
  padding: 10% 100px 0px 20px;
  right: 0px;
  top: 0px;
  bottom: auto;
  width: 53%;

  @media screen and (max-width: 1040px) {
    padding: 100px 13% 20px 80px;
    
  }
  @media screen and (max-width: 900px) {
    padding: 10%;
  }
  @media screen and (max-width: 770px) {
    padding: 5% 8% 10% 0%;
  }
  @media screen and (max-width: 600px) {
    padding: 10px 20px 10px 20px;
  }
`;
export const ButtonSlider = styled.button`
  font-size: 14px;
  height: 40px;
  width: 120px;
  font-weight: 500;
  z-index: 1;
  &:hover{
    cursor: pointer;
    color: #FFFFFF;
  }

  @media screen and (max-width: 600px) {
    font-size: 11px;
    height: 35px;
    width: 100px;
    font-weight: 480;
    cursor: pointer;
    }
  @media screen and (max-width: 400px) {
    font-size: 11px;
    height: 30px;
    width: 80px;
    font-weight: 480;
    cursor: pointer;
    } 
`;
