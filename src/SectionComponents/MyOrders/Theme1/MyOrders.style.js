import styled from "styled-components"

export const MyOrdersContainer = styled.div`
    display: ${({ item }) => item.desktop.display};
    align-items:  ${({ item }) => item.desktop.alignItems};
    justify-content:  ${({ item }) => item.desktop.justifyContent};
    flex-direction: ${({ item }) => item.desktop.flexDirection}; 
`
export const HeadingMyOrder = styled.div`
    background: ${({ item }) => item.desktop.background};
    width: ${({ item }) => item.desktop.width};
    text-align: ${({ item }) => item.desktop.textAlign};
    padding: ${({ item }) => item.desktop.padding};
`
export const MyOrdersMainContainer = styled.div`
    display: ${({ item }) => item.desktop.display};
    background: ${({ item }) => item.desktop.background};
    border-radius: ${({ item }) => item.desktop.borderRadius};
    width:${({ item }) => item.desktop.width};
    max-width: ${({ item }) => item.desktop.maxWidth};
    @media screen and (max-width:768px) {
        width: 100%;
    }
`
export const OrderMainContainers = styled.div`
width:${({ item }) => item.desktop.width};
`
export const MyOrderDetailcontainer = styled.div`
 display: ${({ item }) => item.desktop.display};
 justify-content: ${({ item }) => item.desktop.justifyContent};
 margin-top: ${({ item }) => item.desktop.marginTop};
 margin-bottom: ${({ item }) => item.desktop.marginBottom};
 padding: ${({ item }) => item.desktop.padding};
 p{
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
 }
`

export const MyOrderContainer = styled.table`
margin-top: ${({ item }) => item.desktop.marginTop};
border-collapse: ${({ item }) => item.desktop.borderCollapse};;
width: ${({ item }) => item.desktop.width};
`
export const MyOrderTitle = styled.thead`
color: ${({ item }) => item.desktop.color};
background: ${({ item }) => item.desktop.background};
border-radius: ${({ item }) => item.desktop.borderRadius};
border-bottom: ${({ item }) => item.desktop.borderBottom};
font-family: ${({ item }) => item.desktop.fontFamily};
font-size: ${({ item }) => item.desktop.fontSize};
line-height: ${({ item }) => item.desktop.lineHeight};
height: ${({ item }) => item.desktop.height};
text-align: ${({ item }) => item.desktop.textAlign};
box-shadow: ${({ item }) => item.desktop.boxShadow};
`

export const TitleProduct = styled.th`
    font-family:  ${({ item }) => item.desktop.fontFamily};
    font-size:  ${({ item }) => item.desktop.fontSize};
    line-height:  ${({ item }) => item.desktop.lineHeight};
    font-style: ${({ item }) => item.desktop.fontStyle};
    padding-left: ${({ item }) => item.desktop.paddingLeft};
    color:  ${({ item }) => item.desktop.color};
    font-weight:  ${({ item }) => item.desktop.fontWeight};
`
export const TitleVarient = styled.th`
    font-family:  ${({ item }) => item.desktop.fontFamily};
    font-size:  ${({ item }) => item.desktop.fontSize};
    line-height:  ${({ item }) => item.desktop.lineHeight};
    font-style: ${({ item }) => item.desktop.fontStyle};
    color:  ${({ item }) => item.desktop.color};
    font-weight:  ${({ item }) => item.desktop.fontWeight};
`
export const TitleOrderDetails = styled.th`
    font-family:  ${({ item }) => item.desktop.fontFamily};
    font-size:  ${({ item }) => item.desktop.fontSize};
    line-height:  ${({ item }) => item.desktop.lineHeight};
    font-style: ${({ item }) => item.desktop.fontStyle};
    color:  ${({ item }) => item.desktop.color};
    font-weight:  ${({ item }) => item.desktop.fontWeight};
    padding: ${({ item }) => item.desktop.padding};
    white-space: ${({ item }) => item.desktop.nowrap};
`


export const MyOrderProductDetailBox = styled.tbody`
    border-bottom: ${({ item }) => item.desktop.borderBottom};
    align-items: ${({ item }) => item.desktop.alignItems};
    gap: ${({ item }) => item.desktop.gap};
`
export const OrdersWrapper = styled.tr`
    padding: ${({ item }) => item.desktop.padding};
`
export const MyOrderProduct = styled.td``

