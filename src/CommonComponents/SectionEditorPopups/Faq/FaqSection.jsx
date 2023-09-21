import SearchControl from '@/CommonComponents/SearchControl'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from "./Faq.module.scss"
import ToastEditDelete from './ToastEditDelete'
import { deleteFaq, getFaq, searchFaq } from '@/store/actions/Faq'
import { useDispatch, useSelector } from 'react-redux'
import useTemplateData from '@/CustomHooks/useTemplateData'
import ValidationFile from '@/Classes/ValidationFile'
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound'
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader'



const FaqSection = ({ dataList, setaddTestimonial, setEditData, onLoadSelectedCount, isFilled, setIsFilled }) => {


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
    const faqList = useSelector((state) => state.Faq.faqList.data);
    const faqSuccess = useSelector((state) => state.Faq.faqList.success);
    const [selectedIds, setSelectedIds] = useState([]);
    const [isToast, setisToast] = useState(false);
    const [selectedElement, setSelectedElement] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const HandleNewTestimonial = () => {
        setaddTestimonial(true)
    }

    const HandleToast = (item) => {
        if (isToast === item?._id) {
            setisToast(false)
        } else {
            setisToast(item?._id);
        }
        setSelectedElement(item);
    }

    const handleDelete = (e) => {
        let array = selectedIds;
        e.stopPropagation()
        dispatch(deleteFaq(selectedElement?._id, "Ecommerce"));
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
            dispatch(searchFaq(user.user_business, searchTerm, "Ecommerce"))
        }
        else
            dispatch(getFaq(user.user_business, "Ecommerce"));

    }, [dispatch, searchTerm])

    const handleCheckbox = (e, _id, type) => {
        if (type === "SelectAll") {
            let array = selectedIds
            if (e.target.checked) {
                faqList.map((item) => {
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
        if (gridData?.data?.length && faqSuccess && !isFilled) {
            let array = []
            gridData.data.map((item) => {
                array.push(item._id)
            })
            setSelectedIds([...array])
            setIsFilled(true)
        }
    }, [gridData, isFilled, faqSuccess])

    useEffect(() => {
        onLoadSelectedCount(selectedIds);
    }, [selectedIds])

    return (
        <div className={styles.Faq_Container}>
            <ul className={styles.ListWrapper_Header}>
                <li className={styles.Item_wrap_header}>
                    <div className={styles.label_Item}>
                        <div className={styles.selectAll_Custom_checkbox}>
                            <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                checked={selectedIds?.length && faqList?.length && selectedIds?.length === faqList?.length}
                                onChange={(e) => handleCheckbox(e, "", "SelectAll")} />
                            <label htmlFor={`checkbox`} ></label>
                        </div>
                        <p className={styles.count_title}>Select All</p>
                    </div>
                    <div />
                    <div className={styles.searchWrapper}>
                        <SearchControl placeholder={"Search..."} border={true} className={styles.searchbar} value={searchTerm}
                            onChange={handleSearch} reset={() => setSearchTerm("")} />
                        <button className={styles.add_Testimonial_btn} onClick={() => HandleNewTestimonial()}>+ Add new FAQ</button>
                    </div>
                </li>
            </ul>
            <div className={styles.List_Item}>
                <p className={styles.title}>QUESTION</p>
                <p className={styles.title_Desination}>ANSWER</p>

            </div>
            <ul className={styles.ListWrapper}>
                {faqSuccess ?
                    faqList && faqList.length ? faqList.map((item, key) => (
                        <li key={key} className={styles.Item}>
                            <div className={styles.label_Item}>
                                <div className={styles.custom_checkbox}>
                                    <input type="checkbox" className={styles.checkbox} id={key} onChange={(e) => handleCheckbox(e, item?._id)}
                                        checked={selectedIds.includes(item?._id)} />
                                    <label htmlFor={key} data-content={idIndex(item?._id)}></label>
                                </div>

                                <ol className={styles.bradcrumb_wrap}>
                                    <li className={styles.bradcrumb_Item}>{item?.title}</li>
                                </ol>
                            </div>
                            <div className={styles.testimonial_wrap}>
                                <p className={styles.count_title_product}
                                    dangerouslySetInnerHTML={{
                                        __html: item?.description ? item?.description
                                            : "",
                                    }}
                                ></p>
                                <div className={styles.ellips} onClick={() => HandleToast(item)}>&#8942;
                                    {isToast === item?._id &&
                                        <ToastEditDelete item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
                                    }</div>
                            </div>
                        </li>
                    ))
                        :
                        <RecordNotFound text={"No FAQs found."} />
                    :
                    <SpinnerLoader />
                }
            </ul>
        </div>
    )
}

export default FaqSection