import React, { useRef, useState } from 'react'
import { AddOptionButton, BtnWraaper, CancelBtn, CheckBoxColorContent, CheckBoxColorP, CheckBoxColorWrapper, ColorBox, ColorCode, DoneBtn, HexP, MainWrapper, OptionContent, OptionDelete, OptionP, OptionWrapper } from './AddFormItems.style'
import SelectBoxDropdown from './SelectBoxDropdown/SelectBoxDropdown'
import InputDetail from '../InputDetail/InputDetail'
import InputBox from '../InputBox/InputBox'
import CheckboxInput from '@/CommonComponents/Form/CheckboxInput'
import DeleteIcon from "../../../Assets/SiteEditor/Icons/deleteIcon.svg";
import { useContext } from 'react';
import { MyContactContext } from '@/SectionComponents/ContactUs/MyContactContext';
import ColorPalette from '@/CommonComponents/ColorPalette'
import { updateContactFormFields } from '@/store/actions/contactus'
import { useDispatch } from 'react-redux'
import InputColorPicker from '@/CommonComponents/ColorPicker'
import ValidationUtils from '@/Classes/ValidationUtils'

const AddFormItems = ({ openSetting }) => {

    const disaptch = useDispatch();
    const colorPickerRef = useRef();
    const { contactFormData, setContactFormData } = useContext(MyContactContext);
    const [createNewData, setCreateNewData] = useState(
        {
            componentRender: "EditorFormInput",
            title: "",
            placeholder: "",
            label: "",
            mandate: false,
            show: true,
            value: "",
            isValid: false,
        }
    );

    const HandleDropDown = (value) => {
        setSubmit(false)
        setCreateNewData(value);
    }

    const HandelOnChange = (val, type) => {
        setSubmit(false)
        let finalData = createNewData
        finalData[type] = val;
        setCreateNewData({ ...finalData })
    }

    const HandleDropDownChange = (val, key) => {
        setSubmit(false)
        let finalData = createNewData
        finalData["OptionData"][key] = val;
        setCreateNewData({ ...finalData })

    }

    const DeleteOptions = (key) => {
        setSubmit(false)
        let finalData = createNewData
        finalData["OptionData"].splice(key, 1)
        setCreateNewData({ ...finalData })
    }
    const AddNewOption = () => {
        setSubmit(false)
        let finalData = createNewData
        finalData["OptionData"].push("")
        setCreateNewData({ ...finalData })
    }

    const Submit = () => {
        setSubmit(true)
        if (createNewData && !ValidationUtils.isEmpty(createNewData.label)) {
            let FinalData = structuredClone(contactFormData.contact_form);
            FinalData.push(createNewData)
            setContactFormData((prevFormData) => ({
                ...prevFormData,
                contact_form: [...FinalData],
            }));
            disaptch(updateContactFormFields(contactFormData._id, { contact_form: FinalData }))
            openSetting("SelectFormSection")
        }
    }

    const CloseHandlePicker = () => {

    };
    const [showcolorPicker, setColorPicker] = useState(false);
    const [submit, setSubmit] = useState(false);
    const openColor = () => {
        setColorPicker(!showcolorPicker)
    }


    const LabelValue = [
        {

            componentRender: "EditorFormInput",
            title: "SINGLE-LINE",
            placeholder: "e.g Enter your full name",
            label: "e.g Full Name",

        },
        {

            componentRender: "EditorTextArea",
            title: "MULTI-LINE-INPUT",
            placeholder: "e.g Write a message",
            label: "e.g Message",

        },
        {

            componentRender: "EditorSelectDropDown",
            title: "DROPDOWN",
            placeholder: "e.g Select your gender",
            label: "e.g Gender",

        },
        {

            componentRender: "EditorCheckBox",
            title: "CHECKBOX",
            placeholder: "",
            label: "e.g Services",

        },
        {

            componentRender: "EditorRadioButton",
            title: "RADIO",
            placeholder: "",
            label: "e.g Services",
        },
        {

            componentRender: "EditorDatePicker",
            title: "DATE",
            placeholder: "e.g Select date",
            label: "e.g Date",

        },
        {

            componentRender: "EditorTimePicker",
            title: "TIME",
            placeholder: "e.g Select your time",
            label: "e.g Time",

        },
    ]
    return (
        <>
            <MainWrapper>
                <SelectBoxDropdown className="addItems" label={"What do you want to add?"} HandleDropDown={(value) => HandleDropDown(value)} />
                <InputBox type='text' label={"Label"}
                    placeholder={LabelValue.find((item) => item?.componentRender === createNewData?.componentRender)?.label}
                    value={createNewData.label}
                    error={submit && ValidationUtils.isEmpty(createNewData.label)}
                    onChange={(e) => HandelOnChange(e.target.value, "label")}
                    toolTipText="Enter a valid label name"
                    placement={"top-right"} toolTipWrapperClass={"tooltipError"}
                    toolTipPosition={"changePosition"}
                    toolTipDownClass={"changeDownArrowPosition"} />


                {!(createNewData.componentRender === "EditorCheckBox" || createNewData.componentRender === "EditorRadioButton") ?
                    <InputBox type="text" label={"PlaceHolder"}
                        placeholder={LabelValue.find((item) => item?.componentRender === createNewData?.componentRender)?.placeholder}
                        toolTipText="Enter a valid Placeholder name"
                        value={createNewData.placeholder}
                        onChange={(e) => HandelOnChange(e.target.value, "placeholder")}
                        placement={"top-right"} toolTipWrapperClass={"tooltipError"}
                        toolTipPosition={"changePosition"}
                        toolTipDownClass={"changeDownArrowPosition"} />
                    : ''
                }

                {/* ==== dropdown content ==== */}
                {(createNewData.componentRender === "EditorSelectDropDown" || createNewData.componentRender === "EditorCheckBox" || createNewData.componentRender === "EditorRadioButton") ? (
                    <OptionWrapper>
                        <OptionP>Option</OptionP>
                        {createNewData && createNewData?.OptionData.map((item, key) => {
                            return (
                                <React.Fragment key={key}>
                                    <OptionContent>
                                        <InputBox
                                            value={item}
                                            type='text'
                                            placeholder={"Option " + (key + 1)}
                                            className={"spaceTop"}
                                            toolTipText="Enter a valid option"
                                            placement={"top-right"} toolTipWrapperClass={"tooltipError"}
                                            toolTipPosition={"changePosition"}
                                            onChange={(e) => HandleDropDownChange(e.target.value, key)}
                                            toolTipDownClass={"changeDownArrowPosition"}
                                        />
                                        {createNewData?.OptionData.length > 1 && <OptionDelete onClick={() => DeleteOptions(key)} className="deleteIcon"><DeleteIcon height={20} width={20} /></OptionDelete>}
                                    </OptionContent>
                                </React.Fragment>
                            )
                        })
                        }
                        <AddOptionButton onClick={() => AddNewOption()}>
                            + Add Options
                        </AddOptionButton>
                    </OptionWrapper>
                ) : ("")
                }
                {(createNewData.componentRender === "EditorRadioButton" || createNewData.componentRender === "EditorCheckBox") && <CheckBoxColorWrapper>
                    <CheckBoxColorP> Checkbox Color :</CheckBoxColorP>
                    <ColorPalette colorCode={createNewData?.Color} paletteHandle={openColor} />


                </CheckBoxColorWrapper>}
                {/* ==== radio button content === */}
                <CheckboxInput label={"Mark as mandate"} onChange={(e) => HandelOnChange(e.target.checked, "mandate")} checked={createNewData.mandate} LabelClass={"markCheckBox"} />
                <BtnWraaper>
                    <CancelBtn type="button" onClick={() => openSetting("SelectFormSection")} >
                        Cancel
                    </CancelBtn>
                    <DoneBtn type="button" onClick={() => Submit()}>
                        Add
                    </DoneBtn>
                </BtnWraaper>
            </MainWrapper>
            <div style={{ position: "absolute" }}>
                {showcolorPicker && <InputColorPicker
                    onclose={openColor}
                    value={createNewData.Color}
                    handleChange={(color) => HandelOnChange(color, "Color")}
                    ref={colorPickerRef}
                />}
            </div>

        </>
    )
}

export default AddFormItems
