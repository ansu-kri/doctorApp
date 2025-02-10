import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'



const AllRoutes = () => {
  return (
    <Routes>
      
   
      <Route path='/login' element={<><Login /></>} />
      {/* <Route path='/landing' element={<><Landing /></>} /> */}
      <Route exact path='/' element={<><Navbar/> <Home/></>} />





    </Routes>
  ) 
}

export default AllRoutes
