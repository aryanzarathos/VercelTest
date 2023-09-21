import React from "react";
import styles from "./SocialAccountCard.module.scss";
import Image from "next/image";

const SocialAccount = (props) => {
  const { id, img, text, className } = props;
  return (
    <>
      <button className={`${styles.mainSocialAccount} ${className}`}>
        <div className={styles.mainSocialAccount__image}>{img}</div>
        <p className={styles.mainSocialAccount__text}>{text}</p>
      </button>
    </>
  );
};

export default SocialAccount;
