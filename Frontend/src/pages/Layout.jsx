import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Login from './Login'
import { motion } from "framer-motion";

const Layout = () => {

  const { user, loading } = useSelector(state => state.auth)

  // Prevent flash when Redux initializes
  if (loading || user === undefined) {
    return <Loader />
  }

  // If not logged in → show login
  if (!user) return <Login />

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <motion.div
        className="px-4 pt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Outlet />
      </motion.div>
    </div>
  )
}

export default Layout
