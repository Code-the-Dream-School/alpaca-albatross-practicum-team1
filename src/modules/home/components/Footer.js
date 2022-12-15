import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.footer}>
            <h4 onClick={() => navigate('/about')}>About us</h4>
            <p>© 2022</p>
        </div>
    )
}
