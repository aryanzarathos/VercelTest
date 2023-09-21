import React, { useEffect, useState } from 'react';
import styles from "./HeaderStructure.module.scss";
import structure1 from "../../../../../../../Assets/SiteEditor/images/headerStructure/headerStructure1.png"
import structure2 from "../../../../../../../Assets/SiteEditor/images/headerStructure/headerStructure2.png"
import structure3 from "../../../../../../../Assets/SiteEditor/images/headerStructure/headerStructure3.png"
import structure4 from "../../../../../../../Assets/SiteEditor/images/headerStructure/headerStructure4.png"
import structure5 from "../../../../../../../Assets/SiteEditor/images/headerStructure/headerStructure5.png"
import structure6 from "../../../../../../../Assets/SiteEditor/images/headerStructure/headerStructure6.png"
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getHeaderStructure, headerLayout } from '@/store/actions/siteEditor';
import useTemplateId from '@/CustomHooks/useTemplateId';
import useTemplateData from '@/CustomHooks/useTemplateData';

const HeaderStructure = () => {
    const dispatch = useDispatch();
    const templateId = useTemplateId();

    const { user, headerData, headerId, headerIdSuccess, getTemplateData, getTemplateSuccess,HeaderStructureLayoutLoading } = useSelector((state) => {
        return {
            user: state.user,
            headerData: state.editor.mainHeaderData.data,
            headerId: state.editor.HeaderStructure.data,
            headerIdSuccess: state.editor.HeaderStructure.success,
            getTemplateData: state.websiteTemplate?.getTemplate?.data,
            getTemplateSuccess: state.websiteTemplate?.getTemplate?.success,
            HeaderStructureLayoutLoading:state.editor.HeaderStructureLayout.loading
        }
    });

    const [activeHeader, setActiveHeader] = useState('');

    useEffect(() => {
        if (getTemplateSuccess && getTemplateData?.upper.length > 0) {
            setActiveHeader(getTemplateData?.upper[1]?._id)
        }
    }, [getTemplateData, getTemplateSuccess])

    const headerStructureHandle = (val) => {
        let Payload = {
            variationId: val,
            maincontainerDelete: getTemplateData?.upper[1]?._id,
            template: templateId,
            business: user?.user_business,
            owner: user?._id,
            headertype:"header"
        }
        setActiveHeader(val)
        if(!HeaderStructureLayoutLoading){
        dispatch(headerLayout({ data: Payload }))
        }
    }
    useEffect(() => {
        if(templateId){
    dispatch(getHeaderStructure({ data: {
            template:templateId,
            business:user?.user_business,
            access_id:user?.user_access_id
        } }));
        }
    }, [dispatch, templateId, user?.user_access_id, user?.user_business]);

    return (
        <div className={styles.HeaderStructureWrapper}>
            <div className={styles.StructureCard}>
                {
                    headerIdSuccess && headerId && headerId[0]?.Variation?.map((item, key) => (
                        <React.Fragment key={key}>
                            <div className={`${styles.card} ${item.activated ? `${styles.active}` : ""}`} onClick={() => headerStructureHandle(item._id)}>
                                <i className={styles.Icon}></i>
                                <i className={styles[item.variation_name]}></i>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default HeaderStructure