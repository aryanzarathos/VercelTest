import React from "react";
import dynamic from "next/dynamic"
const OnboardCreateAccount =dynamic(()=>import("../../components/Auth/OnboardCreateAccount"),{ssr:false})
const OnboardCreateAccountPage = () => {
  return (
    <div>
      <OnboardCreateAccount />
    </div>
  );
};

export default OnboardCreateAccountPage;
