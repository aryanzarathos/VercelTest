import React, { forwardRef, useEffect, useState } from 'react';
// import styles from "./AltTextPopup.module.scss";
import Modals from '../../Modals';
import ModalHeader from '../../Modals/ModalsHeader';
import ModalBody from '../../Modals/ModalsBody';
import ModalsFooter from '../../Modals/ModalsFooter';
import styles from "./ServicesCollection.module.scss"
import Image from 'next/image';
// import Sort from "../../../Assets/SiteEditor/Icons/Sort.svg"
import Sort from '../../../Assets/SiteEditor/Icons/sort.svg';
import ShortDropDown from '@/CommonComponents/SortDropDown/ShortDropDown';
import SearchControl from '@/CommonComponents/SearchControl';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCollection } from '@/store/actions/AppointmentServices';
import ValidationFile from '@/Classes/ValidationFile';
import useTemplateData from '@/CustomHooks/useTemplateData';
import { updateManagePopupData } from '@/store/actions/managePopups';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import { dummyImg } from '@/Constant/constants';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';

const dataList = [
    {
        id: "1",
        CategoryLavel: ["Orthopedics"],
        url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
        CountList: "05"
    },
    {
        id: "2",
        CategoryLavel: ["Orthopedics"],
        url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
        CountList: "03"
    },
    {
        id: "3",
        CategoryLavel: ["Medicine"],
        url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
        CountList: "02"
    },
    {
        id: "4",
        CategoryLavel: ["Laboratory"],
        url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
        CountList: "12"
    },
    {
        id: "5",
        CategoryLavel: ["Laboratory"],
        url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
        CountList: "08"
    },
    {
        id: "6",
        CategoryLavel: ["Orthopedics"],
        url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
        CountList: "12"
    }
]

// eslint-disable-next-line react/display-name
const ServiceCollectionPopup = forwardRef(({ children }) => {

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

    const { user, getAllCollectionSuccess, getAllCollectiondata, modalState } = useSelector((state) => {
        return {
            user: state.user,
            getAllCollectiondata: state.bookAppointment.getAllCollection.data,
            getAllCollectionSuccess: state.bookAppointment.getAllCollection.success,
            modalState: state.commonStates.modalState
        }
    });

    useEffect(() => {
        if (modalState) {
            if (searchTerm) {
                dispatch(getAllCollection("Services", user.user_business, user._id, searchTerm));
            }
            else dispatch(getAllCollection("Services", user.user_business, user._id, ""));
        }
    }, [dispatch, user.user_business, searchTerm, modalState])

    const ModalClosehandle = () => {
        children.onclose()
        setSelectedIds([])
    }

    const handleCheckbox = (e, _id, type) => {
        if (type === "SelectAll") {
            let array = selectedIds
            if (e.target.checked) {
                getAllCollectiondata?.map((item) => {
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


    return (
        <Modals ref={children.ref} ModalsSize={`modalL`} Position="center" ClosePopUp={ModalClosehandle} ClassName={styles.Service_collection_modal}>
            <ModalHeader title="Select Collections" />
            <ModalBody className={styles.Collection_Body}>
                <ul className={styles.ListWrapper_Header}>
                    <li className={styles.Item_wrap_header}>
                        <div className={styles.label_Item}>
                            <div className={styles.selectAll_Custom_checkbox}>
                                <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                    checked={selectedIds?.length && getAllCollectiondata?.length && selectedIds?.length === getAllCollectiondata?.length}
                                    onChange={(e) => handleCheckbox(e, "", "SelectAll")} />
                                <label htmlFor={`checkbox`} ></label>
                            </div>
                            <p className={styles.count_title}>Select All</p>
                        </div>
                        <div className={styles.searchWrapper}>
                            <SearchControl placeholder={"Search..."} border={true} className={styles.searchbar} value={searchTerm}
                                onChange={handleSearch} reset={() => setSearchTerm("")} />
                        </div>
                    </li>
                </ul>
                <div className={styles.List_Item}>
                    <p className={styles.title}>COLLECTION</p>
                    <p className={styles.titleProduct}>NO. OF SERVICES</p>
                </div>
                <ul className={styles.ListWrapper}>
                    {getAllCollectionSuccess ? getAllCollectiondata && getAllCollectiondata?.length > 0 ?
                        getAllCollectiondata?.map((item, key) => (
                            <li key={key} className={styles.Item}>
                                <div className={styles.label_Item}>
                                    <div className={styles.custom_checkbox}>
                                        <input type="checkbox" className={styles.checkbox} id={key} onChange={(e) => handleCheckbox(e, item?._id)} checked={selectedIds.includes(item?._id)} />
                                        <label htmlFor={key} data-content={idIndex(item?._id)}></label>
                                    </div>
                                    <div className={styles.image_wrap}>
                                        <ImageElement
                                            className={styles.Item_image}
                                            src={item?.image?.src}
                                            defaultImage={dummyImg}
                                        />
                                    </div>
                                    {/* <Image className={styles.Item_image} src={item?.image?.src} alt="List Image" height="56" width="56" /> */}
                                    <ol className={styles.bradcrumb_wrap}>
                                        <li key={key} className={styles.bradcrumb_Item}>{item?.name}</li>
                                    </ol>
                                </div>
                                <p className={styles.count_title_product}>{item?.service?.length}</p>
                            </li>
                        ))
                        :
                        "No Collections Available to Display. Collections added to the dashboard will be displayed here."
                        :
                        <SpinnerLoader />
                    }
                </ul>
            </ModalBody>
            <ModalsFooter className={styles.Collection_Foot_Wrap}>
                <div className={styles.Collection_Foot}>
                    <p>{selectedIds?.length || 0} Selected</p>
                    <div className={styles.button_group}>
                        <button className={`button btn-o-silver btn-xs btn-oval`} onClick={ModalClosehandle} >Cancel</button>
                        <button className={`button  btn-xs btn-oval ${selectedIds?.length ? "button-primary" : "button-gray"}`}
                            onClick={handleAddCollection} disabled={!selectedIds?.length}>Add Collections</button>
                    </div>
                </div>
            </ModalsFooter>
        </Modals>
    )
})



export default ServiceCollectionPopup;