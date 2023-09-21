import React from 'react';
import { useState, useRef } from 'react';
import { Description, DownloadFileButton, FeeStructure, FeeStructureBreakuplist, FeeStructureHead, FeeStructureListCard, FeeStructureListGrid, FeeStructureModalBody, FeeStructureModalBodyHead, FeeStructureModalBodyHeadLeft, FeeStructureModalBodyHeadRight, FeeStructureSection, TermsAndCondition, ViewFeeStructureButton, ViewFeeStructureButtonSection } from './FeeStructureTheme2.style';
import Modal from '../../../../src/SectionCommon/Modal';
import ModalHeader from '../../../../src/SectionCommon/Modal/ModalHeader';
import ModalBody from '../../../../src/SectionCommon/Modal/ModalBody';


const FeestructureTheme2 = () => {
    const feeStructureModal = useRef(null)

    const viewDetail = () => {
        feeStructureModal.current.open()
    }

    return (
        <>
            <FeeStructureSection>
                <FeeStructure>
                    <FeeStructureHead>
                        <h2>Fee Structures</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, minima.</h3>
                    </FeeStructureHead>
                    <FeeStructureListGrid>

                        <FeeStructureListCard>
                            <h4 title={"title"}>Testing</h4>
                            <p title='Maths'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, itaque.</p>
                            <ViewFeeStructureButtonSection>
                                <ViewFeeStructureButton onClick={viewDetail}>View Fee Structure</ViewFeeStructureButton>
                            </ViewFeeStructureButtonSection>
                        </FeeStructureListCard>
                        {/* <FeeStructureListCard>
                                        <h4 >Fee Title</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </FeeStructureListCard> */}
                    </FeeStructureListGrid>
                </FeeStructure>
            </FeeStructureSection>
            <Modal ref={feeStructureModal}>
                <ModalHeader title={"Testing"}></ModalHeader>
                <ModalBody>
                    <FeeStructureModalBody>
                        <FeeStructureModalBodyHead>
                            <FeeStructureModalBodyHeadLeft>
                                <h4>Fee Breapkup</h4>
                                {/*  <h5>All Fee in India Rupee (₹)</h5> */}
                                <h5>All Fee in Testing</h5>

                            </FeeStructureModalBodyHeadLeft>
                            <FeeStructureModalBodyHeadRight>
                                <DownloadFileButton type='button' onClick={""}>Download File</DownloadFileButton>
                            </FeeStructureModalBodyHeadRight>
                        </FeeStructureModalBodyHead>
                        <FeeStructureBreakuplist>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Fee Type</th>
                                        <th>Amount</th>
                                        <th>Payment Cycle</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-column="Fee Type">{"Tution"}</td>
                                        <td data-column="Amount">{"3800"}</td>
                                        <td data-column="Payment">{"By Bank"}</td>
                                        <td data-column="Total">
                                            {"5000"}
                                        </td>
                                    </tr>
                                    {/* <tr>
                                            <td colSpan={4}>No information available</td>
                                        </tr> */}

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={2}>Grand Total</td>
                                        <td colSpan={2}>sdsd</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </FeeStructureBreakuplist>
                        <Description>
                            <h6>Fee Description</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem facere minima repellat soluta, pariatur obcaecati dicta placeat expedita deserunt.</p>
                        </Description>
                        <TermsAndCondition>
                            <h6>Terms & Conditions</h6>
                            {/* <p>{details.terms}</p> */}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam optio ullam debitis eaque officiis minus animi dolorem molestiae sint?</p>
                        </TermsAndCondition>
                    </FeeStructureModalBody>
                </ModalBody>
            </Modal>
        </>
    )
}

export default FeestructureTheme2