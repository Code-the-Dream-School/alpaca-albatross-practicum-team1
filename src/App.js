import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './modules/home/components/Home'
import { AddPost } from './modules/add-post/components/AddPost'
import { Login } from './modules/login/components/Login'
import { MyPosts } from './modules/myposts/components/MyPosts'
import { Registration } from './modules/registration/components/Registration'
import { NavigationLinks } from './modules/home/components/NavigationLinks'
import { homePath } from './modules/home/routes/HomeRoute'
import { addPostPath } from './modules/add-post/routes/AddPostRoute'
import { loginPath } from './modules/login/routes/LoginRoute'
import { registrationPath } from './modules/registration/routes/RegistrationRoute'
import { myPostsPath } from './modules/myposts/routes/MyPostsRoute'
import { applyPath } from './modules/apply-to-volunteer/routes/ApplyRoute'
import { Apply } from './modules/apply-to-volunteer/components/Apply'

function App() {
    return (
        <>
            <NavigationLinks />
            <Routes>
                <Route path={homePath} element={<Home />} />
                <Route path={addPostPath} element={<AddPost />} />
                <Route path={loginPath} element={<Login />} />
                <Route path={registrationPath} element={<Registration />} />
                <Route path={myPostsPath} element={<MyPosts />} />
                <Route path={applyPath} element={<Apply />} />
            </Routes>
        </>
    )
}

export default App
