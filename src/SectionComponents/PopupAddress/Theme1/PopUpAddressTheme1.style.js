import styled from "styled-components";

export const PopUpItem = styled.div`
`
export const HeaderItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
`;
export const HeaderText = styled.h2`
    font-size: 20px;
    line-height: 23.44px;
    color: #093351;
    font-family: 'Gilroy-Bold', sans-serif;
`;

export const InputName = styled.input`
    width: 100%;
    border: 1px solid var;
    border-radius: 4px;
    padding: 11px 21px 10px 21px;
    margin-bottom: 20px;
    &::placeholder{
        font-size: 16px;
        line-height: 18.75px;
        color: rgba(32, 32, 32, 0.6);
        font-family: 'Gilroy-Bold', sans-serif;

        /* font-size: "var(--global-typography-fontSizeP);
        line-height:"var(--global-typography-fontStyleP)",
        color: "var(--global-color-primary)",
        font-family: 'Gilroy-Bold', sans-serif; */
       
    }
`
export const MobPInItem = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    gap:  ${({ item }) => item?.desktop?.gap};
    align-items:  ${({ item }) => item?.desktop?.alignItems};
    margin-bottom:  ${({ item }) => item?.desktop?.marginBottom};
    margin-top:  ${({ item }) => item?.desktop?.marginTop};
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1000px){
        flex-wrap:  ${({ item }) => item?.desktop?.display};
        gap:  ${({ item }) => item?.desktop?.display};
    }
    @media screen and (max-width:768px) {
            grid-template-columns: 1fr;

    }
`;
export const InputMobile = styled.input`
    width: 100%;
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 4px;
    padding: 11px 21px 10px 21px;
    &::placeholder{
        font-size: 16px;
        line-height: 18.75px;
        color: rgba(32, 32, 32, 0.6);
        font-family: 'Gilroy-Bold', sans-serif;
       
    }
`
export const InputPin = styled.input`
    width: 100%;
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 4px;
    padding: 11px 21px 10px 21px;
    &::placeholder{
        font-size: 16px;
        line-height: 18.75px;
        color: rgba(32, 32, 32, 0.6);
        font-family: 'Gilroy-Bold', sans-serif;
       
    }
`;
export const CityStatusItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    /* align-items: ${({ item }) => item?.desktop?.display}; */
    margin-bottom:  ${({ item }) => item?.desktop?.marginBottom};
    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
        gap: 20px;
    }
    .countryDropdown{
        border: ${({ item2 }) => item2?.desktop?.InputNumber?.borderInput};
        height: ${({ item2 }) => item2?.desktop?.InputNumber?.height};
        border-radius: 4px;
    }
`;
export const InputCity = styled.input`
    width: 100%;
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 4px;
    padding: 11px 21px 10px 21px;
    &::placeholder{
        font-size: 16px;
        line-height: 18.75px;
        color: rgba(32, 32, 32, 0.6);
        font-family: 'Gilroy-Bold', sans-serif;
       
    }
`;
export const InputState = styled.input`
    width: 100%;
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 4px;
    padding: 11px 21px 10px 21px;
    &::placeholder{
        font-size: 16px;
        line-height: 18.75px;
        color: rgba(32, 32, 32, 0.6);
        font-family: 'Gilroy-Bold', sans-serif;
       
    }
`;
export const InputStreet = styled.input`
    width: 100%;
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 4px;
    padding: 11px 21px 10px 21px;
    margin-bottom: 20px;
    &::placeholder{
        font-size: 16px;
        line-height: 18.75px;
        color: rgba(32, 32, 32, 0.6);
        font-family: 'Gilroy-Bold', sans-serif;
       
    }
`
export const InputArea = styled.input`
    width: 100%;
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 4px;
    padding: 11px 21px 10px 21px;
    margin-bottom: 20px;
    &::placeholder{
        font-size: 16px;
        line-height: 18.75px;
        color: rgba(32, 32, 32, 0.6);
        font-family: 'Gilroy-Bold', sans-serif;
       
    }
`
export const InputLandMark = styled.input`
    width: 100%;
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 4px;
    padding: 11px 21px 10px 21px;
    margin-bottom: 20px;
    &::placeholder{
        font-size: 16px;
        line-height: 18.75px;
        color: rgba(32, 32, 32, 0.6);
        font-family: 'Gilroy-Bold', sans-serif;
       
    }
`;
export const BtnItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap:  ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    margin-bottom:  ${({ item }) => item?.desktop?.marginBottom};
    @media screen and (max-width:470px) {
        flex-direction: column-reverse;
    }
`;
export const BtnCancel = styled.button`
    width: 100%;
    font-size: 12px;
    line-height: 14.06px;
    color: #003459;
    background-color: #FFFFFF;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #003459;
    &:hover{
        cursor: pointer;
        background-color: #bebebe;
        transition: all 1.2s;
    }
`;
export const BtnSaveAdd = styled.button`
    width: 100%;
    width: 100%;
    font-size: 12px;
    line-height: 14.06px;
    color: #FFFFFF;
    background-color: #003459;
    height: 40px;
    border-radius: 8px;
    border: transparent;
    &:hover{
        cursor: pointer;
        background-color: #078be9;
        transition: all 1.2s;
    }
`;
export const Form = styled.form``
export const InputWrap = styled.div`
margin-bottom: ${({ item }) => item?.desktop?.margininput?.marginBottom};
`
export const PinWrap = styled.div`
width: ${({ item }) => item?.desktop.width};
`
export const StateSelectWrap = styled.div`
width: 100%;
.cstmSelectWrap{
    .form-group {
      .select-control {
        height: 40px;
        margin-top: 0;
        border: ${({ item }) => item?.desktop?.InputNumber?.borderInput};
      }  
    }
}
`
export const PhoneInputMain = styled.div`
@media screen and (max-width:768px) {
    width: 100%;
}
.react-tel-input{
    height: 40px;
    .form-control{
        border: ${({ item }) => item?.desktop?.InputNumber?.borderInput};
        height: ${({ item }) => item?.desktop?.InputNumber?.height};
                width: 100%;

       
    }
    .flag-dropdown {
        border: ${({ item }) => item?.desktop?.Flag?.border};
        border-right: ${({ item }) => item?.desktop?.Flag?.borderRight};
        background-color: ${({ item }) => item?.desktop?.Flag?.backgroundColor};
    }
}
`


