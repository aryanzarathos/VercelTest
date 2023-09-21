import styled from "styled-components";

export const VacancyHomeHeroSection = styled.div`
  padding: 32px 0;
`;
export const VacancyHomeHero = styled.div``;
export const VacancyHomeHeroHead = styled.div`
  margin-bottom: 52px;
  text-align: center;
  h2 {
    font-weight:700;
    font-size:32px;
    line-height: 42px;
    font-style: normal;
    font-family: 'Montserrat';
    letter-spacing: inherit;
    text-align: inherit;
    color: #343F64;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  h3 {
      font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        font-style: normal;
        font-family: 'Monsterrat';
        letter-spacing: inherit;
        color: #343f64;
        text-align: center;
        position: relative;
        display: inline-block;
    position: relative;
    display: inline-block;
    &::after {
        position: absolute;
        width: 100%;
        height: auto;
        background-color: "";
        bottom: auto;
    }
  }
`;
export const VacancyHomeHeroDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const VacancyCard = styled.div`
  width: 100%;
  height: 340px;
  position: relative;
  @media screen and (max-width: 768px) {
    height: auto;
  }
  img {
    object-fit: cover;
    width: 100%;
    border-radius: 24px;
    height: 100%;
  }
`;
export const VacancyCardOverlay = styled.div`
position: absolute;
bottom: 0;
border-radius: 24px;
padding: 32px;
width: 100%;
height: 0%;
background: linear-gradient(180deg, rgba(32, 32, 32, 0) 60.3%, #202020 92.51%);
border-radius: 32px;
transition: all 0.35s ease-in-out 0s;
overflow: hidden;
cursor: pointer;
display: flex;
flex-direction: column;

${VacancyCard}:hover & {
  height: 100%;
  transition: all 0.35s ease-in-out 0s;
 background: rgba(32, 32, 32, 0.9);
 @media (max-width: 768px) {
  overflow-y: auto;
  &::-webkit-scrollbar-thumb , &::-webkit-scrollbar-track {
    background: transparent !important;
  }

 }
}
h6{
  
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-family: 'Monsterrat';
    letter-spacing: inherit;
    color: #fff;
    position: relative;
    padding-bottom: 10px;
    &::after{
    width: 40%;
    height: 2px;
    background: "";
    bottom: 5px;
    left: 0;
}
}
`;
export const VacancyDescription = styled.p`
    font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-style: normal !important;
  font-family: 'Montserrat' !important;
  letter-spacing: inherit !important;
  color: #fff !important;
  background: transparent !important;`;
export const ViewMoreVacancyHeroSection = styled.div`
display: flex;
justify-content: center;
margin-top: 52px;
}
`;
export const ViewMoreVacancyHeroButton = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  background: #343F64;
  border: 1px solid #343F64;
  color: #fff;
  padding: 9px 40px 10px 41px;
  cursor: pointer;
  font-family:'Montserrat';
  &:hover {
    background: #fff;
    color: #343f64;
    border: 1px solid #343f64;
    -webkit-transition-duration: 700ms;
    -moz-transition-duration: 700ms;
    -o-transition-duration: 700ms;
    transition-duration: 700ms;
  }
`;