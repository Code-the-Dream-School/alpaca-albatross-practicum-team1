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
            .post('http://localhost:3001/post/createPost', {
                ...requestData
            })
            .then((res) => {
                // TODO: Add Success Message!
                console.log(res)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.container}>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input type="text" required name="title" />
                <label>Post Message:</label>
                <textarea type="text" required name="message" />
                <button>ADD POST</button>
            </form>
        </div>
    )
}
