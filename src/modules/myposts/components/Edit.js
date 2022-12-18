import React from 'react'
import styles from '../styles/Edit.module.css'
import PropTypes from 'prop-types'

export const Edit = ({ title, description, handleSubmit, handleClose }) => {
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
                        className={styles.textArea}
                        type="text"
                        rows="6"
                        required
                        name="message"
                        placeholder={description}
                    ></textarea>
                    <button className={styles.submit} type="submit">
                        Submit
                    </button>
                    <button className={styles.cancel} onClick={handleClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}

Edit.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
}
