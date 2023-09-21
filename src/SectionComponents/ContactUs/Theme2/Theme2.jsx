import React from 'react'
// import image2 from "../../../Assets/SectionComponent/Images/ContactUs/Rectangle1436.png";
// import Image from 'next/image';
import { Email, FeedText, FirstName, H1, Input, InputMobEmail, InputName, JustSendSection, JustSendSectionLT, JustSendSectionRT, Label, MapInnerImg, MobNumber, SecondName, TextArea } from './ContactUsTheme2.style';
import ButtonElement from '@/SectionsLayout/Elements/ButtonElement/ButtonElement';
import useContactUsVariationHook from '@/TemplateCustomHooks/useContactUsVariationHook';
import ContactUsEditor from '@/CommonComponents/ContactUsEditor';
import EditorRenderComponent from '@/CommonComponents/ContactUsEditor/EditorRenderComponent';
import { MyContactContext } from '../MyContactContext';
import Modal from '@/SectionCommon/Modal';
import ModalBody from '@/SectionCommon/Modal/ModalBody';
import OPTPForm from '@/SectionCommon/OPTPForm/OTPForm';

const ContactTheme2 = ({ children }) => {
  const data = children;
  let style = {
    JustSendSection: data?.custom_section_editable[0]?.style,
    JustSendBtn: data?.custom_section_editable[1]
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
        <JustSendSection item={style?.JustSendSection}>
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
              <ButtonElement text={"Loading..."} style={style?.JustSendBtn?.style} />
            ) : (
              <ButtonElement onClick={() => HandleSubmit()} style={style?.JustSendBtn?.style} text={style?.JustSendBtn?.text} />
            )
          }
        </JustSendSection>
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

export default ContactTheme2

