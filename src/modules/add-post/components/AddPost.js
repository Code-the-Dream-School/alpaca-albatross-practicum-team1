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
            // TODO and username once react useContext implemented
            username: user.username
        }

        axios
            // eslint-disable-next-line no-undef
            .post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/post/createPost`, {
                ...requestData
            })
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
