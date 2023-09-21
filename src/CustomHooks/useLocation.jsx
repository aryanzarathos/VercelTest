import React, { useEffect, useState } from "react";
import AppLinkUrl from "../CommonComponents/AppLink/AppLinkUrl";
import { useRouter } from "next/router";

const useAppLocation = () => {
  const location = useRouter();
  const [pathname, setPathname] = useState("");

  const getCurrentLocation = () => {
    if (!location.asPath.includes("index")) {
      if (AppLinkUrl.isEditorOrPreview()) {
        let path = location.asPath.split("/");
        path = path.slice(3);
        path = path.join("/");
        return path===""?"/":`${path}`;
      } else {
        return location.asPath;
      }
    } else {
      return false
    }
  }

  useEffect(() => {
    if (AppLinkUrl.isEditorOrPreview()) {
      let path = location.asPath.split("/");
      path = path.slice(3);
      path = path.join("/");
      setPathname(`/${path}`);
    } else {
      setPathname(location.asPath);
    }
  }, [location]);
  return [pathname, getCurrentLocation];
};
export default useAppLocation;
