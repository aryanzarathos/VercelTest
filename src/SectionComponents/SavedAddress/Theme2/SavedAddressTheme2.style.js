import styled from "styled-components";

export const SavedAddressTheme2Container = styled.div`
  position: ${({ item }) => item?.desktop?.position};
  top: ${({ item }) => item?.desktop?.top};
  left: ${({ item }) => item?.desktop?.left};
  padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
  padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
  padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
  padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
  z-index: ${({ item }) => item?.desktop?.zIndex};
  width: ${({ item }) => item?.desktop?.width};

  @media screen and (max-width: 767px) {
    padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
    padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
    padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
    padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
    background: var(--global-color-penitentiary);
    position: fixed;
    height: 100vh;
    overflow: auto;
  }
  /* .hide{
        display: none;
    }
    .show{
        display: block;
    } */
`;

export const Main = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    `
export const HeaderItem = styled.div`
        display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};

    svg{
        width: ${({ itemAddressTheme2BackSvg }) => itemAddressTheme2BackSvg?.desktop?.width};
        height: ${({ itemAddressTheme2BackSvg }) => itemAddressTheme2BackSvg?.desktop?.height};
        fill: ${({ itemAddressTheme2BackSvg }) => itemAddressTheme2BackSvg?.desktop?.fill};
    }
`;
// export const HeaderText = styled.h2`
//     font-size: 20px;
//     line-height: 23.44px;
//     color: #093351;
//     font-family: 'Gilroy-Bold', sans-serif;
// `;

export const InputName = styled.input`
    /* width: 100%;
    border: 1px solid rgba(32, 32, 32, 0.1);
    border-radius: 4px;
    padding: 11px 21px 10px 21px;
    margin-bottom: 20px; */
    /* &::placeholder{
        font-size: 16px;
        line-height: 18.75px;
        color: rgba(32, 32, 32, 0.6);
        font-family: 'Gilroy-Bold', sans-serif;
       
    } */
`
export const MobPInItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
    .react-tel-input{
        margin-bottom: 20px;
        .form-control{
            padding-top: 8px;
            padding-right: 21px;
            padding-bottom: 8px;
            height: 40px;
            width: 100%;
            border-style: ${({ item }) => item?.desktop?.borderStyle};
            border-color: ${({ item }) => item?.desktop?.borderColor};
            border-width: ${({ item }) => item?.desktop?.borderWidth};
            font-size:${({ item }) => item?.desktop?.fontSize};
            font-family:${({ item }) => item?.desktop?.fontFamily};
            font-style:${({ item }) => item?.desktop?.fontStyle};
            font-weight:${({ item }) => item?.desktop?.fontWeight};
            color:${({ item }) => item?.desktop?.color};
            line-height:${({ item }) => item?.desktop?.lineHeight};
            background:${({ item }) => item?.desktop?.background};
            
        }
        .flag-dropdown {
            border: none;
            background-color: transparent;
            .selected-flag{
                background-color: transparent;
            }
        }
    }
    @media screen and (max-width: 1024px){
        flex-wrap:${({ item }) => item?.tablet?.flexWrap};
    gap: ${({ item }) => item?.tablet?.gap};
    }
`;
// export const InputMobile = styled.input`
//     width: 100%;
//     border: 1px solid rgba(32, 32, 32, 0.1);
//     border-radius: 4px;
//     padding: 11px 21px 10px 21px;
//     &::placeholder{
//         font-size: 16px;
//         line-height: 18.75px;
//         color: rgba(32, 32, 32, 0.6);
//         font-family: 'Gilroy-Bold', sans-serif;

//     }
// `
// export const InputPin = styled.input`
//     width: 100%;
//     border: 1px solid rgba(32, 32, 32, 0.1);
//     border-radius: 4px;
//     padding: 11px 21px 10px 21px;
//     &::placeholder{
//         font-size: 16px;
//         line-height: 18.75px;
//         color: rgba(32, 32, 32, 0.6);
//         font-family: 'Gilroy-Bold', sans-serif;

//     }
// `;
export const CityStatusItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
    @media screen and (max-width: 1024px){
        flex-wrap: ${({ item }) => item?.tablet?.flexWrap};
        gap: ${({ item }) => item?.tablet?.gap};
    }
        .cstmSelectWrap{
            width:100%;
            margin-bottom: ${({ dropdownItem }) => dropdownItem?.desktop?.margin?.marginBottom};
            .form-group {
                .select-control {
                    margin-top:0;
                    padding-top:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingTop};
                    padding-right:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingRight};
                    padding-bottom:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingBottom};
                    padding-left:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingLeft};
                    height: auto;
                    border-style:${({ dropdownItem }) => dropdownItem?.desktop?.borderStyle};
                    border-color:${({ dropdownItem }) => dropdownItem?.desktop?.borderColor};
                    border-radius:${({ dropdownItem }) => dropdownItem?.desktop?.borderRadius};
                    border-width:${({ dropdownItem }) => dropdownItem?.desktop?.borderWidth};
                    font-size:${({ dropdownItem }) => dropdownItem?.desktop?.fontSize};
                    font-family:${({ dropdownItem }) => dropdownItem?.desktop?.fontFamily};
                    font-style:${({ dropdownItem }) => dropdownItem?.desktop?.fontStyle};
                    font-weight:${({ dropdownItem }) => dropdownItem?.desktop?.fontWeight};
                    color:${({ dropdownItem }) => dropdownItem?.desktop?.color};
                    line-height:${({ dropdownItem }) => dropdownItem?.desktop?.lineHeight};
                    -webkit-appearance:auto;
                    -moz-appearance:auto;
                    appearance: auto;
                }

                .animLabel {
                    display: none;
                }

                &::before{
                    content: none;
                }
            }
        }
        
