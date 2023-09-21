import styled from "styled-components";

export const OurServicesCardsMainContainer = styled.div`
    margin: 96px 0px;
`;

export const OurServicesCardsHeading = styled.p`
    font-family: 'Futura','sans-serif';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #000000;  
`;

export const HeadingContent = styled.span`
    font-family: 'Futura','sans-serif';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
    color: #000000;  
`;

export const OurServicesCardsSubContainer = styled.div`
    /* margin : 48px 0px 97px 0px; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 101px;
    
    @media screen and (max-width : 1025px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width : 768px) {
        column-gap: 70px;
    }

    @media screen and (max-width : 600px) {
        grid-template-columns: 1fr;
    }
`;

export const OurServicesCards = styled.div`
    border-radius : 24px;
    position: relative;
    margin: 48px 0px 81px 0px;
    
    @media screen and (max-width : 600px) {
        margin: 48px 0px 60px 0px;
    }
`;

export const CardsImgContainer = styled.div`
    width : 100%;
    height: 231px;
    
    img{
        width: 100%;
        border-radius: 24px 24px 0px 0px;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 600px) {
        height: auto;
    }
`;

export const CardsContentConatiner = styled.div`
    background-color: rgba(255, 255, 255, 1);  
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.15);
    border-radius: 24px 0px 24px 24px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -72px;
    padding: 12px 16px 13px 24px;
    transition: height 1s;
    height: 47%;
    overflow: hidden;
    
    &:hover{
        height: 75%;
        cursor: pointer;
        border-radius: 24px 24px 24px 24px;      
        padding-bottom: 16px;


        .ExpandedContent{
            -webkit-line-clamp: 7;
            overflow-y: auto;
            ::-webkit-scrollbar {
                width: 5px;
            }

            ::-webkit-scrollbar-thumb{
                border-radius: 10px;
            }
        }
    }
`;

export const CardsContentHeading = styled.h3`
    font-family: 'Futura Md BT','sans-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;  
`;

export const CardsContentDescription = styled.p`
    font-family: 'Futura Bk BT','sans-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #000000;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 20px;
`;

export const HeadingBottomLine = styled.span`
    display: flex;
    flex-direction: row;
    margin: 8px 0px;
    width: 100%;
    height: 1px;
    background-color: rgba(32, 32, 32, 0.3);
`;
