import React from 'react'
import styles from "./Faq.module.scss"

const ToastEditDelete = ({ handleDelete, handleEdit }) => {
    return (
        <div className={styles.Toast_Delete_Edit_Container}>
            <div className={styles.edit_wrap} onClick={handleEdit}><i className={styles.edit_icon}  /><p>Edit</p></div>
            <div className={styles.delete_wrap} onClick={handleDelete}><i className={styles.delete_icon}  /><p>Delete</p></div>
        </div>
    )
}

export default ToastEditDelete