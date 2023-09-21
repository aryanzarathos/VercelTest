import styled from "styled-components"

export const AboutThirdTheme1Container = styled.div`

    background-color: #F5F5F5;
    @media screen and (max-width:800px) {
        padding:  26px;
    }
`

export const AboutSectionTheme = styled.div`
    display : flex;
    align-items: center;
    padding: 70px 0 70px 0;
    gap: 20px;
    @media screen and (max-width:1000px) {
        flex-wrap: wrap;
    }
`
export const SectionLt = styled.div`
    width: 50%;
    @media screen and (max-width:1000px) {
        width: 100%;
    }
`
export const SectionRt = styled.div`
    display: block;
    width: 50%;
    padding: 0 0 0 20px ;
    @media screen and (max-width:1000px) {
        width: 100%;
        padding: 0;
    }
`
export const ImgSection = styled.div`
    display: contents;
    height: 334px;
    width: 100%;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    overflow: hidden;
    
    img{
        width: 100% !important;
        height: 100% !important;
    }
    
`
export const InnerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
`
export const AboutText = styled.p`
     font-size: 24px;
    line-height: 28.77px;
    color: #0346B5;
    font-family:  'Futura Md BT',sans-serif;
    font-weight: 400;
    margin-bottom: 18px;
`
export const AboutHeading = styled.p`
    font-size: 48px;
    line-height: 57.54px;
    color: #000000;
    font-family:  'Futura Md BT',sans-serif;
    font-weight: 400;
    margin-bottom: 42px;
   
    @media screen and (max-width:600px) {
        font-size: 38px;
    }
`
export const FirstPara = styled.p`
    font-size: 24px;
    line-height: 28.77px;
    color: #000000;
    font-family:  'Futura Md BT',sans-serif;
    font-weight: 400;
    @media screen and (max-width:600px) {
        font-size: 18px;
    }
`
export const SecondPara = styled.p`
    font-size: 24px;
    line-height: 28.77px;
    color: #000000;
    font-family:  'Futura Md BT',sans-serif;
    font-weight: 400;
    @media screen and (max-width:600px) {
        font-size: 18px;
    }
`

export const ImgItem = styled.div`
position: relative;
`;
export const WrapContainer = styled.div`
    display: grid;
    gap: 70px;
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
width: 100%;
position: relative;
margin-bottom: 50px;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`;
export const AboutSectionThird = styled.div`
padding: 8px 8px 20px 8px;
background-color: #FFFFFF;
position: absolute;
bottom: 15px;
left: 10%;
right: 10%;
box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.15);
`;
export const PositionThird = styled.p`
font-size: 12px;
font-weight: 500;
font-family: 'Nunito', sans-serif;
color: #202020;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const NameThird = styled.p`
font-size: 16px;
font-weight: 500;
font-family: 'Nunito', sans-serif;
color: #202020;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
// export const InnerImg = styled.img`
// display: block;
// width: 100%;
// height: 100%;
// object-fit: cover;
// object-position: top;
// `;
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
