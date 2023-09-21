import styled from "styled-components";

export const AddressText = styled.div`
    display: flex;
    justify-content: flex-start;
`;
export const ShippingText = styled.p`
    font-size: 20px;
    line-height: 36px;
    font-family: 'Gilroy-Medium', sans-serif;
    margin-bottom: 12px;
    color: #003459;
    @media screen and (max-width: 700px){
        padding-top: 20px;
    }
    
`;
export const BillingAddress = styled.div`
    display: flex;
    justify-content: flex-start;
`;
export const BillingText = styled.p`
    font-size: 20px;
    line-height: 36px;
    font-family: 'Gilroy-Medium', sans-serif;
    margin-bottom: 12px;
    color: #003459;
    padding-top: 20px;
`;
export const AddressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10%;
    padding: 18.66px 17.66px;
    border: 1px solid rgba(0, 52, 89, 0.3);
    border-radius: 8px;
    margin-bottom: 16px;
    @media screen and (max-width: 700px) {
        flex-wrap: wrap;
    }
`;
export const AddressContainerSecond = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 16px 22px 16px;
    border: 1px solid rgba(0, 52, 89, 0.3);
    border-radius: 8px;
    margin-bottom: 24px;
`
export const DeliveryAddressText = styled.p`
  font-size  : 16px;
  line-height: 18.75px;
  font-family: 'Gilroy-Medium', sans-serif;
  color: #000000;
  @media screen and (max-width: 700px){
    font-size  : 14px;
    line-height: 16.41px;
    }
`;
export const InputRadio = styled.input`
    width: 16.67px;
    height: 16.67px;
    &:hover{
        cursor: pointer;
    }
`;
export const Detail = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Name = styled.p`
    font-size: 12px;
    line-height: 14.06px;
    color: #003459;
    margin-bottom: 6px;
    font-family: 'Gilroy-SemiBold', sans-serif;
    @media screen and (max-width: 700px) {
        font-size: 14px;
        line-height: 16.41px;
    }
`;
export const Address = styled.p`
    font-size: 16px;
    line-height: 18.75px;
    color: #000000;
    margin-bottom: 6px;
    font-family: 'Gilroy-Regular', sans-serif;
    @media screen and (max-width: 700px) {
        font-size: 12px;
        line-height: 18px;
    }
`;
export const Mobile = styled.p`
    font-size: 16px;
    line-height: 18.75px;
    color: #000000;
    margin-bottom: 12px;
    font-family: 'Gilroy-Regular', sans-serif;
    @media screen and (max-width: 700px) {
        font-size: 12px;
        line-height: 18px;
    }
`
export const AddressItem = styled.div`  
  display: flex;
  gap: 9.67px;

`
export const AddAddress = styled.button`
    font-size: 12px;
    line-height: 14.06px;
    font-family: 'Gilroy-Medium', sans-serif;
    padding: 9px 32px 8px 32px;
    border: 1px solid #003459;
    border-radius: 4px;
    background: #FFFFFF;
    color: #1F3259;
    white-space: nowrap;
    &:hover{
        cursor: pointer;
        background-color: rgba(190, 194, 197, 0.3);
        transition: all 1s;
    }
    @media screen and (max-width: 700px){
        padding: 10px 24px 8px 24px;
        margin-left: 23px;
    }
`;
export const AddAddressBtn = styled.button`
    font-size: 12px;
    line-height: 14.06px;
    font-family: 'Gilroy-Medium', sans-serif;
    padding: 9px 32px 8px 32px;
    border: 1px solid #003459;
    border-radius: 4px;
    background: #FFFFFF;
    color: #1F3259;
    white-space: nowrap;
    &:hover{
        cursor: pointer;
        background-color: rgba(190, 194, 197, 0.3);
        transition: all 1s;
    }
    @media screen and (max-width: 700px){
        padding: 10px 24px 8px 24px;
    }
`;
export const ShippingSelectText = styled.p`
    font-size: 20px;
    line-height: 36px;
    color: #003459;
    font-family: 'Gilroy-Medium', sans-serif;
    margin-bottom: 12px;
`;
export const ShippingSelectMain = styled.div`
    display: flex;
    gap: 27px;
    width: 100%;
    align-items: center;
    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
    }
    label{
        width: 100%;
    }
`;
export const StandardSelect = styled.div`
    display: flex;
    gap: 9.67px;
    padding: 18px 17px 18px 17px;
    border: 1px solid rgba(0, 52, 89, 0.2);
    border-radius: 4px;
    @media screen and (max-width: 1000px){
        width: 100%;
    }

`;
export const PrimeSelect = styled.div`
    display: flex;
    gap: 9.67px;
    padding: 18px 17px 18px 17px;
    border: 1px solid rgba(0, 52, 89, 0.2);
    border-radius: 4px;
    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;
export const StandardItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
`
export const PrimeItem = styled.div`
    display: flex;
    flex-direction: column;
`
export const ShippingDays = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
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
`;

export const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 25px;
`;
export const CheckBox = styled.input`
    width: 16px;
    height: 16px;
    &:hover{
        cursor: pointer;
    }
`;
export const Label = styled.label`
    font-size: 14px;
    line-height: 16.41px;
    color: #000000;
    font-family: 'Gilroy-Regular', sans-serif;
`
export const LayoutSectionLt = styled.div`
    width : 70%;
    @media screen and (max-width: 1200px){
        width: 65%;
        padding-right: 15px;
    }
    @media screen and (max-width: 1000px){
        width: 100%;
        padding: 0;
    }
`;
