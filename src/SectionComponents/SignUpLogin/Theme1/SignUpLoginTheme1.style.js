import styled from "styled-components";
// import Backbtn from '../../../Assets/SectionComponent/Images/SignUpLogin/backImg.png'


export const SighUpHeroContainer = styled.div`
    /* background: #003459; */
    /* display: flex; */
    justify-content: ${({ item }) => item.desktop.justifyContent};
    // overflow-x: ${({ item }) => item.desktop.overflowX};
    @media screen and (max-width:768px){
        overflow:inherit;
    }
  

`
// export const BackBtnWrapper = styled.div`
//     display: ${({ item }) => item.desktop.display};
//     align-items: ${({ item }) => item.desktop.alignItems};
//     gap: ${({ item }) => item.desktop.gap};
// `
// export const MainContainer = styled.div`
//     display: ${({ item }) => item.desktop.display};
//     justify-content: ${({ item }) => item.desktop.justifyContent};
//     align-items:${({ item }) => item.desktop.alignItems};
//     height: ${({ item }) => item.desktop.height};
//     @media screen and (max-width: 767px) {
//         margin-top: ${({ item }) => item.mobile.margin.marginTop};
//         padding-top: ${({ item }) => item.mobile.padding.paddingTop};
//         padding-right: ${({ item }) => item.mobile.padding.paddingRight};
//         padding-bottom: ${({ item }) => item.mobile.padding.paddingBottom};
//         padding-left: ${({ item }) => item.mobile.padding.paddingLeft};
//     } 
//      `;
export const Blur = styled.div`
    position:  ${({ item }) => item.desktop.position};
    background: ${({ item }) => item.desktop.background};
    opacity:  ${({ item }) => item.desktop.opacity};
    filter:  ${({ item }) => item.desktop.filter};
    width:  ${({ item }) => item.desktop.width};
    // height:  ${({ item }) => item.desktop.height};
    z-index: ${({ item }) => item?.desktop?.zIndex};

    @media screen and (max-width: 768px) {
        top:${({ item }) => item.mobile.top};
    } 
    `;
// export const Card = styled.div`
//     display: ${({ item }) => item.desktop.display};
//     flex-direction: ${({ item }) => item.desktop.flexDirection};
//     justify-content: ${({ item }) => item.desktop.justifyContent};
//     align-items: ${({ item }) => item.desktop.alignItems};
//     background: ${({ item }) => item.desktop.background};
//     backdrop-filter: ${({ item }) => item.desktop.backdropFilter};
//     border-radius: ${({ item }) => item.desktop.borderRadius};
//     padding-top: ${({ item }) => item.desktop.padding.paddingTop};
//     padding-right: ${({ item }) => item.desktop.padding.paddingRight};
//     padding-bottom: ${({ item }) => item.desktop.padding.paddingBottom};
//     padding-left: ${({ item }) => item.desktop.padding.paddingLeft};
//     @media screen and (max-width: 767px) {
//         padding-top: ${({ item }) => item.mobile.padding.paddingTop};
//         padding-right: ${({ item }) => item.mobile.padding.paddingRight};
//         padding-bottom: ${({ item }) => item.mobile.padding.paddingBottom};
//         padding-left: ${({ item }) => item.mobile.padding.paddingLeft};
//     } 
// `
// export const MainImgContainer = styled.div`
//     width: ${({ item }) => item.desktop.width};
//     height: ${({ item }) => item.desktop.height};
//     margin-bottom:${({ item }) => item.desktop.margin.marginBottom};
//     img{
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         object-position: center;
//     }
// `;
// export const BrandTitle = styled.h1`
//     font-family: 'Istok Web';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 20px;
//     line-height: 29px;
//     color: #1F3259;
//     span{
//         color:#6AA9FF;
//     }
// `
// export const LetsFashion = styled.p`
//     font-family: 'Montserrat', sans-serif;
//     font-style: normal;
//     font-weight: 500;
//     font-size: 10px;
//     line-height: 12px;
//     color: #1F3259;
//     margin-bottom: 48px;
// `
export const SubmitBtn = styled.button`
    /* background: #003459;
    border-radius: 8px;
    border: none;
    padding: 12px 118px;
    font-family: 'Gilroy-SemiBold', sans-serif;
    font-size: 20px;
    line-height: 20px;
    color: #FFFFFF; */
`
export const TCWrapper = styled.div`
    margin-top:${({ item }) => item.desktop.margin.marginTop};
    display: ${({ item }) => item.desktop.display};
    gap: ${({ item }) => item.desktop.gap};
    flex-wrap:  ${({ item }) => item.desktop.flexWrap};
`

// export const BackBtn = styled.div`
//     margin-top:  ${({ item }) => item.desktop.margin.marginTop};
//     margin-left:  ${({ item }) => item.desktop.margin.marginLeft};
//     @media screen and (min-width: 767px) {  
//         display:  ${({ item }) => item.mobile.display};
//     }
// `
// export const BackBtnImg = styled.i`

