import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserContext } from '../../common/providers/UserContext'
import { Post } from './Post'

export const Myposts = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios
            .get('http://localhost:3001/post/getPost', { username: 'Owl' })
            .then((res) => {
                setPosts(res.data.post)
                console.log(res)
            })
            .catch((err) => console.log(err))
    }, [])

    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <>
            <h1>My Posts</h1>
            {posts.map((data, index) => {
                return (
                    <Post
                        key={index}
                        title={data.title}
                        message={data.message}
                    />
                )
            })}
        </>
    )
}
