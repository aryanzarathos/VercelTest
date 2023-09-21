import React from "react";
import FormInput from "../../../../../../CommonComponents/Form/FormInput";
import styles from "./WebsiteType.module.scss";

const WebSiteType = (props) => {
  const { value } = props;
  return (
    <div className={`${styles.mainWebsiteType}`}>
      {/*  use this class for show active ${styles.active} in main div */}
      <FormInput
        type="radio"
        className={styles.mainWebsiteType__radio}
        name={"website"}
      />
      <div className={styles.mainWebsiteType__img}>{value?.image}</div>
      <div className={styles.mainWebsiteType__content}>
        <h3 className={styles.mainWebsiteType__content__heading}>
          {value?.heading}
        </h3>
        <p className={styles.mainWebsiteType__content__para}>
          {value?.paragraph}
        </p>
      </div>
    </div>
  );
};
export default WebSiteType;
