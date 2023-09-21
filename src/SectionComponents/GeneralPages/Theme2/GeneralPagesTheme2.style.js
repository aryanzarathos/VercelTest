import styled from "styled-components";

export const HeaderSection = styled.div`
    margin-top: 48px;
    /* display: flex;
    justify-content: flex-start;
    flex-direction: column; */

    h3{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 60px;
        text-transform: capitalize;
        color: #202020;
    }

    p{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #202020;
    }
`;

export const GeneralPageTheme2TopContainer = styled.div`
    margin-top: 56px;

    h3{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        text-align: start;
        text-transform: capitalize;
        color: #202020;
    }

    p{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: start;
        color: rgba(32, 32, 32, 0.6);
        margin-top: 8px;
    }

    button{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #FFFFFF;
        padding: 10px 36px;
        background-color: rgba(0, 0, 0, 1);
        border: none;
        margin-top: 24px;
    }

    @media screen and (max-width:600px) {
        margin-top: 36px;
    }
`;

export const GeneralPageTheme2SubContainer = styled.div`
    margin-top: 72px;

    h3{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        text-align: start;
        line-height: 36px;
        text-transform: capitalize;
        color: #202020;
    }

    p{
        font-family: 'Poppins','sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: start;
        color: rgba(32, 32, 32, 0.6);
        margin-top: 8px;
    }

    @media screen and (max-width:600px) {
        margin-top: 48px;
    }
`;

export const GeneralPageTheme2BottomContainer = styled.div`
    margin: 72px 0px 185px 0px;

    @media screen and (max-width: 600px) {
        margin: 48px 0px 100px 0px;
    }
`;

export const BottomContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3.5fr;
    margin-top: 48px;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        margin-top: 30px;
        row-gap: 4px;
    }
`;

export const ContentContainerHeading = styled.h3`
    font-family: 'Poppins','sans-serif';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-transform: capitalize;
    color: #202020;
`;

export const Headingcontent = styled.p`
    font-family: 'Poppins','sans-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(32, 32, 32, 0.6);
`;

