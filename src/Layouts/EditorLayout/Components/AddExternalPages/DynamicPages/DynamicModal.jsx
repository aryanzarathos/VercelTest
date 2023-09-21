import React,{ useRef } from 'react'
import { Children } from 'react';
import Modal from '../../../../../CommonComponents/Modals';
import ModalBody from '../../../../../CommonComponents/Modals/ModalsBody';
import styles from "./dynamicSection.module.scss";


const DynamicModal = ({Children}) => {
    const popUpHandle = useRef(null)

    const handleClosepopup = ()=> {
    popUpHandle.current.close();

    }

    const closeModal = () => {
    handleClosepopup();
    }

  return (
    <div className='DynamicModal'>
         <Modal ref={popUpHandle} ClosePopUp={() => closeModal()} ModalsSize={"modal-xl"} ClassName={styles.popupWrap} Position={'dynamic-pages-popup'}>
            <button className='popup-add-btn w-500 text-2xs'>Add Page</button>
            <ModalBody>
                <div className="img-wrap">
                    {Children}
                </div>
            </ModalBody>
        </Modal>
    </div>
  )
}

export default DynamicModal