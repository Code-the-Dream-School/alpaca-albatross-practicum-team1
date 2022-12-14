import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './modules/home/components/Home'
import { AddPost } from './modules/add-post/components/AddPost'
import { Login } from './modules/login/components/Login'
import { MyPosts } from './modules/myposts/components/MyPosts'
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
                <Route path="/myposts" element={<MyPosts />} />
            </Routes>
        </>
    )
}

export default App
