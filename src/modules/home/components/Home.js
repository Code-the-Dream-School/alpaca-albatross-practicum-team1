import React, { useContext } from 'react'
import { Postings } from './Postings'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'
import { HomeNavigationLinks } from './HomeNavigationLinks'
import styles from '../styles/Home.module.css'
import { UserContext } from '../../common/providers/UserContext'

export const Home = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            <HomeNavigationLinks />
            <div className={styles.homeHeader}>
                <p>Logo Placeholder</p>
                <h1>Volunteer</h1>
                <div className={styles.homeButtons}>
                    {/* TODO: Render Logout Button instead of null */}
                    {user.token ? null : (
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
