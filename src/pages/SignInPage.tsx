import { FunctionComponent } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import styles from "./SignInPage.module.css";

const SignInPage: FunctionComponent = () => {
  return (
    <div className={styles.signInPage}>
      <main className={styles.headerParent}>
        <Header
          notifications="/notifications@2x.png"
          avatar="/avatar@2x.png"
          showLoginSection={false}
        />
        <main className={styles.loginSections}>
          <div className={styles.loginFormContainer}>
            <Form />
          </div>
        </main>
      </main>
      <footer className={styles.band}>
        <div className={styles.footerContent}>
          <div className={styles.copyrightArea}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
