import styled from "styled-components"
import calenderIcon from '../../../../Assets/SectionComponent/Images/PersonalDetails/calenderIcon.png'
import arrow from '../../../../Assets/SectionComponent/Images/PersonalDetails/arrow.png'



export const HeroConatainer = styled.div`
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop} ;
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom} ;
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft} ;
    padding-Right:${({ item }) => item?.desktop?.padding?.paddingRight} ;
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    gap:${({ item }) => item?.desktop?.gap};
    height:${({ item }) => item?.desktop?.height};
   
    /* @media screen and (max-width: 1250px) {
        padding: 40px 18px;
        gap:22px;
    } */
    @media screen and (max-width: 1024px) {
       flex-wrap: ${({ item }) => item?.tablet?.flexWrap};
       padding-top: ${({ item }) => item?.tablet?.padding?.paddingTop};
       padding-left: ${({ item }) => item?.tablet?.padding?.paddingLeft};
       padding-bottom: ${({ item }) => item?.tablet?.padding?.paddingBottom};
       padding-right: ${({ item }) => item?.tablet?.padding?.paddingRight};
       gap:${({ item }) => item?.tablet?.gap};
       justify-content: ${({ item }) => item?.tablet?.justifyContent};
    }
    @media screen and (max-width: 767px) {
        padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
       padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
       padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
       padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       z-index: 999;
       background: var(--global-color-penitentiary);
       overflow: auto;
    }
`
export const FormContainer = styled.div`
     flex-basis: ${({ item }) => item?.desktop?.flexBasis};
     @media (max-width: 1024px) {
       flex-basis: ${({ item }) => item?.tablet?.flexBasis};
    }
`
export const Form = styled.form`
background: ${({ item }) => item?.desktop?.background};

`
export const InputContainer = styled.div`
    position: ${({ item }) => item?.desktop?.position};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    font-family: ${({ item }) => item?.desktop?.fontFamily};
    margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
    .react-tel-input {
        margin-bottom: 5px;
        .form-control{
            width: 100%;
            padding-top: ${({ PhoneInputStyle }) => PhoneInputStyle?.desktop?.padding?.paddingTop};
            padding-right: ${({ PhoneInputStyle }) => PhoneInputStyle?.desktop?.padding?.paddingRight};
            padding-bottom: ${({ PhoneInputStyle }) => PhoneInputStyle?.desktop?.padding?.paddingBottom};
            height: ${({ PhoneInputStyle }) => PhoneInputStyle?.desktop?.height};
            background: ${({ PhoneInputStyle }) => PhoneInputStyle?.desktop?.background};
            border: ${({ PhoneInputStyle }) => PhoneInputStyle?.desktop?.border};
        }
        .flag-dropdown {
            border: none;
            background-color: transparent;
            .selected-flag{
                background-color: transparent;
            }
        }
    }
`
export const ChangeBtnContainer = styled.div`
    position: ${({ item }) => item?.desktop?.position};
    top: ${({ item }) => item?.desktop?.top};
    right: ${({ item }) => item?.desktop?.right};
    display: ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItem};
    gap:${({ item }) => item?.desktop?.gap};
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    background-color: ${({ item }) => item?.desktop?.backgroundColor};
    /* button{
        color: #003459;
        border: none;
        background-color: transparent;
    } */
    /* .Cancel{
        color: rgba(0, 52, 89, 0.6);
    } */
`
export const DateGenderContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    width: ${({ item }) => item?.desktop?.width};
    @media screen and (max-width:991px) {
        flex-direction:column;

    }

    /* input{
        font-family: 'Gilroy-Medium',sans-serif;
        font-size: 14px;
        line-height: 20px;
        color: #99A2A5;
    } */
`
export const DateOfBirth = styled.div`
    width: ${({ item }) => item?.desktop?.width};
   
    input{
         @media screen and (max-width:768px) {
             margin-bottom: 0px;
    }
    }
    /* input{
        line-height: normal;
        text-transform: uppercase;
        position : relative;
        @media screen and (max-width: 1300px) {
            font-size: 12px;
            padding-left: 12px;
        }
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        background: url(${calenderIcon}) no-repeat;
        position: absolute;
        top: 8px;
        width:20px;
        height: 19px;
        right: 12px;
    } */
