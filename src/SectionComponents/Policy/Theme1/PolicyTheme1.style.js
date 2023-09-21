import styled from "styled-components"

export const TermConditionsMainContainer = styled.div`
background: ${({item})=>item?.desktop?.background};
display: ${({ item }) => item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};
text-align: ${({ item }) => item?.desktop?.textAlign};
padding-top: ${({item})=>item?.desktop?.padding?.paddingTop};
padding-right: ${({item})=>item?.desktop?.padding?.paddingRight};
padding-bottom: ${({item})=>item?.desktop?.padding?.paddingBottom};
padding-left: ${({item})=>item?.desktop?.padding?.paddingLeft};
/* .ActiveMobile{
    width:100%;
    padding:0;
} */

@media (max-width: 767px) {
    background: ${({item})=>item?.mobile?.background};
    padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
}
`
export const Timeline = styled.ul`

list-style-type: ${({ item }) => item?.desktop?.listStyleType};
overflow-y: ${({ item }) => item?.desktop?.overflowY};
max-height: ${({ item }) => item?.desktop?.maxHeight};
cursor: ${({ item }) => item?.desktop?.cursor};

&::-webkit-scrollbar {
    width: ${({ item }) => item?.desktop?.webkitScrollBar?.width};
}

&::-webkit-scrollbar-thumb {
    background: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.background};
    border-radius: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.borderRadius};
    height: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.height};
}

&::-webkit-scrollbar-track {
    background: ${({item})=>item?.desktop?.webkitScrollbarTrack?.background};
}
`

export const TermConditionsSubContainer = styled.div`
background-color: ${({item})=>item?.desktop?.backgroundColor};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
box-shadow: ${({ item }) => item?.desktop?.boxShadow};
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
margin-right: ${({ item }) => item?.desktop?.margin?.marginRight};
margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft};
display: ${({ item }) => item?.desktop?.display};
grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns} ;
gap: ${({ item }) => item?.desktop?.gap};

/* @media (max-width: 767px) {
    gap: 25px;
} */

@media (max-width: 767px) {
grid-template-columns: ${({item})=>item?.mobile?.gridTemplateColumns}  ;
    border-radius:  ${({ item }) => item?.mobile?.borderRadius};
    margin-top: ${({ item }) => item?.mobile?.margin?.marginTop};
    margin-right: ${({ item }) => item?.mobile?.margin?.marginRight};
    margin-bottom: ${({ item }) => item?.mobile?.margin?.marginBottom};
    margin-left: ${({ item }) => item?.mobile?.margin?.marginLeft};
    display:  ${({ item }) => item?.mobile?.display};
    gap:  ${({ item }) => item?.mobile?.gap};
    width:  ${({ item }) => item?.mobile?.width};
}
`
export const SubLeftContainer = styled.div`
background: ${({item})=>item?.desktop?.background};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};

@media (max-width: 767px) {
    border-radius: ${({item})=>item?.mobile?.borderRadius};
    background: ${({item})=>item?.mobile?.background};
    /* height: ${({ item }) => item?.mobile?.height}; */
    padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
    padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
    padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
    padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
}
`

