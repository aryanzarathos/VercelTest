import React, { useEffect, useRef, useState } from 'react'
import { MainEditPopUp, SettingHeadingWrapper, SettingHeadingWrapperButton, SettingHeadingWrapperP } from './EditFormPopUp.style'
import CloseIcon from "../../../Assets/SiteEditor/Icons/closeIcon.svg";
import AddNewFormPopUp from '../AddNewFormPopUp/AddNewFormPopUp';
import InputDetail from '../InputDetail/InputDetail';
import SelectFormSection from '../SelectFormSection/SelectFormSection';
import AddFormItems from '../AddFormItems/AddFormItems';
import { useSelector } from 'react-redux';
import { isBrowser } from '@/CommonFunctions/isBrowser';

const EditFormPopUp = ({ ClosePopUp }) => {
    const [field, setField] = useState("SelectFormSection");
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectionData, setSelectionData] = useState();

    // get the main section div

    //    const mainDiv  = isBrowser && document.querySelector(".mainDiv");

    const openSetting = (val, Selection) => {
        setField(val)
        setSelectionData(Selection)
    }
    const settingRef = useRef(null);
    const ActionHandleOpen = () => {
        settingRef.current.open();

    };
    const ActionHandleClose = () => {
        setShowDropDown(false)
        settingRef.current.close();
 
    };

    const [popupPosition, setPopupPosition] = useState({ top: 0, left: "-65%" });
    const popupRef = useRef(null)




    const changepopUpPosition = () => {

        let left = popupRef?.current?.getBoundingClientRect().left;
        let right = popupRef?.current.getBoundingClientRect().right;
        if (left < 100) {
            setPopupPosition({
                left: "110%"
            })
        }

        if (isBrowser && (window?.innerWidth < right)) {
            setPopupPosition({
                left: "-65%"
            })
        }

    }

    useEffect(() => {
        changepopUpPosition();

    },)



    return (
        <MainEditPopUp ref={popupRef} style={{ left: popupPosition.left }} className={field !== "SelectFormSection" ? "removeHeight" : ""}>
            <SettingHeadingWrapper>
                <SettingHeadingWrapperP>Edit Form</SettingHeadingWrapperP>
                <SettingHeadingWrapperButton onClick={() => ClosePopUp(false)}><CloseIcon /></SettingHeadingWrapperButton>
            </SettingHeadingWrapper>
            {field === "SelectFormSection" &&
                <SelectFormSection openSetting={openSetting} ActionHandleOpen={ActionHandleOpen} setShowDropDown={setShowDropDown} showDropDown={showDropDown} />}
            {field === "InputDetail" &&
                <InputDetail openSetting={openSetting} selectionData={selectionData} />
            }
            {
                field === "AddFormItems" && <AddFormItems openSetting={openSetting} />
            }

            <AddNewFormPopUp ModalsRef={settingRef} onClose={ActionHandleClose} />

        </MainEditPopUp>
    )
}

export default EditFormPopUp
