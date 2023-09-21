import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
} from "react";

import { createPortal } from "react-dom";
import styles from "./Drawer.module.scss";

const Drawer = ({ children, defaultOpened = false, CloseDrawer }, ref) => {
  const modalElement = document.getElementById("root");
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  const closePopupModal = () => {
    CloseDrawer();
    close();
  };

  useImperativeHandle(
    ref,
    () => ({
      isOpen: isOpen,
      open: () => setIsOpen(true),
      close,
    }),
    [close, isOpen]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  const onTop = () => {
    window.scrollTo(0, 0);
  };
  const manageBodyScroll = () => {
    if (isOpen === true) {
      document.body.classList.add("avoidscroll");
      window.onpopstate = function () {
        window.history.go(0);
        manageBrowserBtn();
        close();
        onTop();
      };
    } else {
      document.body.classList.remove("avoidscroll");
    }
  };
  const manageBrowserBtn = () => {
    // if (history.action === 'POP') {
    //   close()
    // }
    if (ref?.current?.isOpen) {
      window.history.pushState(null, null, window.location.href);
    }
  };
  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    manageBodyScroll();
    manageBrowserBtn();
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);
  return createPortal(
    isOpen ? (
      <div className={`${styles.mainDrawer} ${styles.active}`}>{children}</div>
    ) : null,
    modalElement
  );
};

export default forwardRef(Drawer);
