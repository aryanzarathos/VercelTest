import styled from "styled-components";


export const AboutUsUpperContainer = styled.div`
background: linear-gradient(180deg, #fff 47%, rgba(0, 52, 89, 1) 0);
margin-top: 56px;
padding-bottom: 136px; 

@media (max-width : 768px) {
    background: linear-gradient(180deg, #fff 37%, rgba(0, 52, 89, 1) 0);
}
`;

export const AboutUsTopContainer = styled.div`
display: grid;
grid-template-columns: 0.5fr auto 2fr;
gap: 56px;
align-items: center;
margin-bottom: 200px;
height: 100%;

@media(max-width:600px) {
    margin-bottom: 00px;
}

@media(max-width:768px) {
    grid-template-columns: 1fr;
    gap: 16px;
}
`;

export const AboutUsTopHeading = styled.h3`
font-family: 'Gilroy-Bold';
font-size: 48px;
line-height: 64px;
color: #003459;
`;

export const VerticleLine = styled.div`
width: 1px;
height: 100%;
background: rgba(0, 52, 89, 0.3);

@media(max-width:768px) {
display: none;
}
`;

export const AboutUsTopContent = styled.p`
font-family: 'Gilroy-Regular';
font-size: 20px;
line-height: 28px;
color: #667479;
`;

export const AboutUsImg = styled.div`
max-width: 1174px;
width: 100%;
margin-top: 0;
padding-bottom: 55px;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    margin-top: -150px;

    @media(max-width:768px) {
        margin-top: -90px;
    }

    
    @media(max-width:600px) {
        margin-top: -50px;
    }
}
`;

export const AboutUsMidContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 64px;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

export const MidContent = styled.div`
font-family: 'Gilroy-Regular';
font-size: 20px;
line-height: 28px;
color: #DCDBDB;
`;

export const AboutUsMidHeading = styled.div`
display: grid;
grid-template-columns: 20px 1fr;
align-items: center;
color: #FFFFFF;
font-family: 'Gilroy-SemiBold';
font-size: 26px;
line-height: 28px;
margin-bottom: 19px;
`;

export const HeadingVerticleLine = styled.i`
width: 0px;
height: 47px;
border: 2px solid #FFFFFF;
background-color: #FFFFFF;
`;

export const AboutUsMidContent = styled.p`
font-family: 'Gilroy-Regular';
font-size: 20px;
line-height: 28px;
color: #DCDBDB;
`;

export const BottomSubContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 100px;
padding: 56px 0px 0px 0px;

@media (max-width : 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
}
`;

export const BottomSubLeftContainer = styled.div`
box-shadow: 30px 56px 87px rgba(0, 0, 0, 0.06);
background-color: rgba(255, 255, 255, 1);
padding: 56px;
position: relative;
top: -150px;

@media (max-width : 1024px) {
    /* padding: 15px 0px 5px 25px; */
    /* margin-top: -15%; */
    /* top: -60%; */
}

@media(max-width: 600px) {
    padding: 24px;
}
 
`;

export const BottomSubLeftHeading = styled.h3`
font-family: 'Gilroy-Bold';
font-size: 48px;
line-height: 60px;
color: #003459;
/* .hr-line{
    margin-top: 56px;
    background: ${({ theme }) => theme.AboutUs.h1.Color};
    width :100% ;
    height: 2px;
    opacity: 0.3;
  } */
`

export const BottomImgContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 58px;
margin: 100px 0px;

@media(max-width:768px) {
    margin: 0 0;
}

img {
    width: 100%;
}

@media (max-width : 1024px) {
    grid-template-columns: 1fr 1fr;
}

@media (max-width : 425px) {
    grid-template-columns: 1fr;

}
`;

export const BottomImgHeading = styled.h3`
font-size: 26px;
line-height: 28px;
text-align: center;
color: #003459;
margin-top: 18px;
`;

export const BottomImgContent = styled.p`
font-size: 20px;
line-height: 28px;
text-align: center;
color: #003459;
`;
