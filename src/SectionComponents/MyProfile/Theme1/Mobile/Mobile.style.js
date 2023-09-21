import styled from "styled-components"


export const ContainerLeft = styled.div` 
    width: ${({ item }) => item?.desktop?.width};
    background: ${({ item }) => item?.desktop?.background};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    /* @media screen and (max-width: 920px) {
       width: 100%;
    } */
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
//  font-family: 'Gilroy-SemiBold',  sans-serif;
//  font-size: 32px;
//  line-height: 36px;
//  text-align: center;
//  color:#fff;
//  margin-bottom: 18.5px;

// `
// export const UserImg = styled.i`
//         display: block;
//         width: 91px;
//         height: 91px;
//         background-color: #fff;
//         mask-image: url(${ProfileImg}) no-repeat center;
//         -webkit-mask: url(${ProfileImg}) no-repeat center;
//         margin: auto;
//         margin-bottom: 18.5px;
// `
// export const AddProfile = styled.p`
//     font-family: 'Gilroy-Medium', sans-serif;
//     font-size: 14px;
//     line-height: 16px;
//     text-align: center;
//     color: #FFFFFF;
//     border: 1px solid #FFFFFF;
//     border-radius: 8px;
//     padding: 8px 0;
//     width: 151px;
//     margin: auto;
//  `;
export const AddProfile = styled.div`
    font-family: ${({ item }) => item?.desktop?.fontFamily};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    text-align: ${({ item }) => item?.desktop?.textAlign};
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
    width: fit-content;

    /* button {
        background-color: transparent;
        outline: none;
        color: #fff;
        border: none;
    } */

    /* a{
        color: #FFFFFF;
    } */
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
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
 /* .externalPage-tab-btn {
 display: flex;
 flex-direction: column;
 width: 100%;
 margin-top: 28px;
 } */
 /* .TabsBtn{
     width: 100%;
     background: transparent;
     color: #fff;
     font-family: 'Gilroy-Bold', sans-serif;
     font-size: 16px;
     line-height: 20px;
     padding:12px 56px;
    justify-content: center;
    @media screen and (max-width: 1024px) {
         padding:12px 32px;
     }
    @media screen and (max-width: 767px) {
         padding: 24px 0;
         font-size: 20px;
         justify-content: center;
     }
 } */
 /* .TabsBtnActive{
     color: #003459;
     background: #FFFFFF;
     border-radius: 0px;
     margin: 0;
 } */
`
// export const BtnDESK = styled.div`
//     @media screen and (max-width: 1400px) {
//        display: block;
//     }
//     @media screen and (max-width: 768px) {
//        display: none;
//     }
// `

export const LogoutButton = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    gap:${({ item }) => item?.desktop?.gap};
    margin-top:${({ item }) => item?.desktop?.margin?.marginTop ? item?.desktop?.margin?.marginTop : ''};
    margin-right:${({ item }) => item?.desktop?.margin?.marginRight ? item?.desktop?.margin?.marginRight : ''};
    margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom ? item?.desktop?.margin?.marginBottom : ''};
    margin-left:${({ item }) => item?.desktop?.margin?.marginLeft ? item?.desktop?.margin?.marginLeft : ''};
`;
export const LogoutContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent} ;
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
div{
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
}
`


// export const LogoutSvg = styled.div`
//         display: block;
//         width: 14px;
//         height: 14px;
//         background-color: #fff;
//         mask-image: url(${logoutImg}) no-repeat center;
//         -webkit-mask: url(${logoutImg}) no-repeat center;
// `
export const LogoutBtn = styled.div`
    font-family: ${({ item }) => item?.desktop?.fontFamily};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    color: ${({ item }) => item?.desktop?.color};
`


// export const BtnMBL = styled.div`
// margin-top: 48px;
//     button {
//       justify-content: center;
//         &:hover{
//         color: #003459;
//         background: #FFFFFF;
//         border-radius: 0;
//         }
//         &:hover a{
//         color: #003459;
//         }

//     }
//     a{
//         color:#fff;
//     }
// `

export const ProfileImage = styled.div`
   width: ${({ item }) => item?.desktop?.width};
   height: ${({ item }) => item?.desktop?.height};
   border-radius: ${({ item }) => item?.desktop?.borderRadius};
   margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
   margin-right: ${({ item }) => item?.desktop?.margin?.marginRight};
   margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
   margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft};
   overflow: hidden;

   /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
       border-radius: 50%;
   } */

   svg {
    width: ${({ itemProfileSvg }) => itemProfileSvg?.desktop?.width};
    height: ${({ itemProfileSvg }) => itemProfileSvg?.desktop?.height};
    fill: ${({ itemProfileSvg }) => itemProfileSvg?.desktop?.fill};
   }
`
