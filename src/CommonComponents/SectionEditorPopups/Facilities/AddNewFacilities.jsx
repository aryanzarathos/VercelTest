import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "./FacilitiesPopup.module.scss"
import FormInput from '../../../CommonComponents/Form/FormInput'
import FormTextArea from '../../../CommonComponents/Form/FormTextArea'
import ImageUploadeFacilities from './ImageUploaderFacilities'
import ValidationFile from '@/Classes/ValidationFile'
import { useSelector } from 'react-redux'
import FormError from '@/CommonComponents/Form/FormError'

const AddNewTestimonial = ({ onLoadDataChange, editData, nameErr }) => {

    const user = useSelector((state) => state.user)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleOnChange = (e, type) => {
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        if (type === "name") {
            setName(value);
        }
        else {
            setDescription(value);
        }
    }

    useEffect(() => {
        onLoadDataChange({
            title: name,
            details: description,
            thumbnail: image,
            business: user.user_business,
            industry: "Ecommerce"
        })
    }, [name, description, image, user])

    useEffect(() => {
        if (editData) {
            setName(editData?.title);
            setDescription(editData?.details);
            setImage(editData?.thumbnail);
        }
    }, [editData])

    return (
        <div className={styles.addNewTestimonial_container}>
            <h2 className={styles.Header_txt}>{editData ? "Edit facility" : "Add new facility"}</h2>
            <div className={styles.Line} />
            <div className={styles.input_wrap}>
                <FormInput
                    type="text"
                    label={"Facility Name"}
                    value={name}
                    labelPosition={"top"}
                    onChange={(e) => handleOnChange(e, "name")}
                    classNameContainer={styles.input_container}
                    placeholder={"Enter facility name"}
                />
            </div>
            <FormError
                show={nameErr && !name}
                error={"Please enter facility name."}
            />
            <FormTextArea
                rows={5}
                type="text"
                label={"Description"}
                value={description}
                onChange={(e) => handleOnChange(e, "description")}
                labelPosition={"top"}
                placeholder={"Enter description of the facility"}
            />
            <div className={styles.Image_uploade_wrap}>
                <div className={styles.label_wrap}><p>Upload Picture</p><i className={styles.information} /></div>
                <ImageUploadeFacilities object_data={image} selectedHandle={(val) => setImage(val)} />
            </div>
        </div>
    )
}

export default AddNewTestimonial