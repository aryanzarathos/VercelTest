/* eslint-disable react/display-name */
import React, { forwardRef, useEffect, useState } from 'react';
// import styles from "./AltTextPopup.module.scss";
import Modals from '../../Modals';
import ModalHeader from '../../Modals/ModalsHeader';
import ModalBody from '../../Modals/ModalsBody';
import ModalsFooter from '../../Modals/ModalsFooter';
import styles from "./BlogCategory.module.scss"
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import SearchControl from '@/CommonComponents/SearchControl';
import ValidationFile from '@/Classes/ValidationFile';
import useTemplateData from '@/CustomHooks/useTemplateData';
import { updateManagePopupData } from '@/store/actions/managePopups';
import { getAllCategoryList, searchCategoryList } from '@/store/actions/ecomCategories';
import { getCategoryLists } from '@/store/actions/instituteblogs/Instituteblog';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import { dummyImg } from '@/Constant/constants';

const dataList = [
    {
        id: "1",
        CategoryLavel: ["Men"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "2",
        CategoryLavel: ["Men", "Top wear"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "3",
        CategoryLavel: ["Men", "Top wear", "T-shirts"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "4",
        CategoryLavel: ["Men", "Top wear", "Printed T-shirts"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "5",
        CategoryLavel: ["Men", "Top wear"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "6",
        CategoryLavel: ["Kids (Boys)"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    }
]

const BlogCategoryPopup = forwardRef(({ children }) => {

    const dispatch = useDispatch();
    const [selectedIds, setSelectedIds] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    const { user, getCategoryListSuccess, getCategorylistData, modalState, getCategories } = useSelector((state) => {
        return {
            user: state.user,
            getCategoryListSuccess: state.instituteblogs.getCategoryLists.success,
            getCategorylistData: state.instituteblogs.getCategoryLists.data,
            modalState: state.commonStates.modalState,
            getCategories: state.instituteblogs.getCategoryLists
        }
    })

    useEffect(() => {
        if (modalState) {
            dispatch(getCategoryLists(user?.user_business, "Ecommerce"));
        }
    }, [dispatch, user, modalState])

    const ModalClosehandle = () => {
        children.onclose();
        setSelectedIds([]);
    }

    const handleCheckbox = (e, _id, type) => {
        if (type === "SelectAll") {
            let array = selectedIds
            if (e.target.checked) {
                getCategorylistData?.map((item) => {
                    if (!array.includes(item?._id)) {
                        array.push(item?._id)
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


    const handleAddCategories = () => {
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

    const handleSearch = (e) => {
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        setSearchTerm(value);
    }

    return (
        <Modals ref={children.ref} ModalsSize={`modalL`} Position="center" ClosePopUp={ModalClosehandle} ClassName={styles.Blog_category_modal}>
            <ModalHeader title="Select Blog Category" />
            <ModalBody className={styles.Blog_Category_Body}>
                <ul className={styles.ListWrapper_Header}>
                    <li className={styles.Item_wrap_header}>
                        <div className={styles.label_Item}>
                            <div className={styles.selectAll_Custom_checkbox}>
                                <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                    checked={selectedIds?.length && getCategorylistData?.length && selectedIds?.length === getCategorylistData?.length}
                                    onChange={(e) => handleCheckbox(e, "", "SelectAll")} />
                                <label htmlFor={`checkbox`} ></label>
                            </div>
                            <p className={styles.count_title}>Select All</p>
                        </div>
                        <SearchControl placeholder={"Search..."} border={true} className={styles.searchbar} value={searchTerm}
                            onChange={handleSearch} reset={() => setSearchTerm("")} />
                    </li>
                </ul>
                <div className={styles.List_Item}>
                    <p className={styles.title}>CATEGORY NAME</p>
                    <p className={styles.titleProduct}>NO. OF BLOGS</p>
                </div>
                <ul className={styles.ListWrapper}>
                    {getCategories?.success ? getCategorylistData &&
                        getCategorylistData?.length ?
                        getCategorylistData?.filter((item) => {
                            return (
                                item?.category_title?.toLowerCase()
                                    ?.includes(searchTerm?.toLowerCase())
                            )
                        }).map((item, key) => (
                            <React.Fragment key={key}>
                                <li key={key} className={styles.Item}>
                                    <div className={styles.label_Item}>
                                        <div className={styles.custom_checkbox}>
                                            <input type="checkbox" className={styles.checkbox} id={key} onChange={(e) => handleCheckbox(e, item?._id)}
                                                checked={selectedIds.includes(item?._id)} />
                                            <label htmlFor={key} data-content={idIndex(item?._id)}></label>
                                        </div>
                                        {/* <Image
                                            className={styles.Item_image}
                                            src={item?.category_cover_image?.src || ""}
                                            alt="List Image"
                                            height="56" width="56"
                                        /> */}
                                        <div className={styles.image_wrap}>
                                            <ImageElement
                                                className={styles.Item_image}
                                                src={item?.category_cover_image?.src || ''}
                                                defaultImage={dummyImg}
                                            />
                                        </div>
                                        <ol className={styles.bradcrumb_wrap}>
                                            <li className={styles.bradcrumb_Item}>{item?.category_title}</li>
                                        </ol>
                                    </div>
                                    <p className={styles.count_title_product}>
                                        {item?.BlogsIncategories && item?.BlogsIncategories?.length ? item?.BlogsIncategories?.length : 0}</p>
                                </li>
                            </React.Fragment>
                        ))
                        :
                        <RecordNotFound text={"No Categories Available to Display. Categories added to the dashboard will be displayed here."} />
                        :
                        <SpinnerLoader />
                    }
                </ul>
            </ModalBody>
            <ModalsFooter className={styles.Category_Foot_Wrap}>
                <div className={styles.Category_Foot}>
                    <p>{selectedIds.length || 0} Selected</p>
                    <div className={styles.button_group}>
                        <button className={`button btn-o-silver btn-xs btn-oval`} onClick={ModalClosehandle} >Cancel</button>
                        <button className={`button  btn-xs btn-oval ${selectedIds?.length ? "button-primary" : "button-gray"}`}
                            onClick={handleAddCategories} disabled={!selectedIds?.length} >Add Blogs</button>
                    </div>
                </div>
            </ModalsFooter>
        </Modals>
    )
})



export default BlogCategoryPopup;