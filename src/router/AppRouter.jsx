import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { AboutPage } from '../pages/AboutPage'
import { ErrorPage } from '../pages/ErrorPage'
import { MainPage } from '../pages/MainPage'
import { Users } from '../users/Users'
import { UserDetailsPage } from '../pages/UserDetailsPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/' element={<MainPage />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:slug' element={<UserDetailsPage />}/>
        <Route path='/*' element={<ErrorPage />}/>
    </Routes>
  )
}
