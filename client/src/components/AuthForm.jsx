import { useState, useRef, SyntheticEvent } from 'react';
import { authActions } from "../store/auth-Slice";
import styles from './AuthForm.module.css';
import { useDispatch } from 'react-redux';
import {useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.REACT_APP_FIREBASE_WEB_API_KEY;

    } else {
      url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.REACT_APP_FIREBASE_WEB_API_KEY;
    }
      fetch(url,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
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
        const isAdmin = JSON.parse(atob(data.idToken.split('.')[1])).account[0].role === 'admin';

        // 
        console.log("isAdmin=" + isAdmin);

        localStorage.setItem("token", data.idToken)
           dispatch(authActions.login(data.idToken));
           history.replace('/')
      })
      .catch((err) => {
        alert(err.message);
      });
    
  };

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? 'התחברות' : 'הרשמה'}</h1>
      <form onSubmit={submitHandler}>
        
        <div className={styles.control}>
          <div className={styles.passLabels}>
          <label htmlFor='password'>סיסמא</label>
          <Link to="/password_reset">שכחת סיסמא? </Link>
          </div>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>{isLogin ? 'כניסה' : 'הרשמה'}</button>
          <button
            type='button'
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'הרשמה חדשה' : 'כניסה עם משתמש קיים'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;