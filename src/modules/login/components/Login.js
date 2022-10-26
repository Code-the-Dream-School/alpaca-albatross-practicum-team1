import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <input
          className={styles.input}
          type="text"
          placeholder="Email"
          required
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          required
        />

        {/* Insert LoginButton component here */}
        <button className={styles.loginButton}>Login</button>
        {/*Insert ForgotPassword route here*/}
        <button className={styles.forgotPasswordButton}>
          Forgot password?
        </button>
      </div>

      <div className={styles.register}>
        <span>Don't have an account?</span>
        {/*Insert Registration route here*/}
        <button className={styles.registerButton}>Create new account</button>
      </div>
    </div>
  );
};

export default Login;
