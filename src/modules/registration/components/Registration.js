import React from "react";
import styles from "../styles/Registration.module.css";

export const Registration = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="First name"
        required
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Last name"
        required
      />

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

      {/* Insert RegisterButton component here */}
      <button className={styles.registerButton}>Register</button>
      {/*Insert Login route here*/}
      <button className={styles.returnToLoginButton}>
        Already have an account?
      </button>
    </div>
  );
};
