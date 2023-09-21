import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from "./topheader.module.scss"
import SwitchButton from '../../../../../../CommonComponents/SwitchButton'
import SelectDropDown from '../../../../../../CommonComponents/SelectDropdown'
import FormInput from '../../../../../../CommonComponents/Form/FormInput'
import CheckboxInput from '../../../../../../CommonComponents/Form/CheckboxInput'
import { getTopHeaderData, getTopHeaderLayoutData, headerLayout, updateTopHeaderData } from '../../../../../../store/actions/siteEditor/index'
import TopHeaderLayout1 from './Layouts/layout1';
import TopHeaderLayout2 from './Layouts/layout2';
import { UPDATE_TOP_HEADER } from '@/store/reducers/websiteTemplate';
import SelectDropDownRandom from '@/CommonComponents/Dropdown/OpenPage&ScrollBlock';
import useTemplateId from '@/CustomHooks/useTemplateId';

const TopHeader = () => {

    const dispatch = useDispatch();
    const templateId = useTemplateId();

    const { user, headerData, getTemplateData, headerLayoutsData } = useSelector((state) => {
        return {
            user: state.user,
            headerData: state.editor.topHeaderData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data,
            headerLayoutsData: state.editor.topHeaderLayouts.data,
        }
    })

    ////// console.log(headerData, "line no 200");

    const [hidefromPage, setHideFromPage] = useState(false);
    const [hidefromAllPages, setHideFromAllPages] = useState(false);

    let LayoutValue = ["Layout 1", "Layout 2"];
    const [seletedValue, setSeletedValue] = useState("");

    useEffect(() => {
        dispatch(getTopHeaderData({ id: getTemplateData?.business, templateId: getTemplateData?.template?._id }));
    }, [dispatch])

    useEffect(() => {
        if (headerData) {
            setHideFromPage(getTemplateData?.hide_topheader)
            setHideFromAllPages(headerData?.hide_on_all_pages);
            if (headerLayoutsData && headerLayoutsData?.length && headerLayoutsData?.[0]?.Variation &&
                headerLayoutsData?.[0]?.Variation?.length) {
                let obj = headerLayoutsData?.[0]?.Variation?.find((item) => item?._id === headerData?.layout_ref);
              
                setSeletedValue(obj ? obj?.variation_name : "");
            }
        }
    }, [headerData, headerLayoutsData])


    useEffect(() => {
        dispatch(getTopHeaderLayoutData({}));
    }, [dispatch])

    const ChangeHandle = (e) => {
        if (e.target.checked) {
            setHideFromPage(true);
            dispatch(updateTopHeaderData({ headerId: headerData?._id, body: { hide_this_page: true }, pageId: getTemplateData?._id }));

            dispatch(UPDATE_TOP_HEADER({ pageUpdate: true, hide_topheader: true }));
        }
        else {
            setHideFromPage(false);
            dispatch(updateTopHeaderData({ headerId: headerData?._id, body: { hide_this_page: false }, pageId: getTemplateData?._id }));
            dispatch(UPDATE_TOP_HEADER({ pageUpdate: true, hide_topheader: false }));
        }
    }

    const handleChangeAll = (e) => {
        if (e.target.checked) {
            setHideFromAllPages(true);
            dispatch(updateTopHeaderData({ headerId: headerData?._id, body: { hide_on_all_pages: true } }));
            dispatch(
                UPDATE_TOP_HEADER({ pageUpdate: true, hide_topheader: true })
            );
        }
        else {
            setHideFromAllPages(false);
            dispatch(updateTopHeaderData({ headerId: headerData?._id, body: { hide_on_all_pages: false } }));
            dispatch(
                UPDATE_TOP_HEADER({ pageUpdate: true, hide_topheader: false })
            );
        }
    }

    const selectedHandle = (val) => {
        setSeletedValue(val)
        if (headerLayoutsData && headerLayoutsData?.length && headerLayoutsData?.[0]?.Variation &&
            headerLayoutsData?.[0]?.Variation?.length) {
            let obj = headerLayoutsData?.[0]?.Variation?.find((item) => item?.variation_name === val);
            dispatch(updateTopHeaderData({ headerId: headerData?._id, body: { layout_ref: obj?._id } }));

            let Payload = {
              variationId: obj ? obj?._id : "",
              maincontainerDelete: getTemplateData?.upper[0]?._id,
              template: templateId,
              business: user?.user_business,
              owner: user?._id,
              headertype: "topheader",
            };

            dispatch(headerLayout({ data: Payload, topHeader: true }));

        }
    }

    return (
        <React.Fragment>
            <div className={styles.mainTopHeader}>
                {/* === hide top section start === */}
                <div className={styles.HideTop}>
                    <p>Hide on this page</p>
                    <SwitchButton layout={true} onChange={ChangeHandle} checked={hidefromPage} />
                </div>
                <div className={styles.HideTop}>
                    <p>Hide on all pages</p>
                    <SwitchButton layout={true} onChange={handleChangeAll} checked={hidefromAllPages} />
                </div>
                {/* === hide top section end === */}
                {/* === Choose Layout section start === */}
                <div className={styles.choseLayout}>
                    <label>Choose Layout</label>
                    {/* <SelectDropDown handleSelect={selectedHandle} deafultValue="Layout 1" values={LayoutValue} /> */}
                    <SelectDropDownRandom
                        handleSelect={(_id) => selectedHandle(_id)}
                        deafultValue={"Select Layouts"}
                        label={"variation_name"}
                        showValue={seletedValue}
                        value={"variation_name"}
                        values={headerLayoutsData && headerLayoutsData?.length ?
                            headerLayoutsData?.[0]?.Variation : []}
                    />
                </div>
                {/* === Choose Layout section end === */}


                {/* ==== phone Email Social Section Start ===  */}

                {
                    seletedValue === "Layout 1" ?
                        (
                            <TopHeaderLayout1 headerData={headerData} />
                        ) : seletedValue === "Layout 2" ?
                            (
                                <TopHeaderLayout2 headerData={headerData} />
                            ) : ""
                }

            </div>
        </React.Fragment>
    )
}

export default TopHeader
