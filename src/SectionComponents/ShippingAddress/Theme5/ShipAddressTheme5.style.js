import styled from "styled-components";


export const PaymentMethodText = styled.div`
    display: flex;
    justify-content: flex-start;
`;
export const PaymentText = styled.p`
    font-size: 20px;
    line-height: 36px;
    font-family: 'Gilroy-Medium', sans-serif;
    margin-bottom: 12px;
    color: #003459;
    @media screen and (max-width: 700px){
        padding-top: 20px;
    }  
`;
export const CodContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 26.67px;
    width: 100%;
    border: 1px solid rgba(0, 52, 89, 0.2);
    border-radius: 8px;
    padding: 26px 30px 22px 30px ;
    margin-bottom: 24px;
    &:hover{
        cursor: pointer;
    }
`;
export const OnlinePayContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 26.67px;
    width: 100%;
    border: 1px solid rgba(0, 52, 89, 0.2);
    border-radius: 8px;
    padding: 26px 30px 22px 30px ;
    &:hover{
        cursor: pointer;
    }
`;
export const InputRadio = styled.input`
    width: 16.67px;
    height: 16.67px;
    &:hover{
        cursor: pointer;
    }
`;
export const CodMethod = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CodText = styled.p`
    font-size: 18px;
    line-height: 21px;
    color: #1B2637;
    font-family: 'Gilroy-Medium', sans-serif;
    margin-bottom: 2px;
`
export const PodText = styled.p`
    font-size: 14px;
    line-height: 16px;
    color: rgba(32, 32, 32, 0.6);
    font-family: 'Gilroy-Medium', sans-serif;
`;
export const ImgItem = styled.figure`
    width: 105px;
    height: 22px;
    margin-bottom: 2px;
`
export const RozerPayImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
export const PodMethod = styled.div`
    display: flex;
    flex-direction: column;
    
`;
export const LinkRazer = styled.span`
    font-size: 14px;
    line-height: 16.41px;
    color: rgba(32, 32, 32, 0.6);
    font-family: 'Gilroy-Medium', sans-serif;
`
export const LayoutSectionLt = styled.div`
    width : 70%;
    /* padding-right: 36px; */
    @media screen and (max-width: 1200px){
        width: 65%;
        padding-right: 15px;
    }
    @media screen and (max-width: 1000px){
        width: 100%;
        padding: 0;
    }

    .active{
        border: 1px solid #003459;    }
`;

