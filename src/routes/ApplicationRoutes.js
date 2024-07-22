import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Sidebar from '../components/sidebar/Sidebar'


const ApplicationRoutes = () => {
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default ApplicationRoutes