import React from "react";
import LoginButton from "./loginbutton/components/LoginButton";
import RegisterButton from "./registerbutton/components/RegisterButton";
import styles from "../styles/Login.module.css";

export const Login = () => {
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
      <LoginButton />

      {/*Insert ForgotPassword route here*/}
      <button className={styles.forgotPasswordButton}>Forgot password?</button>

      <span>Don't have an account?</span>
      {/*Insert Registration route here*/}

      <RegisterButton />
    </div>
  );
};
