import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './modules/home/components/Home'
import { AddPost } from './modules/add-post/components/AddPost'
import { Login } from './modules/login/components/Login'
import { Registration } from './modules/registration/components/Registration'
import { NavigationLinks } from './modules/home/components/NavigationLinks'

function App() {
    return (
        <>
            <NavigationLinks />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-post" element={<AddPost />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                {/* <Route path="/profile" element={<Profile />} />  */}
                <Route path="/my-post" element={<myPost />} />
            </Routes>
        </>
    )
}

export default App
