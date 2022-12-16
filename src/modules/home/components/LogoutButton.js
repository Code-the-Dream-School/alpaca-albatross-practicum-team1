import React, { useContext } from 'react'
import styles from '../styles/LogoutButton.module.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../common/providers/UserContext'
import { homePath } from '../../home/routes/HomeRoute'
import { Link } from 'react-router-dom'

export const LogoutButton = () => {
    const navigate = useNavigate()
    const { logout } = useContext(UserContext)

    const onClick = () => {
        logout()
        navigate(homePath)
    }

    return (
        <div>
            <Link className={styles.logoutButton} onClick={onClick}>
                Log out
            </Link>
        </div>
    )
}
