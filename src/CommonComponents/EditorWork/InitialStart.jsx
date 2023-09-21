import React, { Fragment } from "react";
import RenderComponent from '../../SectionsLayout/RendersComponent/RenderComponent';
// import FinalData from "../../DynamicCssFile/AboutUS/TestingEditor.json"
import FinalData from "../../DynamicCssFile/Slider/Theme2/slider.json"

const InitialStart = () => {
  return (
    <Fragment>
      <React.Fragment>
        {FinalData?.data?.length > 0 ? FinalData?.data?.map((item, key) => {
          return (
            <div key={key} id={item._id}>
              {typeof RenderComponent[item.componentRender] !== "undefined" ?
                React.createElement(RenderComponent[item.componentRender], null, item) :
                ""}
            </div>
          )
        }) : AppLinkUrl.isEditor() ?
          <button onClick={() => handleAddSection()}>Add Sectionnn</button> : ""
        }
      </React.Fragment>
    </Fragment>
  );
};

export default InitialStart;

