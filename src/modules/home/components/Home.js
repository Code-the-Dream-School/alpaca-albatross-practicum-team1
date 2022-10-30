import React from 'react'
import { Login } from '../../login/components/Login'
import { Postings } from './Postings'

export const Home = () => {
    return (
        <div>
            <Login />
            <h1>Home</h1>
            <Postings />
        </div>
    )
}
