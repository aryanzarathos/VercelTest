import React from "react";
import About from "../components/About/index";
import Shop from "../components/Shop/index";

const Components = {
  myabout: About,
  myshop: Shop
};

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default block => {
  if (typeof Components[block.componentName] !== "undefined") {
    return React.createElement(Components[block.componentName], {
    //   key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.componentName} has not been created yet.</div>,
    // { key: block._uid }
  );
};
