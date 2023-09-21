import React, { forwardRef } from 'react'
import Modal from '../../../../../SectionCommon/Modal'
import ModalBody from '../../../../../SectionCommon/Modal/ModalBody'
import ModalHeader from '../../../../../SectionCommon/Modal/ModalHeader'
import CancelBookingPopUp from '../CancelBookingPopUp.jsx'
import styles from './MyBookingPopUp.module.scss';
const MyBookingPopUp = ({ ModalsRef, onClose }) => {
    const closeModal = () => {
        onClose();
    };
    return (
        <Modal ClassName={styles.MyBookingWrapperPopupModal} ref={ModalsRef}
            ClosePopUp={() => closeModal()} Position={'center'} ModalsSize={window.innerWidth > "767" ? 'modal-s' : "modal-xxl"} >
            <ModalHeader title={false ? 'Cancel booking' : 'Reschedule booking'} className={styles.BookingModalHeader} />
            <ModalBody className={'MyBookingWrapper-popup-body'}>
                <CancelBookingPopUp />
            </ModalBody>
        </Modal>
    )
}

export default MyBookingPopUp
