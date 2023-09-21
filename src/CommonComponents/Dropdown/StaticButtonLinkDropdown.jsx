import React, { useRef, useState } from "react";
import styled from "styled-components";
import Modals from "../Modals";
import ModalsHeader from "../Modals/ModalsHeader";
import ModalsBody from "../Modals/ModalsBody";
import FormInput from "../Form/FormInput";
import SelectDropDown from "../SelectDropdown";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValidationFile from "../../Classes/ValidationFile";
import FormError from "../Form/FormError";
import SelectDropDownRandom from "./OpenPage&ScrollBlock/index";
import ProductPageSelectDropDown from "./OpenPage";
import InputSearchDropDown from "../InputSearchDropdown";
import ValidationUtils from "../../Classes/ValidationUtils";
import dynamic from "next/dynamic";
import { updateSlide } from "@/store/actions/appearanceSettings";
import useTemplateData from "@/CustomHooks/useTemplateData";
const Uploader = dynamic(() => import("../ImageUploader"), { ssr: false });
const DrodownWrap = styled.div``;
const FileUploader = styled.div`
  padding: 4px;
  background: #f6f6fa;
  border: 1px solid rgba(32, 32, 32, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  position: relative;
  cursor: pointer;
`;
const FileUrl = styled.p``;
const ButtonUpload = styled.div`
  padding: 6px 21px;
  background: #ffffff;
  border: 1px solid rgba(32, 32, 32, 0.1);
  border-radius: 4px;
`;
const ButtonGroup = styled.div`
  justify-content: flex-end;
`;
const ResetUploadImg = styled.div`
  position: absolute;
  right: 24px;
  top: 15px;
  width: 10px;
  height: 10px;
  opacity: 0.3;
  cursor: pointer;
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    width: 2px;
    height: 10px;
    background-color: rgba(32, 32, 32, 0.9);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const StaticButtonLinkDropdown = ({ ModalsRef, onClose, selectedElementData, sliderKey }) => {
  const dispatch = useDispatch();
  const { templateData } = useSelector((state) => {
    return {
      templateData: state.websiteTemplate.getTemplate.data
    }
  })
  const ImgUpoadRef = useRef();
  const { data } = useSelector((state) => state.editor.getAllPagesData);

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
    selectedElementDataa, pageId] = useTemplateData()
  const { productlist } = useSelector((state) => {
    return {
      productlist: state.editor.productListData.data,
      // eventData:state.editor.selectedIndexAndId
    }
  })

  const closeModal = () => {
    setURLSlug("");
    onClose();
  };
  const [error, setError] = useState(false)
  const [action, setAction] = useState("");
  const [actionRandom, setActionRandom] = useState("");
  const [buttonName, setButtonName] = useState("");
  const [scrollTo, setScrollTo] = useState("")
  const [file, setFile] = useState("");
  const [pathname, setPathname] = useState("Select a page");
  const [urlSlug, setURLSlug] = useState("");
  const [errorstate, setErrorState] = useState(false);
  const [webUrl, setWebUrl] = useState("");
  const [email, setEmail] = useState("");
  const [telnumber, setTelnumber] = useState("");
  const [seleted, setSeleted] = useState([
    "Open Page",
    "Scroll to a block",
    "Open web address",
    "Click to call",
    "Send an email",
    "Download a file",
  ]);

  const selectedHandle = (val) => {
    setAction(val);
  };
  const RandomSelectedHandle = (val, type) => {
    if (type === "Open Page") {
      setPathname(val === "Product Details" ? "product-details" : val)
      setURLSlug("");
    } else {
      setScrollTo(val)
    }
    setActionRandom(val);
  };

  const handleURLSlug = (val) => {
    setURLSlug(val);
    setErrorState(false);
  }

  const handleInput = (e, type) => {
    let value = e.target.value;

    switch (type) {
      case "buttonName":
        setButtonName(value);
        break;
      case "webUrl":
        setWebUrl(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "telnumber":
        setTelnumber(value);
        break;
      default:
        return false;
    }
  };
  const handleDropdown = () => {
    ImgUpoadRef.current.open();
  };
  const handleDropdownClose = () => {
    ImgUpoadRef.current.close();
  };

  const isValid = () => {
    if (action === "Open Page") {
      return ValidationFile.isNotEmpty(pathname)
    } else if (action === "Scroll to a block") {
      return ValidationFile.isNotEmpty(scrollTo)
    } else if (action === "Open web address") {
      return ValidationFile.isNotEmpty(webUrl)
    } else if (action === "Click to call") {
      return ValidationFile.isNotEmpty(telnumber)
    } else if (action === "Download a file") {
      return ValidationFile.isNotEmpty(file)
    } else if (action === "Send an email") {
      return ValidationFile.isNotEmpty(email)
    } else {
      return true
    }
  }

  const validSlug = () => {
    let isvalid = true;
    if (action === "Open Page") {
      if (pathname && (pathname === "product-details" || pathname.includes("product-details"))) {
        if (ValidationUtils.isNotEmpty(urlSlug)) {
          isvalid = true;
          setErrorState(false);
        }
        else {
          isvalid = false;
          setErrorState(true);
        }
      }
    }
    return isvalid;
  }

  const handleSave = () => {
    const Valid = validSlug()

    const isDetailsValid = isValid()
    if (isDetailsValid && Valid && buttonName) {
      const updatedObject = {
        text: buttonName,
        action,
        pathname: urlSlug ? `${pathname}/${urlSlug}` : pathname,
        webUrl,
        email,
        telnumber,
        scrollTo,
        file
      };
      let data = {
        ...selectedElementData,
        buttonStyle: {
          ...selectedElementData?.buttonStyle,
          ...updatedObject
        }
      }
      dispatch(updateSlide({
        gridId: gridId, slideId: selectedElementData._id, body: data, dynamicUpdate: {
          mainContainerIndex: mainContainerIndex,
          subcontainerIndex: subcontainerIndex,
          gridIndex: gridIndex,
          selectedElementIndex: selectedElementIndex,
          sectionIndex: sectionIndex, sliderKey: sliderKey
        }
      }))
      closeModal();
    } else {
      setError(true)
    }
  };
  useEffect(() => {
    if (selectedElementData) {
      let data = selectedElementData?.buttonStyle?.pathname?.split("/");
      setButtonName(selectedElementData?.buttonStyle?.text || "");
      setEmail(selectedElementData?.buttonStyle?.email || "");

      setPathname(selectedElementData?.buttonStyle?.pathname?.includes("product-details") ? "product-details" : selectedElementData?.buttonStyle?.pathname || "");
      setURLSlug(data && data.length ? data[1] : "")
      setWebUrl(selectedElementData?.buttonStyle?.webUrl || "");
      setTelnumber(selectedElementData?.buttonStyle?.telnumber || "");
      setAction(selectedElementData?.buttonStyle?.action || "");
      setFile(selectedElementData?.buttonStyle?.file || "");
      setScrollTo(selectedElementData?.buttonStyle?.scrollTo || "");
    }
  }, [selectedElementData]);

  return (
    <Modals
      ref={ModalsRef}
      Position="center"
      ClosePopUp={() => closeModal()}
      ModalsSize={"modalS"}
    >
      <ModalsHeader title="Link settings" />
      <ModalsBody>
        <DrodownWrap>
          <h5 className="text-xs base mb-10">Click action</h5>
          <p className="text-2xs base mb-10">
            When user click on link, take this action
          </p>

          <div className="formFieldwrap">
            <SelectDropDown
              showValue={action}
              handleSelect={(val) => selectedHandle(val)}
              deafultValue={"Select an action"}
              values={seleted}
            />
          </div>
          {action === "Open Page" && (
            <React.Fragment>
              <div className="formFieldwrap">
                <ProductPageSelectDropDown
                  handleSelect={(pathname) => RandomSelectedHandle(pathname, "Open Page")}
                  deafultValue={pathname.includes("product-details") ? "Product Details" : pathname}
                  values={data?.sitePages?.length > 0 ? data?.sitePages : []}
                  NavigationValues={data?.navigation?.length > 0 ? data?.navigation : []}
                />
              </div>
              {pathname.includes("product-details") ?
                <div className="formFieldwrap">
                  <InputSearchDropDown
                    handleSelect={(_id) => handleURLSlug(_id, "Open Page")}
                    deafultValue={"Select Section"}
                    label={"productName"}
                    showValue={urlSlug}
                    value={"urlSlug"}
                    values={productlist?.data?.productlist ? productlist?.data?.productlist : []}
                  />
                  <FormError show={errorstate} error="Please select product." />
                </div>
                : ""
              }
            </React.Fragment>
          )}
          {action === "Scroll to a block" && (
            <div className="formFieldwrap">
              <SelectDropDownRandom
                handleSelect={(_id) => RandomSelectedHandle(_id, "Scroll to a block")}
                deafultValue={"Select Section"}
                label={"container_name"}
                showValue={scrollTo}
                value={"_id"}
                values={templateData?.data}
              />
              <FormError show={!scrollTo && error} error={"Scroll to required."} />
            </div>
          )}
          {action === "Send an email" && (
            <div className="formFieldwrap">
              <FormInput
                className=""
                placeholder="abcd@xyz.com"
                LabelClassName=""
                value={email}
                onChange={(e) => handleInput(e, "email")}
                onKeyUp={(e) => handleInput(e, "email")}
              />
              <FormError show={error && !email} error={"Field Required."} />
            </div>
          )}
          {action === "Click to call" && (
            <div className="formFieldwrap">
              <FormInput
                className=""
                placeholder="+917015032217"
                LabelClassName=""
                value={telnumber}
                onChange={(e) => handleInput(e, "telnumber")}
                onKeyUp={(e) => handleInput(e, "telnumber")}
              />
              <FormError show={error && !telnumber} error={"Field Required."} />
            </div>
          )}
          {action === "Open web address" && (
            <div className="formFieldwrap">
              <FormInput
                className=""
                placeholder="https://example.com"
                LabelClassName=""
                value={webUrl}
                onChange={(e) => handleInput(e, "webUrl")}
                onKeyUp={(e) => handleInput(e, "webUrl")}
              />
              <FormError show={error && !webUrl} error={"Field Required."} />
            </div>
          )}
          {action === "Download a file" && (
            <div className="formFieldwrap">
              <FileUploader onClick={handleDropdown}>
                <ButtonUpload className="text-xs base">
                  Choose file
                </ButtonUpload>
                <FileUrl onClick={(e) => { e.stopPropagation(); window.open(file) }} className="text-2xs base">{file}</FileUrl>
                {file && <ResetUploadImg onClick={(e) => { e.stopPropagation(); setFile("") }}></ResetUploadImg>}
              </FileUploader>
              <p className="text-2xs base">
                Accept image fromat .jpg,.png,webp
              </p>
              <FormError show={error && !file} error={"Field Required."} />
            </div>
          )}

          <div className="formFieldwrap">
            <FormInput
              className=""
              labelPosition="top"
              label="Button name"
              placeholder="Explore more"
              LabelClassName=""
              value={buttonName}
              onChange={(e) => handleInput(e, "buttonName")}
              onKeyUp={(e) => handleInput(e, "buttonName")}
            />
            <FormError show={error && !buttonName} error={"Field Required."} />
            <p className="text-2xs base">Display this text inside the link</p>
          </div>
          <ButtonGroup className="inline bottom-xs mt-25">
            <button
              className="button btn-xs btn-o-silver mr-10"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <button
              className="button btn-xs button-primary"
              onClick={() => handleSave()}
            >
              Done
            </button>
          </ButtonGroup>
        </DrodownWrap>
      </ModalsBody>
      <Uploader
        discartRef={ImgUpoadRef}
        onclose={handleDropdownClose}
        onUploaded={(val) => setFile(val.src)}
        uploadLimit={5}
      />
    </Modals>
  );
};

export default StaticButtonLinkDropdown;
