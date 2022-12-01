import React from 'react'
import styles from '../styles/HomeNavigationLinks.module.css'
import PropTypes from 'prop-types'

// import { profileRoute } from './modules/profile/routes/ProfileRoute'

// import { myPostRoute } from './modules/profile/routes/ProfileRoute'

export const NavigationLinks = ({ children }) => {
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.logo}>Logo Placeholder</h3>
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
                </nav>
            </div>
            {children}
        </div>
    )
}

NavigationLinks.propTypes = {
    children: PropTypes.string.isRequired
}
