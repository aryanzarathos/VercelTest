import React from "react";
import styles from "./Modals.module.scss";

const ModalsFooter = ({ children, className }) => {
  return <div className={`${styles.ModalsFooter} ${className}`}>{children}</div>;
};

export default ModalsFooter;
