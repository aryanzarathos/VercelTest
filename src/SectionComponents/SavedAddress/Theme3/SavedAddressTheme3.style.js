import styled from "styled-components";

export const SavedAddressThemeThirdContainer = styled.div`
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    position: ${({ item }) => item?.desktop?.position};
    top: ${({ item }) => item?.desktop?.top};
    left: ${({ item }) => item?.desktop?.left};
   width: ${({ item }) => item?.desktop?.width};
   @media screen and (max-width: 767px){
    padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
  }
    `
export const AddressItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
    gap: ${({ item }) => item?.desktop?.gap};
    @media screen and (max-width: 1024px){
        grid-template-columns: ${({ item }) => item?.tablet?.gridTemplateColumns};
    }
    /* label{
  
    } */
   
   .active{
    border: ${({ itemActive }) => itemActive?.desktop?.border};
   }
`;
// export const Default = styled.span`
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     display: none;
//     color: rgba(32, 32, 32, 0.6);
//     font-size: 12px;
//     line-height: 18px;
//     font-family: 'Gilroy-Regular', sans-serif;
// `

export const RightContainer = styled.div`  
    position: ${({ item }) => item?.desktop?.position};
    top: ${({ item }) => item?.desktop?.top};
    left: ${({ item }) => item?.desktop?.left};
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    width: ${({ item }) => item?.desktop?.width};
    @media (max-width:767px) {
        padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
        padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
        padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
        padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
    }
`;

export const HeaderItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    gap: ${({ item }) => item?.desktop?.gap};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
    svg{
        display: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.desktop?.display};
        width: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.desktop?.width};
        height: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.desktop?.height};
        fill: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.desktop?.fill};
        display: none;
        @media screen and (max-width: 768px){
            display: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.mobile?.display};
            }
    }
`;
// export const HeaderText = styled.h2`
//     font-size: 20px;
//     line-height: 23.44px;
//     color: #093351;
//     font-family: 'Gilroy-Bold', sans-serif;
// `;

export const AddressContainer = styled.div`
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
    position: ${({ item }) => item?.desktop?.position};
    border: ${({ item }) => item?.desktop?.border};

  &:hover{
    border: ${({ item }) => item?.desktop?.hover?.border};
    border-radius: ${({ item }) => item?.desktop?.hover?.borderRadius};
    cursor: ${({ item }) => item?.desktop?.hover?.cursor};
  }
  &.active{
    border: ${({ itemActive }) => itemActive?.desktop?.border};
   }
`;
export const InputRadio = styled.input`
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    accent-color: ${({ item }) => item?.desktop?.accentColor};
`;
export const Detail = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    flex-direction:  ${({ item }) => item?.desktop?.flexDirection};
    width:  ${({ item }) => item?.desktop?.width};
`;
export const MobileParaWrap = styled.p`
    display: flex;
    align-items: center;
    gap:8px;
    margin-bottom: 6px;
`;
// export const Address = styled.p`
//     font-size: 16px;
//     line-height: 18.75px;
//     color: #000000;
//     margin-bottom: 6px;
//     font-family: 'Gilroy-Regular', sans-serif;
// `;
// export const Mobile = styled.p`
//     font-size: 16px;
//     line-height: 18.75px;
//     color: #000000;
//     margin-bottom: 12px;
//     font-family: 'Gilroy-Regular', sans-serif;
// `
export const BtnEditRemove = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};

`
// export const BtnEdit = styled.button`
//     font-size: 14px;
//     line-height: 16.41px;
//     color: #003459;
//     font-family: 'Gilroy-Regular', sans-serif;
//     background-color: #FFFFFF;
//     border: transparent;
// `
// export const BtnRemove = styled.button`
//     font-size: 14px;
//     line-height: 16.41px;
//     color: #003459;
//     font-family: 'Gilroy-Regular', sans-serif;
//     background-color: #FFFFFF;
//     border: transparent;
// `
export const NewAddressContainer = styled.div`
    background: ${({ item }) => item?.desktop?.background};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    width:  ${({ item }) => item?.desktop?.width};
    height:  ${({ item }) => item?.desktop?.height};

`
export const NewAddressInnerItem = styled.div`   
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    border: ${({ item }) => item?.desktop?.border};
    border-radius:  ${({ item }) => item?.desktop?.borderRadius};
    width:  ${({ item }) => item?.desktop?.width};
    height:  ${({ item }) => item?.desktop?.height};
    display: ${({ item }) => item?.desktop?.display};
    flex-direction:  ${({ item }) => item?.desktop?.flexDirection};
    align-items:  ${({ item }) => item?.desktop?.alignItems};
    justify-content:  ${({ item }) => item?.desktop?.justifyContent};
    text-align:  ${({ item }) => item?.desktop?.textAlign};
    &:hover{
        cursor:  ${({ item }) => item?.desktop?.hover?.cursor};
    }
`
export const Add = styled.span`
    font-size: ${({ item }) => item?.desktop?.fontSize};
    color: ${({ item }) => item?.desktop?.color};

`
// export const AddText = styled.p`
//     font-size: 16px;
//     line-height: 18.75px;
//     color: #003459;
//     font-family:'Gilroy-Medium', sans-serif;
// `;
export const Main = styled.div`
background: ${({ item }) => item?.desktop?.background};
     /* .active{
        border: 2px solid #003459;
        border-radius: 4px;
      
    } */
`;
export const AddressLabel = styled.label`
background: ${({ item }) => item?.desktop?.background};
`;
