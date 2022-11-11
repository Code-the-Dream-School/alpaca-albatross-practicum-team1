import React, { useEffect } from 'react'
import axios from 'axios'
import styles from '../styles/AddPost.module.css'

export const AddPost = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)

        console.log(data)

        useEffect(() => {
            axios
                .post(
                    'https://dpx3nob3b4anj5ujjhfudnsspu0ubhst.lambda-url.ap-southeast-2.on.aws/',
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    }
                )
                .then(() => {
                    console.log('New Post Added')
                })
                .catch((err) => console.log(err))
        }, [])
    }

    return (
        <div className={styles.container}>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input type="text" required name="title" />
                <label>Post Message:</label>
                <textarea type="text" required name="message" />
                <label>Email:</label>
                <input type="text" required name="email" />
                <button>ADD POST</button>
            </form>
        </div>
    )
}
