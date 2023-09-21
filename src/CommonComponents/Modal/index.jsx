import { bool } from "prop-types";
import React, { forwardRef, useEffect, useState } from "react";
import styles from "./modal.module.scss";

// eslint-disable-next-line react/display-name
const Modal = forwardRef(({ children, ModalSize, className, show }, ref) => {
  const [modalState, setModalState] = useState(false);
  const closeModalState = () => {
    setModalState(!modalState);
  };
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
      }
    };
    window.addEventListener("keydown", close);
  }, []);
  useEffect(() => {
    if (show) {
      document.body.classList.add('avoidscroll');
    }
    return () => {
      document.body.classList.remove('avoidscroll');
    };
  }, [show]);
  return (
    <React.Fragment>
      <div
        className={`${styles.modal} ${show ? `${styles.modalShowingTrue}` : `${styles.modalShowingFalse}`
          } ${className}`}
        ref={ref}
      >
        <div className={`${styles.modalwrapper} ${styles[`${ModalSize}`]}`}>{children}</div>
      </div>
    </React.Fragment>
  );
});

Modal.defaultProps = {
  show: false,
};
Modal.propTypes = {
  show: bool,
};

export default Modal;
