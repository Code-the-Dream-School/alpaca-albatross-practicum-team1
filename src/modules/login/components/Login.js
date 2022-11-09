import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import ClipLoader from 'react-spinners/ClipLoader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { homePath } from '../../home/routes/HomeRoute'

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        let data
        const form = document.querySelector('form') // should I use useRef hook?
        const formData = new FormData(form)

        for (data of formData) {
            console.log(data[0], data[1]) // I guess we will need to submit this data in function below
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        try {
            const res = await axios.get(
                'https://zj7ipg4ixun5mj77y6g6t7qkce0omtjb.lambda-url.ap-southeast-2.on.aws/'
            )

            if (res.data.isLoginSuccess) {
                navigate(homePath)
                setIsLoading(false)
            }
        } catch (err) {
            if (err.name === 'AxiosError') {
                console.log(err.message)
            } else {
                setError('Login unsuccessful')
            }
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    onChange={handleChange}
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    className={styles.input}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                {error && <span>{error}</span>}
                <button
                    className={styles.loginButton}
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
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

            <span>Don't have an account?</span>
            {/*Insert Registration route here*/}
            <button className={styles.registerButton}>
                Create new account
            </button>
        </div>
    )
}
