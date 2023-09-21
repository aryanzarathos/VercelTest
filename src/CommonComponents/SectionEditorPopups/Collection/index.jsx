import React, { forwardRef, useEffect, useState } from 'react';
// import styles from "./AltTextPopup.module.scss";
import Modals from '../../Modals';
import ModalHeader from '../../Modals/ModalsHeader';
import ModalBody from '../../Modals/ModalsBody';
import ModalsFooter from '../../Modals/ModalsFooter';
import styles from "./Collection.module.scss"
import Image from 'next/image';
// import Sort from "../../../Assets/SiteEditor/Icons/Sort.svg"
import Sort from '../../../Assets/SiteEditor/Icons/sort.svg';
import ShortDropDown from '@/CommonComponents/SortDropDown/ShortDropDown';
import { getCollectionList } from '@/store/actions/ecomCollections';
import { useDispatch, useSelector } from 'react-redux';
import useTemplateData from '@/CustomHooks/useTemplateData';
import SearchControl from '@/CommonComponents/SearchControl';
import ValidationFile from '@/Classes/ValidationFile';
import { updateManagePopupData } from '@/store/actions/managePopups';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import { dummyImg } from '@/Constant/constants';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';

const dataList = [
    {
        id: "1",
        CategoryLavel: ["wear the treand"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "2",
        CategoryLavel: ["wear the treand", "ghfd"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "3",
        CategoryLavel: ["wear the treand"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "4",
        CategoryLavel: ["wear the treand"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "5",
        CategoryLavel: ["wear the treand"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    },
    {
        id: "6",
        CategoryLavel: ["wear the treand"],
        url: "https://images.unsplash.com/photo-1620217491382-4772d58bc863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        CountList: "12"
    }
]

// eslint-disable-next-line react/display-name
const CollectionPopup = forwardRef(({ children }) => {

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

    const user = useSelector((state) => state.user);

    const { adminCollectionList } = useSelector((state) => state.collection);

    const { modalState } = useSelector((state) => {
        return {
            modalState: state.commonStates.modalState
        }
    })

    useEffect(() => {
        if (modalState) {
            dispatch(getCollectionList(user.user_business));
        }
    }, [dispatch, user.user_business, modalState])

    const ModalClosehandle = () => {
        setSelectedIds([])
        children.onclose()
    }

    const handleAddCollection = () => {
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
                adminCollectionList?.data?.map((item) => {
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
            gridData?.data?.map((item) => {
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
    return (
        <Modals ref={children.ref} ModalsSize={`modalL`} Position="center" ClosePopUp={ModalClosehandle} ClassName={styles.collection_modal}>
            <ModalHeader title="Select Collection" />
            <ModalBody className={styles.Collection_Body}>
                <ul className={styles.ListWrapper_Header}>
                    <li className={styles.Item_wrap_header}>
                        <div className={styles.label_Item}>
                            <div className={styles.selectAll_Custom_checkbox}>
                                <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                    checked={selectedIds?.length && adminCollectionList?.data?.length && selectedIds?.length === adminCollectionList?.data?.length}
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
                    <p className={styles.title}>COLLECTION NAME</p>
                    <p className={styles.titleProduct}>PRODUCTS</p>
                </div>
                <ul className={styles.ListWrapper}>
                    {adminCollectionList?.success ?
                        adminCollectionList?.data && adminCollectionList?.data?.length ?
                            adminCollectionList?.data?.filter((coll) => {
                                return (
                                    coll?.collectionName
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                                );
                            }).map((item, key) => (
                                <li key={key} className={styles.Item}>
                                    <div className={styles.label_Item}>
                                        <div className={styles.custom_checkbox}>
                                            <input type="checkbox" className={styles.checkbox} id={key} onChange={(e) => handleCheckbox(e, item?._id)} checked={selectedIds.includes(item?._id)} />
                                            <label htmlFor={key} data-content={idIndex(item?._id)}></label>
                                        </div>
                                        <div className={styles.image_wrap}>
                                            <ImageElement
                                                className={styles.Item_image}
                                                src={item?.picture?.length && item?.picture[0]?.src || ""}
                                                defaultImage={dummyImg}
                                            />
                                        </div>
                                        {/* <Image className={styles.Item_image} src={item?.picture?.length && item?.picture[0]?.src || ""} alt="List Image" height="56" width="56" /> */}
                                        <ol className={styles.bradcrumb_wrap}>
                                            <li key={key} className={styles.bradcrumb_Item}>{item?.collectionName}</li>
                                        </ol>
                                    </div>
                                    <p className={styles.count_title_product}>{item?.productCount}</p>
                                </li>
                            ))
                            :
                            <RecordNotFound text={"No Collections Available to Display. Collections added to the dashboard will be displayed here."} />
                        :
                        <SpinnerLoader />
                    }
                </ul>
            </ModalBody>
            <ModalsFooter className={styles.Collection_Foot_Wrap}>
                <div className={styles.Collection_Foot}>
                    <p>{selectedIds.length || 0} Selected</p>
                    <div className={styles.button_group}>
                        <button className={`button btn-o-silver btn-xs btn-oval`} onClick={ModalClosehandle} >Cancel</button>
                        <button className={`button  btn-xs btn-oval ${selectedIds?.length ? "button-primary" : "button-gray"}`}
                            onClick={handleAddCollection} disabled={!selectedIds?.length || selectedIds.includes(null)} >Add Collection</button>
                    </div>
                </div>
            </ModalsFooter>
        </Modals>
    )
})



export default CollectionPopup;