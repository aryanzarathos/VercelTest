import React, { useEffect, useRef } from "react";
import styles from "./myFiles.module.scss";
import filterIcon from "../../../Assets/SiteEditor/Icons/filterIcon.svg";
import blueTick from "../../../Assets/SiteEditor/Icons/blueTick.svg";
import { useState } from "react";
import Request from "../../../Classes/Request";
import { useSelector } from "react-redux";
import ImageViewer from "../../ImageViewer";
import AudioImage from "../../../Assets/SiteEditor/images/Icons/audio.png"
import VideoImage from "../../../Assets/SiteEditor/images/Icons/video.png"
import FileImage from "../../../Assets/SiteEditor/images/Icons/doc.png"
import FilterOptions from "./FilterOptions";
import { useOutsideClick } from "rooks";
import DeletePopup from "./DeletePopup";
// import { checkFileSize } from "../../../Classes/FileValidation";
import Image from "next/image";
import { setError } from "../../../store/reducers/commonerrorSlice";
const MyFiles = ({
  toggleState,
  multiSelect,
  selectedMyFilesImages,
  uploadLimit,
  onCancel
}) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)
  const UploadRequest = new Request();
  const filterArray = [
    { value: "img", show: "Images" },
    { value: "video", show: "Videos" },
    { value: "file", show: "Files" },
    { value: "audio", show: "Audio" },
  ];
  const [filter, setFilter] = useState([])
  const [dropdown, setOpenDropdown] = useState(false)
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [page, setPage] = useState(1);
  const MyFilesRequest = new Request();
  const listInnerRef = useRef();
  const { user } = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const [myFilesList, setmyFilesList] = useState([]);
  const [size, setSize] = useState(0)
  const [imageList, setImageList] = useState([]);
  useOutsideClick(ref, () => {
    if (dropdown) { setOpenDropdown(false) }
  })
  const handleSelect = (item) => {
    let array = imageList
    if (array.find((i) => i._id === item._id)) {
      let index = array.findIndex((i) => i._id === item._id)
      array.splice(index, 1)
    } else {
      if (imageList.length < uploadLimit) {
        array.push(item)
      }

    }
    setImageList([...array])
  };
  const handleDelete = async () => {
    let array = imageList
    array = array.map((item) => {
      return item._id
    })
    await UploadRequest.post(
      UploadRequest.url(
        "/FileUpload/S3Delete",
        "commonservices"
      ),
      { data: array },
      (success) => {
        setOpenDeletePopup(false)
        let latestFiles = myFilesList
        latestFiles = latestFiles.filter((item) => !array.includes(item._id))
        setImageList([]);
        setmyFilesList([...latestFiles])
      },
      (error) => {
        dispatch(setError("Error in upload."))
      }
    );
  };
  const OpenPopUp = () => {
    setOpenDeletePopup(!openDeletePopup);
  };

  const onScroll = async () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef?.current;
      if (Math.round(scrollTop + clientHeight) === scrollHeight) {
        if (filter.length) {
          await MyFilesRequest.post(
            MyFilesRequest.url(
              `/FileUpload/getUserUploadData/?instituteID=${user.user_business
              }&limit=${20}&skip=${(page - 1) * 10}`,
              "commonservices"
            ), { filter: filter },
            (success) => {
              setSize(success.data.response.totalSize)
              setmyFilesList(success.data.response.tempData);
            },
            (error) => {
      
            }
          );
        }
        else {
          setPage(page + 1);
        }
      }
    }
  };
  useEffect(() => {
    const MyFilesRequest = new Request();
    const fetchData = async () => {
      setLoading(true)
      await MyFilesRequest.post(
        MyFilesRequest.url(
          `/FileUpload/getUserUploadData/?instituteID=${user.user_business
          }&limit=${20}&skip=${(page - 1) * 10}`,
          "commonservices"
        ), { filter: filter },
        (success) => {
          setLoading(false)
          if (filter.length > 0) {
            setmyFilesList(success.data.response.tempData);
          } else {
            setmyFilesList([...myFilesList, ...success.data.response.tempData]);
          }

          setSize(success.data.response.totalSize)
          // setUnsplashList(success.data)
        },
        (error) => {
        
        }
      );
    };
    // call the function
    if (toggleState === 4) {
      fetchData().catch(console.error);
    }
    // make sure to catch any error
  }, [page, toggleState, filter]);

  useEffect(() => {
    setPage(1)
    setImageList([]);
    setmyFilesList([])
  }, [toggleState]);
  const handleAdd = () => {
    selectedMyFilesImages(imageList)
  }
  return (
    <div className={styles.mainMyFiles}>
      <div className={styles.filterDelete} >
        <div className={styles.filter}>
          <button
            className={styles.filterBtn}
            onClick={() => setOpenDropdown(!dropdown)}
            ref={ref}
          >
            <p>
              Filter by <span>{filter.length > 0 ? `(${filter.length})` : ""}</span>
            </p>
            <i className={styles.filterIcon}></i>
          </button>
          {
            dropdown && <FilterOptions applyFilter={(val) => { setFilter(val); setOpenDropdown(false); setPage(1) }} filter={filter} ref={ref} className={styles.fliterDropDown} />
          }
        </div>
        {imageList.length > 0 ? <button className={styles.deleteBtn} onClick={OpenPopUp}>
          Delete
        </button> : ""}
      </div>
      <div className={`${styles.gallerySection}`} onScroll={onScroll} ref={listInnerRef}>
        {myFilesList.length > 0
          ? myFilesList.map((item) => {
            return (
              <React.Fragment key={item._id}>
                <div
                  className={`${styles.gallaryCard} ${imageList.find((i) => i._id === item._id) ? `${styles.active}` : ""}`}
                  key={item._id}
                  onClick={() => handleSelect(item)}
                >
                  <div className={styles.mainImage}>
                    {item.type === "img" ? (
                      <ImageViewer
                        object={item}
                        alt="gallary_image"
                        className={styles.gallaryImage}
                        width={100} height={100}
                      />

                    ) : item.type === "music" ? (
                      <Image src={AudioImage} alt="" width={100} height={100}/>
                    ) : item.type === "video" ? (
                      <Image src={VideoImage} alt="" width={100} height={100}/>
                    ) : (
                      <Image src={FileImage} alt="" width={100} height={100}/>
                    )}
                  </div>
                  <i
                    className={styles.blueTick}
                  />
                  <h5>{item.title}</h5>
                </div>
              </React.Fragment>
            );
          })
          : !loading && "No records."
        }
        {
          myFilesList.length === 0 && loading && "Loading..."
        }
        {/* === edit image section start === */}
        {/* <div className={`editGallary ${active ? "block" : ""}`}>
                  
                    <div className='editClose'>
                        <h4>Edit</h4>
                        <button><img src={closeIcon} alt="close" /></button>
                    </div>
                    
                    <div className='editPreview'>
                        <img src={gallary1} alt='edit_image' />
                    </div>
                   
                    <div className='editAltTag'>
                        <label>
                            Alt Text
                        </label>
                        <textarea name="" id="" ></textarea>
                    </div>
                    
                    <div className='editAltTag'>
                        <label>
                            Title
                        </label>
                        <input type='text' />
                    </div>
                   
                    <div className='editAltTag'>
                        <label>
                            Description
                        </label>
                        <textarea name="" id="" ></textarea>
                    </div>
                   
                </div> */}
      </div>

      <div className={styles.myFilesFooter}>
        {/* <div className="dataRange">
          <div className="dataUsed">
            <div className="fullData"></div>
            <div className="datashow"></div>
          </div>
          <p>{checkFileSize(size, "GB")} GB of 5 GB ({(checkFileSize(size, "GB") / 5) * 100}%) used</p>
        </div> */}
        <div className={styles.footerBtns}>
          <button className={styles.cancelBtn} onClick={() => onCancel()}>Cancel</button>
          <button className={`${styles.addBtn} ${imageList.length > 0 ? `${styles.activeBtn}` : ""}`} disabled={imageList.length === 0} onClick={() => handleAdd()}>Add</button>
        </div>
      </div>
      {openDeletePopup && (
        <DeletePopup
          ref={ref}
          handleDelete={() => handleDelete()}
          cancel={() => setOpenDeletePopup(false)}
          disabled
        />
      )}
    </div>
  );
};

export default MyFiles;
