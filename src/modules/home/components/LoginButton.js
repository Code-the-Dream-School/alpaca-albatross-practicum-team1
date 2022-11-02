import React from 'react'
import styles from '../styles/LoginButton.module.css'
import { useNavigate } from 'react-router-dom'
import { loginPath } from '../../login/routes/LoginRoute'

export const LoginButton = () => {
    const toLogin = useNavigate()

    return (
        <div>
            <button
                className={styles.loginButton}
                onClick={() => toLogin(loginPath)}
            >
                Log in
            </button>
        </div>
    )
}
