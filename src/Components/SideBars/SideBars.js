import React from 'react'
import { FaAddressBook, FaClipboard, FaCog, FaSignInAlt, FaTachometerAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SideBars  ({ setCurrentComponent})  {
  return (
    <div id="sidebar" className='bg-dark text-white vh-100 p-3'>
        <img src='/logo.png' className='logo' alt='logo'/>
        <Link onClick={() => setCurrentComponent('DashBordHome')}>
        <FaTachometerAlt  className='me-2'/>Dashboard
        </Link>
        <br />
        <Link onClick={() => setCurrentComponent('Profile')}>
        <FaUser  className='me-2'/> Profile
        </Link>
        <br />
        <Link onClick={() => setCurrentComponent('Applications')}>
        <FaClipboard  className='me-2'/> Job Applications
        </Link>
        <br />
        <Link onClick={() => setCurrentComponent('Settings')}>
        <FaCog className='me-2' /> Settings
        </Link>
        <br  />
        <Link onClick={() => setCurrentComponent('Logout')}>
        <FaSignInAlt  className='me-2'/> Logout
        </Link>
        <br />
    </div>
  )
}
