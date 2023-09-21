import styled from "styled-components"

export const MobileFilterContainer = styled.div`
    @media screen and (max-width:768px) {
        /* display: ${({ item }) => item.mobile.display};
        height: ${({ item }) => item.mobile.height};
        flex-direction: ${({ item }) => item.mobile.flexDirection};
        justify-content: ${({ item }) => item.mobile.justifyContent};
        position: ${({ item }) => item.mobile.position};
        top:${({ item }) => item.mobile.top};
        bottom: ${({ item }) => item.mobile.bottom};
        left: ${({ item }) => item.mobile.left};
        right: ${({ item }) => item.mobile.right};
        z-index: ${({ item }) => item.mobile.zIndex}; */
    }
`
export const UpperSectionWrap = styled.div`
   height: calc(100vh - 55px);
   background: ${({ item }) => item.mobile.background};
   position: fixed;
   z-index: 2;
    width: 100%;
    left: 0px;
    top: 0px;


`
export const HeaderFilterItem = styled.div`
    display: ${({ item }) => item.desktop.display};
    align-items:${({ item }) => item.desktop.alignItems};
    justify-content:${({ item }) => item.desktop.justifyContent};
    gap: ${({ item }) => item.desktop.gap};
    border-bottom: ${({ item }) => item.desktop.borderBottom};
    padding-top: ${({ item }) => item.desktop.padding.paddingTop};
    padding-right: ${({ item }) => item.desktop.padding.paddingRight};
    padding-bottom: ${({ item }) => item.desktop.padding.paddingBottom};
    padding-left: ${({ item }) => item.desktop.padding.paddingLeft};
    
    
`
export const Filter = styled.button`
    /* font-size: 14px;
    line-height: 16.41px;
    color: #1F3259;
    border: transparent;
    background-color: transparent; */
    
`
export const ClearAll = styled.button`
     /* font-size: 14px;
    line-height: 16.41px;
    color: #D80027;
    border: transparent;
    background-color: transparent;
    &:hover{
        cursor: pointer;
    } */
`
export const BottomBtn = styled.div`
    display: ${({ item }) => item.desktop.display};
    box-shadow: ${({ item }) => item.desktop.boxShadow};
    bottom: ${({ item }) => item.desktop.bottom};
    width:${({ item }) => item.desktop.width};
    position : ${({ item }) => item.desktop.position};
    justify-content: ${({ item }) => item.desktop.justifyContent};
    background-color: ${({ item }) => item.desktop.backgroundColor};
    opacity: ${({ item }) => item.desktop.opacity};
    z-index: ${({ item }) => item.desktop.zIndex};
    padding-top: ${({ item }) => item.desktop.padding.paddingTop};
    padding-right: ${({ item }) => item.desktop.padding.paddingRight};
    padding-bottom: ${({ item }) => item.desktop.padding.paddingBottom};
    padding-left: ${({ item }) => item.desktop.padding.paddingLeft};
    position: fixed;
    top: auto;
    left: 0;
    z-index: 999;
    `
