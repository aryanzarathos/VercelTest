import styled from 'styled-components';
export const SliderImage = styled.div`
  width: 100%;
  display:block;
  position: relative;
  min-height: 100%;
  max-height: 480px;
  height: ${props => props.imgHeight === '480' ? '480px' : "auto"};
  margin: 0;

  img {
      object-fit: cover;
      width: 100%;
      display: block;
      object-position: center;
      height: 100%;
      max-height: 100%;
  }
`;
export const BannerOverlay = styled.div`
position: absolute;
top: 171px;
width: 510px;
background: rgb(235, 236, 240);
padding: 36px;
border-radius: 0px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
@media screen and (max-width: 1200px) {
width: 70%;
padding: 16px 24px;
}
@media screen and (max-width: 768px) {
width: 70%;
padding: 16px 24px;
bottom: 104px; 
}
@media screen and (max-width: 468px) {
width: 70%;
padding: 8px 16px;
bottom: 24%; 
}
`;

export const BannerOverlayCaption = styled.div`
h1{
font-weight: 700;
font-size: 56px;
line-height: 68px;
font-style: normal;
color: rgb(52, 63, 100);
word-break: break-all;
margin-bottom: 4px;
word-break: break-all;
margin-bottom: 4px;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
@media screen and (max-width: 992px) {
margin-bottom: 0;
  }
@media screen and (max-width: 768px) {
font-size: 24px;
line-height: 34px;
margin-bottom: 0;
  }
@media screen and (max-width: 468px) {
font-size: 16px;
line-height: 24px;
  }
}
h3{
font-weight: 500;
font-size: 18px;
line-height: 24px;
color: rgb(78, 97, 107);
word-break: break-all;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
@media screen and (max-width: 768px) {
  font-size: 16px;
  line-height: 26px;
  -webkit-line-clamp: 1;
    }
@media screen and (max-width: 468px) {
  font-size: 10px;
  line-height: 14px;
    }
}`;