import React from "react";
import styles from "./uploadSection.module.scss";
import UnspashSection from "../UnsplashSection/UnspashSection";
import Upload from "../../Upload";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import FormTextArea from "../../Form/FormTextArea";
import FormInput from "../../Form/FormInput";
import MyFiles from "../MyFiles";

import gallary1 from "../../../Assets/SiteEditor/images/Icons/gallary1.svg";
import { useDispatch, useSelector } from "react-redux";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import Request from "../../../Classes/Request";
import BlueTick from "../../../Assets/SiteEditor/Icons/blueTick.svg";
// import { setCommonError } from "../../../store/actions/commonerror";
import AudioImage from "../../../Assets/SiteEditor/images/Icons/audio.png";
import VideoImage from "../../../Assets/SiteEditor/images/Icons/video.png";
import FileImage from "../../../Assets/SiteEditor/images/Icons/doc.png";
import { setError } from "../../../store/reducers/commonerrorSlice";
import Image from "next/image";
import Encryption from "../../../Classes/Edneedapi_key";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
const UploadSection = ({
  toggleState,
  multiSelect,
  discartRef,
  onUpload,
  searchTerm,
  uploadLimit,
  size,
  accept,
  validationProp,
}) => {
  const ref = useRef();
  const UploadRequest = new Request();
  const { user, subdomainuser } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser
    };
  });

  const encodeS3URI = (filename) => {
    filename = filename.replace(/[!,@,#,$,%,^,&,(,),{,},+,_,;,:,<,>,|, ,=,~,-]/g, "")
    return encodeURI(filename)
  }
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [imageList, setImageList] = useState([]);
  const [imageIndex, setImageIndex] = useState(-1);
  const [payloadArray, setPayloadArray] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleFileUpload = (data) => {
    let images = imageList;
    let payload = payloadArray;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      images.push(element);
      payload.push({
        src: "",
        business: "",
        owner: "",
        title: "",
        alt: "",
        key: "",
        type: fileType(element.type),
        size: 0,
        desc: "",
      });
    }
    setImageIndex(0)
    setImageList([...images]);
    setPayloadArray([...payload]);
  };
  const removeImage = (key,e) => {
    e.stopPropagation()
    let images = imageList;
    images.splice(key, 1);
    setImageList([...images]);
  };
  const cancel = () => {
    discartRef.current.close();
  };
  const fileType = (type) => {
    if (type.includes("image")) {
      return "img";
    } else if (type.includes("audio")) {
      return "music";
    } else if (type.includes("video")) {
      return "video";
    } else {
      return "file";
    }
  };
  const handleSelectImage = (item, key) => {
    if (fileType(item.type) === "img") {
      setImageIndex(key);
    }



  };
  const save = async () => {
    let payload = payloadArray;

    let s3 = new S3Client({
      region: process.env.NEXT_PUBLIC_REGION,
      credentials: {
        accessKeyId: Encryption.DecryptAccessId(),
        secretAccessKey: Encryption.DecryptAccessKey(),
      },
    });
    setLoading(true)
    for (let index = 0; index < imageList.length; index++) {
      let finalData = imageList[index]
      let fileNameTest
      let bucketName
      let keyCheck
      let dataNow = Date.now().toString()
      bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME
      fileNameTest = `${process.env.NEXT_PUBLIC_S3_URL}/${user.user_business}/${user._id
        }/${dataNow}${encodeS3URI(finalData.name)}`;
      keyCheck = `${user.user_business}/${user._id}/${dataNow}${encodeS3URI(finalData.name)}`;

      let params = {
        Bucket: bucketName,
        Key: keyCheck,
        Body: finalData,
      };

      const command = new PutObjectCommand(params);
      const data = (await s3.send(command)).$metadata;
      if (data.httpStatusCode === 200) {
        if (AppLinkUrl.privateDomain() || AppLinkUrl.isEditorOrPreview()) {
          // console.log("hi")
          payloadArray[index]["src"] = fileNameTest;
          payloadArray[index]["business"] = user.user_business;
          payloadArray[index]["owner"] = user._id;
          payloadArray[index]["title"] = finalData.name;
          payloadArray[index]["alt"] = "";
          payloadArray[index]["size"] = finalData.size;
          payloadArray[index]["key"] = params.Key;
          payloadArray[index]["type"] = fileType(finalData.type);
          payloadArray[index]["desc"] = "";
        } else if (AppLinkUrl.subdomain()) {
          // console.log("hello")
          payloadArray[index]["src"] = fileNameTest;
          payloadArray[index]["business"] = subdomainuser.user_business;
          payloadArray[index]["owner"] = subdomainuser._id;
          payloadArray[index]["title"] = finalData.name;
          payloadArray[index]["alt"] = "";
          payloadArray[index]["size"] = finalData.size;
          payloadArray[index]["key"] = params.Key;
          payloadArray[index]["type"] = fileType(finalData.type);
          payloadArray[index]["desc"] = "";
        } else {
          dispatch(setError("Error in upload."));
        }
      }
    }
    await UploadRequest.post(
      UploadRequest.url(
        "/FileUpload/UploadFileMultipleFrontend",
        "commonservices"
      ),
      payload,
      (success) => {
        setLoading(false)
        discartRef.current.close();
        if (multiSelect) {
          onUpload(success.data);
        } else {
          onUpload(success.data[0]);
        }
      },
      (error) => {
        dispatch(setError("Error in upload."));
      }
    );
    setPayloadArray([...payload]);
  };
  const handleInput = (e) => {
    let { name, value } = e.target;
    let payload = payloadArray;
    payload[imageIndex][name] = value;
    setPayloadArray([...payload]);
  };
  const handleUnsplashImages = async (value) => {
    setLoading(true)
    await UploadRequest.post(
      UploadRequest.url(
        "/FileUpload/UploadFileMultipleFrontend",
        "commonservices"
      ),
      value,
      (success) => {
        setLoading(false)
        discartRef.current.close();
        if (multiSelect) {
          onUpload(success.data);
        } else {
          onUpload(success.data[0]);
        }
      },
      (error) => {
        dispatch(setError("Error in upload."));
      }
    );
    // if (!multiSelect) {
    //   onUpload(value[0]);
    // } else {
    //   let imagesList = [];
    //   for (let index = 0; index < value.length; index++) {
    //     const element = value[index];
    //     imagesList.push(element);
    //   }
    //   onUpload([...imagesList]);
    // }
    // discartRef.current.close();
  };
  useEffect(() => {
    setImageList([]);
  }, [toggleState]);

  const handleDrag = (e) => {
    window.addEventListener(
      "dragover",
      function (e) {
        e = e || e;
        e.preventDefault();
      },
      false
    );
    window.addEventListener(
      "drop",
      function (e) {
        e = e || e;
        e.preventDefault();
      },
      false
    );
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      ref?.current?.drag(e.dataTransfer.files);
    }
  };
  const value = (index, key) => {
    if (imageIndex !== -1 && payloadArray.length > 0) {
      if (key === "src") {
        if (payloadArray[index]["type"] === "img") {
          return imageList[index]?URL?.createObjectURL(imageList[index]):"";
        } else if (payloadArray[index]["type"] === "audio") {
          return AudioImage;
        } else if (payloadArray[index]["type"] === "video") {
          return VideoImage;
        } else {
          return "";
        }
      } else {
        return payloadArray[index][key];
      }
    } else {
      return gallary1;
    }
  };
  const handleFilesImages = (value) => {
    if (multiSelect) {
      onUpload(value);
      discartRef.current.close();
    } else {
      onUpload(value[0]);
      discartRef.current.close();
    }
  };
  return (
    <React.Fragment>
      <div
        className={`${
          toggleState === 1 ? `${styles.activeContent}` : `${styles.content}`
        }`}
      >
        <div className={styles.imageUploadWrapper}>
          {imageList.length ? (
            <div className={styles.imageUploadMoreSection}>
              <div className={styles.imageUploadWrapper}>
                <div className={styles.imageUploadWrap}>
                  <div
                    className={`${styles.uploadfileWrap} ${
                      imageList.length < uploadLimit
                        ? ""
                        : `${styles.uploadfileWrapDisable}`
                    }`}
                  >
                    <i className={styles.fileIcon}></i>
                    <h5 className={`text-s w-500 base ${styles.textAddfiles}`}>
                      Upload more Files
                    </h5>
                    <div className={styles.imageUploadBtnWrapper}>
                      <button
                        className={`button primary btn-xs  ${styles.uploadFile}`}
                      >
                        + Upload Media
                      </button>
                      {imageList.length < uploadLimit ? (
                        <Upload
                          size={size}
                          imageUploader={true}
                          onUploaded={(file) => handleFileUpload(file)}
                          multiSelect={multiSelect}
                          uploadLimit={
                            uploadLimit !== "noLimit" &&
                            (uploadLimit - imageList.length).toString()
                          }
                          validationProp={validationProp}
                          accept={accept}
                        />
                      ) : (
                        <Upload
                          disableHandel={true}
                          size={size}
                          imageUploader={true}
                          onUploaded={(file) => handleFileUpload(file)}
                          multiSelect={multiSelect}
                          uploadLimit={
                            uploadLimit !== "noLimit" &&
                            (uploadLimit - imageList.length).toString()
                          }
                          validationProp={validationProp}
                          accept={accept}
                        />
                      )}
                    </div>
                    {/* <small>Upload the files in .jpg, .png, .pdf formats only</small> */}
                  </div>
                  <hr />
                  <div className={styles.imagesList}>
                    {imageList.map((item, key) => {
                      return (
                        <div
                          className={styles.imageWrapper}
                          key={key}
                          onClick={() => handleSelectImage(item, key)}
                        >
                          {fileType(item.type) === "img" ? (
                            <Image
                              src={URL?.createObjectURL(item)}
                              width="149"
                              height="90"
                              alt="my"
                            />
                          ) : fileType(item.type) === "music" ? (
                            <Image src={AudioImage} alt="" />
                          ) : fileType(item.type) === "video" ? (
                            <Image src={VideoImage} alt="" />
                          ) : (
                            <Image src={FileImage} alt="" />
                          )}

                          <div
                            className={styles.imageCross}
                            onClick={(e) => removeImage(key,e)}
                          >
                            <i className={`${styles.iconCross}`}></i>
                          </div>
                          {imageIndex === key && (
                            <BlueTick
                              width="18"
                              height="18"
                              alt="blue_tick"
                              className={styles.blueTick}
                            />
                          )}
                          <div className={styles.overlay}> </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* use this class  disabledWrapper in alttext-wrapper className to disabled the side bar  */}
                <div className={styles.alttextWrapper}>
                  <p
                    className={`${styles.para} text-2xs w-400 lgray pb-5 text-left`}
                  >
                    Select the images to update their Alt Text
                  </p>
                  <div className={`${styles.imgWrapper} mt-10 mb-10`}>
                    <div className={styles.imgWrap}>
                      <Image
                        src={value(imageIndex, "src")}
                        width="149"
                        height="90"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={`${styles.altWrap} mt-10`}>
                    <FormTextArea
                      rows={"2"}
                      label={"Alt Text"}
                      labelPosition="top"
                      onChange={handleInput}
                      onKeyUp={handleInput}
                      name={"alt"}
                      disabled={imageIndex === -1}
                      value={value(imageIndex, "alt")}
                    />
                  </div>
                  <div className={`${styles.titleWrap} mt-10`}>
                    <FormInput
                      type="text"
                      label="Title"
                      labelPosition={"top"}
                      onChange={handleInput}
                      onKeyUp={handleInput}
                      name={"title"}
                      value={value(imageIndex, "title")}
                      disabled={imageIndex === -1}
                    />
                  </div>
                  <div className={`${styles.descriptionWrap} mt-10`}>
                    <FormTextArea
                      rows={"2"}
                      label={"Description"}
                      labelPosition="top"
                      onChange={handleInput}
                      onKeyUp={handleInput}
                      name={"desc"}
                      value={value(imageIndex, "desc")}
                      disabled={imageIndex === -1}
                    />
                  </div>
                </div>
                {/* <small>Upload the files in .jpg, .png, .pdf formats only</small> */}
              </div>
              {/* <hr />
                <div className='images-list'>

                  {
                    imageList.map((item, key) => {
                      return (
                        <div className='image-wrapper' key={key}>
                          <img src={item.location} alt="my" />
                          <div className='image-cross' onClick={() => removeImage(key)}>
                            <i className='ed-icon i-xs white icon-cross'></i>
                          </div>
                          <div className='overlay'> </div>
                        </div>
                      )
                    })
                  }
                </div> */}
              <div className={`${styles.btnDiv} text-right`}>
                <button
                  className={`button btn-xs btn-o-silver base`}
                  onClick={cancel}
                >
                  Cancel
                </button>
                {loading ? (
                  <button className={`button btn-xs button-primary`}>
                    Loading...
                  </button>
                ) : (
                  <button
                    className={`button btn-xs button-primary`}
                    onClick={save}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => e.preventDefault()}
              onDragEnter={handleDrag}
              className={styles.dragArea}
            >
              <div onDrop={handleDrop}>
                <div className={styles.uploadfileWrap}>
                  <i className={styles.fileIcon}></i>
                  <h5 className={`text-xs w-500 base`}>
                    Start adding your files
                  </h5>
                  <p className="pb-20 text-2xs w-300 gray">
                    {dragActive
                      ? "Drop your Images"
                      : "Drag and drop files or upload from your computer"}
                  </p>
                  <div className={styles.imageUploadBtnWrapper}>
                    <button
                      className={`button button-primary btn-xs mb-20 ${styles.uploadFile}`}
                    >
                      + Upload Media
                    </button>
                  </div>

                  <div className={styles.limitWrapper}>
                    <div className={styles.fistWrapper}>
                      <p className={`text-2xs w-400 base inline`}>
                        {" "}
                        <span>Size Limit :</span>{" "}
                        <span className="w-600"> &nbsp; {size}mb</span>
                      </p>
                    </div>
                    <div className={styles.vHr}></div>
                    <div className={styles.fistWrapper}>
                      <p className=" text-2xs w-400 base inline">
                        Max no. of Files :{" "}
                        <span className="w-600">
                          {" "}
                          &nbsp; {uploadLimit!=="noLimit"?uploadLimit:"Unlimited"} Files
                        </span>
                      </p>
                    </div>
                  </div>
                  <Upload
                    className={styles.imageUploadMain}
                    ref={ref}
                    size={size}
                    imageUploader={true}
                    onUploaded={(file) => handleFileUpload(file)}
                    multiSelect={multiSelect}
                    uploadLimit={uploadLimit}
                    validationProp={validationProp}
                    accept={accept}
                  />
                </div>
              </div>
              {/* } */}
              {/* {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}><h1>hiiiii</h1></div>} */}
            </form>
          )}
        </div>
      </div>
      <div
        className={`${
          toggleState === 2 ? `${styles.activeContent}` : `${styles.content}`
        }`}
      >
        <div className={styles.languageWrapper}>
          <UnspashSection
            multiSelect={multiSelect}
            selectedUnsplashImages={handleUnsplashImages}
            toggleState={toggleState}
            search={searchTerm}
            buttonLoading={loading}
            uploadLimit={uploadLimit}
          />
        </div>
      </div>
      <div
        className={`${
          toggleState === 4 ? `${styles.activeContent}` : `${styles.content}`
        }`}
      >
        <div className={styles.languageWrapper}>
          <MyFiles
            multiSelect={multiSelect}
            selectedMyFilesImages={handleFilesImages}
            toggleState={toggleState}
            uploadLimit={uploadLimit}
            onCancel={() => discartRef.current.close()}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default UploadSection;
