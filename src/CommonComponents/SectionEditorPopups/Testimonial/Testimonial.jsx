import SearchControl from '@/CommonComponents/SearchControl'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "./Testimonial.module.scss"
import ToastEditDelete from '../Faq/ToastEditDelete'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTestimonial, getTestimonial, searchTestimonial } from '@/store/actions/Testimonial'
import ValidationFile from '@/Classes/ValidationFile'
import useTemplateData from '@/CustomHooks/useTemplateData'
import { dummyUserImg2 } from '@/Constant/constants'
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement'
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import loaderImage from "../../../Assets/SiteEditor/images/loaderImage.gif";
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
    const user = useSelector((state) => state.user);
    const testimonialSuccess = useSelector((state) => state.testimonial.TestimonialList.success);
    const testimonialList = useSelector((state) => state.testimonial.TestimonialList.data);
    const [selectedIds, setSelectedIds] = useState([])
    const [isToast, setisToast] = useState(false);
    const [selectedElement, setSelectedElement] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

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
        dispatch(deleteTestimonial(selectedElement?._id, "Ecommerce"));
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
            dispatch(searchTestimonial(user.user_business, searchTerm, "Ecommerce"))
        }
        else
            dispatch(getTestimonial(user.user_business, "Ecommerce"));
    }, [dispatch, searchTerm])

    const handleCheckbox = (e, _id, type) => {
        if (type === "SelectAll") {
            let array = selectedIds
            if (e.target.checked) {
                testimonialList.map((item) => {
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

    return (
        <div className={styles.testimonial_Container}>
            <ul className={styles.ListWrapper_Header}>
                <li className={styles.Item_wrap_header}>
                    <div className={styles.label_Item}>
                        <div className={styles.selectAll_Custom_checkbox}>
                            <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                checked={selectedIds?.length && testimonialList?.length && selectedIds?.length === testimonialList?.length}
                                onChange={(e) => handleCheckbox(e, "", "SelectAll")} />
                            <label htmlFor={`checkbox`} ></label>
                        </div>
                        <p className={styles.count_title}>Select All</p>
                    </div>
                    <div />
                    <div className={styles.searchWrapper}>
                        <SearchControl placeholder={"Search..."} border={true} className={styles.searchbar} value={searchTerm}
                            onChange={handleSearch} reset={() => setSearchTerm("")} />
                        <button className={styles.add_Testimonial_btn} onClick={() => HandleNewTestimonial()}>+ Add new Testimonial</button>
                    </div>
                </li>
            </ul>
            <div className={styles.List_Item}>
                <p className={styles.title}>NAME</p>
                <p className={styles.title_Desination}>DESIGNATION</p>
                <p className={styles.titleProduct}>TESTIMONIAL</p>
            </div>
            <ul className={styles.ListWrapper}>
                {testimonialSuccess ?
                    testimonialList && testimonialList.length ? testimonialList.map((item, key) => (
                        <li key={key} className={styles.Item}>
                            <div className={styles.label_Item}>
                                <div className={styles.custom_checkbox}>
                                    <input type="checkbox" className={styles.checkbox} id={key} onChange={(e) => handleCheckbox(e, item?._id)} checked={selectedIds.includes(item?._id)} />
                                    <label htmlFor={key} data-content={idIndex(item?._id)}></label>
                                </div>
                                <div className={styles.image_wrap}>

                                    <ImageElement
                                        className={styles.Item_image}
                                        src={item?.thumbnail?.src}
                                        defaultImage={dummyUserImg2}
                                    />
                                </div>
                                {/* <Image className={styles.Item_image} src={item?.thumbnail?.src} alt="List Image" height="56" width="56" /> */}
                                <ol className={styles.bradcrumb_wrap}>
                                    <li className={styles.bradcrumb_Item}>{item?.name}</li>
                                </ol>
                            </div>
                            <p className={styles.count_title_product}>{item?.designation}</p>
                            <div className={styles.testimonial_wrap}>
                                <p className={styles.count_title_product}
                                    dangerouslySetInnerHTML={{
                                        __html: item?.message ? item?.message
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
                        <RecordNotFound text={"No testimonials found."} />
                    : <SpinnerLoader />

                }
            </ul>
        </div>
    )
}

export default Testimonial