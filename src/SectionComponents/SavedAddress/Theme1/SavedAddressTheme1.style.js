import styled from "styled-components";

export const RightContainer = styled.div`  
    position: ${({ item }) => item?.desktop?.position};
    top: ${({ item }) => item?.desktop?.top};
    left: ${({ item }) => item?.desktop?.left};
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    width: ${({ item }) => item?.desktop?.width};
    @media screen and (max-width: 767px){
    padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
  }
    /* .hide{
        display: none;
    }
    .show{
        display: block;
    } */
`;

export const HeaderItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
    svg{
        display: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.desktop?.display};
        width: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.desktop?.width};
        height: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.desktop?.height};
        fill: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.desktop?.fill};
        display: none;
        @media screen and (max-width: 767px){
            display: ${({ itemBackBtnSvg }) => itemBackBtnSvg?.mobile?.display};
            }
    }
`;
// export const HeaderText = styled.h1`
//     font-size: 18px;
//     line-height: 36px;
//     color: #003459;
//     font-family: 'Gilroy-SemiBold',sans-serif;

// `
export const NewAddressContainer = styled.div`
    background: ${({ item }) => item?.desktop?.background};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop} ;
    padding-right:${({ item }) => item?.desktop?.padding?.paddingRight} ;
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom} ;
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft} ;
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    @media screen and (max-width: 767px){
       width: ${({ item }) => item?.mobile?.width};
    }
`
export const NewAddressInnerItem = styled.div`   
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    border: ${({ item }) => item?.desktop?.border};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    display:${({ item }) => item?.desktop?.display};
    flex-direction: ${({ item }) => item?.desktop?.flexDirection};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    text-align: ${({ item }) => item?.desktop?.textAlign};
    &:hover{
        cursor: ${({ item }) => item?.desktop?.hover?.cursor};
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
// `
export const Main = styled.div`
background:${({ item }) => item?.desktop?.background} ;
`
