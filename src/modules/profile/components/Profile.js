import React, { useState } from 'react'
import styles from '../styles/Profile.module.css'

export const Profile = () => {
    const [open, setOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        console.log(data)

        // axios
        //     .post('http://localhost:3001/post/createPost', {
        //         ...requestData
        //     })
        //     .then(() => {
        //         console.log('Profile Updated)
        //     })
        //     .catch((err) => console.log(err))
    }
    return (
        <div className={styles.container}>
            <h6>Profile Settings</h6>
            <h1>Update Profile!</h1>
            <p>
                You can manage and edit your personal information in the profile
                settings.
                <button
                    className={styles.toggleButton}
                    onClick={() => setOpen(!open)}
                >
                   {open ? 'Close' : 'Edit'} 
                </button>
            </p>

            {open ? (
                <form onSubmit={handleSubmit}>
                    <label>Update First Name:</label>
                    <input
                        name="firstName"
                        type="text"
                        required
                        placeholder="First Name"
                    />

                    <label>Update Last Name:</label>
                    <input
                        name="lastName"
                        type="text"
                        required
                        placeholder="Last Name"
                    />

                    <label>Update UserName:</label>
                    <input
                        name="userName"
                        type="text"
                        required
                        placeholder="UserName"
                    />

                    <label>Email Address:</label>
                    <input
                        name="email"
                        type="text"
                        required
                        placeholder=" New Email Address"
                    />

                    <label>Change your password:</label>
                    <input
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                    />
                    <button className={styles.formButton} >Update</button>
                </form>
            ) : null}
        </div>
    )
}
