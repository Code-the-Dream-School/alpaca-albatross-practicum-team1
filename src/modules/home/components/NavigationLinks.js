import React, { useContext } from 'react'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'
import { UserContext } from '../../common/providers/UserContext'

import styles from '../styles/HomeNavigationLinks.module.css'

// import { profileRoute } from './modules/profile/routes/ProfileRoute'

// import { myPostRoute } from './modules/profile/routes/ProfileRoute'

export const NavigationLinks = () => {
    const { user } = useContext(UserContext)

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.logo}>Volunteer</h2>
            </div>
            <div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/profile">Profile</a>
                    {/* TODO: Need to add link to My Post*/}
                    <a href="#">My Post</a>
                    <a className={styles.btn} href="/add-post">
                        Add Post
                    </a>
                    <a href="/">Login</a>
                    <a href="/">Register</a>
                    {/* TODO: Render Logout Button instead of null */}
                    {user.token ? null : (
                        <>
                            <LoginButton /> <RegisterButton />
                        </>
                    )}
                </nav>
            </div>
        </div>
    )
}
