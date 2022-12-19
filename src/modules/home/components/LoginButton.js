import React from 'react'
import styles from '../styles/LoginButton.module.css'
import { loginPath } from '../../login/routes/LoginRoute'
import { Link } from 'react-router-dom'

export const LoginButton = () => {
    return (
        <div>
            <Link className={styles.loginButton} to={loginPath}>
                Log in
            </Link>
        </div>
    )
}
