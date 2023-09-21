import React from 'react';
import { ContactButton, H1, Input, SubmitSection2, SubmitSection2InnerImg, SubmitSection2LT, SubmitSection2RT, TextArea } from './ContactUsTheme3.style';
import ButtonElement from "../../../SectionsLayout/Elements/ButtonElement/ButtonElement";
import ContactUsEditor from '@/CommonComponents/ContactUsEditor';
import useContactUsVariationHook from '@/TemplateCustomHooks/useContactUsVariationHook';
import EditorRenderComponent from '@/CommonComponents/ContactUsEditor/EditorRenderComponent';
import { MyContactContext } from '../MyContactContext';
import Modal from '@/SectionCommon/Modal';
import ModalBody from '@/SectionCommon/Modal/ModalBody';
import OPTPForm from '@/SectionCommon/OPTPForm/OTPForm';
const ContactTheme3 = ({ children }) => {
  const data = children;

  const styles = {
    SubmitSection2: data?.custom_section_editable[0]?.style,
    ContactBtn: data?.custom_section_editable[1]
  }
  const [contactFormData,
    verifyState,
    loading,
    submit,
    popUpHandle,
    setContactFormData,
    HandleOnChange,
    handleSelect,
    HandleSubmit,
    closeModal] = useContactUsVariationHook(data)
  return (
    <>
      <MyContactContext.Provider value={{ contactFormData, setContactFormData }}>
        <SubmitSection2 item={styles?.SubmitSection2}>
          <ContactUsEditor>
            {
              contactFormData && contactFormData.contact_form.filter((item) => item.show === true).map((item, key) => {
                return (
                  <React.Fragment key={key}>
  
                    {typeof EditorRenderComponent[item.componentRender] !== "undefined" && React.createElement(EditorRenderComponent[item.componentRender], {
                      id: key,
                      HandleOnChange: (val, country_code) => HandleOnChange(val, country_code, key, item),
                      labelClass: "",
                      label: item.label,
                      placeholder: item.placeholder,
                      checkBoxData: item.OptionData,
                      checkboxColor: item.Color,
                      value: item.value,
                      values: item.OptionData,
                      radioButtonData: item.OptionData,
                      country_code: item.country_code,
                      submit: submit,
                      ObjectData: item,
                      handleSelect: handleSelect,
                      styleAccess: "",
                      fullWidthChecked: item.fullWidthChecked,
                      deafultValue: item.placeholder,
                      dropDownCustom: true
                    }, null, {})}
                  </React.Fragment>
                )
              })
            }
          </ContactUsEditor>

          {
            loading ? (
              <ButtonElement text={"Loading..."} style={styles?.ContactBtn?.style} />
            ) : (
              <ButtonElement onClick={() => HandleSubmit()} style={styles?.ContactBtn?.style}
                text={styles?.ContactBtn?.text} />
            )
          }

        </SubmitSection2>
        <Modal ref={popUpHandle} Position={"center"} slide={"top"} ClosePopUp={() => closeModal()} ModalsSize={'modal-xs'}>
          <ModalBody>
            <OPTPForm verifyState={verifyState?.isEmail ? "email" : "contact"} contact={verifyState?.value}
              email={verifyState?.value}
              formFields={contactFormData.contact_form}
              countryCode={verifyState?.country_code} flowType={"ContactUs"}
              cancelOTPPopup={closeModal} />
          </ModalBody>
        </Modal>
      </MyContactContext.Provider>
    </>
  )
}

export default ContactTheme3
