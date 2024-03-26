import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js'
import {logOut} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logOut().then (() => {
            dispatch(logOut())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200  hover:bg-gradient-to-tl from-theme-300 to-theme-200 hover:text-2xl rounded-full'
    onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn