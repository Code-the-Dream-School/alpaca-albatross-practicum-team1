import React from 'react'
import { useNavigate } from 'react-router-dom'
import { applyPath } from '../../apply-to-volunteer/routes/ApplyRoute'
import styles from '../styles/VolunteerButton.module.css'

export const VolunteerButton = () => {
    const navigate = useNavigate()

    const onClick = () => navigate(applyPath)

    return (
        <div>
            <button className={styles.button} onClick={onClick}>
                Apply to Volunteer
            </button>
        </div>
    )
}