`;
export const Gender = styled.div`
        width: ${({ item }) => item?.desktop?.width};
        position: ${({ item }) => item?.desktop?.position};
        background-color: ${({ item }) => item?.desktop?.background};
        

        /* &::after{
            width: 10px; 
            height: 10px; 
            background: url(${arrow}) no-repeat;
            position: absolute;
            top: 47px;
            left: 85%;
            content: "";
        } */
        /* button{ */
        /* cursor :pointer ;
        margin: 8px 0 0 0;
        padding: 12px 24px ;
        width: 100%;
        color: #99A2A5;
        background: rgba(239, 239, 239, 0.8);
        border: none;
        border-radius: 8px;
        appearance: none;
        font-family: 'Gilroy-Medium',sans-serif;
        font-size: 14px;
        line-height: 18px;
        text-align: left;
        white-space: nowrap; */
        /* @media screen and (max-width: 1300px) {
            padding: 12px;
        } */
        /* }  */
        /* .show{
        display: Block;
        }  */
`
export const OptionContainer = styled.ul`
    background: ${({ item }) => item?.desktop?.background};
    box-shadow: ${({ item }) => item?.desktop?.boxShadow};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    position: ${({ item }) => item?.desktop?.position};
    top: ${({ item }) => item?.desktop?.top};
    width: ${({ item }) => item?.desktop?.width};
    overflow: ${({ item }) => item?.desktop?.overflow};
    z-index: 99;
    /* li{
        cursor: pointer;
        margin: 0;
        border-radius: 0;
        background-color: transparent ;
        padding: 12px 20px;
        white-space: nowrap;
        &:hover{
            background: #1F3259 ;
            color: #FFFFFF;
        }
    } */
    /* .TopRadius{
      border-radius: 8px 8px 0 0  ;
    }
    .BottomRadius{
      border-radius: 0 0 8px 8px ;
    } */
`
export const ButtonsContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    gap: ${({ item }) => item?.desktop?.gap};
     @media screen and (max-width: 767px) {
       position: fixed;
       bottom: 0;
       left: 0;
       width: 100%;
       z-index: 999;
       background: var(--global-color-penitentiary);
       padding: 10px;
       box-shadow: 4px -4px 8px 0px rgba(0, 0, 0, 0.06);

    }

`

export const ContainerRight = styled.div`
   flex-basis: ${({ item }) => item?.desktop?.flexBasis};
   @media (max-width: 1024px) {
       flex-basis: ${({ item }) => item?.tablet?.flexBasis};

   }
   .verifyOtpSection{
    @media screen and (max-width:768px) {
        position: fixed;
        top: 0px;
        padding: 30px;
        background: var(--global-color-penitentiary);
        z-index: 999;
        width: 100%;
        left: 0;
        height: 100vh;
    }
   }
`
export const BackBtn = styled.div`
margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
@media screen and (min-width: 767px) {  
    display: ${({ item }) => item?.mobile?.display};
}
.goBack{
    color: var(--global-color-primary);
    font-size:var(--global-typography-fontSizeP);
}

svg{
    width: ${({ itemBackSvg }) => itemBackSvg?.desktop?.width};
    height: ${({ itemBackSvg }) => itemBackSvg?.desktop?.height};
}
`
export const GenderLabel = styled.label`
    font-weight: ${({ item }) => item?.desktop?.fontWeight};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    color: ${({ item }) => item?.desktop?.color};
    display: ${({ item }) => item?.desktop?.display};
    font-family: ${({ item }) => item?.desktop?.fontFamily};
    `;
export const GenderButtonDiv = styled.div`
position:${({ item }) => item?.desktop?.position};

svg{
        position: ${({ itemDownSvg }) => itemDownSvg?.desktop?.position};
    top: ${({ itemDownSvg }) => itemDownSvg?.desktop?.top};
    right: ${({ itemDownSvg }) => itemDownSvg?.desktop?.right};
    transform: ${({ itemDownSvg }) => itemDownSvg?.desktop?.transform};
}
`;
export const OptionContainerItem = styled.li`
cursor: ${({ item }) => item?.desktop?.cursor};
        margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
        margin-right: ${({ item }) => item?.desktop?.margin?.marginRight};
        margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
        margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft};
          padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
        padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
        padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
        padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
        border-radius: ${({ item }) => item?.desktop?.borderRadius};
        background-color: ${({ item }) => item?.desktop?.backgroundColor} ;
        white-space: ${({ item }) => item?.desktop?.whiteSpace};
          &:hover{
            background: ${({ item }) => item?.desktop?.hover?.background};
            color: ${({ item }) => item?.desktop?.hover?.color};
        }
        `;