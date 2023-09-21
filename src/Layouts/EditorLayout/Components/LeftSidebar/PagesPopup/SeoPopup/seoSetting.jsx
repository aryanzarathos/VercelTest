import React, { useEffect, useState } from 'react'
// import AppLink from '../../../../../../CommonComponents/AppLink';
// import FormInput from '../../../../../../CommonComponents/Form/FormInput';
// import FormTextArea from '../../../../../../CommonComponents/Form/FormTextArea';
// import InputChip from '../../../../../../CommonComponents/InputChip/InputChip';
import Modals from '../../../../../../CommonComponents/Modals';
import ModalsBody from '../../../../../../CommonComponents/Modals/ModalsBody';
import ModalsHeader from '../../../../../../CommonComponents/Modals/ModalsHeader';
import styles from "./SeoPages.module.scss";
import Tabs from '../../../../../../CommonComponents/Tabs/Tabs';
import BasicMeta from './RenderComponent/BasicMeta/BasicMeta';
import OGMeta from './RenderComponent/OGMeta/OGMeta';
import { useDebounceFunction } from '@/CommonFunctions/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { checkPageSlugAvailability, editPageData } from '@/store/actions/siteEditor';
import ValidationFile from '@/Classes/ValidationFile';
import ValidationUtils from '@/Classes/ValidationUtils';
import useAppNavigate from '@/CustomHooks/useAppNavigate';

const SeoSettingPages = ({ ModalsRef, onclose, user, item, navigation, getTemplateData }) => {

  const dispatch = useDispatch();
  const navigate = useAppNavigate();

  const debouncedAppearance = useDebounceFunction(
    (callback) => callback(),
    1000
  );

  const [active, setActive] = useState("Basic Meta Tags");
  const [meta_title, setmeta_title] = useState("");
  const [meta_titleError, setMeta_titleError] = useState(false);
  const [meta_desc, setmeta_desc] = useState("");
  const [meta_keywords, setmeta_keywords] = useState([]);
  const [url_slug, seturl_slug] = useState("");
  const [url_slugError, seturl_slugrror] = useState("");
  const [OG_title, setOG_title] = useState("");
  const [OG_titleError, setOG_titleError] = useState(false);
  const [OG_desc, setOG_desc] = useState("");
  const [OG_image, setOG_image] = useState("");

  const { checkAvailability } = useSelector((state) => {
    return {
      checkAvailability: state.editor.slugAvailabilty.data
    }
  })

  // console.log(item, "line no 45");

  useEffect(() => {
    if (item) {
      setmeta_title(item?.meta_title);
      setmeta_desc(item?.meta_description);
      setmeta_keywords(item?.meta_keywords);
      seturl_slug(item?.page_slug);
      setOG_title(item?.page_og_title);
      setOG_desc(item?.page_og_description);
      setOG_image(item?.page_og_img);
    }
  }, [item])

  const handleonChange = (e, type) => {
    let inputvalue = e.target.value;
    let value = ValidationFile.spaceNotAccept(inputvalue);
    switch (type) {
      case "title":
        setmeta_title(value);
        setMeta_titleError(ValidationUtils.isNotEmpty(value));
        break;
      case "desc":
        setmeta_desc(value);
        break;
      case "og_title":
        setOG_title(value);
        setOG_titleError(ValidationUtils.isNotEmpty(value))
        break;
      case "og_desc":
        setOG_desc(value);
        break;
      default:
        break;
    }
  }

  const handlePageSlugChange = (e) => {
    let inputvalue = e.target.value;
    let value = ValidationFile.spaceNotAccept(inputvalue);
    seturl_slug(value);
    if (value && value !== item?.page_slug) {
      debouncedAppearance(() =>
        dispatch(checkPageSlugAvailability({ id: getTemplateData?.template?._id, slug: value }))
      );
    }
    seturl_slugrror(false);
  }

  const checkSlugAvailabilty = () => {
    let isvalid = true;
    if (ValidationUtils.isNotEmpty(url_slug)) {
      if (checkAvailability && checkAvailability !== "") {

        if (checkAvailability === "Available") {
          isvalid = true;
        }
        else {
          isvalid = false;
        }
      }
      else {
        isvalid = true;
      }
    }
    else {
      isvalid = false;
    }
    return isvalid
  }

  const uploadThumbnail = (data) => {
    let imgData = data?.src;
    setOG_image(imgData);
  }

  const RemoveImagehandle = () => {
    setOG_image("")
  }

  const handleDoneBtn = () => {
    let validSlug = checkSlugAvailabilty();

    if (ValidationUtils.isNotEmpty(OG_title) && ValidationUtils.isNotEmpty(meta_title) &&
      ValidationUtils.isNotEmpty(url_slug) && validSlug) {
      dispatch(editPageData({
        id: user?.user_business, pageId: item?._id,
        body: {
          meta_title: meta_title,
          meta_description: meta_desc,
          meta_keywords: meta_keywords,
          page_slug: url_slug,
          page_og_title: OG_title,
          page_og_description: OG_desc,
          page_og_img: OG_image,
        },
        navigation
      }));
      closeModal();
      navigate(`/${url_slug}`, "", true);
    }
    else {
      if (ValidationUtils.isEmpty(meta_title)) {
        setMeta_titleError(true);
        setActive("Basic Meta Tags");
      }
      if (ValidationUtils.isEmpty(OG_title)) {
        setOG_titleError(true);
        setActive("OG Media Tags");
      }
      if (ValidationUtils.isEmpty(url_slug)) {
        seturl_slugrror(true);
        setActive("Basic Meta Tags");
      }
    }
  }


  const closeModal = () => {
    onclose();
    setActive(active);
    setMeta_titleError(false);
    setOG_titleError(false);
  }
  return (
    <Modals ClassName={styles.seoSettingPageModals} ref={ModalsRef} Position="center" ClosePopUp={() => closeModal()} ModalsSize={'modalM'}>
      <ModalsHeader className={styles.seoSettingHeader} title="SEO Settings" />
      <ModalsBody className={styles.ModalBodyWrap}>
        <div className={styles.Seo_Wrapper}>
          <Tabs
            valueState={true}
            activeTitle={(val) => setActive(val)}
            TabWrapperClass={styles.SeoPopup_Tab}
            TabButtonClass={`${styles.Tab_Btns}`}
            ActiveTabClass={styles.Active_Tab}
            tabs={["Basic Meta Tags", "OG Media Tags"]}
            clearState={true}
            defaultValue={"Basic Meta Tags"}
          />
          {active === "Basic Meta Tags" ? (
            <BasicMeta meta_title={meta_title} meta_desc={meta_desc} meta_keywords={meta_keywords} url_slug={url_slug}
              handleonChange={handleonChange} checkAvailability={checkAvailability} meta_titleError={meta_titleError}
              handlePageSlugChange={handlePageSlugChange} setmeta_keywords={setmeta_keywords} url_slugError={url_slugError} />
          ) : active === "OG Media Tags" ? (
            <OGMeta OG_title={OG_title} OG_titleError={OG_titleError} OG_desc={OG_desc} OG_image={OG_image}
              RemoveImagehandle={RemoveImagehandle} handleonChange={handleonChange} uploadThumbnail={uploadThumbnail} />
          ) : (
            ""
          )}
          <div className={styles.ButtonGroup}>
            <button type="button" className="button btn-o-primary btn-oval btn-xs" onClick={closeModal}>Cancel</button>
            <button type="button" className="button button-primary btn-oval btn-xs" onClick={handleDoneBtn}>Done</button>
          </div>
        </div>
      </ModalsBody>
    </Modals>
  )
}

export default SeoSettingPages