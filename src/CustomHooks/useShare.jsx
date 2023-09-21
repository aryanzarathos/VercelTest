import { useRef, useState } from "react";
import { useDetectOutsideClick } from '../CommonComponents/DetectOutsideClick/useDetectOutsideClick';
import { showToast } from "@/store/actions/successmessagepopup";
import { useDispatch } from "react-redux";

const useShare = (
  id,
  slug,
  IconClassName) => {
  const dispatch = useDispatch()
  const inputUrl = useRef(null);
  const shareRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isActiveShare, setIsActiveShare] = useDetectOutsideClick(
    shareRef,
    false
  );
  const onClickBtnShare = () => {
    setIsActiveShare(!isActiveShare);
  };

  const ShopUrl = window.location.href + "/" + slug;
  const DefaultUrl = window.location.href;

  const shareUrl = slug ? ShopUrl : DefaultUrl;

  const copyToClipBoard = () => {
    const shareElement = document.createElement("input");
    shareElement.value = shareUrl
    document.body.appendChild(shareElement);
    shareElement.select();
    document.execCommand("copy");
    document.body.removeChild(shareElement);
    shareUrl && setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
    dispatch(showToast("Copied Successfully!"))
  };
  return [shareUrl, copyToClipBoard, copySuccess]
}
export default useShare