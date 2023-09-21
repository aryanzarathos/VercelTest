import React, { useState } from 'react'
import Modals from '@/CommonComponents/Modals';
import ModalsHeader from "../../Modals/ModalsHeader";
import ModalsBody from "../../Modals/ModalsBody";
import InputBox from '../InputBox/InputBox';
import { AddNewFromWrapper, CancelBtn, DoneBtn, DoneCancelBtn } from './AddNewFormPopUp.style';
import { useDispatch, useSelector } from 'react-redux';
// import FormError from '@/CommonComponents/Form/FormError';
import { submitContactCreate } from '@/store/actions/contactus';



const AddNewFormPopUp = ({ ModalsRef, onClose }) => {
    const dispatch = useDispatch();
    const { user, subdomainuser, business,businessOwner, contactLists, contactListsSuccess } = useSelector((state) => {
        return {
            user: state.user,
            subdomainuser: state.subdomainuser,
            business: state.websiteTemplate.getTemplate.data?.businessData,
            businessOwner: state.websiteTemplate.getTemplate.data,
            contactLists: state.contactus.getContactList.data,
            contactListsSuccess: state.contactus.getContactList.success,
        }
    })
    const closeModal = () => {
        onClose();
    }
    const [formName, setFormName] = useState("");
    const [error, showError] = useState(false);
    const [submit, setSubmit] = useState(false);

    const SubmitNewForm = () => {
        showError(false)
        setSubmit(false)
        if (formName) {
            let payload = {
                form_name: formName,
                owner: businessOwner.owner,
                business: business._id,
                contact_form: [
                    {
                        componentRender: "EditorFormInput",
                        title: "EMAIL",
                        placeholder: "Email",
                        label: "Email",
                        mandate: true,
                        show: true,
                        verify: true,
                        verified: false,
                        isEmail: true,
                        isDefault: true,
                        isValid: false,
                        value: "",
                    },
                    {
                        componentRender: "EditorPhoneInput",
                        title: "Phone Number",
                        placeholder: "Phone Number",
                        label: "Phone Number",
                        mandate: false,
                        show: true,
                        verify: false,
                        verified: false,
                        isPhoneNumber: true,
                        isDefault: true,
                        value: "",
                        country_code: "",
                        isValid: false,
                    }
                ]
            }
            dispatch(submitContactCreate(payload))
            closeModal()
            setFormName("")
        } else {
            showError(true)
            setSubmit(true)
        }
    }

    return (
        <Modals
            ref={ModalsRef}
            Position="center"
            ClosePopUp={() => closeModal()}
            ModalsSize={"modalS"}
        >
            <ModalsHeader title="Form" />
            <ModalsBody>
                <AddNewFromWrapper>
                    <InputBox label={"Form Name"} placeholder={"New Form"} toolTipText="Form Name is required"
                        placement={"top-right"} toolTipWrapperClass={"tooltipError"}
                        toolTipPosition={"changePosition"}
                        onChange={(e) => setFormName(e.target.value)}
                        value={formName}
                        error={submit && error && formName === ""}
                        toolTipDownClass={"changeDownArrowPosition"} />
                    {/* <FormError show={submit && error} error={"Form Name is required."} /> */}
                    <DoneCancelBtn>
                        <CancelBtn type="button" onClick={() => closeModal()}>
                            Cancel
                        </CancelBtn>
                        <DoneBtn type="button" onClick={() => SubmitNewForm()}>
                            Done
                        </DoneBtn>
                    </DoneCancelBtn>
                </AddNewFromWrapper>
            </ModalsBody>
        </Modals>
    )
}

export default AddNewFormPopUp
