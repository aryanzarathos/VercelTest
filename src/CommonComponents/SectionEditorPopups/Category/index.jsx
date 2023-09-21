import React, { forwardRef, useEffect, useState } from 'react';
// import styles from "./AltTextPopup.module.scss";
import Modals from '../../Modals';
import ModalHeader from '../../Modals/ModalsHeader';
import ModalBody from '../../Modals/ModalsBody';
import ModalsFooter from '../../Modals/ModalsFooter';
import styles from "./CategoryPopup.module.scss"
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import SearchControl from '@/CommonComponents/SearchControl';
import ValidationFile from '@/Classes/ValidationFile';
import useTemplateData from '@/CustomHooks/useTemplateData';
import { updateManagePopupData } from '@/store/actions/managePopups';
import { getAllCategoryList, searchCategoryList } from '@/store/actions/ecomCategories';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import { dummyImg } from '@/Constant/constants';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';

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

const CategoryPopup = forwardRef(({ children }) => {

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

    const { user, getCategorylistSuccess, getCategorylistData, modalState } = useSelector((state) => {
        return {
            user: state.user,
            getCategorylistSuccess: state.ecomCategory.adminCategoryList.success,
            getCategorylistData: state.ecomCategory.adminCategoryList.data,
            modalState: state.commonStates.modalState
        }
    })

    useEffect(() => {
        if (modalState) {
            // if (searchTerm) {
            //     dispatch(searchCategoryList(user.user_business, user._id));
            // }
            // else {
            dispatch(getAllCategoryList(user.user_business));
            // }
        }
    }, [dispatch, user.user_business, modalState])

    const ModalClosehandle = () => {
        setSelectedIds([])
        children.onclose()
    }
    const handleCheckbox = (e, _id, type) => {
        if (type === "SelectAll") {
            let array = selectedIds
            if (e.target.checked) {
                getCategorylistData?.data?.map((item) => {
                    if (!array.includes(item?._id)) {
                        array.push(item?._id)
                    }
                    item?.subcategories?.map((subItem) => {
                        if (!array.includes(subItem?._id)) {
                            array.push(subItem?._id);
                        }

                        subItem?.subsubcategories?.map((subSubItem) => {
                            if (!array.includes(subSubItem?._id)) {
                                array.push(subSubItem?._id);
                            }
                        })
                    })
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
            gridData?.data?.map((item) => {
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
        <Modals ref={children.ref} ModalsSize={`modalL`} Position="center" ClosePopUp={ModalClosehandle} ClassName={styles.category_modal}>
            <ModalHeader title="Select Categories" />
            <ModalBody className={styles.Category_Body}>
                <ul className={styles.ListWrapper_Header}>
                    <li className={styles.Item_wrap_header}>
                        <div className={styles.label_Item}>
                            <div className={styles.selectAll_Custom_checkbox}>
                                <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                    checked={selectedIds?.length && getCategorylistData?.data?.length && selectedIds?.length === getCategorylistData?.data?.length}
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
                    <p className={styles.titleProduct}>PRODUCTS</p>
                </div>
                <ul className={styles.ListWrapper}>
                    {getCategorylistSuccess ? getCategorylistData &&
                        getCategorylistData?.data && getCategorylistData?.data?.length ?
                        getCategorylistData?.data?.map((item, key) => (
                            <React.Fragment key={key}>
                                {item.categoryName?.toLowerCase()?.includes(searchTerm?.toLowerCase()) &&
                                    <li key={key} className={styles.Item}>
                                        <div className={styles.label_Item}>
                                            <div className={styles.custom_checkbox}>
                                                <input type="checkbox" className={styles.checkbox} id={`category_${item?._id}`} onChange={(e) => handleCheckbox(e, item?._id)}
                                                    checked={selectedIds.includes(item?._id)} />
                                                <label htmlFor={`category_${item?._id}`} data-content={idIndex(item?._id)}></label>
                                            </div>
                                            <div className={styles.image_wrap}>
                                                <ImageElement
                                                    className={styles.Item_image}
                                                    src={item?.picture?.src || ""}
                                                    defaultImage={dummyImg}
                                                />
                                            </div>
                                            {/* <Image className={styles.Item_image} src={item?.picture?.src || ""} alt="List Image" height="56" width="56" /> */}
                                            <ol className={styles.bradcrumb_wrap}>
                                                <li className={styles.bradcrumb_Item}>{item?.categoryName}</li>
                                            </ol>
                                        </div>
                                        <p className={styles.count_title_product}>{item?.productsTotal}</p>
                                    </li>}
                                {item?.subcategories && item?.subcategories?.length > 0 ? item?.subcategories?.map((subItem, subkey) => {
                                    return (
                                        <React.Fragment key={subkey}>
                                            {(subItem?.subCategoryName?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                                                item.categoryName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) &&
                                                <li key={key} className={styles.Item}>
                                                    <div className={styles.label_Item}>
                                                        <div className={styles.custom_checkbox}>
                                                            <input type="checkbox" className={styles.checkbox} id={`sub_category_${subItem?._id}`} onChange={(e) => handleCheckbox(e, subItem?._id)}
                                                                checked={selectedIds.includes(subItem?._id)} />
                                                            <label htmlFor={`sub_category_${subItem?._id}`} data-content={idIndex(subItem?._id)}></label>
                                                        </div>
                                                        {/* <Image
                                                        className={styles.Item_image}
                                                        src={subItem?.picture?.src || ""}
                                                        alt="List Image"
                                                        height="56"
                                                        width="56"
                                                    /> */}
                                                        <div className={styles.image_wrap}>
                                                            <ImageElement
                                                                className={styles.Item_image}
                                                                src={subItem?.picture?.src || ""}
                                                                defaultImage={dummyImg}
                                                            />
                                                        </div>
                                                        <ol className={styles.bradcrumb_wrap}>
                                                            <li className={styles.bradcrumb_Item}>{`${item?.categoryName} > ${subItem?.subCategoryName}`}</li>
                                                        </ol>
                                                    </div>
                                                    <p className={styles.count_title_product}>{subItem?.productsTotal}</p>
                                                </li>
                                            }
                                            {subItem?.subsubcategories &&
                                                subItem?.subsubcategories?.length > 0 ? subItem?.subsubcategories?.map((subSubItem, subSubKey) => {
                                                    return (
                                                        <React.Fragment key={subSubKey}>
                                                            {(subItem?.subCategoryName?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                                                                item.categoryName?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                                                                subSubItem?.subSubCategoryName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) &&
                                                                <li key={key} className={styles.Item}>
                                                                    <div className={styles.label_Item}>
                                                                        <div className={styles.custom_checkbox}>
                                                                            <input type="checkbox" className={styles.checkbox} id={`sub_sub_category_${subSubItem?._id}`} onChange={(e) => handleCheckbox(e, subSubItem?._id)}
                                                                                checked={selectedIds.includes(subSubItem?._id)} />
                                                                            <label htmlFor={`sub_sub_category_${subSubItem?._id}`} data-content={idIndex(subSubItem?._id)}></label>
                                                                        </div>
                                                                        <div className={styles.image_wrap}>
                                                                            <ImageElement
                                                                                className={styles.Item_image}
                                                                                src={subSubItem?.picture?.src || ""}
                                                                                defaultImage={dummyImg}
                                                                            />
                                                                        </div>

                                                                        <ol className={styles.bradcrumb_wrap}>
                                                                            <li className={styles.bradcrumb_Item}>{`${item?.categoryName} > ${subItem?.subCategoryName} > ${subSubItem?.subSubCategoryName}`}</li>
                                                                        </ol>
                                                                    </div>
                                                                    <p className={styles.count_title_product}>{subSubItem?.productsTotal}</p>
                                                                </li>}
                                                        </React.Fragment>
                                                    )
                                                }) : ("")
                                            }
                                        </React.Fragment>
                                    )
                                }) : ("")
                                }
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
                            onClick={handleAddCategories} disabled={!selectedIds?.length} >Add Categories</button>
                    </div>
                </div>
            </ModalsFooter>
        </Modals>
    )
})

CategoryPopup.displayName = "CategoryPopup"

export default CategoryPopup;