export const ProductWrap = styled.div`
    padding: ${({ item }) => item.desktop.padding};
    display: ${({ item }) => item.desktop.display}; 
    gap:${({ item }) => item.desktop.gap};
    align-items: ${({ item }) => item.desktop.alignItems};
    align-items: flex-start;
`


export const MyOrderProductImgWrap = styled.div`
    height: ${({ item }) => item.desktop.height};
    width: ${({ item }) => item.desktop.width};
    @media screen and (max-width:768px) {
        width: 82px;
        height: 87px;
    }
    @media screen and (max-width:350px) {
        width: 72px;
        height: 87px;
    }
`

export const MyOrderProductDetail = styled.div`
    width:${({ item }) => item.desktop.width};
`;



export const VarientWrapper = styled.td`
    padding: ${({ item }) => item.desktop.padding};
`
export const VarientContainer = styled.div`
display: ${({ item }) => item.desktop.display};
gap: ${({ item }) => item.desktop.gap};
flex-wrap: ${({ item }) => item.desktop.flexWrap};
align-items: center;
`
export const OrderDetailsContainer = styled.td`
padding: ${({ item }) => item.desktop.padding};
`
export const OrderDetailsWrap = styled.div`
display: ${({ item }) => item.desktop.display};
gap: ${({ item }) => item.desktop.gap};
flex-wrap: ${({ item }) => item.desktop.flexWrap};
`

export const ButtonsContainer = styled.td`
padding: ${({ item }) => item.desktop.padding};
   
`

export const ButtonsWrap = styled.div`
    display: ${({ item }) => item.desktop.display};
    flex-direction: ${({ item }) => item.desktop.flexDirection};
    align-items: ${({ item }) => item.desktop.alignItems};
`
export const ViewOrderBtn = styled.button`
    padding: ${({ item }) => item.desktop.padding};
    font-size: ${({ item }) => item.desktop.fontSize};
    line-height: ${({ item }) => item.desktop.lineHeight};
    background: ${({ item }) => item.desktop.background};
    box-shadow: ${({ item }) => item.desktop.boxShadow};
    border-radius: ${({ item }) => item.desktop.borderRadius};
    border:${({ item }) => item.desktop.border};
    font-weight:${({ item }) => item.desktop.fontWeight};
    font-family: ${({ item }) => item.desktop.fontFamily};
    white-space: ${({ item }) => item.desktop.whiteSpace};
    color: ${({ item }) => item.desktop.color};
    cursor: ${({ item }) => item.desktop.cursor};
    
    `
export const CancleProductBtn = styled.button`
    background: ${({ item }) => item.desktop.background};
    margin-top:${({ item }) => item.desktop.marginTop};
    box-shadow: ${({ item }) => item.desktop.boxShadow};
    color: ${({ item }) => item.desktop.color};
    border:${({ item }) => item.desktop.border};
    cursor: ${({ item }) => item.desktop.cursor};
`;
export const MyOrderMobileCard = styled.div``;
export const MyOrderMobileTitle = styled.div`
color: ${({ item }) => item.desktop.color};
background: ${({ item }) => item.desktop.background};
border-radius: ${({ item }) => item.desktop.borderRadius};
border-bottom: ${({ item }) => item.desktop.borderBottom};
font-family: ${({ item }) => item.desktop.fontFamily};
font-size: ${({ item }) => item.desktop.fontSize};
line-height: ${({ item }) => item.desktop.lineHeight};
text-align: ${({ item }) => item.desktop.textAlign};
padding:12px 16px;
box-shadow: ${({ item }) => item.desktop.boxShadow};`;
export const BackBtnContainer = styled.div`
display:flex;
gap:5px;
align-items: center;
width: 100%;
cursor: pointer;
padding-bottom: 16px;
border-bottom: 1px solid var(--global-color-primary-lightShadeThin) ;
svg{
height: 16px;
width: 16px;
fill: var(--global-color-primary);
}
p{
    color:var(--global-color-primary);
    font-size: var(--global-typography-fontSizeP);
    line-height: var(--global-typography-lineHeightP);
    font-family: var(--global-typography-fontFamilyP);
    font-weight: var(--global-typography-fontWightSemiBold);

}
`;
