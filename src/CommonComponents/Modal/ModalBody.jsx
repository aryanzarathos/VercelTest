import React from "react";
import styles from "./modal.module.scss";

const ModalBody = ({ children, className }) => {
  return <div className={`${styles.modalbody} ${className}`}>{children}</div>;
};

export default ModalBody;