// `
export const SignUpWith = styled.div`
        display:  ${({ item }) => item.desktop.display};
        justify-content:  ${({ item }) => item.desktop.justifyContent};
        align-items:  ${({ item }) => item.desktop.alignItems};
        position:  ${({ item }) => item.desktop.position};
        width:  ${({ item }) => item.desktop.width};
        margin-top:  ${({ item }) => item.desktop.margin.marginTop};
        margin-bottom:  ${({ item }) => item.desktop.margin.marginBottom};
        margin-left:  ${({ item }) => item.desktop.margin.marginLeft};
        margin-right:  ${({ item }) => item.desktop.margin.marginRight};
        &::before{
            content: ${({ item }) => item.desktop.before.content};
            left: ${({ item }) => item.desktop.before.left};
            background-color: ${({ item }) => item.desktop.before.backgroundColor};
            height:${({ item }) => item.desktop.before.height};
            width: ${({ item }) => item.desktop.before.width};
        }
    
        /* hr{
            width: 106px;
        } */
        p{           
            /* font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            color: rgba(32, 32, 32, 0.4); */
        }
`
export const GoogleBtn = styled.div`
    /* display: flex;
    justify-content: center; */
    width: ${({ item }) => item.desktop.width};
    border: ${({ item }) => item.desktop.border};
    border-radius: ${({ item }) => item.desktop.borderRadius};
    padding-top:  ${({ item }) => item.desktop.padding.paddingTop};
    padding-bottom:  ${({ item }) => item.desktop.padding.paddingBottom};
    padding-left:  ${({ item }) => item.desktop.padding.paddingLeft};
    padding-right:  ${({ item }) => item.desktop.padding.paddingRight};
    a{
        /* p{
            font-family: 'Gilroy-Medium', sans-serif;
            font-size: 12px;
            line-height: 14px;
            color: #003459;
        } */
    }
`
export const LoginSubmitBtn = styled.div`
width: ${({ item }) => item?.desktop?.width};
display : ${({ item }) => item?.desktop?.display};
flex-direction :${({ item }) => item?.desktop?.flexDirection};
gap :${({ item }) => item?.desktop?.gap};
button{
    /* background: #003459;
    border-radius: 8px;
    border: none;
    padding: 12px 0px;
    font-family: 'Gilroy-SemiBold', sans-serif;
    font-size: 20px;
    line-height: 20px;
    color: #FFFFFF;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px; */
    /* &:disabled{
        background: rgba(0, 52, 89, 0.3);
    } */
    /* @media screen and (max-width: 425px) {
        font-size: 16px;
        padding: 8px;
    } */
    /* img{
        width: 22px;
        height: auto;
    } */
}
/* .Cancle{
    background: #FFFFFF;
    border: 1px solid #003459;
    color: #003459;
} */

`

export const FormMainContainer = styled.div`
width: ${({ item }) => item.desktop.width};
`
// export const MainHeadingContainer = styled.div`
//     display: ${({ item }) => item.desktop.display};
//     gap: ${({ item }) => item.desktop.gap};
//     align-items: ${({ item }) => item.desktop.alignItems};
//     justify-content: ${({ item }) => item.desktop.justifyContent};
//     margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};
//    h1{ 
//     font-family: 'Gilroy-SemiBold', sans-serif;
//     font-size: 20px;
//     line-height: 23px;
//     color: #003459;
//     text-align: center;
//     }

// `;
export const InputContainer = styled.div`
  position: ${({ item }) => item.desktop.position};
  margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};
  .flag-dropdown{
height:32px;
top:2px;
left:2px;
  } 
  .react-tel-input {
    .form-control {
      height: 41px;
      width: 100%;
    }
  }
  .formFieldwrap {
    margin: 0px;
    padding: 0px;
  }
  /* p{
        position: absolute;
        padding: 13px;
        font-family: 'Gilroy-Medium', sans-serif;
        font-size: 14px;
        line-height: 18px;
        color: rgba(32, 32, 32, 0.4);
    } */
  /* input{ */
  /* background: #FFFFFF;
    border: 1px solid rgba(32, 32, 32, 0.2);
    border-radius: 4px;
    padding: 12px 0px 12px 56px;
    font-family: 'Gilroy-Medium', sans-serif;
    font-size: 14px;
    line-height: 18px;
    color: #202020;
    width: 100%; */

  /* &::placeholder{
        font-family: 'Gilroy-Medium', sans-serif;
        font-size: 14px;
        line-height: 18px;
        color: rgba(32, 32, 32, 0.4);
    } */
  /* } */
  .country-list {
    @media screen and (max-width: 400px) {
      width: 250px;
    }
  }
`;
