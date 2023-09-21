/* eslint-disable react/display-name */


import React, { forwardRef, useEffect, useState } from 'react';
import Modals from '../../Modals';
import ModalHeader from '../../Modals/ModalsHeader';
import ModalBody from '../../Modals/ModalsBody';
import ModalsFooter from '../../Modals/ModalsFooter';
import styles from "./BlogPopUp.module.scss"
import Image from 'next/image';
import SelectDropDown from '@/CommonComponents/SelectDropdown';
import SearchControl from '@/CommonComponents/SearchControl';
import ShortDropDown from '@/CommonComponents/SortDropDown/ShortDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogList, searchBlogs, sortBlogs } from '@/store/actions/blogs';
import useTemplateData from '@/CustomHooks/useTemplateData';
import ValidationFile from '@/Classes/ValidationFile';
import { updateManagePopupData } from '@/store/actions/managePopups';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import { dummyImg } from '@/Constant/constants';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';

const BlogPopup = forwardRef(({ children }) => {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const [selectedIds, setSelectedIds] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const sortvalue = ["OTR", "RTP"];

    const { blogList, blogs, modalState } = useSelector((state) => {
        return {
            blogList: state.instituteblogs.getBlogList.data,
            blogs: state.instituteblogs.getBlogList.success,
            modalState: state.commonStates.modalState
        }
    })

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


    useEffect(() => {
        if (modalState) {
            if (searchTerm) {
                dispatch(searchBlogs(user.user_business, searchTerm));
            }
            else
                dispatch(getBlogList(user.user_business));
        }
    }, [dispatch, user.user_business, searchTerm, modalState])

    const ModalClosehandle = () => {
        children.onclose();
        setSelectedIds([]);
    }

    const handleAddBlogs = () => {
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

    const handleCheckbox = (e, _id, type) => {
        if (type === "SelectAll") {
            let array = selectedIds
            if (e.target.checked) {
                blogList.map((item) => {
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
            if (children?.showSelectedData) {
                array = [];
                if (e.target.checked) {
                    array.push(_id)
                } else {
                    let index = array.indexOf(_id)
                    array.splice(index, 1)
                }
            }
            else {
                if (e.target.checked) {
                    array.push(_id)
                } else {
                    let index = array.indexOf(_id)
                    array.splice(index, 1)
                }
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

    const handleSort = (val) => {
        dispatch(sortBlogs(user.user_business, val));
    }

    return (
        <Modals ref={children.ref} ModalsSize={`modalL`} Position="center" ClosePopUp={ModalClosehandle} ClassName={styles.Blog_modal}>
            <ModalHeader title="Select Blogs" />
            <ModalBody className={styles.Blog_Body}>
                <ul className={styles.ListWrapper_Header}>
                    <li className={styles.Item_wrap_header}>
                        <div className={styles.label_Item}>
                            <div className={styles.selectAll_Custom_checkbox}>
                                <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                    checked={selectedIds?.length && blogList?.length && selectedIds?.length === blogList?.length}
                                    onChange={(e) => handleCheckbox(e, "", "SelectAll")} disabled={children?.showSelectedData} />
                                <label htmlFor={`checkbox`} ></label>
                            </div>
                            <p className={styles.count_title}>Select All</p>
                        </div>
                        <SearchControl placeholder={"Search..."} border={true} className={styles.searchbar} value={searchTerm}
                            onChange={handleSearch} reset={() => setSearchTerm("")} />
                        <ShortDropDown values={sortvalue} onChange={handleSort} />
                    </li>
                </ul>
                <div className={styles.List_Item}>
                    <p className={styles.title}>NAME</p>
                    <p className={styles.title}>CATEGORY</p>
                    <p className={styles.title}>AUTHOR</p>
                </div>
                <ul className={styles.ListWrapper}>
                    {blogs ?
                        blogList && blogList.length ? blogList.map((item, key) => (
                            <li key={key} className={styles.Item_wrap}>
                                <div className={styles.label_Item}>
                                    <div className={styles.custom_checkbox}>
                                        <input type="checkbox" className={styles.checkbox} id={key} onChange={(e) => handleCheckbox(e, item?._id)} checked={selectedIds.includes(item?._id)} />
                                        <label htmlFor={key} data-content={idIndex(item?._id)}></label>
                                    </div>
                                    <div className={styles.Image_wrapper}>
                                        {/* <Image className={styles.Item_image} src={item?.blog_image?.src || ""} alt="List Image" width={56} height={56} /> */}
                                        <div className={styles.image_wrap}>
                                            <ImageElement
                                                className={`${styles.Item_image} ${!item?.blog_image?.src? styles.ShowDefault:''}`}
                                                src={item?.blog_image?.src || ""}
                                                alt="List Image"
                                                defaultImage={dummyImg}
                                            />
                                        </div>
                                    </div>
                                    <li className={styles.bradcrumb_Item}>{item.title}</li>
                                </div>
                                <li className={styles.bradcrumb_Item}>{item.category && item?.category?.length ?
                                    item?.category[0]?.category_title : ""}</li>
                                <li className={styles.bradcrumb_Status}>{item.authotData && item?.authotData?.length ?
                                    item?.authotData[0]?.name : ""}</li>
                            </li>
                        ))
                            :
                            <RecordNotFound text={"No testimonials found."} />
                        :
                        <SpinnerLoader />
                    }
                </ul>
            </ModalBody>
            <ModalsFooter className={styles.Blog_Foot_Wrap}>
                <div className={styles.Blog_Foot}>
                    <p>{selectedIds.length || 0} Selected</p>
                    <div className={styles.button_group}>
                        <button className={`button btn-o-silver btn-xs btn-oval`} onClick={() => ModalClosehandle()}>Cancel</button>
                        <button className={`button button-primary btn-xs btn-oval`} onClick={() => handleAddBlogs()} >Add Blogs</button>
                    </div>
                </div>
            </ModalsFooter>
        </Modals>
    )
})

export default BlogPopup;