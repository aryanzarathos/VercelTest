import Image from "next/image";
import React from "react";
import styles from "./PleaseWaitSection.module.scss";
import pleaseWait from "../../../../Assets/images/img/pleaseWait.png";

const PleaseWaitSection = () => {
  return (
    <div className={styles.mainWaitScreen}>
      <div className={styles.mainWaitScreen__image}>
        <Image src={pleaseWait} alt="pleaseWait" />
      </div>
      <p className={styles.mainWaitScreen__para}>
        Please wait while we create your site
      </p>
    </div>
  );
};

export default PleaseWaitSection;
