import Link from "next/link";
import React from "react";
import styles from "./VerifyAccount.module.scss";
import Verifyloader from "../../../../Assets/SiteEditor/Icons/Verifyloader.gif";
import FormInput from "../../../../CommonComponents/Form/FormInput";
import Image from "next/image";
const VerifyAccount = () => {
  return (
    <>
      <div className={styles.mainVerify}>
        <h2 className={styles.mainVerify__heading}>
          Verify your email address
        </h2>
        <p className={styles.mainVerify__para}>
          An OTP has been sent to your email address furquan@edneed.com{" "}
          <Link href="">Change email ?</Link>
          <form className={styles.mainVerify__otpForm}>
            <h5 className={styles.mainVerify__otpForm__otpHeading}>
              Enter OTP
            </h5>
            <div className={`${styles.mainVerify__otpForm__otp_inputs}`}>
              <input
                className={`form-control
                   
                  `}
                type="text"
                id="first"
                tabIndex="1"
                maxLength="1"
                autoFocus={true}
              />
              <input
                //
                className={`form-control 
                  `}
                type="text"
                id="second"
                tabIndex="2"
                maxLength="1"
              />
              <input
                className={`form-control 
                  `}
                type="text"
                id="third"
                tabIndex="3"
                maxLength="1"
              />
              <input
                className={`form-control`}
                type="text"
                id="fourth"
                tabIndex="4"
                maxLength="1"
              />
              <input
                className={`form-control`}
                type="text"
                id="fifth"
                tabIndex="5"
                maxLength="1"
              />
              <input
                className={`form-control`}
                type="text"
                id="sixth"
                tabIndex="6"
                maxLength="1"
              />
            </div>

            <Link href={""} className={styles.mainVerify__otpForm__resend}>
              Resend code in 00:29
            </Link>
            <button
              type="submit"
              className={`${styles.mainVerify__otpForm__conitnueBtn} button button-silver `}
              //   use ${styles.active} class in upr button
            >
              <span>Continue</span>
            </button>
            <button
              type="submit"
              className={`${styles.mainVerify__otpForm__conitnueBtn} button button-silver ${styles.active}`}
              //   use  class in upr button
            >
              <Image
                src={Verifyloader}
                alt="Verifyloader"
                width={16}
                height={15}
              />
              <span>Verfying</span>
            </button>
          </form>
        </p>
      </div>
    </>
  );
};

export default VerifyAccount;
