import React, { useContext } from 'react'
import axios from 'axios'
import styles from '../styles/AddPost.module.css'
import { UserContext } from '../../common/providers/UserContext'
import { useNavigate } from 'react-router-dom'
import { myPostsPath } from '../../myposts/routes/MyPostsRoute'

export const AddPost = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        const requestData = {
            ...data,
            username: user.username
        }

        try {
            const response = await axios.post(
                // eslint-disable-next-line no-undef
                `${process.env.REACT_APP_SERVICE_ENDPOINT}/post/createPost`,
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

            if (response) {
                navigate(myPostsPath)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    name="title"
                    placeholder="Post Title"
                />
                <textarea
                    type="text"
                    required
                    name="message"
                    placeholder="Post Message"
                />
                <button>ADD POST</button>
            </form>
        </div>
    )
}
