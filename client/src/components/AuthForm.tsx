import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { authActions } from "../store/auth-Slice";
import styles from "./AuthForm.module.css";

//import FacebookLogin from "react-facebook-login";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AuthForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(data.email);
    console.log(data.password);

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`;
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            console.log(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data.idToken);
        const isAdmin =
          JSON.parse(atob(data.idToken.split(".")[1])).account[0].role ===
          "admin";

        //
        console.log("isAdmin=" + isAdmin);

        localStorage.setItem("token", data.idToken);
        dispatch(authActions.login(data.idToken));
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className={styles.auth}>
      <form onSubmit={submitHandler} className={classes.form} noValidate>
        <div>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
        </div>
        <Typography component="h1" variant="h5">
          {isLogin ? "התחברות" : "הרשמה"}
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="דואר אלקטרוני"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="סיסמא"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
        />

        <div className={styles.actions}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isLogin ? "כניסה" : "הרשמה"}
          </Button>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "הרשמה חדשה" : "כניסה עם משתמש קיים"}
          </button>
          <div className={styles.passLabels}>
            <label htmlFor="password">סיסמא</label>
            <Link href="#">שכחת סיסמא? </Link>
          </div>
        </div>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
      {/* <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      /> */}
    </section>
  );
};

export default AuthForm;