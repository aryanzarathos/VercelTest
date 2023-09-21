import React from "react";
import styles from "./Modals.module.scss";

const ModalBody = ({ children, className }) => {
  return <div className={`${styles.ModalsBody} ${className}`}>{children}</div>;
};

export default ModalBody;
