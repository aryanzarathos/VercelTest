import Image from "next/image";
import React, { forwardRef } from "react";

const ImageViewer = forwardRef(({ object, defaultImage, ...props }) => {

  return (
    <React.Fragment>
      {object?.key ? (
        <Image
          src={object?.src ? object.src : defaultImage}
          alt={object?.alt}
          {...props} />
      ) : (
        <Image
          src={object?.src ? object.src : defaultImage}
          alt={object?.alt}
          {...props} />
      )}
    </React.Fragment>
  );
});
ImageViewer.displayName= "ImageViewer"
export default ImageViewer