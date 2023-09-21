import React from "react";
import AppLinkUrl from "../CommonComponents/AppLink/AppLinkUrl";
import { useRouter } from "next/router";
import useTemplateId from "./useTemplateId";

const useAppNavigate = () => {
  const router = useRouter();
  const templateId = useTemplateId();
  const navigate = (route, type,editorRouting) => {
    if (AppLinkUrl.isEditor()) {
      if(editorRouting){
        // window.location.href = `/editor/${templateId}${route}`;
         router.push(`/editor/${templateId}${route}`);
      }
    }else if(AppLinkUrl.isPreview()){
      if (type === "reload") {
        window.location.href = `/preview/${templateId}${route}`;
      } else {
        router.push(`/preview/${templateId}${route}`);
        // router.replace(router.asPath);
      }
    } else {
      if (type === "reload") {
        // window.location.href = route;
      } else {
        router.push({
          pathname: route,
          query:{ index: route},
        },route,{shallow :false});
        // router.push(route);
        // router.replace(router.asPath);
      }
    }
  };

  return navigate;
};
export default useAppNavigate;
