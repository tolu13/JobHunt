import React from 'react'
import "./DashBoardHome.css";

export default function DashBoardHome() {
  
  
  
  
  return (
    <div className='Dashbord-container'>
      <h1 className='overview'>DashBoard Overview</h1>
      <div className='dashbord-overview'>
        <div className='jobs-posted'> Total Jobs Posted: 5</div>
        <div className='app-recieved'>Applications Recieved: 2</div>
        <div className='active-jobs'>Active Jobs: 3</div>
      </div>
      <div className='recent-activity'>
        <h2>Recent Activity</h2>
        <ul className='job-lists'>
          <li className='first-l'>John Doe applied for frontend developer</li>
          <li className='second-l'>Job: Backend Developer</li>
        </ul>
      </div>
    </div>
  )
}
