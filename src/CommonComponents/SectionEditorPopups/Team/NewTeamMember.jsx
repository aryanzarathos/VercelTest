import React, { useEffect, useState } from 'react'
import styles from "./Team.module.scss"
import FormInput from '../../../CommonComponents/Form/FormInput'
import FormTextArea from '../../../CommonComponents/Form/FormTextArea'
import { useSelector } from 'react-redux'
import ImageUploadeTestimonial from '../Testimonial/ImageUploaderTestimonial'
import ValidationFile from '@/Classes/ValidationFile'
import FormError from '@/CommonComponents/Form/FormError'
import Tooltip from '@/CommonComponents/ToolTip/ToolTip'

const AddNewMember = ({ onLoadDataChange, editData, nameErr }) => {

    const user = useSelector((state) => state.user)

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [description, setDescription] = useState("");
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
            case "description":
                setDescription(value);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        onLoadDataChange({
            fullname: name,
            designation: designation,
            description: description,
            profileurl: image,
            business: user.user_business,
            industry: "Ecommerce",
            owner: user._id
        })
    }, [name, designation, description, image, user])

    useEffect(() => {
        if (editData) {
            setName(editData?.fullname);
            setDesignation(editData?.designation);
            setDescription(editData?.description);
            setImage(editData?.profileurl);
        }
    }, [editData])

    return (
        <div className={styles.addNewTestimonial_container}>
            <h2 className={styles.Header_txt}>Add new member</h2>
            <div className={styles.Line} />
            <div className={styles.input_wrap}>
                <div className={styles.input_name}>
                    <FormInput
                        type="text"
                        label={"Name"}
                        labelPosition={"top"}
                        value={name}
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
                labelPosition={"top"}
                value={description}
                onChange={(e) => handleOnChange(e, "description")}
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

export default AddNewMember