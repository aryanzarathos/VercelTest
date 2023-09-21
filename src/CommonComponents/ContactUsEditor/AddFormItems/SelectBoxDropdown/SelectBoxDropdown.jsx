import React, { useState } from 'react';
import { DropDownIconContentBtn, IconContentBtn, Label, SelectBoxContent, SelectBoxDropDownContent, SelectBoxDropdownWrapper, SelectMainBtn } from './SelectBoxDropdown.style';
import SingliLIneTextIcon from "../../../../Assets/SiteEditor/Icons/singliLIneTextIcon.svg";
import MultiLineIcon from "../../../../Assets/SiteEditor/Icons/multiLineIcon.svg";
import FormDownArrow from "../../../../Assets/SiteEditor/Icons/formDownArrow.svg";
import DropDownIcon from "../../../../Assets/SiteEditor/Icons/dropDownIcon.svg";
import CheckBoxIcon from "../../../../Assets/SiteEditor/Icons/checkBoxIcon.svg";
import RadioButtonIcon from "../../../../Assets/SiteEditor/Icons/radioButtonIcon.svg";
import DateIcon from "../../../../Assets/SiteEditor/Icons/dateIcon.svg";
import TimeIcon from "../../../../Assets/SiteEditor/Icons/timeIcon.svg";

import CheckBoxWhiteIcon from "../../../../Assets/SiteEditor/Icons/checkBoxWhiteIcon.svg";
import DateWhiteIcon from "../../../../Assets/SiteEditor/Icons/dateWhiteIcon.svg";
import DropdownWhiteIcon from "../../../../Assets/SiteEditor/Icons/dropdownWhiteIcon.svg";
import MultiWhiteIcon from "../../../../Assets/SiteEditor/Icons/multiWhiteIcon.svg";
import RadioWhiteIcon from "../../../../Assets/SiteEditor/Icons/radioWhiteIcon.svg";
import SingleWhiteIcon from "../../../../Assets/SiteEditor/Icons/singleWhiteIcon.svg";
import TimeWhiteIcon from "../../../../Assets/SiteEditor/Icons/timeWhiteIcon.svg";

const SelectBoxDropdown = ({ className, LabelClass, label, HandleDropDown }) => {

    const SelectData = [
        {
            id: 1,
            blockIcon: <SingliLIneTextIcon />,
            hoverIcon: <SingleWhiteIcon />,
            iconText: "Single Line Text",
            finalData: {
                componentRender: "EditorFormInput",
                title: "SINGLE-LINE",
                placeholder: "",
                label: "",
                mandate: false,
                show: true,
                value: "",
                isValid: false,
            }
        },
        {
            id: 2,
            blockIcon: <MultiLineIcon />,
            hoverIcon: <MultiWhiteIcon />,
            iconText: "Multi-line Text",
            finalData: {
                componentRender: "EditorTextArea",
                title: "MULTI-LINE-INPUT",
                placeholder: "",
                label: "",
                mandate: false,
                show: true,
                value: "",
                isValid: false,
            }
        },
        {
            id: 3,
            blockIcon: <DropDownIcon />,
            hoverIcon: <DropdownWhiteIcon />,
            iconText: "Dropdown",
            finalData: {
                componentRender: "EditorSelectDropDown",
                title: "DROPDOWN",
                placeholder: "",
                label: "",
                mandate: false,
                show: true,
                value: "",
                OptionData: ["", ""],
                isValid: false,
            }
        },
        {
            id: 4,
            blockIcon: <CheckBoxIcon />,
            hoverIcon: <CheckBoxWhiteIcon />,
            iconText: "Checkbox",
            finalData: {
                componentRender: "EditorCheckBox",
                title: "CHECKBOX",
                placeholder: "",
                label: "",
                mandate: false,
                show: true,
                Color: "#000000",
                OptionData: ["", ""],
                value: [],
                isValid: false,
            }
        },
        {
            id: 5,
            blockIcon: <RadioButtonIcon />,
            hoverIcon: <RadioWhiteIcon />,
            iconText: "Radio Button",
            finalData: {
                componentRender: "EditorRadioButton",
                title: "RADIO",
                placeholder: "",
                label: "",
                mandate: false,
                show: true,
                Color: "#000000",
                value: "",
                OptionData: ["", ""],
                isValid: false,
            }
        },
        {
            id: 6,
            blockIcon: <DateIcon />,
            hoverIcon: <DateWhiteIcon />,
            iconText: "Date",
            finalData: {
                componentRender: "EditorDatePicker",
                title: "DATE",
                placeholder: "",
                label: "",
                mandate: false,
                show: true,
                value: "",
                isValid: false,
            }
        },
        {
            id: 7,
            blockIcon: <TimeIcon />,
            hoverIcon: <TimeWhiteIcon />,
            iconText: "Time",
            finalData: {
                componentRender: "EditorTimePicker",
                title: "TIME",
                placeholder: "",
                label: "",
                mandate: false,
                show: true,
                value: "",
                isValid: false,
            }
        },
    ]
    const [show, setShow] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const handleOnChange = (val, data) => {
        setSelectedValue(val);
        setShow(false);
        HandleDropDown(data)
    }
    return (
        <SelectBoxDropdownWrapper className={className}>
            <Label className={LabelClass}>
                {label}
            </Label>
            <SelectBoxContent>
                <SelectMainBtn onClick={() => setShow(!show)}>
                    <IconContentBtn>
                        <button className="block">
                            {selectedValue?.blockIcon ? selectedValue?.blockIcon : <SingliLIneTextIcon />}
                        </button>
                        <p>
                            {selectedValue?.iconText ? selectedValue?.iconText : "Single Line Text"}
                        </p>
                    </IconContentBtn>
                    <FormDownArrow />
                </SelectMainBtn>
                {
                    show && <SelectBoxDropDownContent>
                        {
                            SelectData?.map((value) => {
                                return (
                                    <>
                                        <DropDownIconContentBtn key={value?.id} onClick={() => handleOnChange(value, value.finalData)}>
                                            <button className="block">
                                                {value?.blockIcon}
                                            </button>
                                            <button className='hoverBlock'>
                                                {value?.hoverIcon}
                                            </button>
                                            <p>{value?.iconText}</p>
                                        </DropDownIconContentBtn>
                                    </>
                                )
                            })
                        }
                    </SelectBoxDropDownContent>
                }

            </SelectBoxContent>

        </SelectBoxDropdownWrapper>
    )
}

export default SelectBoxDropdown
