import React, { useContext } from 'react'
import axios from 'axios'
import styles from '../styles/AddPost.module.css'
import { UserContext } from '../../common/providers/UserContext'

export const AddPost = () => {
    const { user } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        const requestData = {
            ...data,
            username: user.username
        }

        axios
            .post(
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
            .catch((err) => console.log(err))
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
