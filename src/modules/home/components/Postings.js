import React, { useEffect, useState } from 'react'
import { Post } from './Post'
import axios from 'axios'
import styles from '../styles/Postings.module.css'
import { LoadingSpinner } from '../../common/components/LoadingSpinner'

export const Postings = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            // eslint-disable-next-line no-undef
            .get(`${process.env.REACT_APP_SERVICE_ENDPOINT}/post/getPosts`)
            .then((res) => {
                setPosts(res.data.posts)
            })
            .catch((err) => console.log(err))
    }, [])

    if (!posts || !posts.length) {
        return (
            <div className={styles.spinnerContainer}>
                <div className={styles.spinner}>
                    <LoadingSpinner /> <h3>Posts are loading...</h3>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.posting}>
            {posts.map((data, index) => {
                return (
                    <Post
                        key={index}
                        title={data.title}
                        description={data.message}
                        id={data._id}
                    />
                )
            })}
        </div>
    )
}
