import styled from "styled-components";

export const SubContainer = styled.div`
width: 100%;
position: relative;
margin-bottom: 64px;

@media screen and (max-width: 992px) {
    margin-bottom: 30px;
}
`;

export const SubContinerImg = styled.div`
width: 100%;
height: 281px;

img {
width: 100%;
height: 100%;
object-fit: cover;
}
`;

export const SubContainerContent = styled.div`
position: relative;
width: 91%;
margin-top: -86px;
left: 0px;
/* top: 71%; */
/* right: 9%; */
background: #FFFFFF;
box-shadow: 0px 4.19767px 10.4942px rgba(0, 0, 0, 0.25);
padding: 21px;
height: fit-content;
`;

export const ContentLeftVerticleLine = styled.span`
position: absolute;
left: -4px;
top: 15px;
height: 35%;
border: 5px solid rgba(0, 52, 89, 1);
`;

export const ContentTopHeading = styled.h4`
font-size: 14px;
line-height: 16px;
color: #003459;
margin-bottom: 10px;
`;

export const ContentTopContent = styled.p`
font-family: Poppins;
font-weight: 300;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
margin: 10px 0px;

overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

export const ContentBottomButton = styled.div`
font-weight: 400;
font-size: 12px;
line-height: 16px;
display: flex;
justify-content: flex-start;
gap: 5px;
cursor: pointer;
`;

// export const ContentForwardIcon = styled.i`
// -webkit-mask: url(${forwardIcon}) no-repeat center;
// mask-image: url(${forwardIcon}) no-repeat center;
// display: block;
// width: 21px;
// align-items: center;
// height: 21px;
// background-color: rgba(106, 169, 255, 1);
// `;
