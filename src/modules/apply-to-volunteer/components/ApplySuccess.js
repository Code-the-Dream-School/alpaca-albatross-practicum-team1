import React from 'react'
import styles from '../styles/ApplySuccess.module.css'

export const ApplySuccess = () => {
    return (
        <div className={styles.container}>
            <h3>Your application has been submitted. </h3>
            <p>
                <i> Thank you for applying! </i>
            </p>
        </div>
    )
}
