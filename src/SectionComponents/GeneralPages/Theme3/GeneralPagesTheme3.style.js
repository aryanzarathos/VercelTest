import styled from "styled-components";

export const HeaderSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    width: 60%;
    margin-top: 61px;

    @media screen and (max-width : 600px){
        width: 100%;
    }
`;

export const HeaderTopHeading = styled.h3`
    font-family: 'Poppins','sans-serif';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    text-transform: capitalize;
    color: #202020;
`;

export const HeaderContent = styled.p`
    font-family: 'Poppins','sans-serif';
    font-style: normal;
    margin-top: 8px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    color: #202020;
`;

export const GeneralPageTheme3SubContainer = styled.div`
    margin: 56px 0px 229px 0px;

    @media screen and (max-width: 600px) {
        margin: 56px 0px 100px 0px
    }
`;

export const SubMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 109px;

    @media screen and (max-width: 1024px) {
        gap: 30px;
    }

    @media screen and (max-width: 768px) {
        display: block;
        margin-bottom: 30px;
    }
`;

export const MainImgContainer = styled.div`
    width: 100%;
    height: 557px;
    /* height: 100%; */

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 992px) {
        height: 100%;
    }
`;

export const MainContentContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        text-transform: capitalize;
        color: #202020;
    }

    p{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #202020;
        margin-top: 16px;
        /* padding: 0px 15px; */
    }

    @media screen and (max-width:1024px) {
        width: 84%;
    }

    @media screen and (max-width:768px) {
        width: 100%;
        margin-top: 15px;
    }
`;

export const MidMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 57px;

    @media screen and (max-width: 1024px) {
        gap: 35px;
    }

    @media screen and (max-width: 1024px) {
        gap: 32px;
    }

    @media screen and (max-width: 768px) {
        display: block;
        margin-bottom: 30px;
    }
`;

export const MidImgContainer = styled.div`
    width: 100%;
    height: 557px;
    /* height: 100%; */
    order: 2;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 992px) {
        height: 100%;
    }
`;

export const MidContentContainer = styled.div`
    width: 79%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        text-transform: capitalize;
        color: #202020;
    }

    p{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #202020;
        margin-top: 16px;
        /* padding: 0px 15px; */
    }

    @media screen and (max-width:1024px) {
        width: 100%;
    }

    @media screen and (max-width:768px) {
        margin-top: 15px;
    }
`;
