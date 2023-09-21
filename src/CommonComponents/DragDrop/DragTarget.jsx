import React from "react";

export const DragTarget = (props) => {
  const { children } = props;
  return <ul className="dragTarget">{children}</ul>;
};
