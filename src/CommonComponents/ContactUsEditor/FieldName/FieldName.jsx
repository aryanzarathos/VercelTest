import React, { useState } from 'react';
import MenuIcon from "../../../Assets/SiteEditor/Icons/menuIcon.svg";
import SettingIcon from "../../../Assets/SiteEditor/Icons/settingIcon.svg";
import DeleteIcon from "../../../Assets/SiteEditor/Icons/deleteIcon.svg";
import PasswordHideIcon from "../../../Assets/SiteEditor/Icons/passwordHideIcon.svg";
import PasswordShowIcon from "../../../Assets/SiteEditor/Icons/passwordShowIcon.svg";
import { FieldNameP, FieldNameWrapper } from './FieldName.style';
import { useContext } from 'react';
import { MyContactContext } from '@/SectionComponents/ContactUs/MyContactContext';
import { useDispatch } from 'react-redux';
import { updateContactFormFields } from '@/store/actions/contactus';

const FieldName = ({ inputName, deleteIcon, openSetting, handleDragStop, handleDragStart, item, position, DragEnter }) => {
    const disaptch = useDispatch();
    const { contactFormData, setContactFormData } = useContext(MyContactContext);

    const handleDefaultEye = (value) => {
        let updatedData = structuredClone(contactFormData.contact_form)
        updatedData[position]["show"] = value
        setContactFormData((prevFormData) => ({
            ...prevFormData,
            contact_form: updatedData,
        }));
        disaptch(updateContactFormFields(contactFormData._id, { contact_form: updatedData }))
    }
    const handleDelete = () => {
        let updatedData = structuredClone(contactFormData.contact_form)
        updatedData.splice(position, 1)
        setContactFormData((prevFormData) => ({
            ...prevFormData,
            contact_form: updatedData,
        }));
        disaptch(updateContactFormFields(contactFormData._id, { contact_form: updatedData }))
    }

    return (
        <>
            <FieldNameWrapper draggable={true} onDragStart={() => handleDragStart(position, item)} onDragEnter={() => DragEnter(position, item)}
                onDragEnd={() => handleDragStop(position, item)}>
                <MenuIcon />
                <FieldNameP>{inputName}</FieldNameP>
                <button className="settingIcon" onClick={() => openSetting("InputDetail")}><SettingIcon /></button>

                {
                    item.isDefault ? (

                        <button onClick={() => handleDefaultEye(!item.show)} className='passwordIcon'>{item.show ? <PasswordHideIcon /> : <PasswordShowIcon />}</button>
                    ) : (
                        <button className='deleteIcon' onClick={() => handleDelete()} ><DeleteIcon height={20} width={20} /></button>
                    )
                }

            </FieldNameWrapper>
        </>
    )
}

export default FieldName
