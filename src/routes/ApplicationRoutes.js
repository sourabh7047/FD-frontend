import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import Sidebar from '../components/sidebar/Sidebar'
import { Navbar } from '../components/navbar/Navbar'

const ApplicationRoutes = () => {
  return (
    <>
      < Navbar/>
      {/* <Sidebar/> */}
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default ApplicationRoutes