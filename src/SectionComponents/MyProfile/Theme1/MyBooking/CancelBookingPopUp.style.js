import { styled } from "styled-components";

export const CancelBookingPopUpWrapper = styled.div`

`
export const HeadingPara = styled.h5`
color: var(--global-color-quaternary);
font-size: var(--global-typography-fontSizeH5);
font-family: var(--global-typography-fontFamilyH5);
font-style: var(--global-typography-fontStyleH5);
font-weight: var(--global-typography-fontWightMedium);
line-height: var(--global-typography-lineHeightH5);
padding-bottom: 10px;
border-bottom: 1px solid var(--global-color-quaternary-lightShadeThin);
`
export const MainContentWrap = styled.div`
.message-label{
    color: var(--global-color-quaternary);
    font-size: calc( var(--global-typography-fontSizeP) - 2px );
    font-family: var(--global-typography-fontFamilyP);
    font-style: var(--global-typography-fontStyleP);
    font-weight: var(--global-typography-fontWightMedium);
    line-height: var(--global-typography-lineHeightP);
}
`;

export const ConfirmationText = styled.h6`
color: var(--global-color-quaternary);
font-size: var(--global-typography-fontSizeH6);
font-family: var(--global-typography-fontFamilyH6);
font-style: var(--global-typography-fontStyleH6);
font-weight: var(--global-typography-fontWightLight);
line-height: var(--global-typography-lineHeightH6);
margin-bottom: 20px;
`;
export const NotePara = styled.p`
color: var(--global-color-quaternary-lightShadeThin) !important;
font-size: calc( var(--global-typography-fontSizeP) - 4px ) !important;
font-family: var(--global-typography-fontFamilyP) !important;
font-style: var(--global-typography-fontStyleP) !important;
font-weight: var(--global-typography-fontWightLight) !important;
line-height: var(--global-typography-lineHeightP) !important;
margin-top:10px;
`;
export const ButtonWrap = styled.div`
margin-top:16px;
display: flex;
gap:12px;
justify-content: flex-end;
button{
    padding: 6px 20px;
    border-radius: 53px ;
    letter-spacing: 0.2px;
    cursor: pointer;
    font-size: var(--global-typography-fontSizeButton);
    font-family: var(--global-typography-fontFamilyButton);
    font-style: var(--global-typography-fontStyleButton);
    font-weight: var(--global-typography-fontWightMedium);
    line-height: var(--global-typography-lineHeightButton);
}
`;
export const CancelBtn = styled.button`
    color:var(--global-color-primary);
    background-color: transparent;
    border: 1px solid var(--global-color-primary);
`;
export const ProceedBtn = styled.button`
    color:var(--global-color-penitentiary);
    background-color: var(--global-color-primary);
    border: 1px solid var(--global-color-primary);
`;

export const RescheduleWrap = styled.div``

export const SelectDataParaWrap = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 14px;
`
export const SelectPara = styled.p`
color: var(--global-color-quaternary) !important;
font-size: calc( var(--global-typography-fontSizeP) - 2px ) !important;
font-family: var(--global-typography-fontFamilyP) !important;
font-style: var(--global-typography-fontStyleP) !important;
font-weight: var(--global-typography-fontWightMedium) !important;
line-height: var(--global-typography-lineHeightP) !important;
`
export const MainDatePicker = styled.div`
position: relative;
.dateIcon{
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
    left: auto;
    right: 14px;
}
.react-datepicker-wrapper{
    width: auto;
    input{
        position: relative;
        padding: 6px 0px 6px 14px ;
        display: block;
        z-index: 1;
        border-radius: 4px;
        background: transparent;
        border: 0.8px solid var(--global-color-quaternary-lightShadeThin);
        color: var(--global-color-quaternary) ;
        font-size: calc( var(--global-typography-fontSizeP) - 2px ) ;
        font-family: var(--global-typography-fontFamilyP) ;
        font-style: var(--global-typography-fontStyleP) ;
        font-weight: var(--global-typography-fontWightMedium) ;
        line-height: var(--global-typography-lineHeightP) ;
        cursor: pointer;
        &::placeholder{
            color: var(--global-color-quaternary-lightShadeThin);
        }
    }
}
`;

export const SelectTimeWrap = styled.div`
margin: 24px 0px 20px 0;
`
export const SlotsWrap = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
gap: 12px;
`
export const Slots = styled.button`
padding: 8px 11px;
background-color: transparent;
border-radius: 4px;
cursor: pointer;
border: 0.8px solid var(--global-color-quaternary-lightShadeThin);
color: var(--global-color-quaternary-lightShadeThin) ;
font-size: calc( var(--global-typography-fontSizeP) - 2px ) ;
font-family: var(--global-typography-fontFamilyP) ;
font-style: var(--global-typography-fontStyleP) ;
font-weight: var(--global-typography-fontWightMedium) ;
line-height: var(--global-typography-lineHeightP) ;
transition: all .3s;
&.active{
    color:var(--global-color-penitentiary);
    background-color: var(--global-color-primary);
    border: 0.8px solid var(--global-color-primary);
}
&:hover{
    color:var(--global-color-penitentiary);
    background-color: var(--global-color-primary);
    border: 0.8px solid var(--global-color-primary);
}
`