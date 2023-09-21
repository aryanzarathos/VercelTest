import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import styles from "./Lightbox.module.scss";
import ImageElement from "@/SectionsLayout/Elements/ImageElement/ImageElement";
import Image from "next/image";
const LightBox = forwardRef(({ ClosePopUp, src, fade, type }, ref) => {
  const modalElement = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const closePopupModal = () => {
    ClosePopUp();
    close();
    // dispatch(MODAL_STATE(false))
  };
  const handleOpen = () => {
    setIsOpen(true);
    // dispatch(MODAL_STATE(true))
  };
  useImperativeHandle(
    ref,
    () => ({
      isOpen: isOpen,
      open: () => handleOpen(),
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

  useEffect(() => {
    modalElement.current = document.getElementById("root");
  }, []);

  return modalElement?.current
    ? createPortal(
      isOpen ? (
        <div className={`${styles.EdneedModals}`}>
          <div
            className={styles.ModalsOverlay}
            onClick={closePopupModal}
          ></div>
          <div
            className={styles.ModalsClose}
            role="button"
            aria-label="close"
            onClick={closePopupModal}
          >
            <i className={styles.modalsCancelIcon}></i>
          </div>
          <div className={`${styles.ModalsWrapper}`}>
            <div className={`${styles.ModalsContent} `}>

              {type === "image" ? (
                <ImageElement src={src} height={20} width={20} />
              ) : type === "video" ? (
                <video
                  width="320"
                  height="240"
                  controls={true}
                  autoPlay={true}
                >
                  <source src={src.src} type="video/mp4" />
                  <source src={src.src} type="video/ogg" />
                </video>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : null,
      modalElement?.current
    )
    : null;
});
LightBox.displayName = "LightBox";
export default LightBox;
