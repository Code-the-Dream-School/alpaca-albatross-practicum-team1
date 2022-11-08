import React, { useState } from 'react'
import styles from '../styles/AddPost.module.css'

export const AddPost = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const post = { title, description, email }

        console.log(post)
        // fetch(
        //     'https://dpx3nob3b4anj5ujjhfudnsspu0ubhst.lambda-url.ap-southeast-2.on.aws/',
        //     {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(post),
        //     }
        // ).then(() => {
        //     console.log('New Post Added')
        // })
    }

    return (
        <div className={styles.container}>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Post Description:</label>
                <textarea
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Email:</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>ADD POST</button>
            </form>
        </div>
    )
}
