import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../auth/Context'
import { useContext } from 'react'
const Navbar = () => {
  
    
    const isAuthenticated = localStorage.getItem('token')

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }



  return (
    <div className='flex items-center text-lg px-20 py-6 bg-neutral-200'>
      <h2 className='text-xl'>Logo</h2>

      <ul className='flex gap-10 items-center ml-auto'>
        
        <Link to={'/'}>
            <li>Home</li>
        </Link>

        {isAuthenticated ? 
            <li className='cursor-pointer' onClick={handleLogout}>Logout</li>
            :
            <Link to={'/login'}>
                <li>Login</li>
            </Link>
        }


        <Link to={'/dashboard'}>
            <li>Dashboard</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
