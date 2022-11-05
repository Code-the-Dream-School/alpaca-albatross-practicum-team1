import React from 'react'
import { Postings } from './Postings'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'
import styles from '../styles/Home.module.css'


export const Home = () => {
    return (
        <div>
            <div className={styles.homeHeader}>
                <p>Logo Placeholder</p>
                <h1>Volunteer</h1>
                <div className={styles.homeButtons}>
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>
            <Postings />
        </div>
    )
}
