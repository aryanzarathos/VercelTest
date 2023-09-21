import React from 'react'
import Modals from '@/CommonComponents/Modals';
import ModalsHeader from "../../../../../CommonComponents/Modals/ModalsHeader";
import ModalsBody from "../../../../../CommonComponents/Modals/ModalsBody";
import styles from "./thankYouPopUp.module.scss";
import Link from 'next/link';

const ThankYouPopUp = ({ thankRef, closeThankYouPopUp }) => {
    const closeModal = () => {
        closeThankYouPopUp();
    }
    return (
        <>
            <Modals
                ref={thankRef}
                Position="center"
                ClosePopUp={() => closeModal()}
                ModalsSize={"modalS"}
            >
                <ModalsHeader title='Connect Custom Domain' />
                <ModalsBody className={styles.modalBodyContent}>
                    <h4 className={styles.thankYoucontent}><span>Thank You</span>
                        <br />for submitting your Request</h4>
                    <p className={styles.thankYoucontentP}>
                        Our team will be in touch shortly
                    </p>
                    <button className={styles.closeBtn} onClick={closeModal}>
                        Close
                    </button>
                </ModalsBody>
            </Modals >
        </>
    )
}

export default ThankYouPopUp
