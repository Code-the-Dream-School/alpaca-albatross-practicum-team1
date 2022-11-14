import React from 'react'
import styles from '../styles/LoadingSpinner.module.css'
import { ClipLoader } from 'react-spinners'

export const LoadingSpinner = () => {
    return (
        <div className={styles.container}>
            <ClipLoader color="#18a0fb" />
        </div>
    )
}
