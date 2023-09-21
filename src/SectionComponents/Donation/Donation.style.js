import { styled } from "styled-components";

export const DonationContainer = styled.div`
    padding: ${({ item }) => item.desktop.padding};;
  `;
export const HeaderHeading = styled.h1`
    font-weight: ${({ item }) => item.desktop.fontWeight};
    font-size: ${({ item }) => item.desktop.fontSize};
    line-height: ${({ item }) => item.desktop.lineHeight};
    font-style: ${({ item }) => item.desktop.fontStyle};
    font-family: ${({ item }) => item.desktop.fontFamily};
    color: ${({ item }) => item.desktop.color};
    text-align: ${({ item }) => item.desktop.textAlign};
    width: ${({ item }) => item.desktop.width};
    margin-bottom: ${({ item }) => item.desktop.marginBottom}
  `;
export const HeaderSubHeading = styled.h3`
    font-weight: ${({ item }) => item.desktop.fontWeight};
    font-size: ${({ item }) => item.desktop.fontSize};
    line-height: ${({ item }) => item.desktop.lineHeight};
    font-style: ${({ item }) => item.desktop.fontStyle};
    font-family: ${({ item }) => item.desktop.fontFamily};
    color: ${({ item }) => item.desktop.color};
    text-align: ${({ item }) => item.desktop.textAlign};
    margin-bottom: ${({ item }) => item.desktop.marginBottom}
`;
export const Line = styled.div`
    height: ${({ item }) => item.desktop.height};
    background: ${({ item }) => item.desktop.background};
    width: ${({ item }) => item.desktop.width};
    margin-bottom: ${({ item }) => item.desktop.marginBottom};
    margin-top: ${({ item }) => item.desktop.marginTop};
  `;

export const DonationAmountContainer = styled.div`
text-align:  ${({ item }) => item.desktop.textAlign};
border-radius:  ${({ item }) => item.desktop.borderRadius};
border: 1px solid rgba(230, 153, 25, 0.1);
background:  ${({ item }) => item.desktop.background};
box-shadow: 4px 5px 18px 0px rgba(32, 32, 32, 0.2);
padding:  ${({ item }) => item.desktop.padding};
display:  ${({ item }) => item.desktop.display};
justify-content:  ${({ item }) => item.desktop.justifyContent};
flex-direction:  ${({ item }) => item.desktop.flexDirection};
align-items:  ${({ item }) => item.desktop.alignItems};
@media screen and (max-width: 767px){
    padding:  ${({ item }) => item.mobile.padding};
}

`;

export const Amount = styled.h1`
margin-bottom: 30px;
width: 80%;
white-space: nowrap;
overflow: hidden;
@media screen and (max-width: 767px){
    transform: scale(0.7);
}
`;
export const AmountWrap = styled.div`
display: ${({ item }) => item.desktop.display};
justify-content: ${({ item }) => item.desktop.justifyContent};
align-items: ${({ item }) => item.desktop.alignItems};
flex-wrap: ${({ item }) => item.desktop.flexWrap};
row-gap: ${({ item }) => item.desktop.rowGap};
column-gap: ${({ item }) => item.desktop.columnGap};
width: ${({ item }) => item.desktop.width}%;
margin-bottom: ${({ item }) => item.desktop.marginBottom};
@media screen and (max-width: 767px){
    width: ${({ item }) => item.mobile.width};
}

.active{
    background-color: ${({ item }) => item.desktop.active.background};
    p{
        color: ${({ item }) => item.desktop.active.color};
        transition: 0.7s all;
    }
}
`
export const AmountSelectWrap = styled.div`
border-radius: ${({ item }) => item?.desktop?.borderRadius};
border: ${({ item }) => item?.desktop?.border};
background: ${({ item }) => item?.desktop?.background};
box-shadow: 2px 5px 10px 0px rgba(32, 32, 32, 0.15);
height: ${({ item }) => item?.desktop?.height};
padding: ${({ item }) => item?.desktop?.padding};
display: ${({ item }) => item?.desktop?.display};
align-items: ${({ item }) => item?.desktop?.alignItems};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
cursor: ${({ item }) => item?.desktop?.cursor};
transition: ${({ item }) => item?.desktop?.transition};

&:hover{
    transition: ${({ item }) => item?.desktop?.transition};
    background: ${({ item }) => item?.desktop?.hover?.background};
   
    p{
        color:${({ item }) => item?.desktop?.hover?.color} ;
        transition: ${({ item }) => item?.desktop?.transition};
    }
}
`

export const InputWrap = styled.div`
margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
position: ${({ item }) => item?.desktop?.position};
.form-group{
    input{
        border-radius: ${({ item }) => item?.desktop?.transition};
        border: ${({ item }) => item?.desktop?.border};
        background: ${({ item }) => item?.desktop?.background};
        box-shadow: 2px 5px 10px 0px rgba(32, 32, 32, 0.15);
        padding-left: ${({ item }) => item?.desktop?.paddingLeft};
        
    }
}

`
export const Doller = styled.span`
position: ${({ item }) => item?.desktop?.position};
top: ${({ item }) => item?.desktop?.top};
left: ${({ item }) => item?.desktop?.left};
opacity:${({ item }) => item?.desktop?.opacity};
`
export const Button = styled.button`
border-radius:${({ item }) => item?.desktop?.borderRadius};
padding:${({ item }) => item?.desktop?.padding};
background:${({ item }) => item?.desktop?.background};
color:${({ item }) => item?.desktop?.color};
font-weight:${({ item }) => item?.desktop?.fontWeight};
font-size:${({ item }) => item?.desktop?.fontSize};
line-height:${({ item }) => item?.desktop?.lineHeight};
font-style:${({ item }) => item?.desktop?.fontStyle};
border:${({ item }) => item?.desktop?.border};
cursor: ${({ item }) => item?.desktop?.cursor};

`

export const TimeWrapMain = styled.div`
    display: ${({ item }) => item.desktop.display};
    justify-content: ${({ item }) => item.desktop.justifyContent};
    align-items: ${({ item }) => item.desktop.alignItems};
    flex-wrap: ${({ item }) => item.desktop.flexWrap};
    margin-bottom: ${({ item }) => item.desktop.marginBottom};
    .active{
        background:${({ item }) => item.desktop.active.background};
    p{
        color: ${({ item }) => item.desktop.active.color};
        transition: 0.7s all;
    }
}
`
export const TimeWrap = styled.div`
    display: ${({ item }) => item.desktop.display};
    padding: ${({ item }) => item.desktop.padding};
    align-items: ${({ item }) => item.desktop.alignItems};
    border-radius: ${({ item }) => item.desktop.borderRadius};
    background: ${({ item }) => item.desktop.background};
    transition: ${({ item }) => item.desktop.transition};
    &:hover{
    cursor: pointer;
    transition: ${({ item }) => item.desktop.transition};
    background: ${({ item }) => item.desktop.hover.background};
    p{
        color: ${({ item }) => item.desktop.hover.color};
        transition: ${({ item }) => item.desktop.transition};
    }
}

`
