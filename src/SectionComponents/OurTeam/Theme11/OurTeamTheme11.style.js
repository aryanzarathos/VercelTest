import styled from "styled-components";

export const ImgItem = styled.div`
position: relative;

`;
export const WrapContainer = styled.div`
    display: grid;
    margin-top: 96px;
    margin-bottom: 100px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr ;
        
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: auto;
        
    }

`
export const ImgContainerThird = styled.figure`
height: 278px;
position: relative;
margin-bottom: 200px;
img {
    display: block;
width: 100%;
height: 100%;
object-fit: cover;
object-position: top;
}

`;
export const AboutSectionThird = styled.div`
padding: 12px 17.15px 12px 17.15px;
background-color: #FFFFFF;
position: absolute;
top: 240px;
left: -3%;
right: -3%;
box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15);
`;
export const PositionThird = styled.p`
font-size: 12px;
font-weight: 500;
font-family: 'Nunito', sans-serif;
color: #0346B5;

`;
export const NameThird = styled.p`
font-size: 16px;
font-weight: 500;
font-family: 'Nunito', sans-serif;
color: #202020;
margin-bottom: 12px;
`;
export const InnerImg = styled.img`

`;

export const OurTeamText = styled.div`
    font-size: 24px;
    font-weight: 400;
    line-height: 28.77px;
    color: #0346B5;
    font-family: 'Futura Md BT',sans-serif;
    margin-bottom: 18px;
    margin-top: 50px;
`
export const MeetOurTeamText = styled.div`
      font-size: 48px;
    font-weight: 400;
    line-height: 58px;
    color:  #000000;
    font-family: 'Futura Md BT',sans-serif;
    margin-bottom: 54px;
`
export const Line = styled.div`
    border: 1px solid rgba(32, 32, 32, 0.3);
    margin-bottom: 10px;
`
export const About = styled.p`
    font-size: 13px;
    font-family: "Poppins",sans-serif;
    line-height:23px;
    font-weight: 700;
    color:#202020;
`
export const Wrap = styled.div`
    padding: 24px 35px;
    width: 100%;
    height: 60%;
    background-color: #F5F5F5;
`
export const WrapWhiteContainer = styled.div`
    padding: 24px 35px;
`