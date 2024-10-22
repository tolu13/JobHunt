import React, { useEffect, useState } from 'react'
import fetchJobApplications from './AppService';
import "./Applications.css";

export const Applications = ({job_id}) => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  
 
     const getApplications = async () => {
     try {
      const fetchedApplications = await fetchJobApplications(job_id);
    setApplications(fetchedApplications);
  } catch (error) {
    setError("Error fetching job Applications");
  }  finally {
    setLoading(false);
  }
};  

  useEffect(() => {
    getApplications();
  }, [job_id])
  
  if (loading) {
    return <div className='load'>Loading Applications...</div>;
  }

  if (error) {
    return <div className='err'>{error}</div>;
  }

  if (applications.length === 0) {
    return <div className='no-app'>Np applications found for this job</div>
  }

  return (
    <div className='Applications' style={{ backgroundColor: 'rgb(216, 251, 216)' }}>
      <h2>Applications</h2>
      <ul>
        {applications.map((application) => (
          <li key={application._id}>
            <p>Name: {application.applicantName}</p>
            <p>Email: {application.applicantEmail}</p>
            <p>Resume: <a href={application.resume}> View Resume </a> </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
