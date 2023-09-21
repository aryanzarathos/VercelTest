import React, { useRef, useState } from "react";
import { ApplyJobVacancyForm, ApplyJobVacancyWrapper, DashedInstructionList, DatePickerWrap, DiscriptionWrapper, FormFieldwrap, List, ModalHeaderWrap, VacancyButton } from "./ApplyPopUp.style";
import Modal from "../../../src/SectionCommon/Modal";
import ModalHeader from "../../../src/SectionCommon/Modal/ModalHeader";
import ModalBody from "../../../src/SectionCommon/Modal/ModalBody";
// import InputDatePicker from "../../../CommonComponents/Form/InputDatePicker";
import FormTextArea from "../../CommonComponents/Form/FormTextArea";
import Upload from "../../CommonComponents/Upload";
import FormError from "../../CommonComponents/Form/FormError";
import SelectInput from "../../CommonComponents/Form/SelectInput";
import FormInput from "../../CommonComponents/Form/FormInput";


const ApplyJobVacancyPopup = ({ applyJobVacancyRef, close, detail }) => {

  return (
    <Modal ref={applyJobVacancyRef} className="ViewFeeStructureWrap" ModalSize="modal-l">
      <ModalHeaderWrap>
        <ModalHeader
          title={""}
          TitleClass="base"
          closeButton={true}
          // onclose={closeModal}
          className={'detail-header-wrap'}
        >
        </ModalHeader>
      </ModalHeaderWrap>
      <ModalBody>
        <form
        // onSubmit={formSubmit}
        // ref={applyFormRef}
        >
          <ApplyJobVacancyWrapper className="ApplyJobVacancyWrapper">
            <DiscriptionWrapper className="ApplyJobVacancyBanner Discription">
              <ul>
                <li>
                  <p className="text-xxs vacancyPostionHeaing">Position Type</p>
                  <p className="text-xs vacancyPostionPara">Physics Teacher</p>
                </li>
                <li>
                  <p className="text-xxs vacancyPostionHeaing">No. of Position</p>
                  <p className="text-xs vacancyPostionPara">10</p>
                </li>

                <li>
                  <p className="text-xxs vacancyPostionHeaing">Annual Salary</p>
                  <p className="text-xs vacancyPostionPara">
                    <strong>INR</strong>{" "}
                    36000
                  </p>
                </li>
                <li>
                  <p className="text-xxs vacancyPostionHeaing">Minimum Experience</p>
                  <p className="text-xs vacancyPostionPara">2 years</p>
                </li>

                <li>
                  <p className="text-xxs vacancyPostionHeaing">Last date to apply</p>
                  <p className="text-xxs vacancyPostionPara">
                    18-08-2023
                  </p>
                </li>
              </ul>
            </DiscriptionWrapper>
            {/* {submitStatus === "success" ? ( */}
            <div className="ApplyJobVacancyForm mt-30">
              <p>submit</p>
            </div>
            {/* ) : ( */}
            <React.Fragment>
              <ApplyJobVacancyForm className="ApplyJobVacancyForm  mt-30">
                <FormFieldwrap className="formFieldwrap">
                  <FormInput
                    // label="Full Name"
                    className="errorInput"
                    name="fullname"
                    placeholder="Enter Full Name"
                  />
                  <FormError
                    error="Enter fullname"
                  />
                </FormFieldwrap>
                <FormFieldwrap className="formFieldwrap">
                  <FormInput
                    // label="Email"
                    name="email"
                    className={"errorInput"}
                    placeholder="Enter Email"
                  />
                  <FormError
                    error="Enter valid email"
                  />
                </FormFieldwrap>
                <FormFieldwrap className="formFieldwrap">
                  <FormInput
                    name="contact"
                    // label="Contact Number"
                    placeholder="Contact Number"
                    className={"errorInput"
                    }
                  />
                  <FormError
                    error="Enter valid contact number"
                  />
                </FormFieldwrap>
                <DatePickerWrap className="datePickerWrap">
                  {/* <InputDatePicker
                    // label="Date of Birth"
                    name="dob"
                    id="class_timing"
                    type="datetime-local"
                    className={"errorInput"}
                    placeholder="Date of Birth"
                  /> */}
                  <FormError
                    error="Select date of birth"
                  />
                </DatePickerWrap>
                <FormFieldwrap className="formFieldwrap">
                  <SelectInput
                    name="qualification"
                    className={"errorInput"}
                  // label="Highest Qualification"
                  >
                    <option value="">Qualification</option>
                    <option>Not Applicable</option>
                    <option>10th</option>
                    <option>10+2</option>
                    <option>Under Graduate</option>
                    <option>Post Graduate</option>
                    <option>Diploma</option>
                    <option>Certification</option>
                    <option>Specialist Degree</option>
                    <option>Others</option>
                  </SelectInput>
                  <FormError
                    error="Select a valid qualification"
                  />
                </FormFieldwrap>
                <FormFieldwrap className="formFieldwrap">
                  <FormInput
                    name="experience"
                    // label="Year of Experience"
                    placeholder="Year of Experience"
                    className={"errorInput"
                    }
                  />
                  <FormError
                    error="Enter year of Experience"
                  />
                </FormFieldwrap>
                <FormFieldwrap className="formFieldwrap">
                  <FormInput
                    name="currentOrganization"
                    // label="Organization Name"
                    placeholder="Organization Name"
                    className={"errorInput"}
                  />
                  <FormError
                    error="Enter organization name"
                  />
                </FormFieldwrap>
                <FormFieldwrap className="formFieldwrap">
                  <FormInput
                    name="address"
                    // label="Full Address"
                    placeholder="Enter Full Address"
                    className={"errorInput"}
                  />
                  <FormError
                    error="Enter full address"
                  />
                </FormFieldwrap>
                <FormFieldwrap className="formFieldwrap">
                  <FormTextArea
                    name="about"
                    rows="3"
                    // label="About your Self"
                    placeholder="Tell us short induction about yourself"
                    className={
                      `TextAreaInput`
                    }
                  />
                  <FormError
                    error="Enter about your Self"
                  />
                </FormFieldwrap>
              </ApplyJobVacancyForm>
              <div className="ApplyJobVacancyUploadCV mt-30">
                <p className="text-xs w-600">Upload CV/Resume</p>
                <DashedInstructionList className="DashedInstructionList">
                  <List className="text-xxs">
                    Accept only .PNG, .JPG or .PDF file.
                  </List>
                </DashedInstructionList>
                <FormFieldwrap className="formFieldwrap mt-15">
                  <Upload
                    size={10}
                    label="Upload File"
                    fileOvelapClass="bg-white"
                    IconFileUploadClass="icon-file-upload base i-xs"
                  />
                </FormFieldwrap>
              </div>
              <p className="text-red">status message</p>
              {/* <VacancyButton type="button">
                  Loading...
                </VacancyButton> */}
              <VacancyButton type="submit">
                Submit Application
              </VacancyButton>
            </React.Fragment>

          </ApplyJobVacancyWrapper>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ApplyJobVacancyPopup;
