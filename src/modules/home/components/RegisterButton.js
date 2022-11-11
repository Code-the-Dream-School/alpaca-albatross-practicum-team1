import React from 'react'
import styles from '../styles/RegisterButton.module.css'
import { useNavigate } from 'react-router-dom'
import { registrationPath } from '../../registration/routes/RegistrationRoute'

export const RegisterButton = () => {
    const navigate = useNavigate()

    const onClick = () => navigate(registrationPath)

    return (
        <div>
            <button className={styles.registerButton} onClick={onClick}>
                Register
            </button>
        </div>
    )
}

