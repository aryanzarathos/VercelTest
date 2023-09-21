import React, { useRef, useEffect, useState } from "react";
import OverflowMenu from "./overflow-menu";
import classnames from "classnames";
import styles from "./Intersection.module.scss"

// const useIntersectionStyles = MakeStyles(() => ());

export default function IntersectionObserverWrap({ children }) {
  const classes = {
    // visible: {
    //   order: 0,
    //   visibility: "visible",
    //   opacity: 1
    // },
    // inVisible: {
    //   order: 100,
    //   visibility: "hidden",
    //   pointerEvents: "none"
    // },
    // toolbarWrapper: {
    //   display: "flex",
    //   // overflow: "hidden",
    //   padding: "0 20px",
    //   width: "75%"
    // },
    // overflowStyle: {
    //   order: 99,
    //   position: "sticky",
    //   right: "0",
    //   backgroundColor: "white"
    // }
  };
  const navRef = useRef(null);
  const [visibilityMap, setVisibilityMap] = useState({});
  const handleIntersection = (entries) => {
    const updatedEntries = {};
    entries.forEach((entry) => {
      const targetid = entry.target.dataset.targetid;
      if (entry.isIntersecting) {
        updatedEntries[targetid] = true;
      } else {
        updatedEntries[targetid] = false;
      }
    });

    setVisibilityMap((prev) => ({
      ...prev,
      ...updatedEntries
    }));
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: navRef.current,
      threshold: 1
    });

    // We are addting observers to child elements of the container div
    // with ref as navRef. Notice that we are adding observers
    // only if we have the data attribute observerid on the child elemeent
    Array.from(navRef.current.children).forEach((item) => {
      if (item.dataset.targetid) {
        observer.observe(item);
      }
    });
    return () => observer.disconnect();
  }, []);
  const [show, hide] = useState(true)
  // useMemo(() => {
  //   if (Object.values(visibilityMap).some((v) => v === false)) {
  //     hide(true)
  //   } else {
  //     hide(false)
  //   }
  // }, [visibilityMap])
  return (
    <div className={styles.toolbarWrapper} ref={navRef}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          className: classnames(child.props.className, {
            [styles.visible]: !!visibilityMap[child.props["data-targetid"]],
            [styles.inVisible]: !visibilityMap[child.props["data-targetid"]]
          }),
        });
      })}
      {
        show &&

        <OverflowMenu
          visibilityMap={visibilityMap}
          className={styles.overflowStyle}
        >
          {children}
        </OverflowMenu>}
    </div>
  );
}
