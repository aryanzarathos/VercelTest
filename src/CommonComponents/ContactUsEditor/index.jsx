import React, { useEffect, useRef } from 'react'
import { BtnEditMedia, FormWrapper, MainImageEditor, MainWrapper } from './ContactUsEditor.style'
import { useState } from 'react';
import EditFormPopUp from './EditForm/EditFormPopUp';
import { useOutsideClick } from 'rooks';
// import { useContext } from 'react';
// import { MyContactContext } from '@/SectionComponents/ContactUs/MyContactContext';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '@/store/actions/contactus';
import AppLinkUrl from '../AppLink/AppLinkUrl';

const ContactUsEditor = ({ children }) => {
    const EditorRef = useRef(null);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);

    const { business, modalState } = useSelector((state) => {
        return {
            business: state.websiteTemplate.getTemplate.data?.businessData,
            modalState: state.commonStates?.modalState
        }
    })
    const {
        selectedElementActive,
        buttonActive
    } = useSelector((state) => state.editor.selectedIndexAndId);

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (EditorRef.current && !EditorRef.current.contains(event.target) && !modalState) {
    //             console.log("line 32 ENTERING FUNCTION",EditorRef.current)
    //             // Clicked outside the EditorRef, so close the popup
    //             setShowPopUp(false);
    //             setShow(false);
    //         }
    //     }

    //     document.addEventListener("mousedown", handleClickOutside);

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [EditorRef]);

    useOutsideClick(EditorRef, () => {
        if (EditorRef.current && !modalState) {
            console.log("line 32 ENTERING FUNCTION", EditorRef.current)
            // Clicked outside the EditorRef, so close the popup
            setShowPopUp(false);
            setShow(false);
        }
    })

    useEffect(() => {
        dispatch(getContactList(business?._id))
    }, [business, dispatch]);

    const openPopUp = () => {
        setShow(true);
        // setShowPopUp(true);
    }

    const ClosePopUp = (item) => {
        // setShowPopUp(item);
        setShow(item)
    }

    const ContactUsHandle = () => {
        // e.stopPropagation();
        // setShow(true)
        setShowPopUp(true)
    }


    // useOutsideClick(Editor, () => {
    //     if (modalState) {
    //     setShowPopUp(false)
    //     }else{
    //         setShow(false);
    //     }
    // })

    // console.log(EditorRef.current, 'modalState')
    return (
        <div ref={EditorRef}>
            {
                AppLinkUrl.isEditor() ? (
                    <MainWrapper className={showPopUp && "active"} onClick={() => ContactUsHandle()} >
                        <MainImageEditor>
                            {
                                showPopUp && <BtnEditMedia onClick={openPopUp}>Edit Form</BtnEditMedia>
                            }
                            <FormWrapper>
                                {
                                    children
                                }
                            </FormWrapper>
                        </MainImageEditor >
                        {
                            show && <EditFormPopUp ClosePopUp={ClosePopUp} />
                        }
                    </MainWrapper>
                ) : (

                    <MainImageEditor>
                        <FormWrapper>
                            {
                                children
                            }
                        </FormWrapper>
                    </MainImageEditor >
                )
            }

        </div>
    )
}

export default ContactUsEditor
