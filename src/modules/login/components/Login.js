import React from 'react'
import { LoginButton } from '../../common/components/loginButton/LoginButton'
import { RegisterButton } from '../../common/components/registerButton/RegisterButton'

import styles from '../styles/Login.module.css'

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

            <LoginButton />
            {/*Insert ForgotPassword route here*/}
            <button className={styles.forgotPasswordButton}>
                Forgot password?
            </button>

            <span>Don't have an account?</span>
            {/*Insert Registration route here*/}
            <RegisterButton />
            <button className={styles.registerButton}>
                Create new account
            </button>
        </div>
    )
}
