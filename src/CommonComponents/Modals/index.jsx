import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom';
// import { isBrowser } from '../../CommonFunctions/isBrowser';
import styles from "./Modals.module.scss";
import { useDispatch } from 'react-redux';
import { MODAL_STATE } from '../../store/reducers/commonStates';

export function Modals({ children, fade = true, defaultOpened = false, ModalsSize, slide, Position, ClosePopUp, ClassName, wrapperClass }, ref) {
  const modalElement = useRef(null)
  const [isOpen, setIsOpen] = useState(defaultOpened)
  const dispatch = useDispatch()
  const close = useCallback(() => {

    dispatch(MODAL_STATE(false))
    setIsOpen(false)
  }, [dispatch]);


  const closePopupModal = () => {
    ClosePopUp()
    close()
    dispatch(MODAL_STATE(false))
  }
  const handleOpen = () => {
    setIsOpen(true)
    dispatch(MODAL_STATE(true))
  }
  useImperativeHandle(ref, () => ({
    ...ref.current,
    isOpen: isOpen,
    open: () => handleOpen(),
    close
  }), [close, isOpen])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  const onTop = () => {
    window.scrollTo(0, 0);
  }
  const manageBodyScroll = () => {
    if (isOpen === true) {
      document.body.classList.add('avoidscroll');
      window.onpopstate = function () {
        window.history.go(0);
        manageBrowserBtn()
        close();
        onTop()
      };
    }
    else {
      document.body.classList.remove('avoidscroll');
    }
  }
  const manageBrowserBtn = () => {
    // if (history.action === 'POP') {
    //   close()
    // }
    if (ref?.current?.isOpen) {
      window.history.pushState(null, null, window.location.href);
    }
  }
  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    manageBodyScroll()

    manageBrowserBtn()
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])


  useEffect(() => {
    modalElement.current = document.getElementById('root');
  }, [])

  return modalElement?.current ? createPortal(
    isOpen ? (
      <div className={`${styles.EdneedModals}  ${fade ? `${styles.modalsFade}` : ''} ${styles[`${Position}`]}`}>
        <div className={styles.ModalsOverlay} onClick={closePopupModal}></div>
        <div className={`${styles.ModalsWrapper}  ${styles[`${ModalsSize}`]} ${wrapperClass}`}>
          <div className={`${styles.ModalsContent} ${ClassName} `}>
            <div className={styles.ModalsClose} role="button" aria-label="close" onClick={closePopupModal}>
              <i className={styles.modalsCancelIcon}></i>
            </div>
            {children}
          </div>
        </div>
      </div>
    ) : null,
    modalElement?.current
  ) : null
}

export default forwardRef(Modals)