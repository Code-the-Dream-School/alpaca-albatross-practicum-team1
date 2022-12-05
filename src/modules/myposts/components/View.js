import React from 'react'
import styles from '../styles/View.module.css'
import PropTypes from 'prop-types'

export const View = ({ title, description, handleClick}) => {
   

    return (
        <div className={styles.postContainer}>
            <div className={styles.post}>
                <h3>{title}</h3>
                <p>{description}</p>
                <button onClick={handleClick}>Edit</button>
            </div>
        </div>
    )
}
View.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}
