import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedComponents() {
    const islogin=localStorage.getItem("login")
    console.log(typeof islogin)
  return (
    <div>
        {islogin=="true"?<Outlet />:<Navigate to="/login" /> }
        </div>
  )
}
