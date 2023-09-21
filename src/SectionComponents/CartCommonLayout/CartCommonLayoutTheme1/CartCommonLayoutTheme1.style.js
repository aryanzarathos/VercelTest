import styled from "styled-components";

export const Row = styled.div`
    /* display: flex;
    margin-bottom: 50px;
    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
        gap: 50px;
        
    } */
`;
export const LayoutSectionLt = styled.div`
    width : 70%;
    padding-right: 36px;
    @media screen and (max-width: 1200px){
        width: 65%;
        padding-right: 15px;
    }
    @media screen and (max-width: 1000px){
        width: 100%;
        padding: 0;
    }
`;
export const LayoutSectionRt = styled.div`
    width: 30%;
    @media screen and (max-width: 1024px){
        width: 35%;
    }
    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;
export const OrderSummaryContainer = styled.div`
    padding: 18px;
  
    border-radius: 8px;
`;
export const OrderSumaryText = styled.div`
    padding-top: 12px;
  
    margin-bottom: 6px;
    h2{
        font-size: 20px;
        line-height: 36px;
        color: #003459;
        @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 36px;
        }
    }
`

export const Subtotal = styled.div`
    padding: 14px 0 14px 0;
    display: flex;
    margin-bottom: 8px;
    justify-content: space-between;

    align-items: center;
    h2{
        font-size: 20px;
        line-height: 36px;
        color: #003459;
        @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 36px;
            @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 24px;
        }
    }
    }
    p{
        font-size: 16px;
        line-height: 24px;
        color: #003459;

    }

`;
export const Shipping = styled.div`
    padding: 14px 0 14px 0;
    display: flex;
    justify-content: space-between;
    
    align-items: center;
    h2{
        font-size: 20px;
        line-height: 36px;
        color: #003459;
        @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 36px;
        }
    }
    p{
        font-size: 16px;
        line-height: 24px;
        color: #003459;

    }
`;
export const TotalAmmount = styled.div`
    padding: 14px 0 14px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 20px;
        line-height: 36px;
        color: #003459;
        @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 36px;
        }
    }
    p{
        font-size: 16px;
        line-height: 24px;
        color: #003459;

    }
`;
export const LineDot = styled.div`
    width: 100%;
    border-bottom: 2px dotted ;
    border-color: rgba(0, 52, 89, 0.3);
    
`;
export const Line = styled.div`
    width: 100%;
    border-bottom: 2px solid ;
    border-color: rgba(0, 52, 89, 0.3);
`;

// export const CartIcon = styled.i`
//     -webkit-mask: url(${cart}) no-repeat center ;
//     mask-image: url(${cart}) no-repeat center ;  
//     width: 20.43px;
//     height: 15.59px;
//     background-color: #FFFFFF;
//     display: block;

// `;
export const ButtonContinue = styled.button`
    width: 100%;
    height: 42px;
    background-color: #003459;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11.77px;
    font-size: 20px;
    line-height: 36px;
    border-radius: 8px;
    border: transparent;
    margin-top: 6px;
    @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 36px;
        }
    &:hover{
        background-color: #0a4d79;
        cursor: pointer;
        transition: all 1s;
    }
`;
export const CartIconMain = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
export const DotMain = styled.div`
    display: flex;
    gap: 0px;
    position: absolute;
    top: 5px;
    left: 9px;

`;
export const Dot = styled.li`
    font-size: 10px;
    color: #FFFFFF;
    margin: -3px;
`