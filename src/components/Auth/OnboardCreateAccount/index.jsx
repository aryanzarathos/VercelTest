import React from "react";
// import styles from "./OnboardCreateAccount.module.scss";
// import LoginBtn from "../../../Assets/SiteEditor/Icons/loginIcon.svg";
// import CreateSocialAccount from "./CreateSocialAccount/CreateSocialAccount";
import Link from "next/link";
// import CreateEmailAccount from "./CreateEmailAccount/CreateEmailAccount";
// import CreateNumberAccount from "./CreateNumberAccount/CreateNumberAccount";
// import VerifyAccount from "./VerifyAccount/VerifyAccount";

const OnboardCreateAccount = () => {
  return (
    <>
      <section>
        <div className={styles.mainOnboardLogin}>
          {/* ==== upper section start  ===== */}
          <div className={styles.mainOnboardLogin__uprside}>
            <button className={styles.mainOnboardLogin__uprside__backBtn}>
              Back
            </button>
            <button className={styles.mainOnboardLogin__uprside__loginBtn}>
              {/* <LoginBtn /> Login */}
            </button>
          </div>
          {/* ==== upper section end  ===== */}
          {/* ===== login form start ====== */}
          <div className={styles.mainOnboardLogin__content}>
            {/* ==== create account with social account start ====== */}
            {/* <CreateSocialAccount /> */}
            {/* ==== create account with social account end ====== */}
            {/* ===== create account with email start ========= */}
            {/* <CreateEmailAccount /> */}
            {/* ===== create account with email end ========= */}
            {/* ===== create account with number start ========= */}
            {/* <CreateNumberAccount /> */}
            {/* ===== create account with number end ========= */}
            {/* ======= verify account start ===== */}
            {/* <VerifyAccount /> */}
            {/* ======= verify account end ===== */}
          </div>
          <div className={styles.mainOnboardLogin__downSide}>
            {/* ==== create social account end ====  */}
            <p className={styles.mainOnboardLogin__downSide__terms}>
              By creating an account, you agree to our Terms of Service and have
              read and understood the Privacy Policy.
            </p>
            <ul className={styles.mainOnboardLogin__downSide__list}>
              <li className={styles.mainOnboardLogin__downSide__list__listing}>
                <Link href={""}>Terms of Service</Link>
              </li>
              <li
                className={styles.mainOnboardLogin__downSide__list__listing}
              ></li>
              <li className={styles.mainOnboardLogin__downSide__list__listing}>
                <Link href={""}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          {/* ===== login form end ====== */}
        </div>
      </section>
    </>
  );
};

export default OnboardCreateAccount;
