import SearchControl from '@/CommonComponents/SearchControl'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "./FacilitiesPopup.module.scss"
import ToastEditDelete from '../Faq/ToastEditDelete'
import { useDispatch, useSelector } from 'react-redux'
import ValidationFile from '@/Classes/ValidationFile'
import useTemplateData from '@/CustomHooks/useTemplateData'
import ShortDropDown from '@/CommonComponents/SortDropDown/ShortDropDown'
import DefaultImg from '../../../Assets/images/default.png'
import { deleteService, readServicesList, searchServices, sortServices } from '@/store/actions/services'
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound'
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader'

const Testimonial = ({ dataList, setaddTestimonial, setEditData, onLoadSelectedCount }) => {

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
    const user = useSelector((state) => state.user)
    const list = useSelector((state) => state.services.list.data);
    const Success = useSelector((state) => state.services.list.success);
    const [selectedIds, setSelectedIds] = useState([])
    const [isToast, setisToast] = useState(false);
    const [selectedElement, setSelectedElement] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const sortvalue = ["All", "Active", "Saved", "Inactive"];

    const HandleToast = (item) => {
        if (isToast === item?._id) {
            setisToast(false)
        } else {
            setisToast(item?._id);
        }
        setSelectedElement(item);
    }

    const HandleNewTestimonial = () => {
        setaddTestimonial(true)
    }

    const handleDelete = (e) => {
        let array = selectedIds;
        e.stopPropagation()
        dispatch(deleteService(selectedElement?._id, "Ecommerce"));
        let index = array.indexOf(selectedElement?._id)
        array.splice(index, 1)
        setSelectedIds([...array]);
    }

    const handleEdit = () => {
        setaddTestimonial(true);
        setEditData(selectedElement);
    }

    const handleSearch = (e) => {
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        setSearchTerm(value);
    }

    useEffect(() => {
        if (searchTerm) {
            dispatch(searchServices(user.user_business, searchTerm, "Ecommerce"));
        }
        else
            dispatch(readServicesList(user.user_institute, "Ecommerce"));
    }, [dispatch, searchTerm])

    const handleCheckbox = (e, _id, type) => {
        if (type === "SelectAll") {
            let array = selectedIds
            if (e.target.checked) {
                list.map((item) => {
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
                array.push(item._id)
            })
            setSelectedIds([...array])
        }
    }, [gridData])

    useEffect(() => {
        onLoadSelectedCount(selectedIds);
    }, [selectedIds])

    const handleSort = (val) => {
        if (val === "All")
            dispatch(readServicesList(user.user_institute, "Ecommerce"));
        else
            dispatch(sortServices(user.user_business, val, "Ecommerce"));
    }


    return (
        <div className={styles.testimonial_Container}>
            <ul className={styles.ListWrapper_Header}>
                <li className={styles.Item_wrap_header}>
                    <div className={styles.label_Item}>
                        <div className={styles.selectAll_Custom_checkbox}>
                            <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                checked={selectedIds?.length && list?.length && selectedIds?.length === list?.length}
                                onChange={(e) => handleCheckbox(e, "", "SelectAll")} />
                            <label htmlFor={`checkbox`} ></label>
                        </div>
                        <p className={styles.count_title}>Select All</p>
                    </div>
                    {/* <div /> */}
                    <div className={styles.searchWrapper}>
                        <SearchControl placeholder={"Search..."} border={true} classNameWrappper={styles.searchbarWrapper} className={styles.searchbar} value={searchTerm}
                            onChange={handleSearch} reset={() => setSearchTerm("")} />
                        {/* <ShortDropDown values={sortvalue} onChange={handleSort} /> */}
                        <button className={styles.add_Testimonial_btn} onClick={() => HandleNewTestimonial()}>+ Add Facilities</button>
                    </div>
                </li>
            </ul>
            <div className={styles.List_Item}>
                <p className={styles.title}>CATEGORY</p>
                <p className={styles.title_Desination}>NO. OF SERVICES</p>

            </div>
            <ul className={styles.ListWrapper}>
                {Success ?
                    list && list.length ? list.map((item, key) => (
                        <li key={key} className={styles.Item}>
                            <div className={styles.label_Item}>
                                <div className={styles.custom_checkbox}>
                                    <input type="checkbox" className={styles.checkbox} id={key} onChange={(e) => handleCheckbox(e, item?._id)} checked={selectedIds.includes(item?._id)} />
                                    <label htmlFor={key} data-content={idIndex(item?._id)}></label>
                                </div>
                                <Image className={styles.Item_image} src={item?.thumbnail?.src ? item?.thumbnail?.src : DefaultImg} alt="List Image" height="56" width="56" />
                                <ol className={styles.bradcrumb_wrap}>
                                    <li className={styles.bradcrumb_Item}>{item?.title}</li>
                                </ol>
                            </div>

                            <div className={styles.testimonial_wrap}>
                                <p className={styles.count_title_product}
                                    dangerouslySetInnerHTML={{
                                        __html: item?.details ? item?.details
                                            : "",
                                    }}
                                ></p>
                                <div className={styles.ellips} onClick={() => HandleToast(item)}>&#8942;
                                    {isToast === item?._id &&
                                        <ToastEditDelete item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                        :
                        <RecordNotFound text={'No facilities found.'} />
                    :
                    <SpinnerLoader />
                }
            </ul>
        </div>
    )
}

export default Testimonial