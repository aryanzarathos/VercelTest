import React, { useEffect, useRef, useState } from 'react';
import styles from "./Loader.module.scss"
import { useSelector } from 'react-redux';

const EditorLoader = ({ children, isScrollStop,currentSectionIndex}) => {
  const { data } = useSelector((state) => state.websiteTemplate.getTemplate);
  const sectionData = data?.data;
  const sectionName = sectionData && sectionData.map((item) => item.container_name);

  const sectionNames = sectionName;
  // const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  // const [visibleSectionIndex, setVisibleSectionIndex] = useState(0); // New state to control visible section

  // useEffect(() => {
  //   if (!isScrollStop) {
  //     const handleScroll = () => {
  //       const sectionHeight = window.innerHeight;
  //       const currentIndex = Math.floor(window.scrollY / sectionHeight);
  //       setCurrentSectionIndex(currentIndex);
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     const intervalId = setInterval(() => {
  //       setVisibleSectionIndex(
  //         (prevIndex) => (prevIndex + 1) 
  //       );
  //     }, 2000);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //       clearInterval(intervalId);
  //     };
  //   }
  // }, [isScrollStop, sectionNames?.length]);


  return (
    <React.Fragment>
      {
        !isScrollStop && (
          <div className={styles.EditorLoader_Wrap}>
            <div className={styles.blur_background} />
            <div className={styles.loaderContent}>
              <i className={styles.loader_gif}></i>
              {sectionNames?.map((name, index) => (
                <p
                  key={index}
                  id={index}
                  className={`${styles.loader_tail} ${currentSectionIndex === index ? `${styles.active}` : ''}`}
                >
                  {currentSectionIndex === index ? `Adding ${name}`:""}
                </p>
              ))}
            </div>
          </div>
        )
      }
      {children}
    </React.Fragment>
  );
}

export default EditorLoader