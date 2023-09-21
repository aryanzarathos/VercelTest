import React, { forwardRef, useState } from 'react'
import Modals from '../../../../CommonComponents/Modals'
import ModalHeader from '../../../../CommonComponents/Modals/ModalsHeader'
import ModalBody from '../../../../CommonComponents/Modals/ModalsBody';
import styles from "./AddPagesPopup.module.scss"
import SelectDropDown from '../../../../CommonComponents/SelectDropdown';
import InputSelectDropDown from './InputSelectDropdown';
import { useEffect } from 'react';
import { addCategoryCollectionPage, editPageData, getCategoryPages } from '../../../../store/actions/siteEditor';
import { useDispatch, useSelector } from 'react-redux';
import ValidationUtils from '../../../../Classes/ValidationUtils';
import FormError from '../../../../CommonComponents/Form/FormError';
import InputSearchDropDown from '@/CommonComponents/InputSearchDropdown';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { OPEN_LEFTSIDEBAR } from '@/store/reducers/SiteEditor';
import { RESET_ADD_PAGE_DATA } from "../../../../store/reducers/SiteEditor"
const AddPagesPopup = forwardRef(({ onClose }, ref) => {

    const dispatch = useDispatch();
    const navigate = useAppNavigate();

    const { user, pagesData, getTemplateData, AddPageSuccess, AddPageData } = useSelector((state) => {
        return {
            user: state.user,
            pagesData: state.editor.getCategoryPagesData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data,
            AddPageSuccess: state.editor.addCategoryCollectionPageData.success,
            AddPageData: state.editor.addCategoryCollectionPageData.data,
        }
    })

    const SelectPageValues = ["Category", "Collection"];

    const [selectedPageType, setSelectedPageType] = useState("");
    const [selectedvalues, setSelectedvalues] = useState("");
    const [selectedvalueObj, setSelectedvalueObj] = useState("");
    const [error, setError] = useState(false);


    // useEffect(() => {
    //     dispatch(getCategoryPages({ id: getTemplateData?.business, templateId: getTemplateData?.template?._id }))
    // }, [dispatch, getTemplateData])

    const InputCategoryValues = [
        {
            _id: "1",
            categoryName: "men",
            subcategories: [
                {
                    _id: "1",
                    subcategoriesName: "women",
                    subsubcategories: [
                        {
                            _id: "1",
                            subSubCategoryName: "Kids"
                        }
                    ]
                }
            ]
        },
        {
            _id: "2",
            categoryName: "Laptop",
            subcategories: [
                {
                    _id: "1",
                    subcategoriesName: "mobile",
                    subsubcategories: [
                        {
                            _id: "1",
                            subSubCategoryName: "tab"
                        }
                    ]
                }
            ]
        },
        {
            _id: "3",
            categoryName: "asus",
            subcategories: [
                {
                    _id: "1",
                    subcategoriesName: "lenovo",
                    subsubcategories: [
                        {
                            _id: "1",
                            subSubCategoryName: "dell"
                        }
                    ]
                }
            ]
        }
    ]

    const SelectPagehandle = (val) => {
        setSelectedPageType(val)
        setError(false);
    }

    const handleSelectedValues = (val, valueObj) => {
        setSelectedvalues(val);
        setSelectedvalueObj(valueObj)
        setError(false);
    }

    const AddPagesHandle = () => {
        setError(false);
        onClose();
        setSelectedPageType("");
        setSelectedvalues("");
        setSelectedvalueObj("");

    }

    const handleValidation = () => {
        let isValid = true;
        if (ValidationUtils.isNotEmpty(selectedPageType)) {
            if (ValidationUtils.isNotEmpty(selectedvalues)) {
                isValid = true;
            }
            else {
                isValid = false;
            }
        }
        else {
            isValid = false;
        }
        return isValid;
    }

    const payloadData = () => {

        if (selectedvalueObj) {
            if (selectedPageType === "Category") {
                if (selectedvalueObj?.category_level === 0) {
                    return {
                        business: getTemplateData?.business, theme: getTemplateData?.theme,
                        template: getTemplateData?.template?._id, type: "category", id: selectedvalueObj?._id,
                        category_level: selectedvalueObj?.category_level, owner: user?._id
                    }
                }
                else if (selectedvalueObj?.category_level === 1) {
                    return {
                        business: getTemplateData?.business, theme: getTemplateData?.theme,
                        template: getTemplateData?.template?._id, type: "subcategory", id: selectedvalueObj?._id,
                        category_level: selectedvalueObj?.category_level, owner: user?._id
                    }
                }
                else if (selectedvalueObj?.category_level === 2) {
                    return {
                        business: getTemplateData?.business, theme: getTemplateData?.theme,
                        template: getTemplateData?.template?._id, type: "subsubcategory", id: selectedvalueObj?._id,
                        category_level: selectedvalueObj?.category_level, owner: user?._id
                    }
                }
            }
            else {
                return {
                    business: getTemplateData?.business, theme: getTemplateData?.theme,
                    template: getTemplateData?.template?._id, type: "collection", id: selectedvalueObj?._id, owner: user?._id
                }
            }
        }

    }

    const handleAddPageBtn = () => {
        let valid = handleValidation();
        if (valid) {
            dispatch(addCategoryCollectionPage(payloadData()));
        }
        else {
            setError(true);
        }
    }

    const RedirectTo = (slug, prefix, page_category_id) => {

        if (prefix === "collection") {
            navigate(`/collection/${slug}`, "", true);
        } else if (
            prefix === "category" ||
            prefix === "subcategory" ||
            prefix === "subsubcategory"
        ) {
            if (
                page_category_id?.categorySlug &&
                page_category_id?.subcategorySlug &&
                page_category_id?.subsubcategorySlug
            ) {
                navigate(
                    `/category/${page_category_id?.categorySlug}/${page_category_id?.subcategorySlug}/${page_category_id?.subsubcategorySlug}`, "", true
                );
            } else if (
                page_category_id?.categorySlug &&
                page_category_id?.subcategorySlug
            ) {
                navigate(
                    `/category/${page_category_id?.categorySlug}/${page_category_id?.subcategorySlug}`, "", true
                );
            } else {
                navigate(`/category/${slug}`, "", true);
            }
        } else {
            navigate(slug, "", true);
        }

    };

    useEffect(() => {
        if (AddPageSuccess && AddPageData) {
            AddPagesHandle();
            dispatch(RESET_ADD_PAGE_DATA())
            if (AddPageData?.data) {
                RedirectTo(AddPageData?.data?.page_slug, AddPageData?.data?.prefix, AddPageData?.data?.page_category_id);
            }
            // if (AddPageData?.data?.prefix) {
            //     navigate(`/${AddPageData?.data?.prefix}/${AddPageData?.data?.page_slug}`, "", true);
            // }
            // else {
            //     navigate(`/${AddPageData?.data?.page_slug}`, "", true);
            // }
            dispatch(
                OPEN_LEFTSIDEBAR({
                    leftSidebarActive: false,
                    level1Active: false,
                    IndexLevel2: "",
                    heading: "Add Section",
                    RenderLeftComponent: "SectionPages",
                })
            )
        }
    }, [AddPageSuccess, AddPageData])


    return (
        <Modals ref={ref} ClosePopUp={AddPagesHandle} ModalsSize="modalXS" Position="center">
            <ModalHeader title="Add Page to your site" />
            <ModalBody className={styles.PagesPopupBody}>
                <h5 className={styles.title}>Select Page</h5>
                <p className={styles.SubTitle}>Select the page to add it to your site</p>
                <SelectDropDown className="mb-20" showValue={selectedPageType} deafultValue={"Select Page"} values={SelectPageValues} handleSelect={SelectPagehandle} />
                <FormError show={error && !selectedPageType} error="Please select page." />

                {selectedPageType ?
                    selectedPageType === "Category" ?
                        <>
                            <InputSelectDropDown className={`${styles.InputSelectDropDown} mb-20 text-2xs w-400 base`}
                                showValue={selectedvalues}
                                deafultValue={"Select Category"}
                                values={pagesData?.Category} handleSelect={handleSelectedValues} />
                            <FormError show={error && !selectedvalues} error="Please select category." />
                        </>
                        :
                        <>
                            <InputSearchDropDown
                                handleSelect={handleSelectedValues}
                                deafultValue={"Select Collection"}
                                label={"collectionName"}
                                showValue={selectedvalues}
                                value={"_id"}
                                values={pagesData?.Collection?.filter((item) => !item?.pagedata)}
                                className={"mb-20"}
                            />
                            <FormError show={error && !selectedvalues} error="Please select collection." />
                        </>
                    : ""
                }

                <button className="button btn-xs button-primary btn-oval" onClick={handleAddPageBtn} >Add Page</button>
            </ModalBody>
        </Modals>
    )
})

AddPagesPopup.displayName === "AddPagesPopup";

export default AddPagesPopup