import React, { useRef } from 'react'
import template1 from './Images/template1.png'
import template2 from './Images/template2.png'
// import Mix from './Images/mix.png'
// import Modal from '../../../../../../Common/Modals';
// import ModalBody from '../../../../../../Common/Modals/ModalsBody';
import { useState } from 'react';
import GeneralPagesModal from '../GeneralPages/GeneralPagesModal';
import styles from "./dynamicSection.module.scss";
import Image from 'next/image';

const DynamicSection = () => {

  const data = [
    {
      id: 1,
      img: template1,
      // desc: 'About us'
    },
    {
      id: 2,
      img: template2,
      // desc: 'Textual'
    },

    {
      id: 4,
      img: template1,
      // desc: 'About us'
    },
    {
      id: 5,
      img: template2,
      // desc: 'Textual'
    },

  ]

  const popUpHandle = useRef(null)

  const [img, setImg] = useState()
  const handleAddAddress = (index) => {
    popUpHandle.current.open()
    setImg(index)
  }
  const handleClosepopup = () => {
    popUpHandle.current.close();

  }

  const closeModal = () => {
    handleClosepopup();
  }
  return (
    <div className={styles.DynamicSection}>
      <div className={styles.DynamicContainer}>
        <div className={styles.generalpagesWrap}>
          <div className={styles.headingTextWrapper}>
            <h1 className={`${styles.headingpara} w-500 text-s`}>Use these basic layout for any page</h1>
            <p className={`${styles.headingDesc} w-400 text-xxs mt-5`}>All the pages & tools you need to run a shop will be added to the editor</p>
          </div>

          <div className={styles.tempWrapper}>
            {data.map((e, index) => {
              return (
                <React.Fragment key={index}>
                  <div className={styles.templateWrap} key={index}>
                    <div className={styles.imgWrap}>
                      <Image src={e.img} alt="template-img" />
                      <div className={`${styles.overlay} ${styles.active}`}>
                        <button className='preview-btn' onClick={() => { handleAddAddress(e.img) }}>Preview</button>
                        <button className='add-btn'>Add Page</button>
                      </div>
                    </div>
                    <p className='template-desc w-300 text-2xs' >{e.desc}</p>
                    <GeneralPagesModal popUpHandle={popUpHandle} closeModal={closeModal} data={img} />

                  </div>
                </React.Fragment>
              )
            })}
          </div>

        </div>


      </div>

    </div>
  );
}

export default DynamicSection