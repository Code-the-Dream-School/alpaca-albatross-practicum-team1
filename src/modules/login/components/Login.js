import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
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
      <button className={styles.loginButton}>Log in</button>
      {/*Insert ForgotPassword route here*/}
      <button className={styles.forgotPasswordButton}>Forgot password?</button>

      <span>Don't have an account?</span>
      {/*Insert Registration route here*/}
      <button className={styles.registerButton}>Create new account</button>
    </div>
  );
};

export default Login;
