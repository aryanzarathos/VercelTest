import DefaultImage1 from "../../../Assets/SectionComponent/Images/Vacancy/defaultImage1.svg"
import DefaultImage from "../../../Assets/SectionComponent/Images/Vacancy/Admissions.png";
import DefaultAddmission from "../../../Assets/SectionComponent/Images/Vacancy/Admissions.png";
import { Fragment, useRef, useState } from 'react';
import FormatText from '../../../CommonComponents/FormatText/index';
import { CardOverlay, CardOverlayAction, CardOverlayDetails, ModalHeaderWrap, OverlayApplyNowButton, OverlayViewButton, Vacancy, VacancyCard, VacancyContentSection, VacancyDescription, VacancyHead, VacancySection } from "./vacancy.style";
import Modal from "../../../../src/SectionCommon/Modal";
import ModalBody from "../../../SectionCommon/Modal/ModalBody";
import ModalHeader from "../../../SectionCommon/Modal/ModalHeader";
import ModalFooter from "../../../SectionCommon/Modal/ModalHeader";
import Image from "next/image";
import ApplyJobVacancyPopup from "../../../SectionCommon/ApplyJobVacancy/ApplyJobVacancyPopup";

// const ModalWrapper = styled.div`
// .modalBodyColor {
//   background: red !important;
// }
// `

const VacancyTheme1 = () => {
    const viewVacancyDetailModal = useRef(null)

    const applyJobVacancyRef = useRef(null);


    const applyNowPopup = () => {

        applyJobVacancyRef.current.open();
        viewVacancyDetailModal.current.close()
        // setApplyPopup(!applyPopup)
    }
    const viewDetailPopup = () => {
        viewVacancyDetailModal.current.open()
    }
    // const closeVacancyApply = () => {
    //   setApplyPopup(!applyPopup)
    // }

    const ApplyJobVacancyClosePopup = () => {
        applyJobVacancyRef.current.close()
    }


    return (
        <>
            <VacancySection>
                <Vacancy>
                    <VacancyHead>
                        <h2>Vacancy</h2>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quia.</h3>

                    </VacancyHead>
                    <VacancyDescription>

                        <VacancyCard>
                            <Image src={DefaultAddmission} alt="Vacancyyyy" />
                            <CardOverlay >
                                <h6>Physics Teacher</h6>
                                <CardOverlayDetails>
                                    <p className='sun-edtior-wrap'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate eos obcaecati! Quis, asperiores impedit eos aperiam maiores iste autem expedita labore magni vel dignissimos sed, quos optio natus laborum?</p>
                                </CardOverlayDetails>
                                <CardOverlayAction>
                                    <OverlayViewButton onClick={() => viewDetailPopup()}>View Detail</OverlayViewButton>
                                    <OverlayApplyNowButton onClick={() => applyNowPopup()}>Apply Now</OverlayApplyNowButton>
                                </CardOverlayAction>
                            </CardOverlay>
                        </VacancyCard>

                        {/* <VacancyCard>
                            <img src={DefaultImage1} alt="vacancy" />
                            <CardOverlay>
                                <CardOverlayDetails>
                                    <h6>lorem ipsum</h6>
                                </CardOverlayDetails>
                            </CardOverlay>
                        </VacancyCard>
                         */}
                    </VacancyDescription>

                </Vacancy>
            </VacancySection>

            <Modal ref={viewVacancyDetailModal} >
                <ModalHeaderWrap>
                    <ModalHeader className={'detail-header-wrap'}>Modal Header</ModalHeader>
                </ModalHeaderWrap>
                <ModalBody className={"modalBodyColor"}>
                    <div className="VacancyDetailWrapper">
                        <div className="VacancyDetailBanner">
                            <ul>
                                <li>
                                    <p className="text-xxs">Vacancy Type</p>
                                    <p className="text-xs">Physics Teacher</p>
                                </li>
                                <li>
                                    <p className="text-xxs">No. Of Position</p>
                                    <p className="text-xs">10</p>
                                </li>
                                <li>
                                    <p className="text-xxs">Minimum Experience</p>
                                    <p className="text-xs">2 Years</p>
                                </li>
                                <li>
                                    <p className="text-xxs">Annual Salary</p>
                                    <p className="text-xs">
                                        INR 34000
                                    </p>
                                </li>
                                <li>
                                    <p className="text-xxs">Minimum Qualification</p>
                                    <p className="text-xs">B.Sc</p>
                                </li>
                                <li>
                                    <p className="text-xxs">Last date to apply</p>
                                    <p className="text-xxs">
                                        18-02-2024
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="VD-ActionSection mt-20">
                            <button
                                onClick={() => applyNowPopup(details)}
                                className="button button-base btn-sm"
                                type="button"

                            >
                                Apply Now
                            </button>
                            <a
                                // href={details.fileUpload}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="button btn-o-mgray btn-sm base"
                            >
                                Download Job Description
                            </a>
                        </div>
                        <VacancyContentSection className="VD-ContentSection mt-20">
                            <h6 className="text-sm w-600">Job Description</h6>
                            {/* <FormatText> */}
                            <p
                                className="text-xxs mt-10 sun-editor-output"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim laboriosam quo autem eum aliquam ipsum a consequuntur nobis sint tempore dignissimos dolorum recusandae magni distinctio maxime, nesciunt, sit, ducimus maiores ipsam modi. Necessitatibus sapiente exercitationem dicta modi beatae distinctio, rerum velit illum quasi molestiae harum, fugiat laborum explicabo ullam ipsum ratione soluta quae amet molestias. Possimus atque officia accusantium cupiditate, commodi delectus, explicabo ipsa, doloribus aliquid ad quos quo facere alias natus iure ipsum pariatur eaque id accusamus amet deleniti aut libero at! Ad laudantium autem nobis animi veritatis sequi commodi harum veniam eos beatae, iure accusamus, reprehenderit est.
                            </p>

                            {/* </FormatText> */}


                            <h6 className="text-sm mt-20">Key Roles & Responsibility</h6>
                            {/* <FormatText> */}
                            <p className='sun-editor-output'
                            >
                                Lorem ipsum dolor sit amet.
                            </p>
                            {/* </FormatText> */}

                        </VacancyContentSection>
                    </div>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
            {/* {
        applyPopup && <ApplyJobVacancy
          open={applyPopup}
          back={false}
          detail={details}
          close={closeVacancyApply}
        />
      } */}

            {/* <ApplyJobVacancyPopup
                // detail={details}
                close={ApplyJobVacancyClosePopup}
                applyJobVacancyRef={applyJobVacancyRef}
            /> */}

            <ApplyJobVacancyPopup applyJobVacancyRef={applyJobVacancyRef} />
        </>
    )
}

export default VacancyTheme1