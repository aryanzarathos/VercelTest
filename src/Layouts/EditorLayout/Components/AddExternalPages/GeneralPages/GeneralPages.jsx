import React, { useRef } from 'react'
import styles from './GeneralPages.module.scss';
import Image from 'next/image';
import template1 from './Images/template1.png'
import template2 from './Images/template2.png'
import template3 from './Images/template3.png'
import Mix from './Images/mix.png'
import Modal from '../../../../../CommonComponents/Modals/index';
import ModalBody from '../../../../../CommonComponents/Modals/ModalsBody';
import GeneralPagesModal from './GeneralPagesModal'
import { useState } from 'react'
const GeneralPages = () => {
  const data = [
    {
      id: 1,
      img: template1,
      desc: 'About us'
    },
    {
      id: 2,
      img: template2,
      desc: 'Textual'
    },
    {
      id: 3,
      img: template3,
      desc: 'Image Centric '
    },
    {
      id: 4,
      img: template1,
      desc: 'About us'
    },
    {
      id: 5,
      img: template2,
      desc: 'Textual'
    },
    {
      id: 6,
      img: template3,
      desc: 'Image Centric '
    },
  ]

  const popUpHandle = useRef(null)

  const [img, setImg] = useState();

  const handleClick = (index) => {
    popUpHandle.current.open()
    setImg(index)
  }

  const closeModal = () => {
    popUpHandle.current.close();
  }

  return (
    <div className={styles.DynamicSection}>
      <div className={styles.generalpagesContainer}>
        <div className={styles.generalpagesWrap}>
          <div className={styles.headingTextWrapper}>
            <h1 className={`${styles.headingPara} w-500 text-s`}>Use these basic layout for any page</h1>
            <p className={`${styles.headingDesc} w-400 text-xxs mt-5`}>Select any page and customize it by changing the text, images amd more</p>
          </div>

          <div className={styles.templateWrapper}>
            {data.map((e, index) => {
              return (
                <div className={styles.templateWrap} key={index}>
                <div className={styles.imgWrap}>
                  <Image src={e.img} alt="template-img" />
                  <div className={`${styles.overlay} ${styles.active}`}>
                    <button className={styles.previewBtn} onClick={() => { handleClick(e.img) }}>Preview</button>
                    <button className={styles.addBtn}>Add Page</button>
                  </div>
                </div>
                <p className={`${styles.templateDesc} w-300 text-2xs`} >{e.desc}</p>
                <GeneralPagesModal popUpHandle={popUpHandle} closeModal={closeModal} data={img} />
                {/* <div className="popup-wrapper">
                  <Modal ref={popUpHandle} ClosePopUp={() => closeModal()} ModalsSize={"modal-xl"} ClassName={'popup-wrap'} Position={'general-pages-popup'}>
                    <button className='popup-add-btn w-500 text-2xs'>Add Page</button>
                    <ModalBody>
                      <div className="img-wrap">
                        <img src={img} alt='Popup-img' />
                      </div>
                    </ModalBody>
                  </Modal>
                </div> */}
              </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>

  )
}

export default GeneralPages
