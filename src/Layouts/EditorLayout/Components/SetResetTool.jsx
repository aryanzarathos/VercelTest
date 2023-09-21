import React, { useRef } from 'react'
// import AppLink from '../../../../Common/AppLink';
// import { useDetectOutsideClick } from "../../../../Common/DetectOutsideClick/useDetectOutsideClick";
import styles from "../header.module.scss";
import UndoIcon from "../../../Assets/SiteEditor/Icons/undo-icon.svg";
import RedoIcon from "../../../Assets/SiteEditor/Icons/redo-icon.svg";
import ResetIcon from "../../../Assets/SiteEditor/Icons/reset-icon.svg";

const SetResetTool = () => {
  return (
    <React.Fragment>
      <div className={styles.SetResetGroupButton}>
        <button type="button" className={`${styles.SetResetButton} ${styles.Active}`}>
          <UndoIcon src={UndoIcon} alt="Desktop" />
        </button>
        <button type="button" className={`${styles.SetResetButton}`}>
          <RedoIcon src={RedoIcon} alt="Desktop" />
        </button>
        <button type="button" className={`${styles.SetResetButton}`}>
          <ResetIcon src={ResetIcon} alt="Desktop" />
        </button>
      </div>
    </React.Fragment>
  )
}

export default SetResetTool