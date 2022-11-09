import React from 'react'
import styles from '../styles/LoginButton.module.css'
import { useNavigate } from 'react-router-dom'
import { loginPath } from '../../login/routes/LoginRoute'

export const LoginButton = () => {
    const navigate = useNavigate()
    const onClick = () => navigate(loginPath)

    return (
        <div onClick={onClick}>
            <button className={styles.loginButton}>Log in</button>
        </div>
    )
}
