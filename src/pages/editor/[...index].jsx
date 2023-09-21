import { Fragment } from "react"
import dynamic from "next/dynamic";
import Loader from "@/CommonComponents/Loader/Editor";
const EditorPreviewComponent = dynamic(() => import("../../components/Editor/index"), { ssr: false, loading: () => <Loader /> });

const EditorPage = () => {
  return (
    <Fragment>
      <EditorPreviewComponent editor={true} />
    </Fragment>
  )
}
export async function getServerSideProps({ req }) {
  const cookieValue = req.headers.cookie
    ? req.headers.cookie.split(';').find(cookie => cookie.trim().startsWith('__wz_ud__='))
    : null;

  // If the cookie is not present, redirect to the specified URL
  if (!cookieValue) {
    return {
      redirect: {
        destination: 'https://manage.webneed.com', // Replace with the URL you want to redirect to
        permanent: false,
      },
    };
  }
  // If the cookie is present, continue with the regular page rendering
  return {
    props: {},
  };

}

export default EditorPage