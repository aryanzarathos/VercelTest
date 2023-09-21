import React, { useState } from 'react'
import {
    CancelBookingPopUpWrapper, MainContentWrap, ConfirmationText, NotePara, ButtonWrap, CancelBtn, ProceedBtn,
    RescheduleWrap, SelectDataParaWrap, SelectPara, MainDatePicker, SelectTimeWrap,
    SlotsWrap, Slots
} from './CancelBookingPopUp.style.js'
import FormTextArea from '@/CommonComponents/Form/FormTextArea.jsx'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import EditerDateIcon from "../../../../Assets/SectionComponent/Icons/akar-icons_calendar.svg";
const CancelBookingPopUp = () => {
    const [startDate, setStartDate] = useState(null);
    return (
        <CancelBookingPopUpWrapper>
            <MainContentWrap>
                {
                    false ?
                        <ConfirmationText>
                            Are you sure you want to cancel this booking?
                        </ConfirmationText>
                        :
                        <RescheduleWrap>
                            <SelectDataParaWrap>
                                <SelectPara>
                                    Select the date to reschedule  :
                                </SelectPara>
                                <MainDatePicker>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeholderText="DD-MM-YYYY"
                                    />
                                    <EditerDateIcon className="dateIcon" />
                                </MainDatePicker>
                            </SelectDataParaWrap>
                            <SelectTimeWrap>
                                <SelectPara>
                                    Select Time Slot  :
                                </SelectPara>
                                <SlotsWrap>
                                    <Slots className={true ? 'active' : ''}> 8:30 AM -  9:30 AM </Slots>
                                    <Slots> 8:30 AM -  9:30 AM </Slots>
                                    <Slots> 8:30 AM -  9:30 AM </Slots>
                                    <Slots> 8:30 AM -  9:30 AM </Slots>
                                    <Slots> 8:30 AM -  9:30 AM </Slots>
                                    <Slots> 8:30 AM -  9:30 AM </Slots>
                                </SlotsWrap>
                            </SelectTimeWrap>
                        </RescheduleWrap>
                }

                <FormTextArea
                    label={'Message'}
                    labelPosition={"top"}
                    LabelClassName={'message-label'}
                    placeholder={'Write the reason for cancellation'}
                    rows={4}
                />
                <NotePara>
                    Note : This message will be sent to the user to notify about their cancelled booking.
                </NotePara>

            </MainContentWrap>
            <ButtonWrap>
                <CancelBtn>Cancel</CancelBtn>
                <ProceedBtn>Proceed</ProceedBtn>
            </ButtonWrap>
        </CancelBookingPopUpWrapper>
    )
}

export default CancelBookingPopUp
