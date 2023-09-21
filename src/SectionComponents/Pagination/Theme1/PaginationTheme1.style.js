import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
    margin-right: ${({ item }) => item?.desktop?.margin?.marginRight};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    @media screen and (max-width:1024px){
        gap: ${({ item }) => item?.tablet?.gap};
    }
    @media screen and (max-width:767px){
        gap: ${({ item }) => item?.mobile?.gap};
    }
`;
export const PrivButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    overflow: ${({ item }) => item?.desktop?.overflow};
    height: ${({ item }) => item?.desktop?.height};
    width: ${({ item }) => item?.desktop?.width};
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    border: ${({ item2 }) => item2?.desktop?.border};
    @media screen and (max-width:767px){
        height: ${({ item }) => item?.mobile?.height};
        width: ${({ item }) => item?.mobile?.width};
        border: ${({ item }) => item?.mobile?.border};
    }
    svg{
        /* fill: ${({ itemSvgDisable }) => itemSvgDisable?.desktop?.fill}; */
        fill: ${({ itemSvgEnable }) => itemSvgEnable?.desktop?.fill};
        height: ${({ itemSvgDisable }) => itemSvgDisable?.desktop?.height};
        width: ${({ itemSvgDisable }) => itemSvgDisable?.desktop?.width};
    }
    &:disabled{
        border: ${({ item }) => item?.desktop?.border};
        cursor: default;
        svg{
            fill: ${({ itemSvgDisable }) => itemSvgDisable?.desktop?.fill};
        }
    }
`;

export const PaginationNumber = styled.ul`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
   
    @media screen and (max-width:767px){
        gap: ${({ item }) => item?.mobile?.gap};
    }
`;
export const Number = styled.li`
    
    font-size: ${({ item }) => item?.desktop?.fontSize};
    font-weight:  ${({ item }) => item?.desktop?.fontWeight};
    color:  ${({ item }) => item?.desktop?.color};
    cursor:  ${({ item }) => item?.desktop?.cursor};
    @media screen and (max-width:767px){
        font-size: ${({ item }) => item?.mobile?.fontSize};
        
    }
     &.active{
        color: ${({ item }) => item?.desktop?.active?.color};
    }
`;
export const NextButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    overflow: ${({ item }) => item?.desktop?.overflow};
    height: ${({ item }) => item?.desktop?.height};
    width: ${({ item }) => item?.desktop?.width};
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    border: ${({ item }) => item?.desktop?.border};
    @media screen and (max-width:767px){
        height: ${({ item }) => item?.mobile?.height};
        width: ${({ item }) => item?.mobile?.width};
        border: ${({ item }) => item?.mobile?.border};
    }
    svg{
        fill: ${({ itemSvgEnable }) => itemSvgEnable?.desktop?.fill};
        height: ${({ itemSvgEnable }) => itemSvgEnable?.desktop?.height};
        width: ${({ itemSvgEnable }) => itemSvgEnable?.desktop?.width};
    }
    &:disabled{
        border: ${({ item2 }) => item2?.desktop?.border};
        cursor: default;
        svg{
            fill: ${({ itemSvgDisable }) => itemSvgDisable?.desktop?.fill};
        }
    }
`;

