import React, { useEffect } from 'react'
import styles from "./mainHeader.module.scss";
import AccordianIcon from "../../../../../../Assets/SiteEditor/Icons/accordian-icon.svg"
import { useState } from 'react';
import LogoSite from './LogoSiteName';
import HeaderBackground from './HeaderBackground';
import OtherHeader from './OtherHeader';
import NavigationMenu from './NavigationMenu';
import HeaderStructure from './HeaderStructure';
import SwitchButton from '../../../../../../CommonComponents/SwitchButton';
import { useDispatch, useSelector } from 'react-redux';
import { getMainHeaderData, updateMainHeaderData } from '../../../../../../store/actions/siteEditor/index'
import { UPDATE_HEADER } from '@/store/reducers/websiteTemplate';
import { getGoogleFonts } from '@/store/actions/googleFonts';

// === accordian data === 
const accordianData = [
    {
        id: 1,
        title: "header Structure",
        component: <HeaderStructure />
    },
    {
        id: 2,
        title: "Logo & Site Name",
        component: <LogoSite />
    },
    {
        id: 3,
        title: "Navigation Menu",
        component: <NavigationMenu />
    },
    {
        id: 4,
        title: "Header Background",
        component: <HeaderBackground />
    },
    {
        id: 5,
        title: "Others",
        component: <OtherHeader />
    },
]
const MainHeader = () => {

    const dispatch = useDispatch();

    const { headerData, getTemplateData } = useSelector((state) => {
        return {
            headerData: state.editor.mainHeaderData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data
        }
    })

    const [hidefromPage, setHideFromPage] = useState(false);
    const [hidefromAllPages, setHideFromAllPages] = useState(false);
    const [expand, setExpand] = useState(-1);

    useEffect(() => {
        dispatch(getMainHeaderData({ id: getTemplateData?.business, templateId: getTemplateData?.template?._id }));
    }, [dispatch])

    useEffect(() => {
        if (headerData) {
            setHideFromPage(getTemplateData?.hide_header)
            setHideFromAllPages(headerData?.hide_on_all_pages);
        }
    }, [headerData])

    const ChangeHandle = (e) => {
        if (e.target.checked) {
            setHideFromPage(true);
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { hide_this_page: true }, pageId: getTemplateData?._id }));
            dispatch(UPDATE_HEADER({ pageUpdate: true, hide_header: true }));
        }
        else {
            setHideFromPage(false);
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { hide_this_page: false }, pageId: getTemplateData?._id }));
            dispatch(UPDATE_HEADER({ pageUpdate: true, hide_header: false }));
        }
    }

    const handleChangeAll = (e) => {
        if (e.target.checked) {
            setHideFromAllPages(true);
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { hide_on_all_pages: true } }));
            dispatch(UPDATE_HEADER({ pageUpdate: true, hide_header: true }));
        }
        else {
            setHideFromAllPages(false);
            dispatch(updateMainHeaderData({ headerId: headerData?._id, body: { hide_on_all_pages: false } }));
            dispatch(UPDATE_HEADER({ pageUpdate: true, hide_header: false }));
        }
    }

    const ClickHandle = (index) => {
        setExpand(expand === index ? -1 : index)
    }

    useEffect(() => {
        dispatch(getGoogleFonts());
    }, [dispatch]);
    return (
        <div className={styles.mainHeader}>
            <div className={styles.HideTop}>
                <p>Hide on this page</p>
                <SwitchButton layout={true} onChange={ChangeHandle} checked={hidefromPage} />
            </div>
            <div className={styles.HideTop}>
                <p>Hide on all pages</p>
                <SwitchButton layout={true} onChange={handleChangeAll} checked={hidefromAllPages} />
            </div>
            {
                accordianData.map((item, key) => {
                    return (
                        <React.Fragment key={key}>
                            <div className={`${styles.accordian} ${expand === item.id ? `${styles.active}` : ""}`} key={key}>
                                <div className={styles.accordianHeader} onClick={() => ClickHandle(item.id)}>
                                    <p>{item.title}</p>
                                    <div className={styles.acccordianIcon}>
                                        <AccordianIcon />
                                    </div>
                                </div>
                                {
                                    expand === item.id && (
                                        <div className={styles.accordianContent}>
                                            {item.component}
                                        </div>
                                    )
                                }
                            </div>
                        </React.Fragment>
                    )
                })
            }

        </div>
    )
}

export default MainHeader
