import React, { useState, useContext } from 'react'
import { Edit } from './Edit'
import { View } from './View'
import PropTypes from 'prop-types'
import axios from 'axios'
import { UserContext } from '../../common/providers/UserContext'

export const Post = ({ id, title, message }) => {
    const [isInEditMode, setInEditMode] = useState(false)
    const [post, setPost] = useState({ title, message })
    const { user } = useContext(UserContext)

    const toggleEditMode = () => {
        setInEditMode(true)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        const requestData = {
            ...data,
            username: user.username,
            id
        }
        try {
            const response = await axios.post(
                'http://localhost:3001/post/updatePost',
                {
                    ...requestData
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            setPost({
                title: response.data.post.title,
                message: response.data.post.message
            })
        } catch (error) {
            console.log(error)
        }

        setInEditMode(false)
    }
    if (isInEditMode) {
        return (
            <Edit
                title={post.title}
                description={post.message}
                handleSubmit={handleSubmit}
            />
        )
    } else {
        return (
            <View
                title={post.title}
                description={post.message}
                handleClick={toggleEditMode}
            />
        )
    }
}

Post.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}
