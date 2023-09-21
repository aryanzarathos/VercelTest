import React from "react";
import styles from "./CreateNumberAccount.module.scss";
import FormInput from "../../../../CommonComponents/Form/FormInput";
import FormError from "../../../../CommonComponents/Form/FormError";
import FormInputWithIcon from "../../../../CommonComponents/Form/FormInputWithIcon";
import SocialAccountCard from "../CreateSocialAccount/SocialAccountCard/SocialAccountCard";
import GoogleIcon from "../../../../Assets/SiteEditor/Icons/googleIcon.svg";
import EmailAccount from "../../../../Assets/SiteEditor/Icons/emailAccount.svg";

const CreateNumberAccount = () => {
  const OtherData = [
    {
      id: 1,
      img: <GoogleIcon />,
      text: "Google",
    },
    {
      id: 2,
      img: <EmailAccount />,
      text: "Email",
    },
  ];
  return (
    <div className={styles.mainEmailAccount}>
      <h2 className={styles.mainEmailAccount__accountHeading}>
        Create Your account
      </h2>
      <p className={styles.mainEmailAccount__accountPara}>
        Sign up for your 30 days free trial
      </p>
      <form className={styles.mainEmailAccount__form}>
        <div className="formFieldwrap">
          <FormInput
            type="number"
            label="Enter Phone Number"
            placeholder="Enter your Phone Number"
          />
          <FormError error="Email is required." className="visitorFormError" />
        </div>
        <div className="formFieldwrap">
          <FormInput
            type="text"
            label="Enter your full name"
            placeholder="Enter your full name"
          />
          <FormError error="Name is required." className="visitorFormError" />
        </div>
        <div className="formFieldwrap">
          <FormInputWithIcon
            label="Password"
            placeholder={"Enter Your Password"}
          />
          <FormError
            error=" Password is required."
            className="visitorFormError"
          />
        </div>
        <button
          type="submit"
          className={`${styles.mainEmailAccount__form__emailBtn} button button-silver`}
        >
          Continue
        </button>
      </form>
      <p className={styles.mainEmailAccount__continue}>
        <span>or continue with</span>
      </p>
      <div className={styles.mainEmailAccount__googleMail}>
        {OtherData?.map((value) => {
          return (
            <SocialAccountCard
              {...value}
              key={value?.id}
              className={styles.mainEmailAccount__googleMail__socialCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CreateNumberAccount;
