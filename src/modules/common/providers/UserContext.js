import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        token: ''
    })
    useEffect(() => {
        localStorage.setItem('userToken', JSON.stringify(user.token))
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.object
}
