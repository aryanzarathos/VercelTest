import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "./Testimonial.module.scss"
import FormInput from '../../../CommonComponents/Form/FormInput'
import FormTextArea from '../../../CommonComponents/Form/FormTextArea'
import ImageUploadeTestimonial from './ImageUploaderTestimonial'
import ValidationFile from '@/Classes/ValidationFile'
import { useSelector } from 'react-redux'
import FormError from '@/CommonComponents/Form/FormError'
import ProductCategory from '../../CategoryDropDown'
import Tooltip from '@/CommonComponents/ToolTip/ToolTip'

const AddNewTestimonial = ({ onLoadDataChange, editData, nameErr }) => {

    const user = useSelector((state) => state.user)

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [testimonial, setTestimonial] = useState("");
    const [image, setImage] = useState("");

    const handleOnChange = (e, type) => {
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);

        switch (type) {
            case "name":
                setName(value);
                break;
            case "designation":
                setDesignation(value);
                break;
            case "testimonial":
                setTestimonial(value);
                break;
            default:
                break;
        }

    }

    useEffect(() => {
        onLoadDataChange({
            name: name,
            designation: designation,
            message: testimonial,
            thumbnail: image,
            business: user.user_business,
            industry: "Ecommerce"
        })
    }, [name, designation, testimonial, image, user])

    useEffect(() => {
        if (editData) {
            setName(editData?.name);
            setDesignation(editData?.designation);
            setTestimonial(editData?.message);
            setImage(editData?.thumbnail);
        }
    }, [editData])

    const [selectedCategroy, setSelectedCategroy] = useState({

    });


    return (
        <div className={styles.addNewTestimonial_container}>
            <h2 className={styles.Header_txt}>{editData ? "Edit Testimonial" : "Add new Testimonial"}</h2>
            <div className={styles.Line} />
            <div className={styles.input_wrap}>
                <div >
                    <FormInput
                        type="text"
                        label={"Name"}
                        value={name}
                        labelPosition={"top"}
                        onChange={(e) => handleOnChange(e, "name")}
                        classNameContainer={styles.input_container}
                        placeholder={"Enter team member name"}
                    />

                    <FormError
                        show={nameErr && !name}
                        error={"Please enter team member name."}
                    />
                </div>
                <FormInput
                    type="text"
                    label={"Designation"}
                    value={designation}
                    onChange={(e) => handleOnChange(e, "designation")}
                    labelPosition={"top"}
                    classNameContainer={styles.input_container}
                    placeholder={"Enter Designation"}
                />
            </div>
            <FormTextArea
                rows={5}
                type="text"
                label={"Description"}
                value={testimonial}
                onChange={(e) => handleOnChange(e, "testimonial")}
                labelPosition={"top"}
                placeholder={"Enter description of team member"}
            />

            <div className={styles.Image_uploade_wrap}>
                <div className={styles.label_wrap}><p>Upload Picture</p>
                    <Tooltip text=".png, .jpg, and image format files are accepted. Recommended Size : 150px x 150px"
                        toolTipClass={styles.tool_tip}
                        placement={"right"}
                        toolTipWrapperClass={"tooltipError"}
                        toolTipPosition={"changePosition"}
                        toolTipDownClass={styles.toolTipDownClass}>
                        <i className={styles.information} />
                    </Tooltip>
                </div>
                <ImageUploadeTestimonial object_data={image} selectedHandle={(val) => setImage(val)} />
            </div>


        </div>
    )
}

export default AddNewTestimonial