export const TimelineLists = styled.li`

color:${({ currentTab,item,data }) => currentTab === data ? (item?.desktop?.active?.color) : ( item?.desktop?.color)};
padding-top:${({item})=>item?.desktop?.padding?.paddingTop};
padding-right:${({item})=>item?.desktop?.padding?.paddingRight};
padding-bottom:${({item})=>item?.desktop?.padding?.paddingBottom};
padding-left:${({item})=>item?.desktop?.padding?.paddingLeft};
font-family: ${({item})=>item?.desktop?.fontFamily};
font-style: ${({ item }) => item?.desktop?.fontStyle};
font-weight: ${({currentTab,item,data}) => currentTab === data ?
 ( item?.desktop?.active?.fontWeight) :  (item?.desktop?.fontWeight)};
font-size: ${({item})=>item?.desktop?.fontSize};
line-height: ${({ item }) => item?.desktop?.lineHeight}; 
display: ${({ item }) => item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};
position: ${({ item }) => item?.desktop?.position};

&:last-child::before {
    border: ${({item})=>item?.desktop?.lastChild?.before?.border};
    height: ${({ item }) => item?.desktop?.lastChild?.before?.height};
    width: ${({ item }) => item?.desktop?.lastChild?.before?.width};
}

&::before {
    content: ${({item})=>item?.desktop?.before?.cursor};
    background-color: ${({ item }) => item?.desktop?.before?.backgroundColor};
    position: ${({ item }) => item?.desktop?.before?.position};
    width: ${({ item }) => item?.desktop?.before?.width};
    height: ${({ item }) => item?.desktop?.before?.height};
    left: ${({ item }) => item?.desktop?.before?.left};
    top: ${({ item }) => item?.desktop?.before?.top};
}

&::after {
    width: ${({item})=>item?.desktop?.after?.width};
    height: ${({ item }) => item?.desktop?.after?.height};
    border-radius: ${({ item }) => item?.desktop?.after?.borderRadius};
    background:${({ currentTab, item, data }) => currentTab === data ? (item?.desktop?.active?.after?.backgroundColor) : (item?.desktop?.after?.backgroundColor)};


    @media (max-width:767px) {
        top: ${({item})=>item?.mobile?.top};
    }
}
svg{
    fill: ${({ itemForwardSvg }) => itemForwardSvg?.desktop?.fill};
}
`
export const AppLink = styled.a`
color:${({ currentTab, item, data }) => currentTab === data ? (item?.desktop?.active?.color) : (item?.desktop?.color)};
/* padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
font-family: ${({ item }) => item?.desktop?.fontFamily};
font-style: ${({ item }) => item?.desktop?.fontStyle};
font-weight: ${({ currentTab, item, data }) => currentTab === data ?
        (item?.desktop?.active?.fontWeight) : (item?.desktop?.fontWeight)};
font-size: ${({ item }) => item?.desktop?.fontSize};
line-height: ${({ item }) => item?.desktop?.lineHeight}; 
display: ${({ item }) => item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};
position: ${({ item }) => item?.desktop?.position}; */


/* &:last-child::before {
   border: ${({ item }) => item?.desktop?.lastChild?.before?.border};
    height: ${({ item }) => item?.desktop?.lastChild?.before?.height};
    width: ${({ item }) => item?.desktop?.lastChild?.before?.width};
}

&::before {
    content: ${({ item }) => item?.desktop?.before?.cursor};
    background-color: ${({ item }) => item?.desktop?.before?.backgroundColor};
    position: ${({ item }) => item?.desktop?.before?.position};
    width: ${({ item }) => item?.desktop?.before?.width};
    height: ${({ item }) => item?.desktop?.before?.height};
    left: ${({ item }) => item?.desktop?.before?.left};
    top: ${({ item }) => item?.desktop?.before?.top};
}

&::after {
width: ${({ item }) => item?.desktop?.after?.width};
    height: ${({ item }) => item?.desktop?.after?.height};
    border-radius: ${({ item }) => item?.desktop?.after?.borderRadius};
    background:${({ currentTab, item, data }) => currentTab === data ? (item?.desktop?.active?.after?.backgroundColor) : (item?.desktop?.after?.backgroundColor)};

} */
`

// export const PolicyForwrdIcon = styled.i`

// display: block;
// width: 5px;
// height: 9px;
// background-color: rgba(31, 50, 89, 1);
// `
export const SubRightContainer = styled.div`
padding-top: ${({item})=>item?.desktop?.padding?.paddingTop};
padding-right: ${({item})=>item?.desktop?.padding?.paddingRight};
padding-bottom: ${({item})=>item?.desktop?.padding?.paddingBottom};
padding-left: ${({item})=>item?.desktop?.padding?.paddingLeft};
@media (max-width: 767px) {
    padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
}

/* @media (max-width: 600px) {
    padding: 0;
} */
`