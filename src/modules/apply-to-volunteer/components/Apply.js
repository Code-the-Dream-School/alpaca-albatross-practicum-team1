import React, { useContext, useState } from 'react'
import styles from '../styles/Apply.module.css'
import axios from 'axios'
import { LoadingSpinner } from '../../common/components/LoadingSpinner'
import { UserContext } from '../../common/providers/UserContext'
import { useParams } from 'react-router-dom'

export const Apply = () => {
    const params = useParams()
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { user } = useContext(UserContext)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsError(false)
        setIsLoading(true)
        setIsSubmitted(false)

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        const applyData = {
            ...data,
            username: user.username,
            id: params.id
        }

        try {
            const response = await axios.post(
                'http://localhost:3001/post/apply',
                {
                    ...applyData
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            if (response.data) {
                setIsSubmitted(true)
            }
        } catch (error) {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    name="username"
                    className={styles.input}
                    type="text"
                    placeholder="Username"
                    required
                />

                <textarea
                    name="message"
                    className={styles.input}
                    type="text"
                    placeholder="Message"
                    required
                />

                <button
                    disabled={isLoading}
                    className={styles.submitButton}
                    type="submit"
                >
                    Submit Application
                </button>

                {isLoading && <LoadingSpinner loading={isLoading} />}

                {isError && (
                    <p className={styles.error}>
                        APPLICATION NOT SUBMITTED. Please try again.
                    </p>
                )}

                {isSubmitted && (
                    <>
                        <h3>Your application has been submitted.</h3>
                        <p>
                            <i>Thank you for applying!</i>
                        </p>
                    </>
                )}
            </form>
        </div>
    )
}
