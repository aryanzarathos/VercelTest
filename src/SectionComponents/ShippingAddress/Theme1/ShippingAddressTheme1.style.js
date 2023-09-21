import styled from "styled-components";
import cart from "../../../Assets/SectionComponent/Images/CartCommonlayout/cart.png";
import Image3 from '../../../Assets/SectionComponent/Images/Cart/backbtn.png'

export const Row = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
    gap: ${({ item }) => item?.desktop?.gap};
    @media screen and (max-width: 1024px){
        flex-wrap: ${({ item }) => item?.desktop?.flexWrap};
        gap: ${({ item }) => item?.desktop?.gap};
        flex-direction:${({ item }) => item?.tablet?.flexDirection}
    }
    @media screen and (max-width: 767px){
        flex-direction: ${({ item }) => item?.mobile?.flexDirection};
        
    }
`;

export const AddressWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:768px) {
        align-items: flex-start;
        flex-direction: column;
        
    }
    button{
          @media screen and (max-width:768px) {
            margin-left: 0px;
            width: fit-content;
            margin-top: 15px; 
            }      
        }
`;
export const Inputwrapemail = styled.div`
    margin-bottom: ${({ item }) => item?.desktop?.marginInput?.marginBottom};
`;
export const ProgressContainer = styled.div`
    margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
    @media screen and (max-width: 1024px){
        margin-bottom: ${({ item }) => item?.tablet?.marginBottom};
    }
`;

export const Line = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    @media screen and (max-width: 700px){
        display: ${({ item }) => item?.mobile?.display};
        width: ${({ item }) => item?.mobile?.width};
        border: ${({ item }) => item?.mobile?.border};

    }   
`;

export const LayoutSectionLt = styled.div`
    width : ${({ item }) => item?.desktop?.width};
    /* padding-right: 36px; */
    @media screen and (max-width: 1200px){
        width: 65%;
        padding-right: 15px;
    }
    @media screen and (max-width: 1024px){
        width:${({ item }) => item?.tablet?.width};
        padding: 0;
    }
`;
export const LayoutSectionRt = styled.div`
    width: 30%;
    @media screen and (max-width: 1024px){
        width: 35%;
    }
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`;
export const OrderSummaryContainer = styled.div`
    padding: 18px;
    border: 2px solid rgba(0, 52, 89, 0.3);
    border-radius: 8px;
`;
export const OrderSumaryText = styled.div`
    padding-top: 12px;
    border-bottom: 2px solid  rgba(0, 52, 89, 0.3);
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
    justify-content: space-between;
    border-bottom: 2px dashed  rgba(0, 52, 89, 0.3);
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
    border-bottom: 2px dashed  rgba(0, 52, 89, 0.3);
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
export const CartIcon = styled.i`
    -webkit-mask: url(${cart}) no-repeat center ;
    mask-image: url(${cart}) no-repeat center ;  
    width: 20.43px;
    height: 15.59px;
    background-color: #FFFFFF;
    display: block;
   
`;
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

