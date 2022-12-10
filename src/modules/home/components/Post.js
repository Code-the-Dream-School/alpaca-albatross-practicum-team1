import React from 'react'
import styles from '../styles/Post.module.css'
import PropTypes from 'prop-types'
import { VolunteerButton } from './VolunteerButton'

export const Post = ({ title, description, id }) => {
    return (
        <div className={styles.post}>
            <h3>{title}</h3>
            <p>{description}</p>
            <VolunteerButton id={id} />
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
