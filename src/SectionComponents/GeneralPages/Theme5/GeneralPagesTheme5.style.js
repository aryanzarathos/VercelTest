import styled from "styled-components";

export const HeaderSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 60%;
    margin-top: 61px;

    @media screen and (max-width : 600px){
        width: 100%;
    }
`;

export const HeaderTopHeading = styled.h3`
    font-family: 'Poppins','sans-serif';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    text-transform: capitalize;
    color: #202020;
`;

export const HeaderContent = styled.p`
    font-family: 'Poppins','sans-serif';
    font-style: normal;
    margin-top: 8px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    color: #202020;
`;

export const GeneralPageTheme5TopContainer = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-transform: capitalize;
    color: #202020;
  }

  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(32, 32, 32, 0.6);
    margin-top: 8px;
    text-align: center;
  }

  button{
    background: #000000;
    padding: 10px 36px;
    color: rgba(255, 255, 255, 1);
    border: none;
    margin-top: 24px;
  }
`;

export const GeneralPageTheme5MidContainer = styled.div`
    margin-top: 60px;

  .slick-dots{
    margin-bottom: 40px;
    @media screen and (max-width: 600px) {
      margin-bottom: 25px;
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

  @media screen and (max-width: 600px) {
    margin: 60px 0px 100px 0px;
  }
`;

export const MidImgContainer = styled.div`
  width: 100%;
  height: 100%;
  /* height: 480px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: auuto; */

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
 `;

export const ImgOverContainer = styled.div`
  width: 50%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #DFDFDF;
  /* padding: 0px 85px; */

  @media screen and (max-width : 1025px) {
    width: 60%;
  }

  @media screen and (max-width : 768px) {
    width: 80%;
  }

  @media screen and (max-width : 600px) {
    width: 84%;
    padding: 5px  0px 0px 0px;
  }

 `;

export const OverContainerHeading = styled.h3`
  font-family: 'Poppins','sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #202020;

  @media screen and (max-width : 552px) {
    font-size: 25px;
    line-height: 15px;
  }

  @media screen and (max-width : 375px) {
    font-size: 20px;
  }
 `;

export const OverContainerContent = styled.p`
  font-family: 'Poppins','sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: rgba(32, 32, 32, 1);  
  margin-top: 16px;
  /* padding: 0px 80px;

  
  @media screen and (max-width : 1025px) {
    padding: 0px 60px;
  }

  @media screen and (max-width : 1025px) {
    padding: 0px 90px;
  } */

  @media screen and (max-width : 552px) {
    line-height: 18px;
    font-size: 11px;
    padding: 0px;
  }

  @media screen and (max-width : 375px) {
    line-height: 14px;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
 `;

export const OverContainerButton = styled.button`
  background-color: rgba(0, 0, 0, 1);
  padding: 10px 36px;
  margin: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
  cursor: pointer;
  border: none;

  @media screen and (max-width : 552px) {
    margin: 5px;
    padding: 5px 15px;
  }

  @media screen and (max-width : 375px) {
    margin: 5px;
    line-height: 16px;
    font-size: 12px;
    padding: 2px 10px;
  }
`;

export const GeneralPageTheme5BottomContainer = styled.div`
  margin: 72px 0px 157px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-transform: capitalize;
    color: #202020;
  }

  p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(32, 32, 32, 0.6);
    margin-top: 8px;
    text-align: center;
  }

  button{
    background: #000000;
    padding: 10px 36px;
    color: rgba(255, 255, 255, 1);
    border: none;
    margin-top: 24px;
  }

  @media screen and (max-width: 1025px){
    margin: 48px 0px 100px 0px;
  }

  @media screen and (max-width: 1025px){
    margin: 36px 0px 70px 0px;
  }
`;
