import React from "react";
import {
  SectionContainer,
  ContainerSubContainer,
  Section,
  Overlay,
} from "./ContainerStyled";
import RenderComponent from "./ContainerComponentRender";
// import SectionEditor from "../../CommonComponents/Repositioning/SectionEditor";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_OPTION } from "../../store/reducers/SiteEditor";
import SectionVideoBanner from "../../SectionCommon/SectionVideoBanner/SectionVideoBanner";

const ContinerLayout = ({ children, data }) => {
  const dispatch = useDispatch();

  // get custom width
  // const width = Aboutusjson.style.width;

  // get the joson data

  // object of types of width in %
  // const { position } = useSelector((state) => {
  //   return {
  //     position: state.websiteTemplate.getTemplate.data.data
  //   }
  // }
  // );


  // // console.log(children, 'dataContainer')



  const ContainerWidth = {
    fullWidth: {
      width: "100%",
      maxWidth: "1920px",
    },
    containerxl: {
      width: "1400px",
      maxWidth: "95%",
    },
    containerlg: {
      width: "1340px",
      maxWidth: "90%",
    },
    containermd: {
      width: "1240px",
      maxWidth: "90%",
    },
    containersm: {
      width: "1140px",
      maxWidth: "90%",
    },
    customWidth: {
      width: children.style.desktop.width,
      maxWidth: "90%",
    },
  };

  // container height
  const ContainerHeight = {
    small: "375px",
    medium: "475px",
    large: "475px",
    extraLarge: "575px",
    default: "auto",
  };

  if (!children && data) {
    children = data;
  }

  // get the background type of container
  let desktopBackgroundType = children.style.desktop.backgroundType;
  let tabletBackgroundType = children.style.tablet.backgroundType;
  let mobileBackgroundType = children.style.mobile.backgroundType;
  // get the video controls and css;
  return (
    <Section id={`${children.container_name === "Header" ? "mainSection" : ""}`} item={children.style} className={` mainDiv ${(children.position != null && (children.container_name === "Top Header" || children.container_name === "Header" || children.container_name === "Slider")) ? "" : (children.position != null) ? "sectionGap" : ""}`}>
      {/* when video is selected */}
      {(desktopBackgroundType === "video" ||
        tabletBackgroundType === "video" ||
        mobileBackgroundType === "video") && (
          <SectionVideoBanner videoSection={children.style} />
        )}
      <Overlay item={children.style} />
      {children && (
        <SectionContainer
          customWidth={children.customWidth}
          widthType={ContainerWidth[children.containerWidth]}
          className="wd-contaienr-default"
        >
          {children.data.map((gridSections, index) => {

            return (
              // <div key={index} onClick={() => mouseHover(gridSections, index)}>
              typeof RenderComponent[gridSections.componentRender] !==
              "undefined" &&
              React.createElement(
                RenderComponent[gridSections.componentRender],
                null,
                { ...gridSections, index: index }
              )

              // </div>
            );
          })}
        </SectionContainer>
      )}
      <>

      </>

    </Section>
  );
};

export default ContinerLayout;
