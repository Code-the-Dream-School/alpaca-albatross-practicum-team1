import React, { useState } from 'react'
import styles from '../styles/Searchbar.module.css'

export const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    console.log(history)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchTerm)
    }

    return (
        <div className={styles.searchBar}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    required
                />
            </form>
        </div>
    )
}
