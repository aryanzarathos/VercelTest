import React from 'react'
import FormInput from '../../../SectionCommon/Form/FormInput'
import FormTextArea from '../../../SectionCommon/Form/FormTextArea'
import PhoneSvgIcon from '../../../Assets/SectionComponent/Images/ContactUs/Icon/phone-icon.svg'
import MailSvgIcon from '../../../Assets/SectionComponent/Images/ContactUs/Icon/mail-icon.svg'
import LocationSvgIcon from '../../../Assets/SectionComponent/Images/ContactUs/Icon/location-icon.svg'
import { ContactusSubContainer, FormButton, IconOutline, MidLeftContainer, MidRightContainer, MidLeftList, MidRightContent, MidRightImg, IFrame, SubContainerTopContent, SubContainerTopHeading, SubMidContainer } from './ContactUsTheme6.style'
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import ButtonElement from '../../../SectionsLayout/Elements/ButtonElement/ButtonElement'
import { MyContactContext } from '../MyContactContext';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import OPTPForm from '@/SectionCommon/OPTPForm/OTPForm';
import Modal from '@/SectionCommon/Modal';
import ModalBody from '@/SectionCommon/Modal/ModalBody';
import EditorRenderComponent from '@/CommonComponents/ContactUsEditor/EditorRenderComponent';
import useContactUsVariationHook from '@/TemplateCustomHooks/useContactUsVariationHook';
import ContactUsEditor from '@/CommonComponents/ContactUsEditor'
const ContactTheme6 = ({ children }) => {
    let data = children;
    let style = {
        ContactusSubContainer: children.custom_section_editable[0].style,
        TopHeading: children.custom_section_editable[1],
        SubHeading: children.custom_section_editable[2],
        SubMidContainer: children.custom_section_editable[3].style,
        MidLeftContainer: children.custom_section_editable[4].style,
        MidLeftList: children.custom_section_editable[5].style,
        FormInput: children.custom_section_editable[6].style,
        FormButton: children.custom_section_editable[7],
        MidRightContainer: children.custom_section_editable[8],
        MidRightContent: children.custom_section_editable[9].style,
        IconOutline: children.custom_section_editable[10].style,
        SvgIcon: children.custom_section_editable[11].style.desktop,
        PhoneDetail: children.custom_section_editable[12],
        EmailDetail: children.custom_section_editable[13],
        AddressDetails: children.custom_section_editable[14],
        MidRightImg: children.custom_section_editable[15].style,
        IFrame: children.custom_section_editable[16].style,
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
                <ContactusSubContainer item={style.ContactusSubContainer}>
                    <SubMidContainer item={style.SubMidContainer}>
                        <MidLeftContainer item={style.MidLeftContainer}>
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
                                    <ButtonElement text={"Loading..."} style={style.FormButton.style} />
                                ) : (
                                    <ButtonElement onClick={() => HandleSubmit()} style={style.FormButton.style} text={style.FormButton.text} />
                                )
                            }
                            {/* <ButtonElement style={style.FormButton.style} text={style.FormButton.text} /> */}
                        </MidLeftContainer>
                        <MidRightContainer item={style.MidRightContainer}>
                            <MidRightContent item={style.MidRightContent}>
                                <IconOutline item={style.IconOutline}>
                                    <PhoneSvgIcon width={style.SvgIcon.width} height={style.SvgIcon.height} fill={style.SvgIcon.fill} />
                                </IconOutline>
                                <Text
                                    tagType={style.PhoneDetail.tagType}
                                    text={style.PhoneDetail.text}
                                    style={style.PhoneDetail.style}
                                />
                            </MidRightContent>
                            <MidRightContent item={style.MidRightContent}>
                                <IconOutline item={style.IconOutline}>
                                    <MailSvgIcon width={style.SvgIcon.width} height={style.SvgIcon.height} fill={style.SvgIcon.fill} />
                                </IconOutline>
                                <Text
                                    tagType={style.EmailDetail.tagType}
                                    text={style.EmailDetail.text}
                                    style={style.EmailDetail.style}
                                />
                            </MidRightContent>
                            <MidRightContent item={style.MidRightContent}>
                                <IconOutline item={style.IconOutline}>
                                    <LocationSvgIcon width={style.SvgIcon.width} height={style.SvgIcon.height} fill={style.SvgIcon.fill} />
                                </IconOutline>
                                <Text
                                    tagType={style.AddressDetails.tagType}
                                    text={style.AddressDetails.text}
                                    style={style.AddressDetails.style}
                                />
                            </MidRightContent>
                            {/* <MidRightImg item={style.MidRightImg}>
                            
                                <IFrame item={style.IFrame} title="map" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.112133205974!2d77.36974867444522!3d28.62640118436105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce563f95b5bd1%3A0x4d091c1f9b830f7b!2sEdneed%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1684569498194!5m2!1sen!2sin"} frameBorder="0" referrerPolicy="no-referrer-when-downgrade"></IFrame>
                            </MidRightImg> */}
                        </MidRightContainer>
                    </SubMidContainer>
                </ContactusSubContainer >
                <Modal ref={popUpHandle} Position="center" slide={"top"} ClosePopUp={() => closeModal()} ModalsSize={'modal-xs'}>
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

export default ContactTheme6