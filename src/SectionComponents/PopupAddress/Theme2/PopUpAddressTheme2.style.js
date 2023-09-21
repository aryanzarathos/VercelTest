import styled from "styled-components";

export const PopUpItem = styled.div`
    
    .active{
        border: 1px solid #003459;
        border-radius: 4px;
    }
`;
export const HeaderItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;
export const HeaderText = styled.h2`
    font-size: 20px;
    line-height: 23.44px;
    color: #093351;
    font-family: 'Gilroy-Bold', sans-serif;
`;


export const AddressContainer = styled.div`
  padding : 14.66px 9.66px ;
  border: transparent;
  display: flex;
  gap: 9.67px;
  margin-bottom: 10px;
  border: 1px solid transparent;
  .active{
    background-color: red;
  }
  &:hover{
    border: 1px solid #003459;
    border-radius: 4px;
    cursor: pointer;
  }
`;
export const InputRadio = styled.input`
    width: 16.67px;
    height: 16.67px;

`;
export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    .show{
        display: flex;
    }
`;
export const Name = styled.p`
    font-size: 12px;
    line-height: 14.06px;
    color: #003459 !important;
    margin-bottom: 6px;
    font-family: 'Gilroy-SemiBold', sans-serif;
`;
export const Address = styled.p`
    font-size: 16px;
    line-height: 18.75px;
    color: #000000 !important;
    margin-bottom: 6px;
    font-family: 'Gilroy-Regular', sans-serif;
`;
export const Mobile = styled.p`
    font-size: 16px;
    line-height: 18.75px;
    color: #000000 !important;
    margin-bottom: 12px;
    font-family: 'Gilroy-Regular', sans-serif;
`
export const BtnEditRemove = styled.div`
    display: none;
    gap: 26px;
    align-items: center;
    
`
export const BtnEdit = styled.button`
    font-size: 14px;
    line-height: 16.41px;
    color: #003459;
    font-family: 'Gilroy-Regular', sans-serif;
    background-color: #FFFFFF;
    border: transparent;
`
export const BtnRemove = styled.button`
    font-size: 14px;
    line-height: 16.41px;
    color: #003459;
    font-family: 'Gilroy-Regular', sans-serif;
    background-color: #FFFFFF;
    border: transparent;
`
