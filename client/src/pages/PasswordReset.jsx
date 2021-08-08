import styles from "./PasswordReset.module.css"

function PasswordReset() {
    
    const submitHandler = (event ) => {
        event.preventDefault();
    }
  
    return (


    <form onSubmit={submitHandler}>
    <div>
      <h1>שכחת סיסמא?</h1>
      <h1>
        Enter the email address you used when you joined and we’ll send you
        instructions to reset your password. For security reasons, we do NOT
        store your password. So rest assured that we will never send your
        password via email.
      </h1>
      <div className={styles.control}>
          <label htmlFor='email'>דואר אלקטרוני</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={styles.actions}>
          <button
            type='button' onClick={switchAuthModeHandler}
          >
            שלח הוראות שחזור סיסמא
          </button>
        </div>
    </div>
    </form>
  );
}
export default PasswordReset;
