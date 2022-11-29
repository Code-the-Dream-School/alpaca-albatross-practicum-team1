import React from 'react'
import styles from '../styles/HomeNavigationLinks.module.css'

export const HomeNavigationLinks = () => {
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.logo}>Logo Placeholder</h3>
            </div>
            <div>
                <nav>
                    <a href="/profile" target="blank">
                        PROFILE
                    </a>
                    {/* TODO: Need to add link to My Post*/}
                    <a href="#" target="blank">
                        MY POST
                    </a>
                    <a href="/add-post" target="blank">
                        ADD NEW POST
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default HomeNavigationLinks
