import styled from "styled-components";

export const EmpanelmentPageSection = styled.div`
margin: 72px 0;

`;

export const EmpanelmentPageHead = styled.div`
margin-top: 40px;
h2{
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: rgb(0, 111, 156);
}
h3{
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: rgb(244, 134, 49);
    text-align: center;
  }
`;
export const EmpanelmentPanelSection = styled.div`
margin-top: 40px;
h4{
    font-weight: 600;
    font-size: 24px;
    line-height: 20px;
    color: rgb(0, 111, 156);
    text-align: center;
  }
ul{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 468px) {
    grid-template-columns: 1fr;
  }
  li{
    width: 100%;
    background: #FFFFFF;
    border: 2px solid #006F9C;
    border-radius: 8px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
  } 
}
`;
export const Divider = styled.div`
height: 1px;
width: 90%;
margin: 16px auto;
background: #006F9C;
`;
export const EmpanelmentPanelFeatureSection = styled.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 50px;
align-items: center;
margin: 48px 0;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}
li{
  width: 100%;
background: #FFFFFF;
border: 2px solid #006F9C;
border-radius: 8px;
height: 145px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
}
`;
