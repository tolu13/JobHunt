import React, { useState } from 'react'
import Profile from './Profile';
import { JApplication } from './JApplication';
import Setting from './Setting';
import Logoutt from './Logoutt';
import DashBordHome from './DashBordHome';
import SideBars from './SideBars';

export const DashBord = () => {
    const [currentComponent, setCurrentComponent] = useState("DashBordHome");
    
    const renderComponent = () => {
        switch (currentComponent) {
            case 'Profile':
                return <Profile />
                case 'Applications':
                    return <JApplication />
                    case 'Settings':
                        return <Setting />
                        case 'Logout':
                            return <Logoutt />

                    default:
                        return <DashBordHome />

        }
    }
  return (
    <div className='dashboard-container'>
    <SideBars  setCurrentComponent={setCurrentComponent}/>
     <div className='main-content'>
    {renderComponent()}
    </div> 
    </div>
  )
}
