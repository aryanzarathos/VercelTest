/* eslint-disable react/display-name */


import React, { forwardRef, useEffect, useState } from 'react';
import Modals from '../../Modals';
import ModalHeader from '../../Modals/ModalsHeader';
import ModalBody from '../../Modals/ModalsBody';
import ModalsFooter from '../../Modals/ModalsFooter';
import styles from "./Services.module.scss"
import Image from 'next/image';
import Sort from '../../../Assets/SiteEditor/Icons/sort.svg';
import SelectDropDown from '@/CommonComponents/SelectDropdown';
import SearchControl from '@/CommonComponents/SearchControl';
import ShortDropDown from '@/CommonComponents/SortDropDown/ShortDropDown';
import { getAllMainCategoryList, getServicesBycategories } from '@/store/actions/AppointmentServices';
import { useDispatch, useSelector } from 'react-redux';
import useTemplateData from '@/CustomHooks/useTemplateData';
import ValidationFile from '@/Classes/ValidationFile';
import { updateManagePopupData } from '@/store/actions/managePopups';
import MultiSelectDropdown from '@/CommonComponents/MultiSelectDropDown';
import { dummyImg } from '@/Constant/constants';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';

const data = [
    {
        id: "1",
        ProductLavel: ["Back Pain"],
        url: "https://images.unsplash.com/photo-1566314737379-76aaeadb0511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1418&q=80",
        Category: "Orthopedics",
        Status: "Active",
        Price: "12"
    },
    {
        id: "2",
        ProductLavel: ["X-ray"],
        url: "https://images.unsplash.com/photo-1566314737379-76aaeadb0511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1418&q=80",
        Category: "Orthopedics",
        Status: "Active",
        Price: "12"
    },
    {
        id: "3",
        ProductLavel: ["X-ray"],
        url: "https://images.unsplash.com/photo-1566314737379-76aaeadb0511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1418&q=80",
        Category: "Medicine",
        Status: "Active",
        Price: ""
    },
    {
        id: "4",
        ProductLavel: ["Medicine"],
        url: "https://images.unsplash.com/photo-1566314737379-76aaeadb0511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1418&q=80",
        Category: "Uncategorized",
        Status: "Active",
        Price: "12"
    },
    {
        id: "5",
        ProductLavel: ["Laboratory"],
        url: "https://images.unsplash.com/photo-1566314737379-76aaeadb0511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1418&q=80",
        Category: "Surgery",
        Status: "Active",
        Price: "12"
    },
    {
        id: "6",
        ProductLavel: ["Laparoscopic surgery"],
        url: "https://images.unsplash.com/photo-1566314737379-76aaeadb0511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1418&q=80",
        Category: "Orthopedics",
        Status: "Active",
        Price: "12"
    }
]

