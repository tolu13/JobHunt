import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ManageJobs.css";
export const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => {
        console.log('Api response:', response.data)
        const jobsData = response.data.jobs;
  
        if (Array.isArray(jobsData)) {
          setJobs(jobsData);
        } else {
          console.error('Jobs data is not an array');
        }
      })
      .catch(error => console.error('Error fetching jobs:', error));
  }, [jobs]);
  

  const handleEdit = (jobId) => {
    console.log('Edit job:', jobId);
  };

  const handleClose = (jobId) => {
    console.log('Close job:', jobId);
  };

  const handleDelete = (jobId) => {
    console.log('Delelte job:', jobId);
  };
 
  return (
    <div className='man-container'> 
    <div  className='cool'>
      <h1 className='man-job '>Manage Jobs</h1>
      <table className='table'>
        <thead className='thead'>
          <tr className='tr'>
            <th className='th'>Job Title</th>
            <th className='th'>Status</th>
            <th className='th'>Application</th>
            <th className='th'>Actions</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {jobs.map(job => (
            <tr key={job.id}>
              <td className='title'>{job.title}</td>
              <td className='titlee'>{job.status}</td>
              <td className='titlle'>{job.applications.length}</td>
              <td>
                <button onClick={() => handleEdit(job.id)} className='edit'>Edit</button>
                <button onClick={() => handleClose(job.id)} className='close'>Close</button>
                <button onClick={() => handleDelete(job.id)} className='delete'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
