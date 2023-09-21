import styled from "styled-components";

export const CollectonSecondContainer = styled.div`
text-align: center;
`;
export const HeaderText = styled.div`
margin-bottom: 70px;
h1{
  font-size: 48px;
  line-height: 56px;
  color: #1F3259;
  @media screen and (max-width: 700px) {
    font-size: 30px;
}
}

`;
export const ImageSection = styled.div`
display: flex;
gap: 40px;
width: 100%;
margin-bottom: 50px;
justify-content: space-around;
@media screen and (max-width: 950px) {
  flex-wrap: wrap;
  
}
`;
export const Wrap = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 30px;
width: 100%;
justify-content: center;
@media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 600px) {
  grid-template-columns: auto;
  
}
`;
export const ImageItem = styled.div`
text-align: center;
@media screen and (max-width: 600px) {
  width: 100%;
}
`;
export const ImageMain = styled.div`
height: 261px;
width: 100%;
box-shadow: 2px 5px 12px 3px rgba(0, 0, 0, 0.15);
border-radius: 12px;
margin-bottom: 16px;
img{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

`;

// export const InnerImg = styled.img`
// width: 100%;
// height: 100%;
// display: block;
// object-fit: cover;
// object-position: center;
// `;

export const Caption = styled.p`
font-size: 18px;
line-height: 32px;
color: #1F3259;
`;
