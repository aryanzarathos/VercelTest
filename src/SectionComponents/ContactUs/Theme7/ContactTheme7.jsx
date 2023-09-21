import EmailIcon from "../../../Assets/SectionComponent/Images/ContactUs/emailIcon.svg";
import AddressIcon from "../../../Assets/SectionComponent/Images/ContactUs/address-icon.svg";
import PhoneIcon from "../../../Assets/SectionComponent/Images/ContactUs/phone-icon.svg";
import LandlineIcon from "../../../Assets/SectionComponent/Images/ContactUs/landline.svg";
import FormError from '../../../SectionCommon/Form/FormError';
import PhoneInput from 'react-phone-input-2';
import React from 'react';

import VerifyOTP from '../../../SectionCommon/OPTPForm/OTPForm';
import FormInput from '../../../SectionCommon/Form/FormInput';
import { Modal } from '../../../SectionCommon/Modal';
import ModalBody from '../../../SectionCommon/Modal/ModalBody';
import { useRef } from 'react';
import { ContactHomeHero, ContactHomeHeroAddress, ContactHomeHeroForm, ContactHomeHeroSection, MobilePinWrap } from "./ContactUsTheme7.style";
import 'react-phone-input-2/lib/style.css'
const ContactTheme7 = () => {
  const popUpHandle = useRef(null);
  const formFields = [
    {
      title: 'Full name',
      value: '',
      placeholder: 'e.g Enter your full name'
    },
    {
      title: 'Email Address',
      value: '',
      placeholder: 'e.g Enter your Email Addrress'
    },
    {
      title: 'Message',
      value: '',
      placeholder: 'e.g Enter your Message'
    },

  ]
  return (
    <ContactHomeHeroSection>
      <ContactHomeHero>
        <ContactHomeHeroAddress>
          <h2>Got questions?</h2>
          <h3>Ask us anything or just say Hi.</h3>
          <ul>
            {true ?
              <li>
                <label>
                  <AddressIcon width={20} height={20} fill={"rgb(52, 63, 100)"} ></AddressIcon>Address -
                </label>
                {/* {businessData.business_address ? businessData.business_address : ""},{businessData.business_address_line2 && businessData.business_address_line2}&nbsp;{businessData.business_city ? businessData.business_city : ""},&nbsp;{businessData.business_state ? businessData.business_state : ""},&nbsp;{businessData.business_country ? businessData.business_country : ""},&nbsp;{businessData.business_zipcode ? businessData.business_zipcode : ""} */}
                Saket, New Delhi
              </li>
              : ""
            }
            {false ?
              <li>
                <label>
                  <PhoneIcon width={20} height={20} fill={"rgb(52, 63, 100)"} ></PhoneIcon>Phone -
                </label>
                {/* {businessData.business_phone} */}
                9560625959
              </li>
              : ""
            }


            {
              // for her institute this value is added 
              true ? (
                <li>
                  <label>
                    <LandlineIcon width={20} height={20} fill={"rgb(52, 63, 100)"}></LandlineIcon>Landline -
                  </label>
                  {/* {businessData.business_phone} */}
                  +91 3853568705
                </li>
              ) : ''
            }

            {
              // for  annassociates this value is added 
              true ? (
                <li>
                  <label>
                    <PhoneIcon width={20} height={20} fill={"rgb(52, 63, 100)"} ></PhoneIcon>Phone -
                  </label>
                  +91 9999876498
                </li>
              ) : ''
            }

            {true ?
              <li>
                <label>
                  <EmailIcon width={20} height={20} fill={"rgb(52, 63, 100)"} ></EmailIcon>
                  Email -
                </label>
                {false ? '' : "xotov47974@satedly.com"}
              </li>
              : ""
            }

          </ul>
        </ContactHomeHeroAddress>
        <ContactHomeHeroForm>
          <form>
            <div className="form-group" >
              <p className='form-group-topheading'>Full name</p>
              <FormInput labelPosition="top" className="mid-left-inputs" placeholder={"e.g Enter your full name"} name={''} onChange={(e) => handleContactOnChange(e, key)} />
              <FormError error={`Full name required.`} />
            </div>
            <MobilePinWrap>
              <p>Phone Number </p>
              <PhoneInput
                countryCodeEditable={false}
                containerClass="form-group"
                inputClass="form-control"
                country={"in"}
                value={``}
                inputProps={{
                  name: "institute_phone",
                  required: true,
                  autoFocus: false,
                }}
                enableSearch
                disableSearchIcon

              />
              <FormError
                error={`Please add Phone Number`}
              />
            </MobilePinWrap>
            <div className="form-group" >
              <p className='form-group-topheading'>Email Address</p>
              <FormInput labelPosition="top" className="mid-left-inputs" placeholder={"e.g Enter your Email Addrress"} name={''} onChange={(e) => handleContactOnChange(e, key)} />
              <FormError error={`Email Address required.`} />
            </div>
            <div className="form-group" >
              <p className='form-group-topheading'>Message</p>
              <FormInput labelPosition="top" className="mid-left-inputs" placeholder={"e.g Enter your Message"} name={''} onChange={(e) => handleContactOnChange(e, key)} />
              <FormError error={`Message required.`} />
            </div>

            {true ?
              <>
                {false ?
                  <button type="button">Loading...</button>
                  :
                  <button type="submit">Send Message</button>
                }
              </>
              : ""
            }
          </form>
        </ContactHomeHeroForm>
        {/* <Modals ref={popUpHandle} Position="center" ClosePopUp={() => closeModal()} ModalsSize={'modal-xs'}>
                    <ModalsBody>
                        <VerifyOTP verifyState={"contact"} contact={contactFieldData && contactFieldData?.value}
                            countryCode={contactFieldData && contactFieldData?.country_code} flowType={"ContactUs"}
                            formFields={formFields} user={user} business={business} cancelOTPPopup={closeModal} />
                    </ModalsBody>
                </Modals> */}
      </ContactHomeHero>
    </ContactHomeHeroSection>
  )
}

export default ContactTheme7