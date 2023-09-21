import styled from "styled-components";

export const HeaderText = styled.div`
padding: 60px 0 36px 0;
text-align: center;


h1 {
  font-size: 24px;
  font-weight: 500;
  line-height: 31.88px;
  color: #000000;
  text-align: center;
}
`;
export const CategoryThird = styled.div`
display: grid;
margin-bottom: 72px;
grid-template-columns: auto auto auto;
gap: 20px;
justify-content: center;

@media screen and (max-width: 1100px) {
  grid-template-columns:  auto auto;
}

@media screen and (max-width: 700px) {
  grid-template-columns:auto ;
}
`;
export const ImageContainer3 = styled.div`
  position: relative;
  height: 378px;
  width: 100%;

img {
  max-width: 100%;
  display: block;
  width: 100%;
  max-height: 100%;
  height: 100%;
}

h2 {
  font-size: 16px;
  font-weight: 500;
  line-height: 21.25px;
  color: #FFFFFF;
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 21px 0 20px 0;
  text-align: center;
  background: linear-gradient(180.75deg, rgba(58, 58, 58, 0) 0.66%, rgba(32, 32, 32, 0.69) 97.38%);
}
  width: 378px;
`;