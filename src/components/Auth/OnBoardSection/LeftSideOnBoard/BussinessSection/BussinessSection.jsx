import React from "react";
import styles from "./BussinessSection.module.scss";
import FormError from "../../../../../CommonComponents/Form/FormError";
import FormInput from "../../../../../CommonComponents/Form/FormInput";

const BussinessSection = () => {
  return (
    <>
      <div className={styles.mainBussiness}>
        <h1 className={styles.mainBussiness__heading}>
          Enter your Business Details.
        </h1>
        <p className={styles.mainBussiness__paragraph}>
          You can change it anytime
        </p>
        <form className={styles.mainBussiness__formSection}>
          <div className={`${styles.formFieldwrap}`}>
            <FormInput
              type="name"
              label="Business Name"
              placeholder="Search your business or type name"
            />
            <FormError error="Name is required." className="visitorFormError" />
          </div>
          <div className={`${styles.formFieldwrap}`}>
            <FormInput
              type="name"
              label="Store Name"
              placeholder="Enter your store name"
            />
            <FormError error="Name is required." className="visitorFormError" />
          </div>
          <button
            className={`${styles.mainBussiness__formSection__continueBtn} button button-primary`}
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default BussinessSection;
