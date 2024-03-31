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
    <header className=' lg:h-20 md:h-28 h-24 z-40 bg-theme-300 border-b-4 border-white text-theme-400 rounded-lg sticky top-0 font-bold'>
      {/* <Container> */}
        <nav className='flex'>
          <div className='lg:flex lg:h-14 lg:w-96 lg:mt-3 md:w-32 md:mt-5 md:ml-16 md:my-auto mr-4 ml-2 flex-none w-28 h-22'>
          <div className='lg:w-1/4 md:w-32 w-36'>
          <Link to='/'>
            <Logo width='20px' />

          </Link>
          </div>
          <div className='text-theme-400 text-4xl font-serif text-center lg:flex lg:justify-center lg:items-center w-3/4 left-10 hidden'>
            <span><Link to='/'> NEXUS BLOG</Link></span>
          </div>
          </div>
          <ul className= 'lg:pl-12 pr-1 xl:pl-52 md:w-3/5 ml-auto flex items-end'>
            {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className=' lg:w-28 md:text-lg md:w-28 my-auto md:mr-2 text-sm px-2 py-2 duration-200 bg-theme-300 hover:bg-gradient-to-tl from-theme-300 to-theme-200 hover:text-white hover:text-base md:hover:text-xl rounded-2xl focus:underline outline-none'>
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
      {/* </Container> */}
    </header>
  )
}

export default Header