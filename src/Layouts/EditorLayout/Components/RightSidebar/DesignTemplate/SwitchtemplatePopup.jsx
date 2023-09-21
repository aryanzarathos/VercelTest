import React from 'react';
import styled from 'styled-components';
import  Modals  from '../../../../../CommonComponents/Modals';
import ModalBody from '../../../../../CommonComponents/Modals/ModalsBody';
import ModalHeader from '../../../../../CommonComponents/Modals/ModalsHeader';

const ButtonGroupWrapper = styled.div`

`

const SwitchtemplatePopup = ({SwitchTemplateRef,onClose}) => {

    const CloseModal = () => {
        onClose()
    }
  return (
    <Modals ref={SwitchTemplateRef} ClosePopUp={CloseModal} Position="center" ModalsSize="modalS">
        <ModalHeader title="Save unsaved changes" />
        <ModalBody>
            <p className="text-xs base w-400 mb-50">You’ve made some changes. Are you sure want to discard them?</p>
            <ButtonGroupWrapper className="inline middle-xs end-xs">
                <button className="button btn-2xs btn-o-gray mr-10" onClick={CloseModal}>No</button>
                <button className="button btn-2xs button-primary"  onClick={CloseModal}>Save changes</button>
            </ButtonGroupWrapper>
        </ModalBody>
    </Modals>
  )
}

export default SwitchtemplatePopup