`;

export const CountryWrap = styled.div`
.country_dropdown{
    background-color: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.background};
    border-style: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.borderStyle};
    border-color: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.borderColor};
    border-width: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.borderWidth};
    font-size:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.fontSize};
    font-family:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.fontFamily};
    font-style:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.fontStyle};
    font-weight:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.fontWeight};
    color:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.color};
    line-height:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.lineHeight};
    border-radius: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.borderRadius};
    margin-bottom: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.marginBottom};
    height: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.height};
span{
    span{
        color:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.color};
    }
}

}
    .cstmSelectWrap{
            width:100%;
            margin-bottom: ${({ dropdownItem }) => dropdownItem?.desktop?.margin?.marginBottom};
            .form-group {
                .select-control {
                    background-color: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.background};
                    border-style: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.borderStyle};
                    border-color: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.borderColor};
                    border-width: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.borderWidth};
                    font-size:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.fontSize};
                    font-family:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.fontFamily};
                    font-style:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.fontStyle};
                    font-weight:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.fontWeight};
                    color:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.color};
                    line-height:${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.lineHeight};
                    border-radius: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.borderRadius};
                    margin-bottom: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.marginBottom};
                    height: ${({ dropdownItem }) => dropdownItem?.desktop?.dropdown?.height};
                    margin-top:0;
                    padding-top:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingTop};
                    padding-right:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingRight};
                    padding-bottom:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingBottom};
                    padding-left:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingLeft};
                    -webkit-appearance:auto;
                    -moz-appearance:auto;
                    appearance: auto;
                }

                .animLabel {
                    display: none;
                }

                &::before{
                    content: none;
                }
            }
        }
        width:100%;
        margin-bottom: ${({ dropdownItem }) => dropdownItem?.desktop?.margin?.marginBottom};
    button{
        padding-top:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingTop};
        padding-right:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingRight};
        padding-bottom:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingBottom};
        padding-left:${({ dropdownItem }) => dropdownItem?.desktop?.padding?.paddingLeft};
        height: auto;
        border-style:${({ dropdownItem }) => dropdownItem?.desktop?.borderStyle};
        border-color:${({ dropdownItem }) => dropdownItem?.desktop?.borderColor} !important;
        border-radius:${({ dropdownItem }) => dropdownItem?.desktop?.borderRadius};
        border-width:${({ dropdownItem }) => dropdownItem?.desktop?.borderWidth};
        &::after{
                border-color:${({ dropdownItem }) => dropdownItem?.desktop?.borderColor} !important;
            }
        span{
            font-size:${({ dropdownItem }) => dropdownItem?.desktop?.fontSize};
            font-family:${({ dropdownItem }) => dropdownItem?.desktop?.fontFamily};
            font-style:${({ dropdownItem }) => dropdownItem?.desktop?.fontStyle};
            font-weight:${({ dropdownItem }) => dropdownItem?.desktop?.fontWeight};
            color:${({ dropdownItem }) => dropdownItem?.desktop?.color};
            line-height:${({ dropdownItem }) => dropdownItem?.desktop?.lineHeight};
            
        }
    }
    ul{
        top:42px !important;
        .searchbox-class{
            button{
                &::after,&::before{
                    background-color: ${({ dropdownItem }) => dropdownItem?.desktop?.borderColor} !important;
                }
            }
            i{
                background-color: ${({ dropdownItem }) => dropdownItem?.desktop?.borderColor} !important;
            }
        }
    }
`
export const StateWrap = styled.div`
/* width:100%;
margin-bottom: 20px;
.cstmSelectWrap{
    .form-group {
        .select-control {
            margin-top: 0;
            padding: 10px 35px;
            height: auto;
            border: 1px solid red;
        }
        .animLabel {
            display: none;
        }
    }
} */
`

export const BtnItem = styled.div`
        display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
`;
// export const BtnCancel = styled.button`
//     width: 100%;
//     font-size: 12px;
//     line-height: 14.06px;
//     color: #003459;
//     background-color: #FFFFFF;
//     height: 40px;
//     border-radius: 8px;
//     border: 1px solid #003459;
//     &:hover{
//         cursor: pointer;
//         background-color: #bebebe;
//         transition: all 1.2s;
//     }
// `;
// export const BtnSaveAdd = styled.button`
//     width: 100%;
//     width: 100%;
//     font-size: 12px;
//     line-height: 14.06px;
//     color: #FFFFFF;
//     background-color: #003459;
//     height: 40px;
//     border-radius: 8px;
//     border: transparent;
//     &:hover{
//         cursor: pointer;
//         background-color: #078be9;
//         transition: all 1.2s;
//     }
// `;
export const Form = styled.form`
/* background:${({ item }) => item?.desktop?.background}; */
`;

