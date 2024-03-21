import { useDispatch } from 'react-redux'
import React, {useState, useEffect} from 'react'
import authService from "./appwrite/auth"
import {login, logOut} from "./store/authSlice"
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch (logOut())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='shadow-2xl shadow-pink-800 min-h-screen rounded-2xl flex flex-wrap content-between bg-slate-900'>
      <div className='w-full h-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App