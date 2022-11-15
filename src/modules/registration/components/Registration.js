import React, { useState } from 'react'
import styles from '../styles/Registration.module.css'
import axios from 'axios'
import { LoadingSpinner } from '../../common/components/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import { homePath } from '../../home/routes/HomeRoute'

export const Registration = () => {
    const navigate = useNavigate()
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        setIsError(false)
        setIsLoading(true)
        try {
            const response = await axios.post(
                'http://localhost:3001/auth/register',
                {
                    ...data
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            if (response.data.token) {
                navigate(homePath)
            }
        } catch (error) {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        name="firstName"
                        className={styles.input}
                        type="text"
                        placeholder="First name"
                        required
                    />

                    <input
                        name="lastName"
                        className={styles.input}
                        type="text"
                        placeholder="Last name"
                        required
                    />

                    <input
                        name="username"
                        className={styles.input}
                        type="text"
                        placeholder="Username"
                        required
                    />

                    <input
                        name="email"
                        className={styles.input}
                        type="text"
                        placeholder="Email"
                        required
                    />

                    <input
                        name="password"
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                        required
                    />

                    {/* Insert RegisterButton component here */}
                    <button
                        disabled={isLoading}
                        className={styles.registerButton}
                        type="submit"
                    >
                        Register
                    </button>

                    {isLoading && <LoadingSpinner loading={isLoading} />}

                    {isError && (
                        <p className={styles.error}>
                            REGISTRATION FAILED. Please try again.
                        </p>
                    )}
                </form>

                {/*Insert Login route here*/}
                <button className={styles.returnToLoginButton}>
                    Already have an account?
                </button>
            </div>
        </>
    )
}
