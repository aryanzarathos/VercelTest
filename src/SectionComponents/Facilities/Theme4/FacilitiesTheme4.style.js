import styled from "styled-components";

export const GalleryHomeHeroSection = styled.div`
  padding: 32px 0;
`;
export const FacilitiesHomeHero = styled.div`
  .slick-prev {
    content: "";
    width: 2rem;
    height: 2rem;
    border-right: 2px solid #323f64;
    border-bottom: 2px solid #323f64;
    z-index: 1;
    margin-left: -30px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    &::before {
      color: transparent;
    }
  }
  .slick-next {
    content: "";
    width: 2rem;
    height: 2rem;
    border-left: 2px solid 323f64;
    border-bottom: 2px solid 323f64;
    z-index: 1;
    margin-right: -30px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    &::before {
      color: transparent;
    }
  }
  /* the slides */
  .slick-slide {
    margin: 0 0;
    /* padding: 0 12px; */
    padding-right: 24px;
  }

  /* the parent */
  .slick-list {
    margin: 0 0;
  }
`;
export const FacilitiesHomeHeroHead = styled.div`
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    color: #343F64;
    text-align:inherit;
    letter-spacing: inherit;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #4E616B;
    text-align:inherit;
    letter-spacing: inherit;
    position: relative;
    display: inline-block;
    &::after {
      position: absolute;
      width: 100%;
      height: auto;
      background-color: inherit;
      bottom: auto;
    }
  }
`;
export const FacilitiesSliderItem = styled.div`
  display: grid !important;
  grid-template-columns: 1.2fr 1fr;
  gap: 16px;
  /* row-gap: 40px ; */
  /* padding: 24px; */
  border: 1px solid #323f64;
  border-radius: 24px;
  padding: 24px;
  // width: 550px !important;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FacilitiesSliderImage = styled.div`
  width: 100%;
  height: 374px;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: revert;
  }
`;
export const FacilitiesSliderDescription = styled.div`
width: 100%;
height: 374px;
// padding: ${({ theme }) => theme.Facility.FacilitiesHero.FacilitiesSliderDescription.Padding};
  background: transparent;
  box-shadow: 0px 0px 19px -23px rgba(0, 0, 0, 0.69);
  @media screen and (max-width: 768px) {
    height: 250px;
  }
  h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #343F64;
    letter-spacing: inherit;
    word-break: break-all;
    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  ul {
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      -webkit-line-clamp: 5;
    }
  }
  li {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #4D5263;
    letter-spacing: inherit;
    margin-top: 20px;

    &.sun-editor-wrap {
      p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        color: #4D5263;
        letter-spacing: inherit;
        background-color: transparent;
        span {
            font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        color: #4D5263;
        letter-spacing: inherit;
        background-color: transparent;
        }
      }
    }
  }
`;

export const Divider = styled.div`
width: 100%;
height: 2px;
background: #ACACAC;
margin: 10px 0;
`;

export const FacilitiesHomeHeroSlide = styled.div`
  .slick-prev {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    border-right: 2px solid #323f64;
    border-bottom: 2px solid #323f64;
    z-index: 1;
    margin-left: 0;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    left: -35px !important;

    @media screen and (max-width: 768px) {
      width: 1rem;
      height: 1rem;
      left: -16px !important;
    }
    &::before {
      color: transparent;
    }
    &:hover {
      border-right: 2px solid #000000;
      border-bottom: 2px solid #000000;
    }
  }
  .slick-next {
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    border-left: 2px solid #323f64;
    border-bottom: 2px solid #323f64;
    z-index: 1;
    margin-right: 3.5rem;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    right: -90px !important;
    @media screen and (max-width: 768px) {
      width: 1rem;
      height: 1rem;
      right: -72px !important;
    }
    &::before {
      color: transparent;
    }
    &:hover {
      border-left: 2px solid #000000;
      border-bottom: 2px solid #000000;
    }
  }
`;
export const ViewMoreButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ViewMoreFacilitiesButton = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;

color: #FFFFFF;

  letter-spacing: inherit;
  background: #343F64;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  border: 1px solid #343f64;
  padding: 9px 40px;
  cursor: pointer;
  margin-top: 44px;
  &:hover {
    background: #fff;
    color: #343f64;
    border: 1px solid
    -webkit-transition-duration: 700ms;
    -moz-transition-duration: 700ms;
    -o-transition-duration: 700ms;
    transition-duration: 700ms;
  }
`;
export const FacilityHeading = styled.div`
position:relative;
padding-bottom:16px;
border-bottom: 2px solid #ACACAC;
display:inline-block;`