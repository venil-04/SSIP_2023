import React from 'react'
import Navbar from '../components/Navbar'
import admin_img from '../assets/admin-bg.jpg'
function Adminhome() {
  return (
    <div className='h-screen' style={
      {
        backgroundImage:`url(${admin_img})`
        
      }
    }>
      <Navbar/>
    </div>
  )
}

export default Adminhome