export const Close = styled.button`
    /* font-size:16px ;
    line-height: 20px;
    color: rgba(32, 32, 32, 0.6);
    border: transparent;
    background-color: transparent;
    font-weight: 600; */

`
export const Apply = styled.button`
    /* font-weight: 600;
    font-size:16px ;
    line-height: 20px;
    color:#1F3259;
    border: transparent;
    background-color: transparent; */
`
export const Line = styled.span`
    border: ${({ item }) => item.desktop.border};
    height: ${({ item }) => item.desktop.height};
`
export const FilterItem = styled.div`
    width: ${({ item }) => item.desktop.width};
    height:  ${({ item }) => item.desktop.height};
    background: ${({ item }) => item.desktop.background};
    display:  ${({ item }) => item.desktop.display};
    flex-direction:  ${({ item }) => item.desktop.flexDirection};
    /* @media screen and (max-width:500px) {
        width: 40%;
    } */
   
    
    .CollectionItem{
        display: ${({ item2 }) => item2.desktop.display};
        gap: ${({ item2 }) => item2.desktop.gap};
        justify-content: ${({ item2 }) => item2.desktop.justifyContent};
        align-items: ${({ item2 }) => item2.desktop.alignItems};
        border: ${({ item2 }) => item2.desktop.border};
        width: ${({ item2 }) => item2.desktop.width};
        background: ${({ item2 }) => item2.desktop.background};;
        padding-top: ${({ item2 }) => item2.desktop.padding.paddingTop};
        padding-right: ${({ item2 }) => item2.desktop.padding.paddingRight};
        padding-bottom: ${({ item2 }) => item2.desktop.padding.paddingBottom};
        padding-left: ${({ item2 }) => item2.desktop.padding.paddingLeft};
        position: ${({ item2 }) => item2.desktop.position};
        &:hover{
            cursor: ${({ item2 }) => item2.desktop.hover.cursor};
        }
        &:after,
        &:before {
            content: ${({ item2 }) => item2.desktop.before.content};
            display: ${({ item2 }) => item2.desktop.before.display};
            border-right: ${({ item2 }) => item2.desktop.before.borderRight};
            height:${({ item2 }) => item2.desktop.before.height};
            margin-top: ${({ item2 }) => item2.desktop.before.marginTop};
            position: ${({ item2 }) => item2.desktop.before.position};
            top: ${({ item2 }) => item2.desktop.before.top};
            left: ${({ item2 }) => item2.desktop.before.left};
            width: ${({ item2 }) => item2.desktop.before.width};
            transform: ${({ item2 }) => item2.desktop.before.transform};
        }

        &::after{
            margin-top: ${({ item2 }) => item2.desktop.after.marginTop};
            transform: ${({ item2 }) => item2.desktop.after.transform};
        }
        &.active{
            background-color: ${({ item3 }) => item3.desktop.backgroundColor};
            border: ${({ item3 }) => item3.desktop.border};
        }
    }

    button{
        /* position: relative;
        content: "";
        position: absolute;
        left: 85%;
        display: block;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #1F3259;
        transform: rotate(-90deg); */
      
    }

`
export const FilterContainer = styled.div`
    display: ${({ item }) => item.desktop.display};
`
export const TabSection = styled.div`
    width: ${({ item }) => item.desktop.width};
    padding-top: ${({ item }) => item.desktop.padding.paddingTop};
    padding-right: ${({ item }) => item.desktop.padding.paddingRight};
    padding-bottom: ${({ item }) => item.desktop.padding.paddingBottom};
    padding-left: ${({ item }) => item.desktop.padding.paddingLeft};
    /* @media screen and (max-width:500px) {
        width: 60%;
    } */
`
export const SortWrapper = styled.div`
    position: fixed;
    z-index: 1000;
    width: 100%;
    left: 0px;
    top: 0px;
    height: 100vh;
    transition: 0.5ms all;
    background: rgba(32,32,32,0.5);

    
p{
font-size: var(--global-typography-fontSizeP);
line-height: var(--global-typography-lineHeightP);
padding-bottom: 12px;
border-bottom: 1px solid (var(--global-color-primary), 0.1);

}
`;
export const SortOverlay = styled.div`
    
    width: 100%;
    height: 100%;
    background: rgba(32,32,32,0.7);`;

export const SortList = styled.ul`
margin-top: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`;
export const SortListItem = styled.li`
font-family: var(--global-typography-fontFamilyP);
font-size: var(--global-typography-fontSizeP);
line-height: var(--global-typography-lineHeightP);
color: var(--global-color-primary);
cursor: pointer;
`;
export const SortContent = styled.div`
background: var(--global-color-penitentiary);
    padding: 16px 20px;
    bottom: 0px;
    position:absolute;
    width: 100%;
    `;