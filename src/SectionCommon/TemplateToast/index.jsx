import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import RenderToast from "./RenderToast";
import { hideToast } from "@/store/actions/successmessagepopup";
const TemplateToast = () => {
    const dispatch = useDispatch();
    const success = useSelector(state => state.successmessagepopup)

    const handleClose = useCallback(() => {
        dispatch(hideToast())
    }, [dispatch])

    useEffect(() => {
        if (success.showToast) {
            setTimeout(handleClose, 3000)
        }
    }, [success, handleClose])
    const RenderToastComponent = RenderToast[success?.template || "default"]
    return (
        <React.Fragment>
            {
                typeof RenderToast[success?.template || "default"] !== "undefined" && <RenderToastComponent />
            }
        </React.Fragment>
    )
}
export default TemplateToast