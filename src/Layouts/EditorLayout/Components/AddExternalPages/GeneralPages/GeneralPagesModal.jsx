import Image from 'next/image';
import React, { useRef } from 'react'
import Modal from '../../../../../CommonComponents/Modals';
import ModalBody from '../../../../../CommonComponents/Modals/ModalsBody';
import ModalsHeader from '../../../../../CommonComponents/Modals/ModalsHeader';
import styles from './GeneralPagesModal.module.scss';

const GeneralPagesModal = ({ closeModal, popUpHandle, data }) => {
    return (
        <div className={styles.popupWrapper}>
            <Modal ref={popUpHandle} ClosePopUp={() => closeModal()} ModalsSize={"modalS"} ClassName={`${styles.commanPopupWrap}`} Position={"top"}>
                <ModalsHeader className={styles.popupHeaderWrao}>
                    <button className={`${styles.popupAddBtn} w-500 text-2xs`}>Add Page</button>
                </ModalsHeader>
                <ModalBody>
                    <div className={styles.imgWrap}>
                        <Image src={data} alt='Popup-img' />
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default GeneralPagesModal
