import React from 'react'
import FormInput from '../../../../CommonComponents/Form/FormInput';
import Modals from '../../../../CommonComponents/Modals';
import ModalsBody from '../../../../CommonComponents/Modals/ModalsBody';
import ModalsHeader from '../../../../CommonComponents/Modals/ModalsHeader';
import styles from "./managePages.module.scss";

const DeletePages = ({ ModalsRef, onclose }) => {
  const closeModal = () => {
    onclose();
  }
  return (
    <Modals ClassName={styles.renamePageModals} ref={ModalsRef} Position="center" ClosePopUp={() => closeModal()} ModalsSize={'modalS'}>
      <ModalsHeader title="Are you sure to delete this Home page ?" />
      <ModalsBody className={styles.ModalBody}>
        <div className={`${styles.bodycontent} mb-40`}>
          <p>Please note that this is not reversible</p>
        </div>
        <div className={styles.bodyAction}>
          <button className="button btn-o-silver btn-xs">Cancel</button>
          <button className="button button-red btn-xs">Confirm</button>
        </div>
      </ModalsBody>
    </Modals>
  )
}

export default DeletePages