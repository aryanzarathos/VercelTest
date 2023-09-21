import React, { forwardRef, useEffect, useState } from 'react';
import Modals from '../../Modals';
import ModalHeader from '../../Modals/ModalsHeader';
import ModalBody from '../../Modals/ModalsBody';
import ModalsFooter from '../../Modals/ModalsFooter';
import styles from "./Faq.module.scss"
import FaqSection from './FaqSection';
import NewFaqSection from './NewFaqSection';
import { useDispatch, useSelector } from 'react-redux';
import { getFaq, postFaq, updateFaqList } from '@/store/actions/Faq';
import ValidationUtils from '@/Classes/ValidationUtils';
import { updateManagePopupData } from '@/store/actions/managePopups';
import useTemplateData from '@/CustomHooks/useTemplateData';

const dataList = [
    {
        id: "1",
        question: ["Is there a free trial available ?"],
        answer: "A technical lead is a professional is oversees a team of technical around the world to see if the current jshd sdjsh sdjhsjkd "

    },
    {
        id: "2",
        question: ["Can I change my plan later ?"],
        answer: "A technical lead is a professional is oversees a team of technical around the world to see if the current..."

    },
    {
        id: "3",
        question: ["What is your cancellation policy ?"],
        answer: "A technical lead is a professional is oversees a team of technical around the world to see if the current..."

    },
    {
        id: "4",
        question: ["Can other info be added to an invoice ?"],
        answer: "A technical lead is a professional is oversees a team of technical around the world to see if the current..."
    },
    {
        id: "5",
        question: ["How does billing work ?"],
        answer: "A technical lead is a professional is oversees a team of technical around the world to see if the current..."
    },
    {
        id: "6",
        question: ["What is your cancellation policy ?"],
        answer: "A technical lead is a professional is oversees a team of technical around the world to see if the current..."
    }
]

// eslint-disable-next-line react/display-name
const FaqPopup = forwardRef(({ children }) => {

    const dispatch = useDispatch();
    const [isFilled, setIsFilled] = useState(false)
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

    const [addTestimonial, setaddTestimonial] = useState();
    const [payloadData, setPayloadData] = useState({});
    const [editData, setEditData] = useState("");
    const [count, setCount] = useState(0);
    const [nameErr, setNameErr] = useState(false);
    const user = useSelector((state) => state.user);

    const HandleTestimonial = () => {
        setaddTestimonial(false);
        setIsFilled(false)
        setEditData("");
    }

    const ModalClosehandle = () => {
        children.onclose();
        setaddTestimonial(false);
        setIsFilled(false)
    }

    const handleOnChange = (data) => {
        setPayloadData(data);
        setNameErr(false);
    }

    const handleSaveBtn = () => {
        if (ValidationUtils.isNotEmpty(payloadData?.title)) {
            dispatch(postFaq([payloadData], "Ecommerce"));
            setaddTestimonial(false);
            setIsFilled(false)
        }
        else {
            setNameErr(true);
        }
    }

    const handleUpdateBtn = () => {
        if (ValidationUtils.isNotEmpty(payloadData?.title)) {
            dispatch(updateFaqList(editData?._id, payloadData, "Ecommerce"));
            setaddTestimonial(false);
            setEditData("");
            setIsFilled(false)
        }
        else {
            setNameErr(true);
        }
    }

    const handleAddFAQ = () => {
        dispatch(
            updateManagePopupData({
                body: { data: count },
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

    const handleSelectedCount = (val) => {
        setCount(val);
    }

    useEffect(() => {
        dispatch(getFaq(user.user_business, "Ecommerce"));
    }, [dispatch])

    return (
        <Modals ref={children.ref} ModalsSize={`modalL`} Position="center" ClosePopUp={ModalClosehandle} ClassName={styles.Faq_modal}>
            <ModalHeader title="Select FAQs" />
            <ModalBody className={styles.Faq_Body}>
                {!addTestimonial ?
                    <FaqSection dataList={dataList} setaddTestimonial={setaddTestimonial}
                        setEditData={setEditData} onLoadSelectedCount={(val) => handleSelectedCount(val)} isFilled={isFilled} setIsFilled={setIsFilled} /> :
                    <NewFaqSection onLoadDataChange={(data) => handleOnChange(data)} editData={editData} nameErr={nameErr} />}
            </ModalBody>

            <ModalsFooter className={styles.Faq_Foot_Wrap}>
                <div className={styles.Faq_Foot}>
                    {!addTestimonial ?
                        <p>{count?.length} Selected</p>
                        : ""
                    }
                    <div className={styles.button_group}>
                        {!addTestimonial ?
                            <button className={`button btn-o-silver btn-xs btn-oval`} onClick={ModalClosehandle} >Cancel</button> :
                            <button className={`button btn-o-silver btn-xs btn-oval`} onClick={() => HandleTestimonial()}>Go back</button>
                        }
                        {!addTestimonial ?
                            <button className={`button  btn-xs btn-oval ${count?.length ? "button-primary" : "button-gray"}`} disabled={!count?.length}
                                onClick={handleAddFAQ}>Add FAQs</button> :
                            <>
                                {editData ?
                                    <button className={`button button-primary btn-xs btn-oval`} onClick={() => handleUpdateBtn()} >Update</button>
                                    :
                                    <button className={`button button-primary btn-xs btn-oval`} onClick={() => handleSaveBtn()} >Save</button>}
                            </>
                        }
                    </div>
                </div>
            </ModalsFooter>
        </Modals >
    )
})



export default FaqPopup;