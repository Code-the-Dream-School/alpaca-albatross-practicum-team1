import React from 'react'
import styles from '../styles/LoginButton.module.css'
import { useNavigate } from 'react-router-dom'
import { loginPath } from '../../login/routes/LoginRoute'

export const LoginButton = () => {
    const navigate = useNavigate()
    const onClick = () => navigate(loginPath)

    return (
        <div>
            <button className={styles.loginButton} onClick={onClick}>
                Log in
            </button>
        </div>
    )
}
