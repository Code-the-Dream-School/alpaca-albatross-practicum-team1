import React, { useContext } from 'react'
import { Postings } from './Postings'
import { LogoutButton } from './LogoutButton'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'
import styles from '../styles/Home.module.css'
import { UserContext } from '../../common/providers/UserContext'
import rotatingEarth from '../../../assets/rotatingEarth.mp4'
import { Footer } from './Footer'
import { Searchbar } from './Searchbar'

export const Home = () => {
    const { user } = useContext(UserContext)

    return (
        <div className={styles.homeContainer}>
            <video src={rotatingEarth} loop muted autoPlay />
            <div className={styles.homeHeader}>
                <p>Logo Placeholder</p>
                <h1>Volunteer</h1>
                <Searchbar />
                <div className={styles.homeButtons}>
                    {user.token ? (
                        <LogoutButton />
                    ) : (
                        <>
                            <LoginButton /> <RegisterButton />
                        </>
                    )}
                </div>
            </div>
            <Postings />
            <Footer />
        </div>
    )
}
