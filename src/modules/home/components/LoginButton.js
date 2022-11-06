import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
import styles from '../styles/LoginButton.module.css'
import { loginPath } from '../../login/routes/LoginRoute'

export const LoginButton = () => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleClick = async () => {
        try {
            const res = await axios.get(
                'https://zj7ipg4ixun5mj77y6g6t7qkce0omtjb.lambda-url.ap-southeast-2.on.aws/'
            )
            setIsPending(true)

            if (res.data.isLoginSuccess) {
                navigate(loginPath)
                setIsPending(false)
            }
        } catch (err) {
            if (err.name === 'AxiosError') {
                console.log(err.message)
            } else {
                setIsPending(false)
                setError('Login unsuccessful')
            }
        }
    }

    return (
        <div>
            {error && <span>{error}</span>}
            <button
                className={styles.loginButton}
                onClick={handleClick}
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
        </div>
    )
}
