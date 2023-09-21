import styled from "styled-components";



export const Row = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
    gap: ${({ item }) => item?.desktop?.gap};
    @media screen and (max-width: 1024px){
        flex-wrap: ${({ item }) => item?.tablet?.flexWrap};
        gap: ${({ item }) => item?.tablet?.gap};
        
    }
`;


export const Line = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    @media screen and (max-width: 700px){
        display: ${({ item }) => item?.mobile?.display};
        width: ${({ item }) => item?.mobile?.width};
        border: ${({ item }) => item?.mobile?.border};

    }   
`;


export const ProgressContainer = styled.div`
    margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
    @media screen and (max-width: 1000px){
        margin-bottom: ${({ item }) => item?.tablet?.marginBottom};
    }
`;


export const PaymentMethodText = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
`;
// export const PaymentText = styled.p`
//     font-size: 20px;
//     line-height: 36px;
//     font-family: 'Gilroy-Medium', sans-serif;
//     margin-bottom: 12px;
//     color: #003459;
//     @media screen and (max-width: 700px){
//         padding-top: 20px;
//     }  
// `;
export const CodContainer = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    align-items:  ${({ item }) => item?.desktop?.alignItems};
    gap: ${({ item }) => item?.desktop?.gap};
    width:  ${({ item }) => item?.desktop?.width};
    border:  ${({ item }) => item?.desktop?.border};
    border-radius:  ${({ item }) => item?.desktop?.borderRadius};
    padding: ${({ item }) => item?.desktop?.padding} ;
    margin-bottom:  ${({ item }) => item?.desktop?.marginBottom};
    margin-top: 12px;
    &:hover{
        cursor:  ${({ item }) => item?.desktop?.hover.cursor};
    }
`;
export const OnlinePayContainer = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    align-items:  ${({ item }) => item?.desktop?.alignItems};
    gap:  ${({ item }) => item?.desktop?.gap};
    width:  ${({ item }) => item?.desktop?.width};
    border:  ${({ item }) => item?.desktop?.border};
    border-radius:  ${({ item }) => item?.desktop?.borderRadius};
    padding: ${({ item }) => item?.desktop?.padding};
    &:hover{
        cursor:  ${({ item }) => item?.desktop?.hover.cursor};
    }
`;
export const InputRadio = styled.input`
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    accent-color: ${({ item }) => item?.desktop?.accentColor};
    &:hover{
        cursor:  ${({ item }) => item?.hover?.cursor};
    }
`;
export const CodMethod = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    flex-direction: ${({ item }) => item?.desktop?.flexDirection};
`;
// export const CodText = styled.p`
//     font-size: 18px;
//     line-height: 21px;
//     color: #1B2637;
//     font-family: 'Gilroy-Medium', sans-serif;
//     margin-bottom: 2px;
// `
export const PodText = styled.p`
    font-size: 14px;
    line-height: 16px;
    color: rgba(32, 32, 32, 0.6);
    font-family: 'Gilroy-Medium', sans-serif;
`;
export const ImgItem = styled.figure`
    width:${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
`
// export const RozerPayImg = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: center;
// `;
export const PodMethod = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    flex-direction: ${({ item }) => item?.desktop?.flexDirection};
    
`;
export const LinkRazer = styled.span`
    display: ${({ item }) => item?.desktop?.display};
`
export const LayoutSectionLt = styled.div`
    width : ${({ item }) => item?.desktop?.width};
    @media screen and (max-width: 1024px){
        width: ${({ item }) => item?.tablet?.width};
    }

    .active{
        border:  ${({ item }) => item?.desktop.active?.border}  
          }
`;
