import React from 'react'
import "./SideBar.css";
import { FaTachometerAlt, FaBriefcase, FaUser, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import {Link} from "react-router-dom";

export default function SideBar() {
  return (
    <div id='sidebar' className='bg-dark text-white vh-100 p-3'>
       <img  src='/logo.png' className='logo' alt='logo'/>
        <Link to='/dashboard'>
          <FaTachometerAlt  className='me-2'/>Dashboard
        </Link>
        <br />
        <a href='#'>
          <FaBriefcase  className='me-2'/>Manage Jobs
        </a>
        <br />
        <a href='#'>
          <FaUser  className='me-2'/>Profile
        </a>
        <br />
        <a href='#'>
          <FaClipboardList className='me-2' />Applications
        </a>
        <br />
        <a href='#'>
          < FaCog className='me-2'/>Settings</a>
        <br />
        <a href='#' className='my-2'>
          <FaSignOutAlt className='me-2'/>Logout</a>
    </div>

  )
}
