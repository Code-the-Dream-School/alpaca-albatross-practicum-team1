import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { homeRoute } from './modules/home/routes/HomeRoute'
import { loginRoute } from './modules/login/routes/LoginRoute'
import { registrationRoute } from './modules/registration/routes/RegistrationRoute'
import { addPostRoute } from './modules/add-post/routes/AddPostRoute'
import { UserProvider } from './modules/common/providers/UserContext'
import { applyRoute } from './modules/apply-to-volunteer/routes/ApplyRoute'
import { applySuccessRoute } from './modules/apply-to-volunteer/routes/ApplySuccessRoute'

const router = createBrowserRouter([
    homeRoute,
    loginRoute,
    registrationRoute,
    addPostRoute,
    applyRoute,
    applySuccessRoute
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
