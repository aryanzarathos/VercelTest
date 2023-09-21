import React from 'react'
import FormInput from '../../../../CommonComponents/Form/FormInput';
import Modals from '../../../../CommonComponents/Modals';
import ModalsBody from '../../../../CommonComponents/Modals/ModalsBody';
import ModalsHeader from '../../../../CommonComponents/Modals/ModalsHeader';
import styles from "./managePages.module.scss";
import { useState } from 'react';
import ValidationFile from '../../../../Classes/ValidationFile';
import FormError from '../../../../CommonComponents/Form/FormError';

const RenamePages = ({ ModalsRef, onclose, addNewPage, btnName, title, defaultValue }) => {

  
  const [error, setError] = useState(false);
  const [pageName, setPageName] = useState(defaultValue || "");
const closeModal = () => {
    onclose();
    setPageName("")
    setError(false);
  }
  const handleInput = (e) => {
    setError(false)
    setPageName(e.target.value)
  }
  const handleSave = () => {
    if (ValidationFile.isNotEmpty(pageName)) {
      addNewPage(pageName)
      setPageName("")
    } else {
      setError(true)
    }
  }


  return (
    <Modals ref={ModalsRef} ClassName={styles.renamePageModals} Position="center" ClosePopUp={() => closeModal()} ModalsSize={'modalS'}>
      <ModalsHeader className={styles.ModalsHead} TitleClass={styles.heading} title={title || "Add a Blank Page"} />
      <ModalsBody className={styles.ModalBody}>
        <div className={styles.bodycontent}>
          <div className="formFieldwrap">
            <FormInput
              type="text"
              name="Full_Name"
              label="Page Name"
              placeholder="New Page"
              labelPosition="top"
              value={pageName}
              onChange={(e) => handleInput(e)}
              onKeyUp={(e) => handleInput(e)}
            />
            <FormError show={error && !pageName} error={"Page name required."} />
          </div>
        </div>
        <div className={styles.bodyAction}>
          <button className="button btn-o-silver btn-oval btn-xs" onClick={closeModal}>Cancel</button>
          <button className="button button-primary btn-oval btn-xs" onClick={handleSave}>{btnName || "Add Page"}</button>
        </div>
      </ModalsBody>
    </Modals>
  )
}

export default RenamePages