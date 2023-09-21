import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AppLinkUrl from '../CommonComponents/AppLink/AppLinkUrl';
import { useSelector } from 'react-redux';


const useTemplateId = () => {
  const router = useRouter();
  const [templateId, setTemplateId] = useState("");
  const { data } = useSelector((state) => state.websiteTemplate.getTemplate)
  useEffect(() => {
    if (AppLinkUrl.isEditorOrPreview()) {
      let path = router.asPath.split("/");
      path = path.slice(2);
      setTemplateId(path[0])
    } else {
      if (data?.template?._id) {
        setTemplateId(data?.template?._id)
      }
    }

  }, [data?.template?._id, router.asPath]);
  return templateId
}
export default useTemplateId