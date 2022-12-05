import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import ClipLoader from 'react-spinners/ClipLoader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { homePath } from '../../home/ro      utes/HomeRoute'
import { myPostsPath } from '../../myposts/routes/MypostsRoute'

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData(e.currentTarget)
        const email = data.get('email')
        const password = data.get('password')

        try {
            const res = await axios.post(
                //TODO: update url once backend is finished
                'https://localhost:3001/auth/login',
                { email, password }
            )

            if (res.data.isLoginSuccess) {
                setIsLoading(false)
                navigate(myPostsPath)
            }
        } catch (err) {
            setError('Login unsuccessful')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />

                {/* TODO: Properly display error message on page  */}
                {error && <span>{error}</span>}

                <button className={styles.loginButton} disabled={isLoading}>
                    {isLoading && (
                        <ClipLoader
                            color={'#ffff'}
                            size={20}
                            aria-label="Loading Spinner"
                        />
                    )}
                    <span>{isLoading ? 'Loading...' : 'Log In'}</span>
                </button>
            </form>

            {/*Insert ForgotPassword route here*/}
            <button className={styles.forgotPasswordButton}>
                Forgot password?
            </button>

            <span>{`Don't have an account?`}</span>
            {/*Insert Registration route here*/}
            <button className={styles.registerButton}>
                Create new account
            </button>
        </div>
    )
}
