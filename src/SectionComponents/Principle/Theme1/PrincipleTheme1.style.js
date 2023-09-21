import styled from "styled-components";

export const PrincipalDeskHomeHero = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 52px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #343F64;
    letter-spacing: inherit;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  h5 {
    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #343F64;
    letter-spacing: inherit;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 196.4%;
    letter-spacing: 0.02em;
    color: #202020;
    padding-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const PrincipalDeskHomeHeroSection = styled.div`
  padding: 32px 0;
`;
export const PrincipalProfileContent = styled.div`
  .sun-editor-wrap {
  font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 196.4%;
    letter-spacing: 0.02em;
    color: #202020;
    padding-top: 10px;
    span {
     font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 196.4%;
    letter-spacing: 0.02em;
    color: #202020;
    padding-top: 10px;
    }
  }
`;
export const PrincipalProfileImage = styled.div`
  img {
    width:447px;
    height: 495px;
    border-radius: 20px;
    background: #d9d9d9;
    // margin-bottom: ${({ theme }) =>
        theme.Principal?.PrincipalHero.PrincipalProfileImage.MarginBottom};
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const ViewMoreButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 72px;
`;
export const ViewMoreMessageButton = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
background: #343F64;
box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 8px;
  border: 1px solid #343F64;
  padding: 9px 40px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #343F64;
    border: 1px solid #343F64;
    -webkit-transition-duration: 700ms;
    -moz-transition-duration: 700ms;
    -o-transition-duration: 700ms;
    transition-duration: 700ms;
  }
`;