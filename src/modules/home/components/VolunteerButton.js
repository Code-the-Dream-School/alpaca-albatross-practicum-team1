import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/VolunteerButton.module.css'
import PropTypes from 'prop-types'

export const VolunteerButton = ({ id }) => {
    const navigate = useNavigate()

    const onClick = () => navigate({ pathname: `/apply-to-volunteer/${id}` })

    return (
        <div>
            <button className={styles.button} onClick={onClick}>
                Apply to Volunteer
            </button>
        </div>
    )
}

VolunteerButton.propTypes = {
    id: PropTypes.string.isRequired
}
