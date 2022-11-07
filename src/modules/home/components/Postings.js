import React, { useEffect, useState } from 'react'
import { Post } from './Post'
import axios from 'axios'
import styles from '../styles/Postings.module.css'

export const Postings = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        axios
            .get(
                'https://dpx3nob3b4anj5ujjhfudnsspu0ubhst.lambda-url.ap-southeast-2.on.aws/'
            )
            .then((res) => {
                console.log('Getting from API ENDPOINT', res.data.posts)
                setPost(res.data.posts)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.posting}>
            {post.map((data, index) => {
                return (
                    <Post
                        key={index}
                        title={data.title}
                        description={data.description}
                    />
                )
            })}
        </div>
    )
}
