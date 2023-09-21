import styled from "styled-components";

export const FeeStructureHomeHeroSection = styled.div`
padding: 32px 0;
`;
export const FeeStructureHomeHero = styled.div`

`;
export const FeeStructureHomeHeroHead = styled.div`
margin-bottom: 48px;
display: flex;
align-items: center;
flex-direction: column;
h2{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    color: #343F64;
    letter-spacing:inherit;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #4E616B;
    letter-spacing: inherit;
    text-align:center;
    position: relative;
    display: inline-block;
    &::after{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: inherit;
    bottom: auto;
    }
    }
`;
export const FeeStructureHomeHeroDescription = styled.div`
background: #E9DB89;
display: grid;
grid-template-columns: 2fr auto;
align-items: center;
gap: 20px;
height: 100%;
padding: 16px 24px;
border-radius: 16px;
h6{
    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    text-align: inherit;
    color: #343F64;
    letter-spacing:inherit;
}
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  justify-content: center;
  h6{
  text-align: center;
  }
}
`;
export const ViewMoreFeeStructureHeroButton = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;

color: #FFFFFF;
background: #343F64;
box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
border: 1px solid #343f64;
padding: 9px 40px;
cursor: pointer;
text-align: center;
&:hover{
background: #fff;
color: #343f64;
border: 1px solid #343f64;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;