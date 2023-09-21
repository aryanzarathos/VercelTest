import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom';
import styles from "./Dialog.module.scss";

export function Dialog({ children, fade = true, defaultOpened = false, Footer, SaveButton, CancelButton, FooterClass, CancelButtonClass, CancelButtonName, SaveButtonClass, SaveButtonName, handleActionProp }, ref) {
  const modalElement = document.getElementById('root')
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => setIsOpen(false), [])
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

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
    window.history.pushState(null, null, window.location.href);
  }
  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    manageBodyScroll()
    manageBrowserBtn()
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  return createPortal(
    isOpen ? (
      <div className={`${styles.EdneedDialog} ${styles.Dialogfade}`}>
        <div className={styles.DialogOverlay} onClick={close} />
        <div className={`${styles.DialogWrapper} ${styles.fade}`}>
          {children}
          {Footer && <div className={`${styles.DialogFooter} ${FooterClass}`}>
            {CancelButton && <button type="button" className={`${CancelButtonClass ? CancelButtonClass : 'linkBtn btn-xs button-base'}`} onClick={close}>{CancelButtonName ? CancelButtonName : 'Cancel'}</button>}
            {SaveButton && <button type="button" className={`${SaveButtonClass ? SaveButtonClass : 'linkBtn btn-xs button-red'}`} onClick={() => handleActionProp()}>{SaveButtonName ? SaveButtonName : 'Confirm'}</button>}
          </div>}
        </div>
      </div>
    ) : null,
    modalElement
  )
}

export default forwardRef(Dialog)