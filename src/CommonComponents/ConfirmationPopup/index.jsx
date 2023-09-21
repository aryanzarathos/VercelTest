import React, { forwardRef } from 'react'
import styles from "./ConfirmationPopup.module.scss"
import Modals from '../Modals'
import ModalBody from '../Modals/ModalsBody'

const ConfirmationPopup = forwardRef(({ onclose, confirmDeleteItem, title, subTitle, buttonTitle1, buttonTitle2 }, ref) => {

    // const dispatch = useDispatch()

    const ModalClosehandle = () => {
        onclose()
    }

    return (
        <Modals ref={ref} ModalsSize={`modalXS`} Position="center" ClosePopUp={ModalClosehandle} ClassName="">
            <ModalBody className={styles.DeletePopupBody}>
                <h5>{title && title}</h5>
                <p>{subTitle && subTitle}</p>
                <div className={styles.button_group}>
                    <button onClick={ModalClosehandle}>{buttonTitle1 && buttonTitle1}</button>
                    <button onClick={confirmDeleteItem}>{buttonTitle2 && buttonTitle2}</button>
                </div>
            </ModalBody>
        </Modals>
    )
})
ConfirmationPopup.displayName = "ConfirmationPopup"

export default ConfirmationPopup