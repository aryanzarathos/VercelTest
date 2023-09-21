import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const useTemplateData = () => {
  const { eventData, templateData, templateSuccess } = useSelector((state) => {
    return {
      eventData: state.editor.selectedIndexAndId,
      templateData: state.websiteTemplate.getTemplate.data,
      templateSuccess: state.websiteTemplate.getTemplate.success
    };
  });
  const [mainContainerData, setMainContainerData] = useState({});
  //   const [mainContainerId, setMainContainerId] = useState({});
  //   const [mainContainerIndex, setMainContaineIndex] = useState({});

  const [subcontainerData, setSubContainerData] = useState({});
  //   const [subcontainerId, setSubContainerId] = useState({});
  //   const [subcontainerIndex, setSubContainerIndex] = useState({});

  const [sectionData, setSectionData] = useState({});
  //   const [sectionId, setSectionId] = useState({});
  //   const [sectionIndex, setSectionIndex] = useState({});

  const [gridData, setGridData] = useState({});
  //   const [gridIndex, setGridIndex] = useState({});
  //   const [gridId, setGridId] = useState({});

  const [selectedElementData, setSelectedElementData] = useState({});
  //   const [selectedElementIndex, setSelectedElementIndex] = useState({});
  //   const [selectedElementId, setSelectedElementId] = useState({});

  useEffect(() => {
    if (templateData && templateSuccess) {
      if (templateData?.["data"]?.[eventData.mainContainerIndex]) {

        setMainContainerData(templateData?.["data"][eventData.mainContainerIndex]);
      }
      if (templateData?.["data"]?.[eventData.mainContainerIndex]?.["data"]?.[
        eventData.subcontainerIndex
      ]) {
        setSubContainerData(
          templateData["data"][eventData.mainContainerIndex]["data"][
          eventData.subcontainerIndex
          ]
        );
      }
      if (templateData?.["data"]?.[eventData.mainContainerIndex]?.["data"][
        eventData.subcontainerIndex
      ]?.["data"]?.[eventData.sectionIndex]) {
        setSectionData(
          templateData["data"][eventData.mainContainerIndex]["data"][
          eventData.subcontainerIndex
          ]["data"][eventData.sectionIndex]
        );
      }
      if (templateData?.["data"]?.[eventData.mainContainerIndex]?.["data"][
        eventData.subcontainerIndex
      ]?.["data"]?.[eventData.sectionIndex]?.["data"]?.[eventData.gridIndex]) {
        setGridData(
          templateData["data"][eventData.mainContainerIndex]["data"][
          eventData.subcontainerIndex
          ]["data"][eventData.sectionIndex]["data"][eventData.gridIndex]
        );
      }
      if (templateData?.["data"]?.[eventData.mainContainerIndex]?.["data"][
        eventData.subcontainerIndex
      ]?.["data"][eventData.sectionIndex]?.["data"]?.[eventData.gridIndex]?.["data"][
        eventData.selectedElementIndex
      ]) {
        setSelectedElementData(
          templateData["data"][eventData.mainContainerIndex]["data"][
          eventData.subcontainerIndex
          ]["data"][eventData.sectionIndex]["data"][eventData.gridIndex]["data"][
          eventData.selectedElementIndex
          ]
        );
      }
    }

  }, [eventData.gridIndex, eventData.mainContainerIndex, eventData.sectionIndex, eventData.selectedElementIndex, eventData.subcontainerIndex, templateData, templateSuccess]);
  return [
    mainContainerData?._id,
    eventData.mainContainerIndex,
    mainContainerData,
    subcontainerData._id,
    eventData.subcontainerIndex,
    subcontainerData,
    sectionData._id,
    eventData.sectionIndex,
    sectionData,
    gridData._id,
    eventData.gridIndex,
    gridData,
    selectedElementData?._id,
    eventData.selectedElementIndex,
    selectedElementData,
    templateData?._id
  ];
};
export default useTemplateData