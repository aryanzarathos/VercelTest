import { styled } from "styled-components";


export const SettingItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:8px;
    p{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #202020;
        font-family:"Poppins", sans-serif;
    }
    .select_dropdown{
        width:152.23px;
    }
    
    button{
        width:100%;
    }
    
`

export const FormFieldWrap = styled.div`
    position:relative;

    .InputFields{
        width:152.23px;
        background: #FCFCFC;
        border: 1.5px solid #ECECEC;
        border-radius: 6px;
        height:33.34px;
        margin-top:0;
        padding-right: 30px;
        color: #202020;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
    }
    
`
export const Span = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #787878;
    font-family:"Poppins", sans-serif;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
`
export const SettingItemWrap = styled.li`
    display:flex;
    flex-direction: column;
    gap: 12px;
    
    &:not(:last-child){
        padding-bottom: 12px;
        border-bottom: 1px solid #EAEAEA;
    }
`
export const ColorPickerDropdown = styled.div`
    position:absolute;
    top:0;
    left:362px;
    z-index:99;
`