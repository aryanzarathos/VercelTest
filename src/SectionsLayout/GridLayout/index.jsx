import React from 'react';
import { GridSection, SubGridSection } from './GridStyled';
import RenderComponent from "./gridComponenetRender";
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_OPTION } from '../../store/reducers/SiteEditor';

const GridLayout = ({ children }) => {
  const dispatch = useDispatch()
  const { gridId } = useSelector(
    (state) => state.editor.selectedIndexAndId
  );
  const { sectionId } = useSelector(
    (state) => state.editor.selectedIndexAndId
  );
  const onMouseHover = (data, index) => {
    if (gridId !== data._id) {
      dispatch(SELECT_OPTION({ gridId: data._id, gridIndex: index, gridData: data }))
    }
  }

  const mouseHover = (data, index) => {
    if (sectionId !== data._id) {
      dispatch(
        SELECT_OPTION({
          sectionId: data._id,
          sectionIndex: index,
          sectionData: data,
        })
      );
    }
  };
  return (
    <GridSection item={children.style} onClick={() => mouseHover(children, children.index)}>

      {
        children.data.map((sectionData, index) => {
          return (
            <SubGridSection item={sectionData.style} key={index} onClick={() => onMouseHover(sectionData, index)}>

              {
                typeof RenderComponent[sectionData.componentRender] !== "undefined" &&
                  sectionData?.type === "static" ? sectionData.gridShow && React.createElement(RenderComponent[sectionData.componentRender], null, { ...sectionData, gridIndex: index }) :
                  React.createElement(RenderComponent[sectionData.componentRender], null, { ...sectionData, gridIndex: index })
              }
            </SubGridSection>
          )
        })

      }
    </GridSection>
  )
}

export default GridLayout