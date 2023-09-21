import React from "react";

import RenderComponent from "./subContainerRenderComponent";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_OPTION } from "../../store/reducers/SiteEditor";
import { OtherContainers } from "./subcontainerStyle";

const SubContainer = ({ children }) => {
  const dispatch = useDispatch();
  // const { sectionId } = useSelector(
  //   (state) => state.editor.selectedIndexAndId
  // );
  const { subcontainerId } = useSelector(
    (state) => state.editor.selectedIndexAndId
  );
  // const onMouseHover = (data, index) => {
  //   if (sectionId !== data._id) {
  //     dispatch(
  //       SELECT_OPTION({
  //         sectionId: data._id,
  //         sectionIndex: index,
  //         sectionData: data,
  //       })
  //     );
  //   }
  // };
  const mouseHover = (data, index) => {
    if (subcontainerId !== data._id) {
      dispatch(
        SELECT_OPTION({
          subcontainerId: data._id,
          subcontainerIndex: index,
          subcontainerData: data,
        })
      );
    }
  };
  return (
    <OtherContainers
      item={children.style}
      onClick={() => mouseHover(children, children.index)}
    >
      {children.data.map((sectionData, key) => {
        return (
          !sectionData.isHide &&
          // <div key={key} onClick={() => onMouseHover(sectionData, key)}>
          typeof RenderComponent[sectionData.componentRender] !== "undefined" &&
          React.createElement(
            RenderComponent[sectionData.componentRender],
            null,
            { ...sectionData, index: key }
          )
        );
      })}
    </OtherContainers>
  );
};

export default SubContainer;
