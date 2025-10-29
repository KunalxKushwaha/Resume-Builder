import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      Layout Page
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
