import React, { useState } from 'react'
import styles from '../styles/Login.module.css'

// const loginSuccess = async () => {
//     const res = await fetch(
//         'https://zj7ipg4ixun5mj77y6g6t7qkce0omtjb.lambda-url.ap-southeast-2.on.aws/'
//     )

//     const data = await res.json()
//     console.log(data)
// }
// loginSuccess()

export const Login = () => {
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

        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        }).then((res) => res.json())
        SetLoginData(res)
        console.log(loginData)
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

                <button className={styles.loginButton}>Log in</button>
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
