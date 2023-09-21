import Loader from "@/CommonComponents/Loader/Editor";
import TemplateLoader from "@/CommonComponents/Loader/Template";
import SpinnerLoader from "@/CommonComponents/SpinnerLoader/SpinnerLoader";
import dynamic from "next/dynamic";
import { Fragment } from "react"
const EditorPreviewComponent = dynamic(() => import("../../components/Editor/index"), { ssr: false, loading: () => <SpinnerLoader style={{ height: "100vh" }} /> });
const EditorPage = () => {
    return (
        <Fragment>
            <EditorPreviewComponent editor={false} />
        </Fragment>
    )
}
export default EditorPage