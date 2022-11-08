import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import ClipLoader from 'react-spinners/ClipLoader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { homePath } from '../../home/routes/HomeRoute'

export const Login = () => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const [loginData, SetLoginData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        SetLoginData((prevloginData) => {
            return {
                ...prevloginData,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.get(
                'https://zj7ipg4ixun5mj77y6g6t7qkce0omtjb.lambda-url.ap-southeast-2.on.aws/'
            )
            setIsPending(true)

            if (res.data.isLoginSuccess) {
                navigate(homePath)
                setIsPending(false)
            }
        } catch (err) {
            if (err.name === 'AxiosError') {
                console.log(err.message)
            } else {
                setError('Login unsuccessful')
            }
        }
        SetLoginData(loginData)
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
                    disabled={isPending}
                >
                    {isPending && (
                        <ClipLoader
                            color={'#ffff'}
                            size={20}
                            aria-label="Loading Spinner"
                        />
                    )}
                    {isPending && <span>Loading...</span>}
                    {!isPending && <span>Log in</span>}
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
