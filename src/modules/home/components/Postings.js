import React, { useEffect, useState } from 'react'
import { Post } from './Post'
import axios from 'axios'
import styles from '../styles/Postings.module.css'

export const Postings = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://volunteerboard.onrender.com/post/getPosts')
            .then((res) => {
                setPosts(res.data.posts)
            })
            .catch((err) => console.log(err))
    }, [])

    if (!posts || !posts.length) {
        return (
            <div className={styles.posting}>No posts yet, check back later</div>
        )
    }
    console.log(posts)
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
