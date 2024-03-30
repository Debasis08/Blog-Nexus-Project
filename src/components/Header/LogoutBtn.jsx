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
    <button className='md:ml-2 md:text-lg text-sm px-2 py-2 duration-200  hover:bg-gradient-to-tl from-theme-300 to-theme-200 hover:text-sm md:hover:text-xl focus:underline rounded-full'
    onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn