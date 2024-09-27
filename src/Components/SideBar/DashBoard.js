import React from 'react'
import SideBar from './SideBar'
//import { Route, Routes } from 'react-router-dom'
import DashBoardHome from '../DashBoard/DashBoardHome'

export const DashBoard = () => {
  return (
    <div className='content'>
      <div className='child'>
        <SideBar />
      </div>
      <div>
      </div>
    </div>
  )
}
