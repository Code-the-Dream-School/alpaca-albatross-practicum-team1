import React, { useContext } from 'react'
import styles from '../styles/LogoutButton.module.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../common/providers/UserContext'
import { homePath } from '../../home/routes/HomeRoute'

export const LogoutButton = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    const onClick = () => {
        const user = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            token: ''
        }
        setUser(user)
        navigate(homePath)
        localStorage.clear()
    }

    return (
        <div>
            <button className={styles.logoutButton} onClick={onClick}>
                Log out
            </button>
        </div>
    )
}
