import styled from 'styled-components'
export const AboutHeroSection = styled.div`
margin-top: 48px;
@media (max-width: 768px) {
  margin-top:0;
}
`;

export const SectionImage = styled.div`
width: 100%;
// height: 478px;
margin-top: 48px;
img{
  width: 100%;
  height: 100%;
  display: block;
  // object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
iframe, video{
  width: 100%;
  height: 478px;
  border: none;
  border-radius: 8px;
  display: block;
  @media (max-width: 768px) {
    height: 100%;
  }
}
@media screen and (max-width: 768px) {
  width: 100%;
  height: auto;
  margin-top: 0;
}
`;

export const SectionHeroBorderBottom = styled.div`
display: grid;
grid-template-columns: 25% 50% 25%;
align-items:center;
height: 8px;
`;
export const SectionHeroBorderBottomL = styled.div`
width: 100%;
height: 100%;
`;
export const SectionHeroBorderBottomM = styled.div`
width: 100%;
height: 100%;

`;
export const SectionHeroBorderBottomR = styled.div`
width: 100%;
height: 100%;

`;