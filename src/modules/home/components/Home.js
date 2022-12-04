import React from 'react'
import { Postings } from './Postings'
import styles from '../styles/Home.module.css'

export const Home = () => {
    return (
        <div className={styles.home}>
            <Postings />
        </div>
    )
}
