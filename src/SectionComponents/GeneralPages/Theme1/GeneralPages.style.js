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

export const GeneralPageTheme1TopSection = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  position: relative;

  @media screen and (max-width : 1061px){
    grid-template-columns: 1fr;
  }
`;

export const TopSectionImgContainer = styled.div`
  width: 100%;
  height: 440px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width :600px) {
    height: 100%;
  }
`;

export const ImgContentContainer = styled.div`
  position: absolute;
  width: 45%;
  height: auto;
  background: #F2F2F2;
  right: 7px;
  bottom: 60px;
  padding: 36px 100px 36px 48px;

  @media screen and (max-width : 1061px){
    position: relative;
    width: 100%;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width : 1025px){
    padding: 36px 50px 36px 48px;
  }

  @media screen and (max-width : 600px){
    padding: 30px;
  }
`;

export const ContentTopHeading = styled.h3`
  font-family: 'Poppins','sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #000000;  
`;

export const HeadingContent = styled.p`
  font-family: 'Poppins','sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(32, 32, 32, 0.6);
  margin-top: 8px;
`;

export const ContentButton = styled.button`
  padding  : 10px 36px;
  margin-top: 24px;
  border: none;
  background: #000000;
  color: rgba(255, 255, 255, 1);
  font-family: 'Poppins','sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
`;

//Sub Section CSS

export const GeneralPageTheme1SubSection = styled.div`
  margin-top  : 72px;
  /* border: 1px solid red; */
  /* width: 100%;
  height: 200px; */
`;

export const SubSectionHeading = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins','sans-serif';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #000000;
`;

export const HeadingContentConatiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 13px;
  margin-top: 37px;

  @media screen and (max-width : 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width : 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width : 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentCardContainer = styled.div`
  padding: 36px 17px;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0px 8px 20px 2px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
`;

export const CardsHeading = styled.h3`
  font-family: 'Open Sans','sans-serif';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #000000;
`;

export const CardsContent = styled.p`
  margin-top  : 16px;
  font-family: 'Open Sans','sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: rgba(32, 32, 32, 0.4);
`;

//Bottom Section CSS

export const GeneralPageTheme1ButtomSection = styled.div`
  margin: 72px 0px 212px 0px;

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

  @media screen and (max-width: 600px) {
    margin: 60px 0px 100px 0px;
  }
`;
export const ButtomImgContainer = styled.div`
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
  width: 36%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  @media screen and (max-width : 1025px) {
    width: 60%;
  }

  @media screen and (max-width : 768px) {
    width: 80%;
  }

  @media screen and (max-width : 600px) {
    width: 85%;
  }

 `;

export const OverContainerHeading = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #FFFFFF;

  @media screen and (max-width : 552px) {
    font-size: 25px;
    line-height: 15px;
    /* line-height: 40px; */
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
  color: #FFFFFF;  
  margin-top: 16px;

  @media screen and (max-width : 552px) {
    line-height: 18px;
    font-size: 11px;
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
    margin: 15px;
    padding: 5px 25px;
  }

  @media screen and (max-width : 375px) {
    margin: 10px;
    line-height: 16px;
    font-size: 12px;
    padding: 5px 10px;
  }
`;
