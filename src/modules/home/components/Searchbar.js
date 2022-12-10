import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Searchbar.module.css'

export const Searchbar = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/`)
    }

    return (
        <div className={styles.searchBar}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                <div className="input"></div>
                <input
                    type="text"
                    placeholder="search"
                    id="search"
                    onChange={(e) => e.target.value}
                    required
                />
            </form>
        </div>
    )
}
