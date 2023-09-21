import React from "react";
import GoogleIcon from "../../../../Assets/SiteEditor/Icons/googleIcon.svg";
import EmailIcon from "../../../../Assets/SiteEditor/Icons/emailIcon.svg";
import PhoneIcon from "../../../../Assets/SiteEditor/Icons/phoneIcon.svg";
import SocialAccount from "./SocialAccountCard/SocialAccountCard";
import styles from "./CreateSocialAccount.module.scss";
import Link from "next/link";

const CreateSocialAccount = () => {
  const socialAccountData = [
    {
      id: 1,
      img: <GoogleIcon />,
      text: "Continue with Google",
    },
    {
      id: 2,
      img: <EmailIcon />,
      text: "Continue with Email",
    },
    {
      id: 3,
      img: <PhoneIcon />,
      text: "Continue with Mobile",
    },
  ];
  return (
    <div className={styles.createAccount}>
      <h2 className={styles.createAccount__accountHeading}>
        Create Your account
      </h2>
      <p className={styles.createAccount__accountPara}>
        Sign up for your 30 days free trial
      </p>
      {/* ==== create social account start ====  */}
      <div className={styles.createAccount__social}>
        {socialAccountData?.map((value) => {
          return <SocialAccount {...value} key={value?.id} />;
        })}

        <p className={styles.createAccount__social__loginText}>
          Already have a account?{" "}
          <Link
            href={""}
            className={styles.createAccount__social__loginText__link}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateSocialAccount;
