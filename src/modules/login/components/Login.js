import React, { useState, useContext } from 'react'
import styles from '../styles/Login.module.css'
import ClipLoader from 'react-spinners/ClipLoader'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { homePath } from '../../home/routes/HomeRoute'
import { UserContext } from '../../common/providers/UserContext'

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData(e.currentTarget)
        const email = data.get('email')
        const password = data.get('password')

        try {
            const response = await axios.post(
                //TODO: update url once backend is finished
                'http://localhost:3001/auth/login',
                { email, password }
            )

            if (response.data.token) {
                //  TODO: backend will change to move user into data object
                const user = {
                    firstName: response.data.token.firstName,
                    lastName: response.data.token.lastName,
                    username: response.data.token.username,
                    email: response.data.token.email,
                    token: response.data.token
                }
                setUser(user)
                const userToken = user.token.token
                localStorage.setItem('userToken', JSON.stringify(userToken))
                navigate(homePath)
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
            <Link to="/registration" className={styles.registerButton}>
                Create new account
            </Link>
        </div>
    )
}
