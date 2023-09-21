import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { deleteCookie } from 'cookies-next'
import { useSelector } from 'react-redux'
// import preloadedState from '../../test.json'
import RenderComponent from '../../SectionsLayout/RendersComponent/RenderComponent'
import AppLinkUrl from '../../CommonComponents/AppLink/AppLinkUrl'
import EmptySection from '@/CommonComponents/EmptySection'
import EditorLoader from '@/CommonComponents/Loader/Editor/EditorLoader'
import Cookies from '@/Classes/Cookies'
import SectionEditor from '@/CommonComponents/Repositioning/SectionEditor'
import Loader from '@/CommonComponents/Loader/Editor'
// const SectionEditor = dynamic(() => import("../../CommonComponents/Repositioning/SectionEditor"), { ssr: false })
const ChildComponent = () => {
  const { data, success } = useSelector((state) => state.websiteTemplate.getTemplate);

  // const sections = data?.data;
  // const isDynamicSectionLoaded = SectionEditor?.isDynamic;
  // console.log(isDynamicSectionLoaded,"isDynamicSectionLoaded");

  // const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  // const [isScrollStop, setIsScrollStop] = useState(true);
  // const sectionRefs = useRef([]);

  // useEffect(() => {
  //   // Populate the sectionRefs with references to each section div
  //   sectionRefs.current = sectionRefs.current.slice(0, sections?.length);
  // }, [sections]);

  // useEffect(() => {
  //   // Attach event listeners for scrolling
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     let activeSectionIndex = 0;

  //     for (let i = 0; i < sectionRefs.current.length; i++) {
  //       const sectionTop = sectionRefs.current[i]?.offsetTop || 0;
  //       const sectionHeight = sectionRefs.current[i]?.clientHeight || 0;
  //       if (
  //         scrollPosition >= sectionTop &&
  //         scrollPosition < sectionTop + sectionHeight
  //       ) {
  //         activeSectionIndex = i;
  //         break;
  //       }
  //     }

  //     setCurrentSectionIndex(activeSectionIndex);
  //   };

  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Auto-scroll through sections and back to the top only if not already scrolled

  //   if (!isScrollStop) {
  //     const autoScroll = () => {
  //       const newIndex = (currentSectionIndex + 1) % (sections?.length + 1);
  //       if (newIndex === sections?.length) {
  //         // Stop the auto-scrolling and scroll back to the top
  //         setCurrentSectionIndex(0);
  //         setIsScrollStop(true)
  //         // Cookies.remove("aiLoader");
  //         deleteCookie("aiLoader", { path: '/', domain: '.webneed.com' });
  //         sectionRefs.current[0].scrollIntoView({
  //           behavior: "smooth"
  //         });
  //       } else {
  //         setCurrentSectionIndex(newIndex);
  //         scrollToSection(newIndex);
  //       }
  //     };

  //     const timeout = setTimeout(autoScroll, 2000); // Change the time (in milliseconds) between auto-scrolls here

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }

  // }, [currentSectionIndex, isScrollStop, sections?.length]);

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // const scrollToSection = (index) => {
  //   if (sectionRefs.current[index]) {
  //     // Scroll to the section at the given index
  //     sectionRefs.current[index].scrollIntoView({
  //       behavior: "smooth"
  //     });
  //   }
  // };
  // useEffect(() => {
  //   let boolean = Cookies.has("aiLoader") ? Cookies.get("aiLoader", Cookies.cokConfig.type.bool) : false
  //   if (boolean) {
  //     setIsScrollStop(false)
  //   }
  // }, [])
  return (
    <>
      {

        data?.upper?.length ? data.upper.map((item, key) => {
          return (
            <React.Fragment key={key}>
              {
                item?.container_name === "Top Header" ?
                  data?.hide_topheader === false && typeof RenderComponent[item.componentRender] !== "undefined" ?
                    React.createElement(RenderComponent[item.componentRender], null, item) :
                    ""
                  : data?.hide_header === false && typeof RenderComponent[item.componentRender] !== "undefined" ?
                    React.createElement(RenderComponent[item.componentRender], null, item) :
                    ""
              }

            </React.Fragment>
          )
        }) : ""
      }
      <React.Fragment>
        {success ? data?.data?.length > 0 ? data?.data?.map((item, key) => {
          return (
            <div key={key} id={item._id}>
              {AppLinkUrl.isEditor() ?
                <SectionEditor
                  itemIndex={key}
                  sectionData={item}
                  sectionEditor={true}
                  widgetMenu={true}
                  lowerAdd={true}
                  upperAdd={true}
                  variationName={item?.variationName}
                  sectionType={item?.appearenceType}
                >
                  {typeof RenderComponent[item.componentRender] !== "undefined" ?
                    React.createElement(RenderComponent[item.componentRender], null, item) :
                    ""}
                </SectionEditor> : typeof RenderComponent[item.componentRender] !== "undefined" ?
                  React.createElement(RenderComponent[item.componentRender], null, item) :
                  ""
              }
            </div>
          )
        }) : AppLinkUrl.isEditor() ?
          <EmptySection heading={"Click to add a section"} /> : ""
          : <Loader />
        }
      </React.Fragment>
      {
        data?.lower?.length ? data.lower.map((item, key) => {
          return (
            <React.Fragment key={key}>
              {
                item?.container_name === "Copy Write" ?
                  data?.hide_low_footer === false && typeof RenderComponent[item.componentRender] !== "undefined" ?
                    React.createElement(RenderComponent[item.componentRender], null, item) :
                    ""
                  : data?.hide_footer === false && typeof RenderComponent[item.componentRender] !== "undefined" ?
                    React.createElement(RenderComponent[item.componentRender], null, item) :
                    ""
              }

            </React.Fragment>

          )
        }) : ""
      }
    </>
  )
}
export default ChildComponent