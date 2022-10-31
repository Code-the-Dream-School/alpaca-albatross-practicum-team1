import React from 'react'
import { Postings } from './Postings'
import { LoginButton } from '../../common/components/loginButton/LoginButton'
import { RegisterButton } from '../../common/components/registerButton/RegisterButton'
import styles from '../styles/Home.module.css'

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeHeader}>
                <h1>Home</h1>
                <div className={styles.homeButtons}>
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>

            <Postings />
        </div>
    )
}
