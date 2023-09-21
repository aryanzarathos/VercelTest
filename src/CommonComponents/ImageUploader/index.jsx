import React, { forwardRef } from 'react';
import { useState } from 'react';
import styles from './imageUploader.module.scss';
import Modals from '../Modals';
import ModalsBody from '../Modals/ModalsBody';
import ModalsHeader from '../Modals/ModalsHeader';
import Tabs from './Tabs/Tabs';
import UploadSection from './UploadSection/UploadSection';
import MyFiles from './MyFiles';
import ModalsFooter from '../Modals/ModalsFooter';


const Uploader = forwardRef(({ onclose, multiSelect, discartRef, onUploaded, search, uploadLimit, size, accept, validationProp }) => {
  const closeModal = () => {
    onclose();
  }
  const [toggleState, setToggleState] = useState(1);
  const handleToggleState = (index) => {
    setToggleState(index);
  }
  const onUpload = (value) => {
    onUploaded(value)
  }
  return (
    <React.Fragment>
      <Modals ref={discartRef} Position="center" slide="top" ClosePopUp={() => closeModal()} ModalsSize={'modalL'} className={styles.modalWidth}>
        <ModalsHeader title={'Choose Images'} />
        <ModalsBody className={styles.uploadImageModalBody}>
          <div className={styles.uploadimagepopContainer}>
            <div className={styles.tabContainer}>
              {/* tab components */}
              <Tabs toggleState={toggleState} handleToggleState={handleToggleState} />
              <div className={styles.tabContentDiv}>
                <UploadSection size={size} accept={accept} validationProp={validationProp} toggleState={toggleState} onUpload={onUpload} multiSelect={multiSelect} discartRef={discartRef} searchTerm={search} uploadLimit={uploadLimit} />
                {/* <MyFiles /> */}
              </div>
            </div>
          </div>
        </ModalsBody>
      </Modals>
    </React.Fragment>
  )
})
Uploader.displayName = "Uploader"

export default Uploader