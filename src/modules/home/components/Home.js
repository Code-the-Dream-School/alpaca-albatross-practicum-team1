import React, { useContext } from 'react'
import { Postings } from './Postings'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'
import styles from '../styles/Home.module.css'
import { UserContext } from '../../common/hooks/UserContext'

export const Home = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            <h1>{`Hello ${user}!`}</h1>
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
