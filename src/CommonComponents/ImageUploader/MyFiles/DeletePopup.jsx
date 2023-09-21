import React, { forwardRef } from "react";
import styles from "./myFiles.module.scss";
// eslint-disable-next-line react/display-name
const DeletePopup = forwardRef(({ loading, handleDelete, cancel }, ref) => {
  return (

    <div className={styles.deletePopContainerAdmin} ref={ref}>
      <div className={styles.DialogOverlay} onClick={cancel}></div>
      <div className={styles.trueThemepopWrapAdmin}>
        <div className={styles.deleteContent}>
          {
            // <button className={styles.cancelBtn} onClick={() => cancel()}><i className='ed-icon i-xs  icon-cross' ></i></button>
          }
          <p className={`${styles.deletepop} text-center`}> {"Delete Confirmation"}</p>
          <p className={styles.deletePara}>
            {" Are you sure you want to delete the files permanently? The deleted files will not appear on your site anymore. It may take 3-4 days to reflect on your site."}
          </p>
        </div>
        <div className={styles.deletePopBtnWrapper}>
          <button className={styles.buttonpop} onClick={() => cancel()} >Cancel</button>
          {
            loading ? (
              <button className={`${styles.buttonpop}  ${styles.btnDelete}`}>{"Deleting..."}  </button>
            ) : (
              <button className={styles.buttonpop} onClick={() => handleDelete()}>Delete</button>
            )
          }
        </div>
      </div>
    </div>

  )
})
export default DeletePopup