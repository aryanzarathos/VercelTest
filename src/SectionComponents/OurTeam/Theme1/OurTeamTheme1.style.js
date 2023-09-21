import styled from "styled-components";

export const Headertext = styled.p`
    font-size: 48px;
    line-height: 47.74px;
    font-weight: 700;
    color: #000000;
    font-family: "Futura Md BT", sans-serif;
    margin-top: 50px;
    span{
        font-weight: 400;
        line-height: 57.54px;
    }
`

export const SubHeading = styled.h3`
 font-size: 24px;
    line-height: 47.74px;
    font-weight: 700;
    color: #000000;

`

export const ImageSection = styled.div`
    display: grid;
    gap: 72px;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: repeat(4,1fr);
    margin-top: 47px;
    @media screen and (max-width: 1250px) {
        grid-template-columns: repeat(3,1fr);
}
    @media screen and (max-width: 950px) {
        grid-template-columns: repeat(2,1fr);
}
    @media screen and (max-width: 650px) {
        grid-template-columns: 1fr;
    
}
`
export const ImageSectionEight = styled.div`
text-align: center;
margin-bottom: 65px;
display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ImageContainerEight = styled.figure`
border-radius: 50%;
height: 238px;
width: 238px;
display: block;
overflow: hidden;
margin-bottom: 16px;
img {
    display: block;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
}
`;
export const NameEight = styled.p`
font-size: 20px;
font-weight: 700;
line-height: 26.58px;
color: #202020;
margin-bottom: 5px;
font-family: 'Futura', sans-serif;

`;
export const PositionEight = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 17px;
color: #202020;
font-family: 'Futura Md BT', sans-serif;
margin-bottom: 18px;
`;
export const InnerImg = styled.img`

`;
export const About = styled.p`
    font-size: 14px;
    font-weight: 900;
    line-height: 24px;
    color: #202020;
    font-family: 'Poppins', sans-serif;
    text-align: center;
`
