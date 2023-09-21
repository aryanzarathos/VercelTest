export function getExtensionFromName(name) {
  let fileExtension = name.substring(name.lastIndexOf(".") + 1);
  return fileExtension;
}

export function checkFileSize(sizeinbytes, sizeType = "MB") {
  switch (sizeType) {
    case "GB":
      return (sizeinbytes / 1073741824).toFixed(2);
    default:
      return (sizeinbytes / 1048576).toFixed(2);
  }
}

export const isFileAllowed = (imageFile) => {
  if (
    !imageFile.match(/\.(doc|docx|pdf|xls|xlsx)$/) ||
    imageFile.match(/\.[0-9a-z]+\.(doc|docx|pdf|xls|xlsx)$/)
  ) {
    return false;
  }
  return true;
};

export const isVideoAllowed = (imageFile) => {
  if (!imageFile.match(/\.(mp4)$/) || imageFile.match(/\.[0-9a-z]+\.(mp4)$/)) {
    return false;
  }
  return true;
};

export const isJpgPng = (imageFile) => {
  if (
    !imageFile.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/) ||
    imageFile.match(/\.[0-9a-z]+\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)
  ) {
    return false;
  }
  return true;
};



export const isImageAllowed = (imageFile) => {
  if (
    !imageFile.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG|webp|WEBP)$/) ||
    imageFile.match(/\.[0-9a-z]+\.(jpg|jpeg|png|JPG|JPEG|PNG|webp|WEBP)$/)
  ) {
    return false;
  }
  return true;
};
export const isStudyMaterial = (imageFile) => {
  if (
    !imageFile.match(/\.(jpg|jpeg|png|pdf|mp3|mp4)$/) ||
    imageFile.match(/\.[0-9a-z]+\.(jpg|jpeg|png|pdf|mp3|mp4)$/)
  ) {
    return false;
  }
  return true;
};

export const isFileImageAllowed = (imageFile) => {
  if (
    !imageFile.match(
      /\.(jpg|jpeg|png|doc|docx|pdf|xls|xlsx|JPG|PNG|JPEG|webp|WEBP)$/
    ) ||
    imageFile.match(
      /\.[0-9a-z]+\.(jpg|jpeg|png|doc|docx|pdf|xls|xlsx|JPG|PNG|JPEG|webp|WEBP)$/
    )
  ) {
    return false;
  }
  return true;
};
export const isFileOnlyImagePdf = (imageFile) => {
  if (
    !imageFile.match(/\.(jpg|jpeg|png|pdf|JPG|JPEG|PNG|webp|WEBP)$/) ||
    imageFile.match(/\.[0-9a-z]+\.(jpg|jpeg|png|pdf|JPG|JPEG|PNG|webp|WEBP)$/)
  ) {
    return false;
  }
  return true;
};

export const onlyXmlAllowed = (imageFile) => {
  if (
    !imageFile.match(/\.(xls|xlsx)$/) ||
    imageFile.match(/\.[0-9a-z]+\.(xls|xlsx)$/)
  ) {
    return false;
  }
  return true;
};

export const isAudioAllowed = (imageFile) => {
  if (!imageFile.match(/\.(mp3)$/) || imageFile.match(/\.[0-9a-z]+\.(mp3)$/)) {
    return false;
  }
  return true;
};
export const examAnswerFileUpload = (file) => {
  if (
    !file.match(/\.(jpg|jpeg|png|pdf|mp3|mp4)$/) ||
    file.match(/\.[0-9a-z]+\.(jpg|jpeg|png|pdf|mp3|mp4)$/)
  ) {
    return false;
  }
  return true;
};

export const isImageAndVideo = (imageFile) => {
  if (
    !imageFile.match(
      /\.(jpg|JPG|jpeg|JPEG|png|PNG|tif|TIF|tiff|TIFF|bmp|BMP|GIF|gif|EPS|eps|raw|RAW|JFIF|jfif|webp|WEBP|heic|HEIC|mp4|MP4|webp|WEBP)$/
    ) ||
    imageFile.match(
      /\.[0-9a-z]+\.(jpg|JPG|jpeg|JPEG|png|PNG|tif|TIF|tiff|TIFF|bmp|BMP|GIF|gif|EPS|eps|raw|RAW|JFIF|jfif|webp|WEBP|heic|HEIC|mp4|MP4|webp|WEBP)$/
    )
  ) {
    return false;
  }
  return true;
};