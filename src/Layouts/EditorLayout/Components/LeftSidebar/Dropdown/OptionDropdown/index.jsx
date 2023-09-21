import React, { useEffect, useRef, useState } from 'react';
import styles from "./CrudDopdown.module.scss"
import RenamePages from '../../../ManagePages/renamePages';
import SeoSettingPages from '../../PagesPopup/SeoPopup/seoSetting';
import { useDispatch, useSelector } from 'react-redux';
import { deletePages, editPageData } from '@/store/actions/siteEditor';
import ConfirmationPopup from '@/CommonComponents/ConfirmationPopup';
import { RESET_DELETE_PAGES_DATA } from '@/store/reducers/SiteEditor';
import { fetchTemplateDataEDITOR } from '@/CommonFunctions/fetchTemplateData';
import useAppLocation from '@/CustomHooks/useLocation';
import { GET_TEMPLATE } from '@/store/reducers/websiteTemplate';
import useTemplateId from '@/CustomHooks/useTemplateId';
import Auth from '@/Classes/Auth';


const CrudDopdown = ({ item }) => {
    const TemplateId = useTemplateId()
    const dispatch = useDispatch();
    const SeoRef = useRef(null);
    const RenameRef = useRef(null);
    const DeleteRef = useRef(null);
    const [pathname, getCurrentLocation] = useAppLocation();

    const { user, getTemplateData, deleteSuccess } = useSelector((state) => {
        return {
            user: state.user,
            getTemplateData: state.websiteTemplate.getTemplate.data,
            deleteSuccess: state.editor.deletePages.success
        }
    })

    const handleHideBtn = () => {
        dispatch(editPageData({
            id: user?.user_business, pageId: item?._id,
            body: {
                ...item, isHide: true,
                pageEditable: item?.pageEditable?.map((data) => data === "Hide" ? "unHide" : data)
            },
        }));
    }

    const handleUnHideBTn = () => {
        dispatch(editPageData({
            id: user?.user_business, pageId: item?._id,
            body: {
                ...item, isHide: false,
                pageEditable: item?.pageEditable?.map((data) => data === "unHide" ? "Hide" : data)
            },
        }));
    }

    const RenamePopuphandle = () => {
        RenameRef.current.open();
    }
    const RenameClosePopuphandle = () => {
        RenameRef.current.close();
    }

    const handleRenameBtn = (pageName) => {
        dispatch(editPageData({ id: user?.user_business, pageId: item?._id, body: { page_name: pageName } }));
        RenameClosePopuphandle();
    }

    const deletePopuphandle = () => {
        DeleteRef.current.open();
    }
    const deleteClosePopuphandle = () => {
        DeleteRef.current.close();
    }

    const handleDeleteBtn = () => {
        dispatch(deletePages({
            id: user?.user_business, pageId: item?._id, templateId: TemplateId, body: {}
        }));
        deleteClosePopuphandle();
    }

    const InitialFunction = async () => {
        if (TemplateId !== "[...index]" && TemplateId) {
            let authro = Auth.token();
            let hash = Auth.hash();
            dispatch(RESET_DELETE_PAGES_DATA());
            let data = await fetchTemplateDataEDITOR(getCurrentLocation() === "/" ? "home" : getCurrentLocation(), TemplateId, authro, hash);
            dispatch(GET_TEMPLATE(data?.data && data?.data.length ? data?.data[0] : []))
        }
    }

    useEffect(() => {
        if (deleteSuccess) {
            InitialFunction();
        }
    }, [deleteSuccess, TemplateId])

    const SeoPopuphandle = () => {
        SeoRef.current.open();
    }
    const SeoClosePopuphandle = () => {
        SeoRef.current.close();
    }

    const handleBtnActions = (value) => {
        switch (value) {
            case "Rename":
                RenamePopuphandle();
                break;
            case "Hide":
                handleHideBtn();
                break;
            case "unHide":
                handleUnHideBTn();
                break;
            case "Delete":
                deletePopuphandle();
                break;
            case "Seo":
                SeoPopuphandle();
                break;
            default:
                break;
        }

    }

    return (
        <React.Fragment>
            <div className={styles.DropdownWrapper} >
                {/* {item?.nameEditable &&
                    <button type='button' onClick={RenamePopuphandle}><i className={styles.Rename}></i> Rename</button>
                }
                {item?.hideEditable &&
                    <>
                        {
                            item?.isHide ? (
                                <button type='button' onClick={handleUnHideBTn}><i className={`${styles.unHide}`}></i> Unhide</button>
                            ) : (
                                <button type='button' onClick={handleHideBtn}><i className={`${styles.Hide}`}></i> Hide</button>
                            )
                        }
                    </>
                }
                {item?.deleteEditable &&
                    <>
                        {item?.isTrash === false ?
                            <button type='button' onClick={deletePopuphandle} ><i className={styles.Delete}></i> Delete</button>
                            : ""
                        }
                    </>
                }
                {item?.seoEditable &&
                    <button type='button' onClick={SeoPopuphandle}><i className={styles.Seo} ></i> SEO</button>
                } */}
                {
                    item?.pageEditable?.map((pageItem, i) => {
                        return (
                            <React.Fragment key={i}>
                                <button type='button' onClick={() => handleBtnActions(pageItem)}><i className={styles[pageItem]}></i> {pageItem}</button>
                            </React.Fragment>
                        )
                    })
                }
            </div>
            {
                <RenamePages ModalsRef={RenameRef} onclose={RenameClosePopuphandle} title={"Rename Page"} btnName={"Done"}
                    addNewPage={(val) => handleRenameBtn(val)} defaultValue={item?.page_name} />
            }
            {
                <SeoSettingPages ModalsRef={SeoRef} onclose={SeoClosePopuphandle} user={user} item={item} />
            }
            <ConfirmationPopup ref={DeleteRef} onclose={deleteClosePopuphandle} title={"Delete Page?"} buttonTitle1={"No"}
                subTitle={"Are you sure you want to delete this page?"} buttonTitle2={"Yes"} confirmDeleteItem={handleDeleteBtn} />
        </React.Fragment>
    )
}

export default CrudDopdown