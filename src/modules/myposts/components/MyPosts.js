import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserContext } from '../../common/providers/UserContext'
import { Post } from './Post'
import styles from '../styles/MyPosts.module.css'

export const MyPosts = () => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios
                    // eslint-disable-next-line no-undef
                    .get(`${process.env.REACT_APP_SERVICE_ENDPOINT}/post/getPost`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                )
                setPosts(res.data.post)
            } catch (error) {
                console.log('error', error)
            }
        }
        !!user.token && getData()
    }, [user.token])

    return (
        <>
            <h1 className={styles.header}>My Posts</h1>
            {posts.map((post, index) => {
                return (
                    <Post
                        id={post._id}
                        key={index}
                        title={post.title}
                        message={post.message}
                    />
                )
            })}
        </>
    )
}
