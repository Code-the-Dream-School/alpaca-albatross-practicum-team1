import React from 'react'
import styles from '../styles/Edit.module.css'
import PropTypes from 'prop-types'

export const Edit = ({ title, description, handleSubmit }) => {
    return (
        <div className={styles.postContainer}>
            <div className={styles.post}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        required
                        name="title"
                        placeholder={title}
                    />
                    <textarea
                        type="text"
                        required
                        name="message"
                        placeholder={description}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
Edit.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
