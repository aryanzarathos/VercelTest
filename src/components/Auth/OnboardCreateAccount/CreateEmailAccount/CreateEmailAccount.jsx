import React from "react";
import styles from "./CreateEmailAccount.module.scss";
import FormInput from "../../../../CommonComponents/Form/FormInput";
import FormError from "../../../../CommonComponents/Form/FormError";
import FormInputWithIcon from "../../../../CommonComponents/Form/FormInputWithIcon";
import SocialAccountCard from "../CreateSocialAccount/SocialAccountCard/SocialAccountCard";
import GoogleIcon from "../../../../Assets/SiteEditor/Icons/googleIcon.svg";
import PhnIcon from "../../../../Assets/SiteEditor/Icons/phnIcon.svg";

const CreateEmailAccount = () => {
  const OtherData = [
    {
      id: 1,
      img: <GoogleIcon />,
      text: "Google",
    },
    {
      id: 2,
      img: <PhnIcon />,
      text: "Mobile",
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
            type="email"
            label="Enter E-mail id"
            placeholder="Enter your email id"
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

export default CreateEmailAccount;
