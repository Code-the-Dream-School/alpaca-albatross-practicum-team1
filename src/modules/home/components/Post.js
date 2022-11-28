import React from 'react'
import styles from '../styles/Post.module.css'
import PropTypes from 'prop-types'

export const Post = ({ title, description }) => {
    return (
        <div className={styles.postContainer}>
            <div className={styles.post}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
