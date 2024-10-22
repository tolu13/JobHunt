import React from 'react'
import "./SideBar.css";
import { FaTachometerAlt, FaBriefcase, FaUser, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa';
import {Link} from "react-router-dom";


export default function SideBar({ setCurrentComponent}) {
  return (
    <div id='sidebar' className='bg-dark text-white vh-100 p-3'>
       <img  src='/logo.png' className='logo' alt='logo'/>
        <Link onClick={() => setCurrentComponent('DashBoardHome')}>
          <FaTachometerAlt  className='me-2'/>Dashboard
        </Link>
        <br />
        <a onClick={() => setCurrentComponent('manageJobs')} >
          <FaBriefcase  className='me-2'/>Manage Jobs
        </a>
        <br />
        <a onClick={() => setCurrentComponent('userProfile')}>
          <FaUser  className='me-2'/>Profile
        </a>
        <br />
        <a onClick={() => setCurrentComponent('Applications')}>
          <FaClipboardList className='me-2' />Applications
        </a>
        <br />
        <a onClick={() => setCurrentComponent('Settings')}>
          < FaCog className='me-2'/>Settings</a>
        <br />
        <a onClick={() => setCurrentComponent('Logout')} className='my-2'>
          <FaSignOutAlt className='me-2'/>Logout</a>
    </div>

  );
};
