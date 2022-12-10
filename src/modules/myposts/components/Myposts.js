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
        const getData = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:3001/post/getPost',
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                )
                setPosts(res.data.post)
                console.log('log resp', res)
            } catch (error) {
                console.log('error', error)
            }
        }
        !!user.token && getData()
    }, [user.token])

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
