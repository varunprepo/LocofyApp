import { FunctionComponent, useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import SocialMediaLogin from "../components/SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(undefined);

  const navigate = useNavigate();

  const signUp = async(e:any) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const response = await fetch(`${"http://localhost:8000"}/signup`,{
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body: JSON.stringify({ email, password })

      });
      const data = await response.json();
      setCookie('AuthToken', data.token)
      //setCookie('UserId', data.userId)
      navigate('/')
      // window.location.reload();
      //console.log(data);
    }
  }
  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className={styles.loginSections}>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.accountDetails}>
              <h2 className={styles.createAccount}>Create Account</h2>
              <div className={styles.credentialsForm}>
                <form className={styles.form1}>
                  <div className={styles.formFields}>
                    <TextField
                      className={styles.email}
                      placeholder="Email address"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconaccount.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.800000000000185px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className={styles.password}
                      placeholder="Password"
                      variant="outlined"
                      type="password"
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.800000000000185px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className={styles.confirmPassword}
                      placeholder="Confirm password"
                      variant="outlined"
                      type="password"
                      value={confirmPassword}
                      onChange={(e)=> setConfirmPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword-1.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.800000000000185px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                  </div>
                  <Button
                    className={styles.searchFlightsButton}
                    disableElevation={true}
                    onClick={signUp}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#00c29f",
                      borderRadius: "6px",
                      "&:hover": { background: "#00c29f" },
                      width: 160,
                      height: 52,
                    }}
                  >
                    Sign up
                  </Button>
                </form>
              </div>
              <div className={styles.accountDetailsInner}>
                <div className={styles.frameChild} />
              </div>
              <SocialMediaLogin
                orSignUpWith="Or sign up with"
                image="/image@2x.png"
                image1="/image-15@2x.png"
                image2="/image-21@2x.png"
              />
            </div>
            <div
              className={styles.iAlreadyHaveContainer}
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className={styles.login}>Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.band}>
        <div className={styles.copyrightInfoWrapper}>
          <div className={styles.copyrightInfo}>
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

export default SignUpPage;
