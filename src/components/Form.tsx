import { FunctionComponent, useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import SocialMediaLogin from "./SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

const Form: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(undefined);

  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const login = async(e: any) => {
      e.preventDefault();    
      const response = await fetch(`${"http://localhost:8000"}/login`,{
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body: JSON.stringify({ email, password })

      });
      const data = await response.json();
      setCookie('AuthToken', data.token)
      //setCookie('UserId', data.userId)
      navigate('/')
      //window.location.reload();
      //console.log(data);
    
  }
  return (
    <div className={styles.form}>
      <div className={styles.credentialsArea}>
        <h2 className={styles.signIn}>Sign in</h2>
        <div className={styles.form1}>
          <form className={styles.form2}>
            <div className={styles.formFields}>
              <TextField
                className={styles.email}
                placeholder="Email address"
                variant="outlined"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <img width="20px" height="20px" src="/iconaccount.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "51px",
                    backgroundColor: "#fff",
                    paddingRight: "18.799999999999955px",
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
                    <img width="20px" height="20px" src="/iconpassword.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#d9d9d9" },
                  "& .MuiInputBase-root": {
                    height: "51px",
                    backgroundColor: "#fff",
                    paddingRight: "18.799999999999955px",
                  },
                  "& .MuiInputBase-input": { color: "#787878" },
                }}
              />
            </div>
            <Button
              className={styles.searchFlightsButton}
              disableElevation={true}
              variant="contained"
              onClick={login}
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
              Sign in
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.formChild} />
      <SocialMediaLogin
        orSignUpWith="Or sign in with"
        image="/image1@2x.png"
        image1="/image-16@2x.png"
        image2="/image-22@2x.png"
      />
      <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account yet? `}</span>
        <span className={styles.signUp}>Sign up</span>
      </div>
    </div>
  );
};

export default Form;
