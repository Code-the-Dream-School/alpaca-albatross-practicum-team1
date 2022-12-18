import React from 'react'
import { Postings } from './Postings'
import styles from '../styles/Home.module.css'
import rotatingEarth from '../../../assets/rotatingEarth.mp4'
import { Footer } from './Footer'

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <video src={rotatingEarth} loop muted autoPlay />
            <div className={styles.post}>
                <Postings />
            </div>
            <Footer />
        </div>
    )
}
