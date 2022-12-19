import React, { useEffect, useState } from 'react'
import { Post } from './Post'
import axios from 'axios'
import styles from '../styles/Postings.module.css'
import { LoadingSpinner } from '../../common/components/LoadingSpinner'

export const Postings = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(
                    // eslint-disable-next-line no-undef
                    `${process.env.REACT_APP_SERVICE_ENDPOINT}/post/getPosts`
                )
                if (response.data.posts) {
                    setPosts(response.data.posts)
                    setIsLoading(false)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getPosts()
    }, [setPosts])

    return (
        <>
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

            {isLoading && (
                <div className={styles.spinnerContainer}>
                    <div className={styles.spinner}>
                        <LoadingSpinner /> <h3>Posts are loading...</h3>
                    </div>
                </div>
            )}
        </>
    )
}
