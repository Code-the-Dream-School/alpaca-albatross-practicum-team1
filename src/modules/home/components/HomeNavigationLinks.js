import React from 'react'
import styles from '../styles/HomeNavigationLinks.module.css'
import { useNavigate } from 'react-router-dom'
import { addPostRoute } from '../../add-post/routes/AddPostRoute'
// import{ profileRoute} from '../../profile/routes/ProfileRoute'

export const HomeNavigationLinks = () => {
    const navigate = useNavigate()

    const handleLinkClick = (route) => {
        navigate(route)
    }
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.logo}>Logo Placeholder</h3>
            </div>
            <div>
                <nav>
                    {/* TODO: Need to add link to profile */}
                    <a onClick={() => handleLinkClick()} target="blank">
                        PROFILE
                    </a>
                    {/* TODO: Need to add link to my-post */}
                    <a onClick={() => handleLinkClick()} target="blank">
                        MY POST
                    </a>
                    <a
                        onClick={() => handleLinkClick(addPostRoute)}
                        target="blank"
                    >
                        ADD NEW POST
                    </a>
                </nav>
            </div>
        </div>
    )
}
