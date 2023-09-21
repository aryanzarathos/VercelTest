import styled from "styled-components";


export const SectionContainer = styled.div` 
position: relative;
 width:  ${({ widthType }) => widthType.width ? widthType.width : ''} ;
 max-width: ${({ widthType }) => widthType.maxWidth != null ? widthType.maxWidth : '90%'};
 margin: 0 auto; 

 /* padding:   ${({ widthType }) => widthType.width === 100 ? '0%' : '0 16px'}; */
 /* background-color: springgreen; */



 /* @media(max-width:576px) {
    max-width: 100%;
    width: 100%;
    padding:  0;
 } */

`

export const ContainerSubContainer = styled.div`
  background-color:  ${({ item }) => item.backgroundColor};

`

export const Section = styled.section`
  background: ${({ item }) => item.desktop.backgroundType === "color" ? item.desktop.background : ""};
  background: ${({ item }) => item.desktop.backgroundType === "image" ? `url(${item.desktop.backgroundImage.url ? item.desktop.backgroundImage.url : "https://webneed-images-uat.s3.ap-south-1.amazonaws.com/imageDefault.png"})` : ""};
  background: ${({ item }) => item.desktop.backgroundType === "video" && item.desktop.video.url == "" ? `url(${"https://webneed-images-uat.s3.ap-south-1.amazonaws.com/VideoDefault.png"})` : ""};

  /* height:${({ item }) => item.desktop.height} ; */
  background-size:${({ item }) => item.desktop.backgroundImage.backgroundSize} ;
  background-position: ${({ item }) => item.desktop.backgroundImage.backgroundPostion};
  background-repeat: ${({ item }) => item?.desktop?.backgroundImage?.backgroundRepeat ? item?.desktop?.backgroundImage?.backgroundRepeat : ""}; 
  position: relative;
  box-shadow:${({ item }) => item.desktop.boxShadow ? item.desktop.boxShadow : ""};
  
  /* &.sectionsGap {
      margin: 36px 0;
  }

  &.fistSection {
    margin-bottom: 36px ; 
  } */
  /* isolation:isolate; */
  padding-top:${({ item }) => item?.desktop?.padding?.paddingTop ? item?.desktop?.padding?.paddingTop : ""};
  padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom ? item?.desktop?.padding?.paddingBottom : ""};
  padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft ? item?.desktop?.padding?.paddingLeft : ""};
  padding-right:${({ item }) => item?.desktop?.padding?.paddingRight ? item?.desktop?.padding?.paddingRight : ""};
  @media(max-width:1024px) {
    background: ${({ item }) => item.tablet.backgroundType === "color" ? item.tablet.background : ""};
    background: ${({ item }) => item.tablet.backgroundType === "image" ? `url(${item.tablet.backgroundImage.url ? item.tablet.backgroundImage.url : "https://webneed-images-uat.s3.ap-south-1.amazonaws.com/imageDefault.png"})` : ""};
    background: ${({ item }) => item.tablet.backgroundType === "video" && item.tablet.video.url == "" ? `url(${"https://webneed-images-uat.s3.ap-south-1.amazonaws.com/VideoDefault.png"})` : ""};
  height:${({ item }) => item.tablet.height} ;
  min-height:${({ item }) => item?.tablet?.minHeight} ;
  background-size:${({ item }) => item.tablet.backgroundType === "image" ? item.tablet.backgroundImage.backgroundSize : ""} ;
  background-position: ${({ item, }) => item.tablet.backgroundType === "image" ? item.tablet.backgroundImage.backgroundPostion : ""};
  background-repeat: ${({ item }) => item?.tablet?.backgroundImage?.backgroundRepeat}; 
  }

  @media(max-width:768px) {
    background: ${({ item }) => item.mobile.backgroundType === "color" ? item.mobile.background : ""};
    background: ${({ item }) => item.mobile.backgroundType === "image" ? `url(${item.mobile.backgroundImage.url ? item.mobile.backgroundImage.url : "https://webneed-images-uat.s3.ap-south-1.amazonaws.com/imageDefault.png"})` : ""};
    background: ${({ item }) => item.mobile.backgroundType === "video" && item.mobile.video.url == "" ? `url(${"https://webneed-images-uat.s3.ap-south-1.amazonaws.com/VideoDefault.png"})` : ""};
  height:${({ item }) => item.mobile.height} ;
  min-height:${({ item }) => item?.mobile?.minHeight} ;
  background-size:${({ item }) => item.tablet.backgroundType === "image" ? item.mobile.backgroundImage.backgroundSize : ""} ;
  background-position: ${({ item }) => item.tablet.backgroundType === "image" ? item.mobile.backgroundImage.backgroundPostion : ""};
  background-repeat: ${({ item }) => item.mobile.backgroundImage.backgroundRepeat}; 
  }





  .wd-contaienr-default {
  display:${({ item }) => item?.desktop?.display ? item?.desktop?.display : ""} ;
  grid-template-columns: repeat( ${({ item }) => item.desktop.gridColumns}, 1fr ) ;
  height:${({ item }) => item.desktop.height} ;
  min-height:${({ item }) => item?.desktop?.minHeight} ;
  align-items: ${({ item }) => item?.desktop?.alignItems ? item?.desktop?.alignItems : ""};
  justify-content: ${({ item }) => item?.desktop?.justifyContent ? item?.desktop?.justifyContent : ""} ;
    min-height:${({ item }) => item?.desktop?.minHeight ? item?.desktop?.minHeight : ""};
  @media(max-width:1024px) {
    display:${({ item }) => item?.tablet?.display ? item?.tablet?.display : ""} ;
  grid-template-columns: repeat( ${({ item }) => item.tablet.gridColumns}, 1fr ) ;
  height:${({ item }) => item.tablet.height} ;
  height:${({ item }) => item?.tablet?.minHeight} ;
  align-items: ${({ item }) => item?.tablet?.alignItems ? item?.tablet?.alignItems : ""};
  justify-content: ${({ item }) => item?.tablet?.justifyContent ? item?.tablet?.justifyContent : ""} ;
  }

  @media(max-width:768px) {
    display:${({ item }) => item?.mobile?.display ? item?.mobile?.display : ""} ;
  grid-template-columns: repeat( ${({ item }) => item.mobile.gridColumns}, 1fr ) ;
  height:${({ item }) => item.mobile.height} ;
  min-height:${({ item }) => item?.mobile?.minHeight} ;
  align-items: ${({ item }) => item?.mobile?.alignItems ? item?.mobile?.alignItems : ""};
  justify-content: ${({ item }) => item?.mobile?.justifyContent ? item?.mobile?.justifyContent : ""} ;
  padding-top:${({ item }) => item?.mobile?.padding?.paddingTop ? item?.mobile?.padding?.paddingTop : ""};
  padding-right:${({ item }) => item?.mobile?.padding?.paddingRight ? item?.mobile?.padding?.paddingRight : ""};
  padding-bottom:${({ item }) => item?.mobile?.padding?.paddingBottom ? item?.mobile?.padding?.paddingBottom : ""};
  padding-left:${({ item }) => item?.mobile?.padding?.paddingLeft ? item?.mobile?.padding?.paddingLeft : ""};
  /* margin-top:${({ item }) => item?.mobile?.margin?.marginTop ? item?.mobile?.margin?.marginTop : ""};
  margin-right:${({ item }) => item?.mobile?.margin?.marginRight ? item?.mobile?.margin?.marginRight : ""};
  margin-bottom:${({ item }) => item?.mobile?.margin?.marginBottom ? item?.mobile?.margin?.marginBottom : ""};
  margin-left:${({ item }) => item?.mobile?.margin?.marginLeft ? item?.mobile?.margin?.marginLeft : ""}; */
    
  }


  }
  &:before {
    /* content: "" ;
    position: absolute ;
    top: 0px ;
    left: 0px  ;
    width:100%;
    height: 100%;
    isolation:isolate;
    background: pink; */
    /* z-index:-2 */
  
  }

  &:after {

    /* z-index:; */
    /* isolation:isolate; */
    /* z-index:1; */
   
    /* content: "" ;
    position: absolute ;
    top: 0px ;
    left: 0px  ;
    width:100%;
    height: 100%; */
    /* z-index: 1; */

    /* content: "" ;
    position: absolute ;
    top: 0px ;
    left: 0px  ;
    width:100%;
    height: 100%; */
    /* background:  ${({ item }) => `rgba(${item?.desktop?.overlayColor ? item?.desktop?.overlayColor : "0,0,0"}, ${item?.desktop?.overlayOpacity ? item?.desktop?.overlayOpacity : "0"})`} ; */
    /* z-index:-1; */
    /* background-color:rgba(0,0,0,1); */
  }






`

// export const Overlay = styled.div`
//     position: absolute ;
//     top: 0px ;
//     left: 0px  ;
//     width:100%;
//     height: 100%;
//     background:  ${({ item }) => `rgba(${item?.desktop?.overlayColor ? item?.desktop?.overlayColor : "0,0,0"}, ${item?.desktop?.overlayOpacity ? item?.desktop?.overlayOpacity : "0"})`} ;
//     /* z-index: -1; */
// ` 
export const Overlay = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
 background:  ${({ item }) => `rgba(${item?.desktop?.overlayColor ? item?.desktop?.overlayColor : "0,0,0"}, ${item?.desktop?.overlayOpacity ? item?.desktop?.overlayOpacity : "0"})`} ;

`