import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from '../header/Search'
import Footer from '../footer/Footer'
import Navbar from '../header/Navbar'

const Root = () => {
  return (
    <>
        <Search/>
        <Navbar/>
        <Outlet/>
        <Footer/>
        
    </>
  )
}

export default Root