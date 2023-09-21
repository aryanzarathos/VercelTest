import React from 'react'
import { SubmitSection1, SubmitSection1LT, SubmitSection1RT, SubmitSection1RTContent } from './ContactUsTheme1.style';
// import ImageElement from '../../../SectionsLayout/Elements/ImageElement/ImageElement';
// import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import Button from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import ContactUsEditor from '@/CommonComponents/ContactUsEditor';
import EditorRenderComponent from '@/CommonComponents/ContactUsEditor/EditorRenderComponent';
import { MyContactContext } from '../MyContactContext';
// import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import OPTPForm from '@/SectionCommon/OPTPForm/OTPForm';
import Modal from '@/SectionCommon/Modal';
import ModalBody from '@/SectionCommon/Modal/ModalBody';
import useContactUsVariationHook from '@/TemplateCustomHooks/useContactUsVariationHook';
// const ContactUsEditor = dynamic(()=> import("@/CommonComponents/ContactUsEditor"))
// import DefaultContactImg from '../../../Assets/SectionComponent/Images/ContactUs/Rectangle1425.png'

const ContactTheme1 = ({ children }) => {
  let data = children;
  let style = {
    SubmitSection1: data.custom_section_editable[0].style,
    SubmitSection1LT: data.custom_section_editable[1].style,
    SubmitSection1LTImage: data.custom_section_editable[2].style,
    SubmitSection1RT: data.custom_section_editable[3].style,
    SubmitSection1RTH1: data.custom_section_editable[4].style,
    SubmitSection1RTP: data.custom_section_editable[5].style,
    SubmitSection1RTContent: data.custom_section_editable[6].style,
    FormContent: data.custom_section_editable[7].style,
    FormContentLabel: data.custom_section_editable[8].style,
    FormContentInput: data.custom_section_editable[9].style,
    FeedText: data.custom_section_editable[10].style,
    SubmitBtn: data.custom_section_editable[11].style,
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
        <SubmitSection1 item={style.SubmitSection1}>
          {/* <SubmitSection1LT item={style.SubmitSection1LT}>

            <ImageElement src={data?.data[0]?.image}
              alt={data?.data[0]?.image?.alt}
              style={style.SubmitSection1LTImage}
              defaultImage={DefaultContactImg}
            />
          </SubmitSection1LT> */}
          <SubmitSection1RT item={style.SubmitSection1RT}>
            {/* <SubmitSection1RTContent item={style.SubmitSection1RTContent}>

              <Text tagType={data.custom_section_editable[4].tagType} style={style.SubmitSection1RTH1}
                text={data.custom_section_editable[4].text} />
              <Text tagType={data.custom_section_editable[5].tagType} style={style.SubmitSection1RTP}
                text={data.custom_section_editable[5].text} />
            </SubmitSection1RTContent> */}

            <ContactUsEditor>
              {
                contactFormData && contactFormData?.contact_form?.filter((item) => item.show === true).map((item, key) => {
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
                <Button text={"Loading..."} style={style.SubmitBtn} />
              ) : (
                <Button onClick={() => HandleSubmit()} text={data.custom_section_editable[11].text} style={style.SubmitBtn} />
              )
            }

          </SubmitSection1RT>
        </SubmitSection1>
        <Modal ref={popUpHandle} Position={"center"} slide={"top"} ClosePopUp={() => closeModal()} ModalsSize={`modal-xs`}
        >
          <ModalBody>

            <OPTPForm verifyState={verifyState?.isEmail ? "email" : "contact"} contact={verifyState?.value}
              email={verifyState?.value}
              formFields={contactFormData.contact_form}
              countryCode={verifyState?.country_code} flowType={"ContactUs"}
              cancelOTPPopup={closeModal}
              style1={style}
              buisnessContactForm={contactFormData._id} />
          </ModalBody>
        </Modal>
      </MyContactContext.Provider>
    </>
  )
}

export default ContactTheme1
