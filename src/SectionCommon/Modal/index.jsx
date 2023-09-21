import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback, useRef } from 'react'
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import CloseIcon from "./closeIcon.svg"

const ModalWrapped = styled.div`
width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  position: fixed;
  // overflow-y: auto;
  // overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 999999;
  box-sizing: border-box;


  &.modals-fade {
    animation: fade-in 1s 1 linear;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes fade-in {
    0% {
      animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const ModalOverlay = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 1080;
`;
const ModalInnner = styled.div`
position: relative;
    border-radius: 8px 0 0 8px;
    width: auto;
    padding: 24px 0;
    display: flex;
    align-items: center;
    min-height: 100%;
    // z-index: 1080;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width:768px) {
      padding: 0;
    }
    .ModalsContent{
      color: #c3c0c0;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1085;

    &.slide-left {
      animation: 1.5s slide-left;
    }

    @keyframes slide-left {
      from {
        margin-right: -100%;
      }

      to {
        margin-left: auto;
      }
    }

    &.slide-top {
      animation: 1.5s slide-top;
    }

    @keyframes slide-top {
      from {
        margin-top: -100%;
      }

      to {
        margin-bottom: auto;
      }
    }



  }

  &.modal-full {
    width: 100%;
  }

  &.modal-xxl {
    width: 90%;
  }

  &.modal-xl {
    width: 80%;
     @media (max-width:767px) {
      width:100%
    }
  }

  &.modal-l {
    width: 60%;
  }

  &.modal-m {
    width: 50%;
     @media (max-width:991px) {
      width:70%
    }
    @media (max-width:767px) {
      width:100%
    }
  }

  &.modal-s {
    width: 40%;
    @media screen and (max-width:992px) {
      width: 70%;
    }
    @media screen and (max-width:768px) {
      width: 100%;
    }
  }

  &.modal-xs {
    width: 30%;
    @media screen and (max-width:992px) {
      width: 70%;
    }
    @media screen and (max-width:768px) {
      width: 100%;
    }
  }
`;
const ModalContent = styled.div`
color: #c3c0c0;
width: 100%;
background-color: #fff;
box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
display: flex;
flex-direction: column;
position: relative;
z-index: 1085;
border-radius: 8px;
@media screen and (max-width:768px) {
  border-radius: 0px;
}
&.slide-left {
animation: 1.5s slide-left;
}

@keyframes slide-left {
from {
  margin-right: -100%;
}

to {
  margin-left: auto;
}
}

&.slide-top {
animation: 1.5s slide-top;
}

@keyframes slide-top {
from {
  margin-top: -100%;
}

to {
  margin-bottom: auto;
}
}
`;
const ModalClose = styled.div`
position: absolute;
    right: 18px;
    top: 18px;
    color: black;
    cursor: pointer;
        z-index: 99;
    .modals-cancel-icon {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(5, 1));
      width: 22px;
      height: 22px;
      background-color: transparent;
      border-radius: 50%;

      &:hover {
        &::after,
        &::before {
        background:#000;
      }
    }
      &::after,
      &::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 18px;
        height: 2px;
        background: #202020;
        transform: rotate(45deg);
        border-radius: 5px;
        top: 10px;
        left: 5px
      }

      &::after {
        transform: rotate(-45deg)
      }
    }
`;

export function Modal({ children, fade = true, defaultOpened = false, ModalsSize, slide, Position, ClosePopUp, ClassName }, ref) {
  // //// console.log(ref,"line 214")

  const modalElement = useRef(null)
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => setIsOpen(false), [])

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  //// console.log(ref,"line 226")
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
      // window.history.pushState(null, null, window.location.href);
    }
    // window.history.pushState(null, null, window.location.href);
  }
  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    manageBodyScroll()
    manageBrowserBtn()
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [isOpen])

  useEffect(() => {
    modalElement.current = document.getElementById('root');
  }, [])
  return modalElement?.current ? createPortal(
    isOpen ? (
      // <ModalWTC className={fade ? 'modal-fade-wtc' : ''}>
      //   <ModalOverlayWtc onClick={close} />
      //   <ModalCloseWtc role="button" aria-label="close" onClick={close}>
      //     <i className="close-icon"></i> Close
      //   </ModalCloseWtc>
      //   <ModalWrapperWtc className={`${ModalSize} ${fade ? 'slide-left' : ''}`}>{children}</ModalWrapperWtc>
      // </ModalWTC>

      <ModalWrapped className={` ${fade ? 'modals-fade' : ''} ${Position}`}>
        <ModalOverlay onClick={close}></ModalOverlay>
        <ModalInnner className={`${ModalsSize ? ModalsSize : "modal-m"}`}>
          <ModalContent className={` ${ClassName} ${fade ? `slide-${slide ? slide : ''}` : ""}`}>
            <ModalClose className="" role="button" aria-label="close" onClick={close}>
              <i className="modals-cancel-icon"></i>
            </ModalClose>
            {children}
          </ModalContent>
        </ModalInnner>
      </ModalWrapped>
    ) : null,
    modalElement?.current
  ) : null

}

export default forwardRef(Modal)