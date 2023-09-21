import React from "react";
import styles from "./modal.module.scss";

const ModalFooter = ({ children, className }) => {
  return <div className={`${styles.modalFooter} ${className}`}>{children}</div>;
};

export default ModalFooter;
