import React, { useState } from 'react';
import styles from "./CommonError.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { hideError } from '@/store/actions/commonerror';

const CommmonError = () => {

    const dispatch = useDispatch();

    const error = useSelector(state => state.commonerror)
    // const [isShowing, setIsShowing] = useState(false);

    const handleClose = () => {
        dispatch(hideError())
    }

    useEffect(() => {
        if (error.show) {
            setTimeout(() => {
                dispatch(hideError())
            }, 3000)
        }
    }, [dispatch, error])


    return (
        <>
            {
                error.show && (<div className={styles.alertPopupWrapper}>
                    <div className={styles.alertPopupWrap}>
                        <div className={`${styles.popupAlertBox} ${styles.error} ${styles.show}`}>
                            <div className={styles.alertBody}>
                                <div className={styles.alertIcon}></div>
                                <div className={styles.alertText}>
                                    <h4 className="text-sm w-300 red">{"Error"}</h4>
                                    <p className={`text-xxs w-400 ${styles.gray}`}>{error.message}</p>
                                </div>
                            </div>
                            <span className={`${styles.closeIconAlert} text-xxs ${styles.gray}`} onClick={() => handleClose()}>Close</span>
                        </div>
                    </div>
                </div>
                )
            }
        </>
    )
}

export default CommmonError