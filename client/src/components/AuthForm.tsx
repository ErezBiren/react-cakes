import { Box, IconButton, InputAdornment } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  Clear as ClearIcon,
  Lock as LockIcon,
  MailOutline as MailIcon,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { validateEmail } from "./../Services/Validations";
import { signIn, signUp } from "../Services/googleAPI";
import { authActions } from "../store/auth-Slice";
import styles from "./AuthForm.module.css";
import ResetPassword from "./ResetPassword";
import ResetPasswordSent from "./ResetPasswordSent";

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

const AuthForm: React.FC<{ handleClose: any }> = ({ handleClose }) => {
  const classes = useStyles();
  const history = useHistory();

  const [openResetPassword, setOpenResetPassword] = React.useState(false);
  const handleOpenResetPassword = () => setOpenResetPassword(true);
  const handleCloseResetPassword = () => setOpenResetPassword(false);

  const [openResetPasswordSent, setOpenResetPasswordSent] =
    React.useState(false);
  const handleCloseResetPasswordSent = () => setOpenResetPasswordSent(false);

  const handleResetSent = () => {
    handleCloseResetPassword();
    setOpenResetPasswordSent(true);
  };

  const [data, setData] = useState({
    email: "",
    emailError: "שדה חובה",
    password: "",
    showPassword: false,
    emailFilled: false,
    passwordFilled: false,
  });

  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (isLogin) {
      signIn(data.email, data.password);
    } else {
      signUp(data.email, data.password);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let error = "";
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        error = "כתובת דואר לא חוקית";
      }
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.name + "Filled"]: e.target.value,
      [e.target.name + "Error"]: error,
    });
  };

  const handleClickShowPassword = () => {
    setData({
      ...data,
      showPassword: !data.showPassword,
    });
  };

  const ClearPass = (e: React.MouseEvent<HTMLButtonElement>) => {
    setData({
      ...data,
      password: "",
      passwordFilled: false,
    });
  };

  const ClearEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    setData({
      ...data,
      email: "",
      emailFilled: false,
    });
  };

  return (
    <section className={styles.auth}>
      <form onSubmit={submitHandler} className={classes.form} noValidate>
        <IconButton onClick={handleClose}>
          <ClearIcon />
        </IconButton>
        <Typography component="h1" variant="h5">
          {isLogin ? "התחברות" : "הרשמה"}
        </Typography>

        <TextField
          value={data.email}
          error={data.emailError.length !== 0}
          helperText={data.emailError}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="דואר אלקטרוני"
          name="email"
          autoComplete="email"
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                {data.emailFilled && (
                  <IconButton onClick={ClearEmail}>
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />
        <TextField
          value={data.password}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="סיסמא"
          type={data.showPassword ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {data.passwordFilled && (
                  <IconButton onClick={ClearPass}>
                    <ClearIcon />
                  </IconButton>
                )}

                <IconButton onClick={handleClickShowPassword}>
                  {data.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Link
          href="#"
          align="left"
          display="block"
          variant="body2"
          onClick={handleOpenResetPassword}
        >
          שכחתי סיסמא
        </Link>

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="זכור אותי"
        />

        <div className={styles.actions}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isLogin ? "כניסה" : "הרשמה"}
          </Button>
        </div>
        <Link href="#" variant="body2">
          {"לא רשומים? להרשמה מהירה"}
        </Link>
      </form>
      {/* <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      /> */}

      <ResetPassword
        open={openResetPassword}
        handleClose={handleCloseResetPassword}
        handleResetSent={handleResetSent}
      />
      <ResetPasswordSent
        open={openResetPasswordSent}
        handleClose={handleCloseResetPasswordSent}
      />
    </section>
  );
};

export default AuthForm;
