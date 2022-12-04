import React, { useContext } from 'react'
import { UserContext } from '../../common/providers/UserContext'
import styles from '../styles/HomeNavigationLinks.module.css'
import { registrationPath } from '../../registration/routes/RegistrationRoute'
import { loginPath } from '../../login/routes/LoginRoute'

export const NavigationLinks = () => {
    const { user } = useContext(UserContext)

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.logo}>Volunteer Board</h2>
            </div>
            <div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/profile">Profile</a>
                    {/* TODO: Need to add link to My Post*/}
                    <a href="#">My Post</a>
                    <a href="/add-post">Add Post</a>
                    {user.token ? null : (
                        <>
                            <a href={loginPath}>Login</a>
                            <a href={registrationPath}>Register</a>{' '}
                        </>
                    )}
                </nav>
            </div>
        </div>
    )
}