const ServicesPopup = forwardRef(({ children }) => {

    const dispatch = useDispatch();

    const [mainContainerId,
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
        selectedElementData, pageId] = useTemplateData();

    const [selectedIds, setSelectedIds] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const { user, serviceListsuccess, serviceList, categoryListSuccess, categoryList, modalState } = useSelector((state) => {
        return {
            user: state.user,
            serviceListsuccess: state.bookAppointment.serviceListByCategories.success,
            serviceList: state.bookAppointment.serviceListByCategories.data,
            categoryListSuccess: state.bookAppointment.getMainCategoryList.success,
            categoryList: state.bookAppointment.getMainCategoryList.data,
            modalState: state.commonStates.modalState
        };
    });

    useEffect(() => {
        if (modalState) {
            if (searchTerm) {
                dispatch(getServicesBycategories(user.user_business, user._id, searchTerm, "Services", {}));
            }
            else dispatch(getServicesBycategories(user.user_business, user._id, "", "Services", {}));
        }
    }, [dispatch, user, searchTerm, modalState]);

    useEffect(() => {
        dispatch(getAllMainCategoryList(user.user_business, user._id, "Services"));
    }, [dispatch, user]);

    const ModalClosehandle = () => {
        children.onclose();
        setSelectedIds([]);
    }

    const handleCheckbox = (e, _id, type) => {
        if (type === "SelectAll") {
            let array = selectedIds
            if (e.target.checked) {
                serviceList?.map((item) => {
                    if (!array.includes(item._id)) {
                        array.push(item._id)
                    }
                })
                setSelectedIds([...array])
            } else {
                setSelectedIds([])
            }

        } else {
            let array = selectedIds
            if (e.target.checked) {
                array.push(_id)
            } else {
                let index = array.indexOf(_id)
                array.splice(index, 1)
            }
            setSelectedIds([...array])
        }
    }

    const idIndex = (_id) => {
        let index = selectedIds.indexOf(_id)
        return index + 1
    }

    useEffect(() => {
        if (gridData?.data?.length) {
            let array = []
            gridData.data.map((item) => {
                if (!array.includes(item._id)) {
                    array.push(item._id)
                }
            })
            setSelectedIds([...array])
        }
    }, [gridData, modalState])

    const handleSearch = (e) => {
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        setSearchTerm(value);
    }

    const handleAddServices = () => {
        dispatch(
            updateManagePopupData({
                body: { data: selectedIds },
                pageId: pageId,
                grid: gridData?._id,
                indexesData: {
                    mainContainerIndex: mainContainerIndex,
                    subcontainerIndex: subcontainerIndex,
                    sectionIndex: sectionIndex,
                    gridIndex: gridIndex,
                },
            })
        );
        ModalClosehandle();
    }

    const handleSelectCategory = (e, value) => {
        if (e.target.checked) {
            let arr = selectedCategories;
            arr.push(value)
            setSelectedCategories([...arr])
        } else {
            let arr = selectedCategories;
            let index = arr.indexOf(value)
            arr.splice(index, 1)
            setSelectedCategories([...arr])
        }
    }

    const handleCategoryApplyBtn = () => {
        dispatch(getServicesBycategories(user.user_business, user._id, "", "Services", { categoryId: selectedCategories }));
    }

    return (
        <Modals ref={children.ref} ModalsSize={`modalL`} Position="center" ClosePopUp={ModalClosehandle} ClassName={styles.Service_modal}>
            <ModalHeader title="Select Services" />
            <ModalBody className={styles.Service_Body}>
                <ul className={styles.ListWrapper_Header}>
                    <li className={styles.Item_wrap_header}>
                        <div className={styles.label_Item}>
                            <div className={styles.selectAll_Custom_checkbox}>
                                <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                    checked={selectedIds?.length && serviceList?.length && selectedIds?.length === serviceList?.length}
                                    onChange={(e) => handleCheckbox(e, "", "SelectAll")} />
                                <label htmlFor={`checkbox`} ></label>
                            </div>
                            <p className={styles.count_title}>Select All</p>
                        </div>
                        <SearchControl placeholder={"Search..."} border={true} classNameWrappper={styles.classNameWrappper} className={styles.searchbar} value={searchTerm}
                            onChange={handleSearch} reset={() => setSearchTerm("")} />
                        <MultiSelectDropdown
                            heading={""}
                            label={"main_category_name"}
                            value={"_id"}
                            showApplyBtn={true}
                            values={categoryList}
                            handleSelect={(e, val) => handleSelectCategory(e, val)}
                            selectedValues={selectedCategories}
                            defaultValue={"Categories"}
                            handleApplyBtn={() => handleCategoryApplyBtn()}
                            showValue={"collections"}
                            BorderRadius={true}
                            selectedName={categoryList.length > 0 && selectedCategories.length > 0 && categoryList.find((item) => item._id === selectedCategories[0]).main_category_name}
                        />
                    </li>
                </ul>
                <div className={styles.List_Item}>
                    <p className={styles.title}>NAME</p>
                    <p className={styles.title}>CATEGORY</p>
                    <p className={styles.title}>STATUS</p>
                    <p className={styles.title}>Price</p>
                </div>
                <ul className={styles.ListWrapper}>
                    {serviceListsuccess ?
                        serviceList && serviceList.length > 0 ?
                            serviceList.map((item, key) => (
                                <li key={key} className={styles.Item_wrap}>
                                    <div className={styles.label_Item}>
                                        <div className={styles.custom_checkbox}>
                                            <input type="checkbox" className={styles.checkbox} id={key} onChange={(e) => handleCheckbox(e, item?._id)} checked={selectedIds.includes(item?._id)} />
                                            <label htmlFor={key} data-content={idIndex(item?._id)}></label>
                                        </div>
                                        <div className={styles.Image_wrapper}>
                                            <div className={styles.image_wrap}>
                                                <ImageElement
                                                    className={styles.Item_image}
                                                    src={item?.image?.src}
                                                    defaultImage={dummyImg}
                                                />
                                            </div>
                                            {/* <Image className={styles.Item_image} src={item?.image?.src} alt="List Image" width={56} height={56} /> */}
                                        </div>
                                        <li className={styles.bradcrumb_Item}> {item?.title}</li>
                                    </div>
                                    <li className={styles.bradcrumb_Item}>{item?.categoryName?.main_category_name}</li>
                                    <li className={styles.bradcrumb_Status}>{item?.visibleOneSite ? "Active" : "Draft"}</li>
                                    <li className={styles.bradcrumb_Item}>{item?.sessionPrice ? <span>&#8377; {item?.sessionPrice}</span> : "-"}</li>

                                </li>
                            ))
                            :
                            <RecordNotFound text={"No Services Available to Display. Services added to the dashboard will be displayed here."} />
                        :
                        <SpinnerLoader />
                    }
                </ul>
            </ModalBody>
            <ModalsFooter className={styles.Service_Foot_Wrap}>
                <div className={styles.Service_Foot}>
                    <p>{selectedIds?.length || 0} Selected</p>
                    <div className={styles.button_group}>
                        <button className={`button btn-o-silver btn-xs btn-oval`} onClick={() => ModalClosehandle()}>Cancel</button>
                        <button className={`button  btn-xs btn-oval ${selectedIds?.length ? "button-primary" : "button-gray"}`}
                            onClick={() => handleAddServices()} disabled={!selectedIds?.length}>Add Services</button>
                    </div>
                </div>
            </ModalsFooter>
        </Modals>
    )
})

export default ServicesPopup;