import styled from "styled-components"
// import ProfileImg from '../../../Assets/Images/MyProfile/Theme1/profile.svg'
import ProfileImg from '../../../Assets/SectionComponent/Images/MyProfile/Theme1/profile.svg'
// import logoutImg from '../../Assets/Images/MyProfile/Theme1/logout.svg'
import logoutImg from '../../../Assets/SectionComponent/Images/MyProfile/Theme1/logout.svg'



export const MyProfielContainer = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #C9E0FF;
;
.addCss{
    max-width:1366px;
    width:80%;
    margin:0 auto;
}
    @media screen and (max-width: 620px) {
        .addCss{
        width: 100%;
        padding: 0;
        }
    }
    
   
`
export const MainContainer = styled.div`
    display: flex;
    background: #FFFFFF;
    box-shadow: 13px 25px 51px rgba(0, 0, 0, 0.05);
    border-radius: 18px;
    @media screen and (max-width: 620px) {
      height: 100vh;
    }
    .OverflowInitial{
        overflow-y: initial !important;
    }
`
export const ContainerLeft = styled.div`
    width: 25%;
    background: #003459;
    border-radius: 18px 0px 0px 18px;
    padding: 30px 0px;
    @media screen and (max-width: 920px) {
       width: 35%;
    }
    @media screen and (max-width: 620px) {
       width: 100%;
       height: 100vh;
       border-radius: 0;
       border:none;
       overflow-y: auto;
       overflow-x: hidden;
    }
 `
export const AddProfile = styled.p`
    font-family: 'Gilroy-Medium', sans-serif;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
    padding: 8px 0;
    width: 151px;
    margin: auto;
    @media screen and (max-width: 620px) {
            margin-bottom: 56px;
            padding: 8px 14px;
    }
 `
export const Heading = styled.h1`
    font-family: 'Gilroy-SemiBold',  sans-serif;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    color:#fff;
    margin-bottom: 18.5px;

`
export const UserImg = styled.i`
        display: block;
        width: 91px;
        height: 91px;
        background-color: #fff;
        mask-image: url(${ProfileImg}) no-repeat center;
        /* -webkit-mask: url(${ProfileImg}) no-repeat center; */
        margin: auto;
        margin-bottom: 18.5px;
    `
export const TabsIndex = styled.div`
    .externalPage-tab-btn {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 28px;
    }
    .TabsBtn{
        width: 100%;
        background: transparent;
        color: #fff;
        font-family: 'Gilroy-Bold', sans-serif;
        font-size: 16px;
        line-height: 20px;
        padding:12px 56px;
       justify-content: flex-start;
       @media screen and (max-width: 1024px) {
            padding:12px 32px;
        }
       @media screen and (max-width: 620px) {
            padding: 24px 0;
            font-size: 20px;
            justify-content: center;
        }
    }
    .TabsBtnActive{
        color: #003459;
        background: #FFFFFF;
        border-radius: 0px;
        margin: 0;
    }
`
export const LogoutContainer = styled.div`
a{
    display: flex;
    gap: 10px;    
    margin:59px 0px 0px 53px;
    align-items: center;
    @media screen and (max-width: 620px) {
            justify-content: center;
            margin-left: 0;
        }
}
`
export const LogoutSvg = styled.div`
        display: block;
        width: 14px;
        height: 14px;
        background-color: #fff;
        mask-image: url(${logoutImg}) no-repeat center;
        /* -webkit-mask: url(${logoutImg}) no-repeat center; */
`
export const LogoutBtn = styled.div`
    font-family: 'Gilroy-Bold', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
`
export const ContainerRight = styled.div`
    position: relative;
    width: 75%;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 512px;
    @media screen and (max-width: 920px) {
       width: 65%;
    }
    @media screen and (max-width: 620px) {
       display: none;
    }
`
export const BtnDESK = styled.div`
    @media screen and (max-width: 1400px) {
       display: block;
    }
    @media screen and (max-width: 620px) {
       display: none;
    }
`
export const BtnMBL = styled.div`
    button {
        &:hover{
        color: #003459;
        background: #FFFFFF;
        border-radius: 0;
        }
        &:hover a{
        color: #003459;
        }
        
    }
    a{
        color:#fff;
    }
    @media screen and (max-width: 2400px) {
        display: none;
    }
    @media screen and (max-width: 620px) {
       display: block;
    }
`