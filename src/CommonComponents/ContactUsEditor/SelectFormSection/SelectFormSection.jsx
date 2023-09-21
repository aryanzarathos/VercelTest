import React, { useState } from 'react'
import { AddBtn, DropDownContent, FieldNameWrap, MainButton, MainEditInputFieldContent, PositionWrapper, PositionWrapperP, SelectFormDropDown } from './SelectFormSection.style'
import FieldName from '../FieldName/FieldName';
import FormDownArrow from "../../../Assets/SiteEditor/Icons/formDownArrow.svg";
import ContactPlusIcon from "../../../Assets/SiteEditor/Icons/contactPlusIcon.svg";
import { useContext } from 'react';
import { MyContactContext } from '@/SectionComponents/ContactUs/MyContactContext';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList, updateContactFormFields } from '@/store/actions/contactus';
import { updateButtonElement } from '@/store/actions/siteEditor';

const SelectFormSection = ({ openSetting, ActionHandleOpen, setShowDropDown, showDropDown }) => {

    const disaptch = useDispatch()
    const { user, subdomainuser, business, contactLists, contactListsSuccess } = useSelector((state) => {
        return {
            user: state.user,
            subdomainuser: state.subdomainuser,
            business: state.websiteTemplate.getTemplate.data?.businessData,
            contactLists: state.contactus.getContactList.data,
            contactListsSuccess: state.contactus.getContactList.success,
        }
    })
    const {
        mainContainerId,
        mainContainerIndex,
        mainContainerData,
        subcontainerId,
        subcontainerIndex,
        subcontainerData,
        sectionId,
        sectionIndex,
        sectionData,
        gridId,
        gridIndex,
        gridData,
        selectedElementId,
        selectedElementIndex,
        selectedElementActive,
        selectedElementData,
        pageId,
        addSectionTo,
    } = useSelector((state) => state.editor.selectedIndexAndId);

    const { contactFormData, setContactFormData } = useContext(MyContactContext);
    const [DragEnterValue, setDragEnterValue] = useState();

    const [DragStartValue, setDragStartValue] = useState();

    const handleDragStart = (position) => {
        setDragStartValue(position)
    }

    const DragEnter = (position) => {
        setDragEnterValue(position)
    }

    const handleDragStop = () => {
        if (DragEnterValue === DragStartValue) {
            // Handle the case when DragEnterValue is equal to DragStartValue
        } else {
            let FinalDataValue = contactFormData?.contact_form;
            let transferData = FinalDataValue[DragStartValue];

            if (FinalDataValue) {
                let updatedData = [...FinalDataValue];
                updatedData.splice(DragStartValue, 1);
                updatedData.splice(DragEnterValue, 0, transferData);

                setContactFormData((prevFormData) => ({
                    ...prevFormData,
                    contact_form: updatedData,
                }));
                disaptch(updateContactFormFields(contactFormData._id, { contact_form: updatedData }))
            }
        }
    }

    const patchManageContactUsForm = (item) => {
        disaptch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: [item._id] },
            })
        );
        disaptch(getContactList(business?._id))
    }

    return (
        <>
            <MainEditInputFieldContent>
                <PositionWrapper>
                    <PositionWrapperP>Select Form</PositionWrapperP>
                    <SelectFormDropDown>
                        <MainButton onClick={() => { setShowDropDown(!showDropDown) }}><p>{contactFormData?.form_name}</p><FormDownArrow /></MainButton>
                        {showDropDown ? (
                            contactListsSuccess && contactLists && contactLists.length > 0 ? (
                                <>
                                    <DropDownContent>
                                        {
                                            contactLists.map((item, key) => {
                                                return (

                                                    <button onClick={() => { patchManageContactUsForm(item); setContactFormData(item); setShowDropDown(!showDropDown) }} key={key}>{item.form_name}</button>

                                                )
                                            })
                                        }
                                        <button onClick={ActionHandleOpen}>+ Create Form</button>
                                    </DropDownContent>
                                </>
                            ) : (
                                <DropDownContent >
                                    <button onClick={ActionHandleOpen}>+ Create Form</button>
                                </DropDownContent>
                            )

                        ) : (
                            ""
                        )
                        }
                    </SelectFormDropDown>
                </PositionWrapper>
                <FieldNameWrap>
                    {contactFormData && contactFormData.contact_form && contactFormData.contact_form.map((item, key) => {
                        return (
                            <React.Fragment key={key}>

                                <FieldName inputName={item.label} deleteIcon={true} openSetting={(InputDetail) => openSetting(InputDetail, key)} item={item} position={key} handleDragStop={handleDragStop} handleDragStart={handleDragStart} DragEnter={DragEnter} />

                            </React.Fragment>
                        )
                    })
                    }

                </FieldNameWrap>
                <AddBtn onClick={() => { openSetting("AddFormItems") }}>
                    <ContactPlusIcon />
                </AddBtn>
            </MainEditInputFieldContent >
        </>
    )
}

export default SelectFormSection
