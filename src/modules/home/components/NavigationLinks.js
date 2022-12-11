import React from 'react'
import { UserContext } from '../../common/providers/UserContext'
import styles from '../styles/HomeNavigationLinks.module.css'
import { registrationPath } from '../../registration/routes/RegistrationRoute'
import { loginPath } from '../../login/routes/LoginRoute'
import { addPostPath } from '../../add-post/routes/AddPostRoute'
import { Link } from 'react-router-dom'
import { LogoutButton } from './LogoutButton'
import { useContext } from 'react'

export const NavigationLinks = () => {
    const { user } = useContext(UserContext)
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.logo}>Volunteer Board</h2>
            </div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    {/* TODO: Need to add link to My Post*/}
                    <Link to="#">My Post</Link>
                    <Link to={addPostPath}>Add Post</Link>
                    {!user?.token ? (
                        <>
                            <Link to={loginPath}>Login</Link>
                            <Link to={registrationPath}>Register</Link>{' '}
                        </>
                    ) : (
                        <LogoutButton />
                    )}
                </nav>
            </div>
        </div>
    )
}
