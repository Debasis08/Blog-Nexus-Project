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
    <div className='min-h-screen rounded-2xl flex bottom-0 w-screen flex-col content-between bg-theme-100'>
      <Header />
      <div className='w-full h-full block'>
        
        <main>
         <Outlet />
        </main>
        
      </div>
    <Footer />
    </div>
    
  ) : null
}

export default App