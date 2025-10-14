import React from 'react'
import Navbar from '../../pages/front/components/header'
import Footer from '../../pages/front/components/footer'
import { Outlet } from 'react-router-dom'

const PublicRoute = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default PublicRoute
