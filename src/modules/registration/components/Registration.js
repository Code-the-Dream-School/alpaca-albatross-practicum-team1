import React, { useState } from 'react'
import styles from '../styles/Registration.module.css'
import axios from 'axios'
import { LoadingSpinner } from '../../common/components/LoadingSpinner'

export const Registration = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastName = (event) => {
        setLastName(event.target.value)
    }

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const response = await axios.post(
                'https://cf4lq5bf3denzvriyvqnuxlnxu0gwtgo.lambda-url.ap-southeast-2.on.aws/',
                {
                    firstName,
                    lastName,
                    username,
                    email,
                    password,
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    mode: 'cors',
                }
            )
            setSuccess(true)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {success ? (
                /* success, need to redirect to a user logged in homepage */
                <p>Success!</p>
            ) : (
                <div className={styles.container}>
                    <form className={styles.form}>
                        <input
                            value={firstName}
                            onChange={handleFirstName}
                            className={styles.input}
                            type="text"
                            placeholder="First name"
                            required
                        />

                        <input
                            value={lastName}
                            onChange={handleLastName}
                            className={styles.input}
                            type="text"
                            placeholder="Last name"
                            required
                        />

                        <input
                            value={username}
                            onChange={handleUsername}
                            className={styles.input}
                            type="text"
                            placeholder="Username"
                            required
                        />

                        <input
                            value={email}
                            onChange={handleEmail}
                            className={styles.input}
                            type="text"
                            placeholder="Email"
                            required
                        />

                        <input
                            value={password}
                            onChange={handlePassword}
                            className={styles.input}
                            type="password"
                            placeholder="Password"
                            required
                        />

                        {/* Insert RegisterButton component here */}
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className={styles.registerButton}
                            type="submit"
                        >
                            Register
                        </button>

                        {isLoading && <LoadingSpinner />}

                        {error !== null && (
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
            )}
        </>
    )
}
