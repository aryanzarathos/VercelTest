import React, { forwardRef, useCallback, useEffect, useState } from "react";
import Modals from "../Modals";
import ModalBody from "../Modals/ModalsBody";
import styles from "./AltTextPopup.module.scss";
import ModalHeader from "../Modals/ModalsHeader";
import Image from "next/image";
import FormInput from "../Form/FormInput";
import FormTextArea from "../Form/FormTextArea";
import ModalsFooter from "../Modals/ModalsFooter";
import { useDispatch, useSelector } from "react-redux";
import { updateAltText, updateGalleryAltText } from "@/store/actions/altText";
import useTemplateData from "@/CustomHooks/useTemplateData";
import ImageElement from "@/SectionsLayout/Elements/ImageElement/ImageElement";
import { dummyImg } from "@/Constant/constants";

const AltTextPopup = forwardRef(
  (
    {
      onclose,

      Discription,
      buttonTitle1,
      buttonTitle2,
    },
    ref
  ) => {
    const dispatch = useDispatch();
    const [altData, setAltData] = useState([]);
    const [isFilled, setIsFilled] = useState(false);
    const { fieldName, fieldIdLabel, arrayofImages } = useSelector(
      (state) => state.editor.selectedIndexAndId
    );
    const { user } = useSelector((state) => {
      return {
        user: state.user,
      };
    });
    const [
      mainContainerId,
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
      selectedElementData,
      pageId,
    ] = useTemplateData();
    const { modalState } = useSelector((state) => state.commonStates);
    const ModalClosehandle = () => {
      onclose();
      setAltData([]);
    };

    const dataMakeFunction = useCallback(() => {
      if (modalState) {
        if (gridData?.section_name === "product") {
          let array = [];
          if (gridData.data?.length > 0) {
            if (gridData?.data[0]?.productlist.length) {
              gridData?.data[0]?.productlist.map((item) => {
                item["productPicture"]?.length &&
                  array.push({
                    images: item["productPicture"],
                    _id: item._id,
                  });
              });
            }
          }
          setAltData([...array]);
        } else if (gridData?.section_name === "collections") {
          let array = [];
          if (gridData.data?.length > 0) {
            gridData?.data.map((item) => {
              item["picture"]?.length &&
                array.push({
                  images: item["picture"],
                  _id: item._id,
                });
            });
          }
          setAltData([...array]);
        } else if (gridData?.section_name === "Gallery") {
          let array = [];
          if (gridData.data?.length > 0) {
            gridData?.data.map((item) => {
              array.push({
                images: item.image,
                _id: item.id,
              });
            });
          }
          setAltData([...array]);
        } else {
          let array = [];
          if (gridData.data?.length > 0) {
            gridData?.data.map((item) => {
              array.push({
                images: item[fieldName],
                _id: item[fieldIdLabel],
              });
            });
          }
          setAltData([...array]);
        }
      }
    }, [fieldIdLabel, fieldName, gridData?.data, gridData?.section_name, modalState]);

    useEffect(() => {
      if (gridData?.data && modalState) {
        dataMakeFunction();
      }
    }, [dataMakeFunction, gridData?.data, isFilled, modalState]);
    const handleInput = (e, key) => {
      let value = e.target.value;
      let name = e.target.name;
      let array = [...altData];
      if (arrayofImages) {
        const updatedObject = { ...array[key]["images"][0], [name]: value };
        const updatedData = [
          ...array[key]["images"].slice(0, 0),
          updatedObject,
          ...array[key]["images"].slice(0 + 1),
        ];
        array[key]["images"] = updatedData;
      } else {
        array[key]["images"] = {
          ...array[key]["images"],
          [name]: value,
        };
      }

      setAltData([...array]);
    };
    const payload = () => {
      return {
        data: altData,
        grid: gridData?._id,
      };
    };

    const SaveItemshandle = () => {
      if (altData && altData?.length) {

        let apiUrl =
          gridData?.section_name === "product"
            ? "updateProductImage"
            : gridData?.section_name === "collections"
              ? "updateCollectionImage"
              : gridData?.section_name === "testimonial"
                ? "updateTestimonialImage"
                : gridData?.section_name === "ourteam"
                  ? "updateTeamImage"
                  : gridData?.section_name === "category"
                    ? "updateCategoryImage"
                    : gridData?.section_name === "facilities"
                      ? "updateFacilitiesImage"
                      : gridData?.section_name === "blog"
                        ? "updateBlogImage"
                        : gridData?.section_name === "services"
                          ? "updateappointmentServiceImage"
                          : gridData?.section_name === "servicecollection"
                            ? "updateServiceCollectionImage"
                            : gridData?.section_name === "services"
                              ? "updateServiceCategoryImage"
                              : "";
        if (gridData.section_name === "Gallery") {
          let data = altData;
          data = data.map((item) => {
            return {
              id: item._id,
              image: item.images,
            };
          });
          dispatch(
            updateGalleryAltText({
              body: { data: data },
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
        } else {
          dispatch(
            updateAltText({
              apiUrl: apiUrl,
              body: payload(),
              business: user?.user_business,
              grid: gridData?._id,
              indexesData: {
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                sectionIndex: sectionIndex,
                gridIndex: gridIndex,
              },
            })
          );
        }
      }
      onclose();
    };

    //  console.log(mainContainerId,"hyhyyh",
    // mainContainerIndex,"hyhyyh",
    // mainContainerData,"hyhyyh",
    // subContainerId,"hyhyyh",
    // subContainerIndex,"hyhyyh",
    // subContainerData,"hyhyyh",
    // sectionId,"hyhyyh",
    // sectionIndex,"hyhyyh",
    // sectionData,"hyhyyh",
    // gridId,"hyhyyh",
    // gridIndex,"hyhyyh",
    // gridData,"hyhyyh",
    // selectedElementId,"hyhyyh",
    // selectedElementIndex,"hyhyyh",
    // selectedElementData);
    return (
      <Modals
        ref={ref}
        ModalsSize={`modalM`}
        Position="center"
        ClosePopUp={ModalClosehandle}
        ClassName=""
      >
        <ModalHeader title="Edit Alt Text" />
        <ModalBody className={styles.AltTextPopupBody}>
          {Discription && (
            <div className={styles.Discription_Wrapper}>
              <p className={styles.Discription_title}>{Discription}</p>
            </div>
          )}
          {arrayofImages ? (
            <React.Fragment>
              {altData.length
                ? altData.map(
                  (item, key) => (
                    // item?.show && (
                    <div className={styles.card} key={key}>
                      <div className={styles.cardBody}>
                        <div className={styles.Grid_Wrap}>
                          <div className={styles.Image_Wrap}>
                            <Image
                              src={item["images"]?.[0]?.src}
                              alt=""
                              width={103}
                              height={103}
                            />
                          </div>
                          <div className={styles.FormInputFiels}>
                            <FormInput
                              labelPosition="top"
                              label="Edit Title"
                              value={item["images"]?.[0]?.title}
                              name="title"
                              placeholder="eg:  Apple"
                              LabelClassName={styles.label}
                              onChange={(e) => handleInput(e, key)}
                              onKeyUp={(e) => handleInput(e, key)}
                              className={styles.InputFields}
                            />
                            <FormInput
                              labelPosition="top"
                              label="Edit Alt Text "
                              value={item["images"]?.[0]?.alt}
                              name="alt"
                              placeholder="eg:  The image describes basket of a.."
                              LabelClassName={styles.label}
                              onChange={(e) => handleInput(e, key)}
                              onKeyUp={(e) => handleInput(e, key)}
                              className={styles.InputFields}
                            />
                          </div>
                        </div>
                        <div className={styles.AreaFormInputFields}>
                          <FormTextArea
                            labelPosition="top"
                            value={item["images"]?.[0]?.desc}
                            rows={4}
                            name={"desc"}
                            label="Edit Image Description"
                            placeholder="eg:  Red scattered apple"
                            onChange={(e) => handleInput(e, key)}
                            onKeyUp={(e) => handleInput(e, key)}
                            LabelClassName={styles.Arealabel}
                            className={styles.AreaInputFields}
                          />
                        </div>
                      </div>
                    </div>
                  )
                  // )
                )
                : "Loading...."}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {altData.length
                ? altData.map((item, key) => (
                  <div className={styles.card} key={key}>
                    <div className={styles.cardBody}>
                      <div className={styles.Grid_Wrap}>
                        <div className={styles.Image_Wrap}>
                          {/* <Image
                            src={item["images"]?.src}
                            alt=""
                            width={103}
                            height={103}
                          /> */}
                          <ImageElement
                            className={styles.Item_image}
                            src={item["images"]?.src}
                            defaultImage={dummyImg}
                          />
                        </div>
                        <div className={styles.FormInputFiels}>
                          <FormInput
                            labelPosition="top"
                            label="Edit Title"
                            value={item["images"]?.title}
                            name="title"
                            placeholder="eg:  Apple"
                            LabelClassName={styles.label}
                            onChange={(e) => handleInput(e, key)}
                            onKeyUp={(e) => handleInput(e, key)}
                            className={styles.InputFields}
                          />
                          <FormInput
                            labelPosition="top"
                            label="Edit Alt Text "
                            value={item["images"]?.alt}
                            name="alt"
                            placeholder="eg:  The image describes basket of a.."
                            LabelClassName={styles.label}
                            onChange={(e) => handleInput(e, key)}
                            onKeyUp={(e) => handleInput(e, key)}
                            className={styles.InputFields}
                          />
                        </div>
                      </div>
                      <div className={styles.AreaFormInputFields}>
                        <FormTextArea
                          labelPosition="top"
                          value={item["images"]?.desc}
                          rows={4}
                          name={"desc"}
                          label="Edit Image Description"
                          placeholder="eg:  Red scattered apple"
                          onChange={(e) => handleInput(e, key)}
                          onKeyUp={(e) => handleInput(e, key)}
                          LabelClassName={styles.Arealabel}
                          className={styles.AreaInputFields}
                        />
                      </div>
                    </div>
                  </div>
                ))
                : "No Records Found."}
            </React.Fragment>
          )}
        </ModalBody>
        <ModalsFooter>
          <div className={styles.button_group}>
            <button
              className={`button btn-o-silver btn-xs btn-oval`}
              onClick={ModalClosehandle}
            >
              {buttonTitle1 && buttonTitle1}
            </button>
            <button
              className={`button button-primary btn-xs btn-oval`}
              onClick={SaveItemshandle}
            >
              {buttonTitle2 && buttonTitle2}
            </button>
          </div>
        </ModalsFooter>
      </Modals>
    );
  }
);

AltTextPopup.displayName = "ConfirmationPopup";

export default AltTextPopup;
