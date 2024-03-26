import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='bg-theme-300 border-b-4 border-x-indigo-950 text-white rounded-lg text-xl sticky top-0 z-10 font-bold'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
          <Link to='/'>
            <Logo width='70px' />

          </Link>
          </div>
          <ul className='ml-auto flex items-center '>
            {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='my-auto px-6 py-3 duration-200 bg-theme-300 hover:bg-gradient-to-tl from-theme-300 to-theme-200 hover:text-white hover:text-2xl rounded-full'>
                  {item.name}
                </button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header