export const AddressText = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
`;
// export const ShippingText = styled.p`
//     font-size: 20px;
//     line-height: 36px;
//     font-family: 'Gilroy-Medium', sans-serif;
//     margin-bottom: 12px;
//     color: #003459;
//     padding-top: 20px;
// `;
export const AddressContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content:${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    padding:  ${({ item }) => item?.desktop?.padding};
    border: ${({ item }) => item?.desktop?.border};
    border-radius:  ${({ item }) => item?.desktop?.borderRadius};
    margin-bottom:  ${({ item }) => item?.desktop?.marginBottom};
    @media screen and (max-width:767px) {
        flex-wrap: ${({ item }) => item?.mobile?.flexWrap};
        padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
        padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
        padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
        padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
    }
    
`;
// export const DeliveryAddressText = styled.p`
//   font-size  : 16px;
//   line-height: 18.75px;
//   font-family: 'Gilroy-Medium', sans-serif;
//   color: #000000;
//   @media screen and (max-width: 700px){
//     font-size  : 14px;
//     line-height: 16.41px;
//     }
// `;
// export const AddAddress = styled.button`
//     font-size: 12px;
//     line-height: 14.06px;
//     font-family: 'Gilroy-Medium', sans-serif;
//     padding: 9px 32px 8px 32px;
//     border: 1px solid #003459;
//     border-radius: 4px;
//     background: #FFFFFF;
//     color: #1F3259;
//     white-space: nowrap;
//     &:hover{
//         cursor: pointer;
//         background-color: rgba(190, 194, 197, 0.3);
//         transition: all 1s;
//     }
//     @media screen and (max-width: 700px){
//         padding: 10px 24px 8px 24px;

//     }
// `;
// export const ShippingSelectText = styled.p`
//     font-size: 20px;
//     line-height: 36px;
//     color: #003459;
//     font-family: 'Gilroy-Medium', sans-serif;
//     margin-bottom: 12px;
// `;
export const ShippingSelectMain = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    gap:  ${({ item }) => item?.desktop?.gap};
    align-items:  ${({ item }) => item?.desktop?.alignItems};
    margin-bottom: 20px;
    @media screen and (max-width: 1024px){
        flex-wrap:  ${({ item }) => item?.tablet?.flexWrap};
    }
    @media screen and (max-width:767px){
        border-bottom: ${({ item }) => item?.mobile?.borderBottom};
        padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
    }
    label{
        width: 100%;
    }
`;
export const StandardSelect = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    padding:  ${({ item }) => item?.desktop?.padding};
    border:  ${({ item }) => item?.desktop?.border};
    border-radius:  ${({ item }) => item?.desktop?.borderRadius};
    align-items: center;
    @media screen and (max-width: 1024px){
        width: ${({ item }) => item?.tablet?.display};
    }

`;
export const PrimeSelect = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    gap:  ${({ item }) => item?.desktop?.gap};
    padding:  ${({ item }) => item?.desktop?.padding};
    border:  ${({ item }) => item?.desktop?.border};
    border-radius:  ${({ item }) => item?.desktop?.borderRadius};
    @media screen and (max-width: 1024px){
        width:  ${({ item }) => item?.tablet?.width};
    }
`;
export const StandardItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    width: ${({ item }) => item?.desktop?.width};
    gap: ${({ item }) => item?.desktop?.gap};
`
export const PrimeItem = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    flex-direction:  ${({ item }) => item?.desktop?.flexDirection};
`
export const ShippingDays = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    flex-direction: ${({ item }) => item?.desktop?.flexDirection};
    flex: ${({ item }) => item?.desktop?.flex};
`
export const StandardText = styled.h2`
    font-size: 16px;
    line-height: 18.75px;
    color: #000000;
    margin-bottom: 2px;
    font-family: 'Gilroy-Medium', sans-serif;
    @media screen and (max-width: 700px){
            font-size: 14px;
            line-height: 16.41px;
        }
    
`
export const PrimeText = styled.h2`
    font-size: 16px;
    line-height: 18.75px;
    color: #000000;
    margin-bottom: 2px;
    font-family: 'Gilroy-Medium', sans-serif;
    @media screen and (max-width: 700px){
            font-size: 14px;
            line-height: 16.41px;
        }
`
export const DaysText = styled.p`
    font-size: 12px;
    line-height: 14.06px;
    color: rgba(0, 52, 89, 0.6);
    font-family: 'Gilroy-Medium', sans-serif;
`
export const PrimeDays = styled.p`
    font-size: 12px;
    line-height: 14.06px;
    color: rgba(0, 52, 89, 0.6);
    font-family: 'Gilroy-Medium', sans-serif;
`
export const Ammount = styled.span`
    text-align: end;
    font-size: 16px;
    line-height: 22.19px;
    font-weight: 400;
    color: rgba(0, 52, 89, 0.6);
    font-family: 'Mountains of Christmas';
`
export const ShoppingCartMobile = styled.div`
        display : none;
  @media screen and (max-width: 700px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 0 12px 0;
        border-bottom: 2px solid rgba(31, 50, 89, 0.1);   
    } 
`;
export const BtnContain = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
     p{
        font-size: 20px;
        line-height: 23.44px;
        color:#1F3259;
        font-family: 'Gilroy-Medium', sans-serif;
        &:hover{
            cursor: pointer;
        }
       
    }
`;
export const BackBtn = styled.i`
    -webkit-mask-image: url(${Image3});
    mask-image: url(${Image3});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    background-color: #1F3259;
    width: 7px;
    height: 12px;
    &:hover{
            cursor: pointer;
        }
`;

export const RadioBtn = styled.input`
     width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    cursor:  ${({ item }) => item?.desktop?.cursor};
    accent-color: ${({ item }) => item?.desktop?.accentColor};
`;
export const CheckBoxContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    gap: ${({ item }) => item?.desktop?.gap};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
`;
export const CheckBox = styled.input`
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    accent-color: ${({ item }) => item?.desktop?.accentColor};
    &:hover{
        cursor: ${({ item }) => item?.desktop?.hover?.cursor};
    }
`;
export const Label = styled.label`
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height:  ${({ item }) => item?.desktop?.lineHeight};
    color:  ${({ item }) => item?.desktop?.color};
    font-family:  ${({ item }) => item?.desktop?.fontFamily};
    @media screen and (max-width:767px) {
        font-size: ${({ item }) => item?.mobile?.fontSize};
        
    }
`;

export const BillingAddress = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
`;
// export const BillingText = styled.p`
//     font-size: 20px;
//     line-height: 36px;
//     font-family: 'Gilroy-Medium', sans-serif;
//     margin-bottom: 12px;
//     color: #003459;
//     padding-top: 20px;
// `;