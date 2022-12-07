import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserContext } from '../../common/providers/UserContext'
import { Post } from './Post'

export const MyPosts = () => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        axios
            .get('http://localhost:3001/post/getPost', {
                username: user.username
            })
            .then((res) => {
                setPosts(res.data.post)
                console.log(res)
            })
            .catch((err) => console.log(err))
    }, [])

    console.log(user)

    return (
        <>
            <h1>My Posts</h1>
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
