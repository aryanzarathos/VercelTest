import React, { useState } from 'react'
import styles from "./MessageToastEblousente.module.scss"
import { useSelector } from 'react-redux'

const MessageToastEblousente = () => {
    const success = useSelector(state => state.successmessagepopup)
    return (
        <div className={styles.messageToastContainer}>
            {success?.showToast &&
                <div className={`${styles.toastWrap} `}>
                    <p className={`${styles.toastParaText} text-xxs w-500`}>{success?.message}</p>
                </div>
            }
        </div>
    )
}

export default MessageToastEblousente