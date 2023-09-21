import styled from "styled-components"

export const PolicyMobileTopContent = styled.div`
display: ${({item})=>item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};
gap: ${({ item }) => item?.desktop?.gap};
border: ${({ item }) => item?.desktop?.border};
padding-top: ${({item})=>item?.desktop?.padding?.paddingTop};
padding-right: ${({item})=>item?.desktop?.padding?.paddingRight};
padding-bottom: ${({item})=>item?.desktop?.padding?.paddingBottom};
padding-left: ${({item})=>item?.desktop?.padding?.paddingLeft};
background: ${({item})=>item?.desktop?.background};
width: ${({item})=>item?.desktop?.width};
svg{
    fill:${({ itemBackWardSvg }) => itemBackWardSvg?.desktop?.fill}
}
`

// export const PolicyMobileTopHeading = styled.h3`
// font-family: 'Gilroy-Bold';
// font-size: 20px;
// line-height: 23px;
// color: #1F3259;
// `

export const PolicyMobileSubContainer = styled.div`
margin-top:${({item})=>item?.desktop?.margin?.marginTop};
margin-right:${({item})=>item?.desktop?.margin?.marginRight};
margin-bottom:${({item})=>item?.desktop?.margin?.marginBottom};
margin-left:${({item})=>item?.desktop?.margin?.marginLeft};
`

// export const PolicyMobileSubContent = styled.p`
// font-family: 'Gilroy-Regular',sans-serif;
// font-size: 16px;
// line-height: 30px;
// color: #202020;
// padding-right: 10px;
// `
// export const SubRightTopHeading = styled.h3`
// font-size: 32px;
// line-height: 36px;
// color: #003459;
// margin: 40px 0px 22px 0px;
// `
export const SubRightContent = styled.div`
overflow-y: ${({item})=>item?.desktop?.overflowY};
max-height: ${({ item }) => item?.desktop?.maxHeight};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};

&::-webkit-scrollbar {
    width: ${({item})=>item?.desktop?.webkitScrollbar?.width};
}

&::-webkit-scrollbar-thumb {
    background: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.background};
    border-radius: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.borderRadius};
    height: ${({ item }) => item?.desktop?.webkitScrollbarThumb?.height};
}

&::-webkit-scrollbar-track {
    background: ${({ item }) => item?.desktop?.webkitScrollbarTrack?.background};
}
/* 
p {
font-weight: 400;
font-size: 16px;
line-height: 23px;
color: #202020;
} */
`