import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { deleteCookie } from "cookies-next";
import { useSelector } from "react-redux";
// import preloadedState from '../../test.json'
import RenderComponent from "../../SectionsLayout/RendersComponent/RenderComponent";
import AppLinkUrl from "../../CommonComponents/AppLink/AppLinkUrl";
import EmptySection from "@/CommonComponents/EmptySection";
import EditorLoader from "@/CommonComponents/Loader/Editor/EditorLoader";
import Cookies from "@/Classes/Cookies";
// const SectionEditor = dynamic(() => import("../../CommonComponents/Repositioning/SectionEditor"), { ssr: false })
const OnboardChildComponent = () => {
  const { data } = useSelector((state) => state.websiteTemplate.getTemplate);

  const sections = data?.data;
  // const isDynamicSectionLoaded = SectionEditor?.isDynamic;
  // console.log(isDynamicSectionLoaded,"isDynamicSectionLoaded");
  let boolean = Cookies.has("aiLoader")
    ? Cookies.get("aiLoader", Cookies.cokConfig.type.bool)
    : false;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrollStop, setIsScrollStop] = useState(boolean ? false : true);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Populate the sectionRefs with references to each section div
    sectionRefs.current = sectionRefs.current.slice(0, sections?.length);
  }, [sections]);

  useEffect(() => {
    // Attach event listeners for scrolling
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let activeSectionIndex = 0;

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const sectionTop = sectionRefs.current[i]?.offsetTop || 0;
        const sectionHeight = sectionRefs.current[i]?.clientHeight || 0;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          activeSectionIndex = i;
          break;
        }
      }
      // setCurrentSectionIndex(activeSectionIndex);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    // Auto-scroll through sections and back to the top only if not already scrolled

    if (!isScrollStop) {
      const autoScroll = () => {
        const newIndex = currentSectionIndex + 1;
        if (newIndex === sections?.length) {
           deleteCookie("aiLoader", { path: "/", domain: ".webneed.com" });
          setIsScrollStop(true);
         
          scrollToTop();
        } else {
          setCurrentSectionIndex(newIndex);
          scrollToSection(newIndex);
        }
      };

      const timeout = setTimeout(autoScroll, 2000); // Change the time (in milliseconds) between auto-scrolls here

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentSectionIndex, isScrollStop, sections, sections?.length]);

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      // Scroll to the section at the given index
      sectionRefs.current[index].scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  // useEffect(() => {
  //   let boolean = Cookies.has("aiLoader") ? Cookies.get("aiLoader", Cookies.cokConfig.type.bool) : false
  //   if (boolean) {
  //     setIsScrollStop(false)
  //   }
  // }, [])
  console.log(currentSectionIndex,"jjiihj")
  return (
    <EditorLoader
      isScrollStop={isScrollStop}
      currentSectionIndex={currentSectionIndex}
    >
      {data?.upper?.length
        ? data.upper.map((item, key) => {
            return (
              <React.Fragment key={key}>
                {item?.container_name === "Top Header"
                  ? data?.hide_topheader === false &&
                    typeof RenderComponent[item.componentRender] !== "undefined"
                    ? React.createElement(
                        RenderComponent[item.componentRender],
                        null,
                        item
                      )
                    : ""
                  : data?.hide_header === false &&
                    typeof RenderComponent[item.componentRender] !== "undefined"
                  ? React.createElement(
                      RenderComponent[item.componentRender],
                      null,
                      item
                    )
                  : ""}
              </React.Fragment>
            );
          })
        : ""}
      <React.Fragment>
        {data?.data?.length > 0
          ? data?.data?.map((item, key) => {
              return (
                <div
                  key={key}
                  id={item._id}
                  ref={(el) => (sectionRefs.current[key] = el)}
                >
                  {typeof RenderComponent[item.componentRender] !== "undefined"
                    ? React.createElement(
                        RenderComponent[item.componentRender],
                        null,
                        item
                      )
                    : ""}
                </div>
              );
            })
          : ""}
      </React.Fragment>
      {data?.lower?.length
        ? data.lower.map((item, key) => {
            return (
              <React.Fragment key={key}>
                {item?.container_name === "Copy Write"
                  ? data?.hide_low_footer === false &&
                    typeof RenderComponent[item.componentRender] !== "undefined"
                    ? React.createElement(
                        RenderComponent[item.componentRender],
                        null,
                        item
                      )
                    : ""
                  : data?.hide_footer === false &&
                    typeof RenderComponent[item.componentRender] !== "undefined"
                  ? React.createElement(
                      RenderComponent[item.componentRender],
                      null,
                      item
                    )
                  : ""}
              </React.Fragment>
            );
          })
        : ""}
    </EditorLoader>
  );
};
export default OnboardChildComponent;
