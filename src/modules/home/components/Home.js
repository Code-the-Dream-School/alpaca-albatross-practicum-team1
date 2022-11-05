import React, { useEffect, useState } from 'react'
import { Postings } from './Postings'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export const Home = () => {
    const [data, getData] = useState([])

    useEffect(() => {
        axios
            .get(
                'https://dpx3nob3b4anj5ujjhfudnsspu0ubhst.lambda-url.ap-southeast-2.on.aws/'
            )
            .then(res => {
                console.log("Getting from API ENDPOINT", res.data)
                getData(res.data)
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <div className={styles.homeHeader}>
                <p>Logo Placeholder</p>
                <h1>Volunteer</h1>
                <div className={styles.homeButtons}>
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>
            <Postings data={data}/>
        </div>
    )
}
