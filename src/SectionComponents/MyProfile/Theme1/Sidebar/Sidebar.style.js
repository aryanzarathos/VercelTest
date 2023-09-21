import styled from "styled-components"

export const ContainerLeft = styled.div` 
    width: ${({ item }) => item?.desktop?.width};
    background: ${({ item }) => item?.desktop?.background};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
    @media screen and (max-width: 1024px) {
       width: ${({ item }) => item?.tablet?.width};
    }
    @media screen and (max-width: 767px) {
       width: ${({ item }) => item?.mobile?.width};
       height: ${({ item }) => item?.mobile?.height};
       border-radius: ${({ item }) => item?.mobile?.borderRadius};
       border:${({ item }) => item?.mobile?.border};
       overflow-y: ${({ item }) => item?.mobile?.overflowY};
       overflow-x: ${({ item }) => item?.mobile?.overflowX};
    }
 `
// export const Heading = styled.h1`
//  font-family: ${({item})=>item?.desktop?.fontFamily};
//  font-size: ${({ item }) => item?.desktop?.fontSize};
//  line-height: ${({ item }) => item?.desktop?.fontFamily};
//  text-align: center;
//  color:#fff;
//  margin-bottom: 18.5px;

// `
// export const UserImg = styled.img`
//         display: block;
//         width: 91px;
//         height: 91px;
//         border-radius: 50%;
//         margin: auto;
//         margin-bottom: 18.5px;
//         border: 3px solid #fff;
//     `
export const AddProfile = styled.div`
    /* font-family: ${({ item }) => item?.desktop?.fontFamily};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight}; */
    /* text-align: ${({ item }) => item?.desktop?.textAlign}; */
    border: ${({ item }) => item?.desktop?.border};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
    width: ${({ item }) => item?.desktop?.width};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
    margin-right: ${({ item }) => item?.desktop?.margin?.marginRight};

    @media screen and (max-width: 767px) {
            margin-bottom: ${({ item }) => item?.mobile?.margin?.marginBottom};
            padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
            padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
            padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
            padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
    }
 `
export const TabsIndex = styled.div`
background: ${({ item }) => item?.desktop?.background};
 .externalPage-tab-btn {
 display: ${({ itemTabWrapper }) => itemTabWrapper?.desktop?.display};
 flex-direction: ${({ itemTabWrapper }) => itemTabWrapper?.desktop?.flexDirection};
 width: ${({ itemTabWrapper }) => itemTabWrapper?.desktop?.width};
 margin-top: ${({ itemTabWrapper }) => itemTabWrapper?.desktop?.margin?.marginTop};
 }
 .TabsBtn{
     width: ${({ itemTabButton }) => itemTabButton?.desktop?.width};
     background: ${({ itemTabButton }) => itemTabButton?.desktop?.background};
     color: ${({ itemTabButton }) => itemTabButton?.desktop?.color};
     font-family: ${({ itemTabButton }) => itemTabButton?.desktop?.fontFamily};
     font-size: ${({ itemTabButton }) => itemTabButton?.desktop?.fontSize};
     line-height: ${({ itemTabButton }) => itemTabButton?.desktop?.lineHeight};
     padding-top:${({ itemTabButton }) => itemTabButton?.desktop?.padding?.paddingTop};
     padding-right:${({ itemTabButton }) => itemTabButton?.desktop?.padding?.paddingRight};
     padding-bottom:${({ itemTabButton }) => itemTabButton?.desktop?.padding?.paddingBottom};
     padding-left:${({ itemTabButton }) => itemTabButton?.desktop?.padding?.paddingLeft};
    justify-content: ${({ itemTabButton }) => itemTabButton?.desktop?.justifyContent};
 }
 .TabsBtnActive{
     color: ${({ itemTabButton }) => itemTabButton?.desktop?.active?.color};
     background: ${({ itemTabButton }) => itemTabButton?.desktop?.active?.background};
     border-radius: ${({ itemTabButton }) => itemTabButton?.desktop?.active?.borderRadius};
     margin-top:${({ itemTabButton }) => itemTabButton?.desktop?.active?.margin?.marginTop};
     margin-right:${({ itemTabButton }) => itemTabButton?.desktop?.active?.margin?.marginRight};
     margin-bottom:${({ itemTabButton }) => itemTabButton?.desktop?.active?.margin?.marginBottom};
     margin-left:${({ itemTabButton }) => itemTabButton?.desktop?.active?.margin?.marginLeft};
 }
`

export const LogoutContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent} ;
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
/* a{ */
    /* display: flex;
    gap: 10px;    
    margin-top: 59px;
    align-items: center; */
    svg {
        width: ${({ itemLogoutSvg }) => itemLogoutSvg?.desktop?.width};
        height: ${({ itemLogoutSvg }) => itemLogoutSvg?.desktop?.height};
        fill: ${({ itemLogoutSvg }) => itemLogoutSvg?.desktop?.fill};

    }

    @media screen and (max-width: 767px) {
            justify-content: ${({ item }) => item?.mobile?.justifyContent};
            margin-left: ${({ item }) => item?.mobile?.margin?.marginLeft};
        }
/* } */
`




// export const LogoutSvg = styled.div`
//         display: block;
//         width: 14px;
//         height: 14px;
//         background-color: #fff;
//         mask-image: url(${Icons.Switch}) no-repeat center;
//         -webkit-mask: url(${Icons.Switch}) no-repeat center;
// `
export const LogoutBtn = styled.div`
 
`
export const ProfileImage = styled.div`
   width: ${({ item }) => item?.desktop?.width};
   height: ${({ item }) => item?.desktop?.height};
   border-radius: ${({ item }) => item?.desktop?.borderRadius};
   margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
   margin-right: ${({ item }) => item?.desktop?.margin?.marginRight};
   margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
   margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft};
/* 
   img {
    width: ${({ itemProfileImage }) => itemProfileImage?.desktop?.width};
    height: ${({ itemProfileImage }) => itemProfileImage?.desktop?.height};
    object-fit: ${({ itemProfileImage }) => itemProfileImage?.desktop?.cover};
       border-radius: ${({ itemProfileImage }) => itemProfileImage?.desktop?.borderRadius};
   } */

   svg {
    width: ${({ itemProfileSvg }) => itemProfileSvg?.desktop?.width};
    height: ${({ itemProfileSvg }) => itemProfileSvg?.desktop?.height};
    fill: ${({ itemProfileSvg }) => itemProfileSvg?.desktop?.fill};
   }
`
