import React from "react";
import styles from "./Dialog.module.scss";

const DialogBody = ({ children, bodyClass }) => {
  return <div className={`${styles.DialogBody} ${bodyClass}`}>{children}</div>;
};

export default DialogBody;
