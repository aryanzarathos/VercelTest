import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import styles from "./messageToast.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { hideToast } from '@/store/actions/successmessagepopup';

const MessageToast = () => {

    const dispatch = useDispatch();
    const success = useSelector(state => state.successmessagepopup)

    const handleClose = useCallback(() => {
        dispatch(hideToast())
    }, [dispatch])

    useEffect(() => {
        if (success.showToast) {
            setTimeout(handleClose, 3000)
        }
    }, [success, handleClose])

    // const [success, setSuccess] = useState({
    //     toastType: "warning",
    //     showToast: true
    // })

    // const handleClose = () => {
    //     setSuccess({
    //         ...success,
    //         showToast: false
    //     })
    // }


    return (
        <div className={styles.messageToastContainer}>
            {success.showToast &&
                <div className={`${styles.toastWrap} ${success.toastType === "success" ? `${styles.successBorder}` : success.toastType === 'error' ? `${styles.errorBorder}` : success.toastType === "warning" ? `${styles.warningBorder}` : ''}`}>
                    <div className={styles.toastIcon}>
                        {
                            success.toastType === 'success' ? <i className={styles.iconSuccess}></i>
                                : success.toastType === 'error' ? <i className={styles.iconError}></i>
                                    : success.toastType === 'warning' ? <i className={styles.iconWarning}></i> : ''
                        }

                    </div>
                    <div className={styles.toastParaWrap}>
                        <p className={`${styles.toastParaText} text-2xs w-400`}>{success.message}</p>
                    </div>
                    <span className={styles.crossSpan} onClick={handleClose}>
                        <i className={styles.iconCross}></i>
                    </span>
                </div>
            } </div>

    )
}

export default MessageToast