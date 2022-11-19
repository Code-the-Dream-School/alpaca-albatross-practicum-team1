import React from 'react'
import axios from 'axios'
import styles from '../styles/AddPost.module.css'

export const AddPost = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        const requestData = {
            ...data,
            // TODO and username once react useContext implemented
            username: 'testuser1'
        }

        axios
            .post('http://localhost:3001/post/createPost', {
                ...requestData
            })
            .then(() => {
                console.log('New Post Added')
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
