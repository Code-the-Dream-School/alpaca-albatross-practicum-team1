import React, { useContext } from 'react'
import { Postings } from './Postings'
import { LogoutButton } from './LogoutButton'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'
import styles from '../styles/Home.module.css'
import { UserContext } from '../../common/providers/UserContext'

export const Home = () => {
    const { user } = useContext(UserContext)
    const userTokenFromLocalStorage = localStorage.getItem('userToken')

    return (
        <div>
            <div className={styles.homeHeader}>
                <p>Logo Placeholder</p>
                <h1>Volunteer</h1>
                <div className={styles.homeButtons}>
                    {user.token || userTokenFromLocalStorage ? (
                        <LogoutButton />
                    ) : (
                        <>
                            <LoginButton /> <RegisterButton />
                        </>
                    )}
                </div>
            </div>
            <Postings />
        </div>
    )
}
