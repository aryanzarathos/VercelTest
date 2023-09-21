import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgCard from "../../../Assets/SectionComponent/Images/ServiceList/appointment-banner.jpg"
import { useState } from "react";
import SelectInput from "../../../CommonComponents/Form/SelectInput";
import FormError from "../../../CommonComponents/Form/FormError";

import { Cardbody, FormFieldwrap, TermConditionWrap, ServiceListCard, ImageWrapper, ServiceListWrapper } from "./ServiceListTheme1.style"
import Image from "next/image";
import ImageElement from "@/SectionsLayout/Elements/ImageElement/ImageElement";
import Text from "@/SectionsLayout/Elements/TextElement/Text";
import AnchorElement from "@/SectionsLayout/Elements/Anchor/AnchorElement/AchorElement";
import Button from "@/SectionsLayout/Elements/ButtonElement/ButtonElement";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import { getAllMainServiceList } from "@/store/actions/bookAppointment";
import ValidationUtils from "@/Classes/ValidationUtils";

const ServiceListTheme1 = ({ children }) => {
    let dispatch = useDispatch();
    let history = useAppNavigate()
    const [allService, setAllService] = useState("")
    const [filterService, setFilterService] = useState("")
    const [serviceidError, setServiceIdError] = useState(false);
    const data = children;

    const { serviceListData, templateSuccess, instituteData } = useSelector((state) => {
        return {
            serviceListData: state.bookAppointment.getallServiceList.data,
            templateSuccess: state.websiteTemplate.getTemplate.success,
            instituteData: state.websiteTemplate.getTemplate.data.businessData,
        }
    })

    useEffect(() => {
        if (templateSuccess) {
            dispatch(getAllMainServiceList(instituteData._id))
        }
    }, [dispatch, templateSuccess, instituteData])

    const handleContinue = () => {
        if (ValidationUtils.isNotEmpty(allService)) {
            history(`/booking-appointment/${allService}`);
        } else {
            setServiceIdError(true);
        }
    }

    useEffect(() => {
        if (serviceListData && serviceListData.length > 0) {
            let array = []
            serviceListData.map((item) => {
                if (item.isHide === false || item.serviceDisablefrom === false && item.serviceDisableto === false) {
                    array.push(item)
                }
            })
            setFilterService([...array])
        }
    }, [serviceListData]);


    const hadleCategorySelect = (e) => {
        let inputValue = e.target.value
        setAllService(inputValue);
        setServiceIdError(ValidationUtils.isEmpty(inputValue));
    }

    // console.log(serviceListData, templateSuccess, instituteData,instituteData._id, instituteData.type,"serviceListData, templateSuccess, instituteData")

    
    const style = {
        ServiceListWrapper: data.custom_section_editable[0].style,
        ServiceListCard: data.custom_section_editable[1].style,
        ImageWrapper: data.custom_section_editable[2].style,
        ImageStyle: data.custom_section_editable[3].style,
        Cardbody: data.custom_section_editable[4].style,
        HeadingPara: data.custom_section_editable[5],
        FormFieldwrap: data.custom_section_editable[6].style,
        SelectInput: data.custom_section_editable[7].style,
        TermConditionWrap: data.custom_section_editable[8].style,
        TermPara1: data.custom_section_editable[9],
        TermPara2: data.custom_section_editable[10],
        TermPara3: data.custom_section_editable[11],
        TermPara4: data.custom_section_editable[12],
        ContinueBtn: data.custom_section_editable[13],
    }
    return (
        <ServiceListWrapper item={style.ServiceListWrapper}>
            <ServiceListCard item={style.ServiceListCard}>
                <ImageWrapper item={style.ImageWrapper}>
                    <ImageElement src={imgCard} style={style.ImageStyle} alt={'main-image'} />
                </ImageWrapper>
                <Cardbody item={style.Cardbody}>

                    <Text
                        text={style.HeadingPara.text}
                        tagType={style.HeadingPara.tagType}
                        style={style.HeadingPara.style}
                    />
                    <FormFieldwrap item={style.FormFieldwrap} item2={style.SelectInput}>

                        <SelectInput
                            id="profession_cat"
                            onChange={hadleCategorySelect}
                            className="dropbtn"
                            name="mainCategory"
                            value={allService}
                            required
                        >
                            <option value="" className="option active">
                                Select Service
                            </option>
                            {filterService.length
                                && filterService.map((item, key) => {
                                    return (
                                        <option className="option active"
                                            value={item._id}
                                            key={key}
                                        >
                                            {item.title}
                                        </option>
                                    );
                                })
                            }

                        </SelectInput>
                        <FormError
                            show={!allService && serviceidError}
                            error="Please select service"
                            className='visitorFormError'
                        />

                    </FormFieldwrap>

                    <TermConditionWrap item={style.TermConditionWrap}>
                        <Text
                            text={style.TermPara1.text}
                            tagType={style.TermPara1.tagType}
                            style={style.TermPara1.style}
                        />
                        <AnchorElement
                            text={style.TermPara2.text}
                            link={'/'}
                            style={style.TermPara2.style}
                        />
                        <Text
                            text={style.TermPara3.text}
                            tagType={style.TermPara3.tagType}
                            style={style.TermPara3.style}
                        />
                        <AnchorElement
                            text={style.TermPara4.text}
                            link={'/'}
                            style={style.TermPara4.style}
                        />

                    </TermConditionWrap>
                    <Button
                        text={style.ContinueBtn.text}
                        style={style.ContinueBtn.style}
                        onClick={handleContinue}
                    />
                </Cardbody>

            </ServiceListCard>


        </ServiceListWrapper >
    );
}
export default ServiceListTheme1;