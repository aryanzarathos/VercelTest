import React from "react";
import styles from "./addNewElement.module.scss";

const AddNewElement = ({ onClick, title, Layout }) => {
  return (
    <React.Fragment>
      {Layout ? (
        <button type="button" className={styles.uploadMedia} onClick={onClick}>
          <i className={`${styles.uploadIcon}`}></i>
          {title ? title : ""}
        </button>
      ) : (
        <div className={styles.addNewContainer}>
          <div className={styles.foodmenuWrapper}>
            <button
              type="button"
              className={styles.drapbutton}
              onClick={onClick}
            >
              <i className={`${styles.iconPlusAdd}`}></i>
              {title ? title : ""}
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AddNewElement;
