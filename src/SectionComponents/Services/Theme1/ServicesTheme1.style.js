import styled from "styled-components";

export const ServicesTopHeading = styled.p`
font-size: 48px;
line-height: 56px;
color: #1F3259;
display: flex;
justify-content: center;
align-items: center;
`;

export const ServicesSubContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin-top: 70px;
gap: 44px;

@media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 22px;
    margin-top: 35px;
}

@media (max-width: 425px) {
    grid-template-columns: 1fr;
    // gap: 22px;
}
`;

export const SubContinerImg = styled.div`
width: 100%;
height: auto;
border-radius: 12px;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width : 1024px) {
    width: 100%;
    height: auto;
}
`;

export const SubImgContent = styled.p`
font-size: 18px;
line-height: 32px;
text-align: center;
color: #1F3259;
margin-top: 16px;
`;
