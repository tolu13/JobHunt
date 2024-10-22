import React, { useState } from 'react'
import SideBar from './SideBar'
//import { Route, Routes } from 'react-router-dom'
import DashBoardHome from '../DashBoard/DashBoardHome';
import { MainContent } from './MainContent';
import "./DashBoard.css";
import { ManageJobs } from './ManageJobs';
import { UserProfile } from './UserProfile';
import { Applications } from './Applications';
import { Settings } from './Settings';
import Logout from './Logout';


export const DashBoard = () => {
  const [currentComponent, setCurrentComponent] = useState('DashBoardHome');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'manageJobs':
        return <ManageJobs />
        case 'userProfile':
          return <UserProfile />
          case 'Applications':
            return <Applications />
            case 'Settings':
              return < Settings />
              case 'Logout': 
                return < Logout/>
                
          default:
            return  <DashBoardHome />
    }
  }



  return (
    <div className='dashboard-container'>
        <SideBar  setCurrentComponent={setCurrentComponent}/>
      <div className='main-content'>
        {renderComponent()}
        </div> 
    </div>
  );
};
