import React from 'react'
import { RenderElements } from './RenderElements';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_OPTION } from '../../store/reducers/SiteEditor';

const CustomComponetLayout = ({ children }) => {
  const dispatch = useDispatch()
  const {selectedElementData}=useSelector((state)=>state.editor.selectedIndexAndId)
  const onMouseHover = (data, index) => {
    if(JSON.stringify(selectedElementData)!==JSON.stringify(data)){
      
    dispatch(SELECT_OPTION({ selectedElementId: data._id, selectedElementIndex: index, selectedElementData: data }))
    }
  }
  // //// console.log("line 12",children.data)
  return (
    <>
      {
        children.data.map((sections, index) => {
          return (
            <div key={index} onClick={() => onMouseHover(sections, index)}>
              {
                sections?.show===true?
                RenderElements(sections,index):
                ""
              }
            </div>
          )

        }
        )

      }
    </>
  )
}

export default CustomComponetLayout