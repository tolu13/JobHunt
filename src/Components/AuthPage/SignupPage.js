import React, { useState } from 'react'
import {handleSignup} from'../../auth/SignupAuth';
import './SignupPage.css';

export const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user_type, setUser_type] = useState('jobseeker');
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handleSignup(name, email, password, user_type);
    if (result.success) {
        // redirect to login page
    } else {
        setError('unable to signup')
    }
  };
  
    return (
        <div className='signup-section'>
          <div className='signup-img'>
            <img className='signup-pics' src='job-hunt.jpg' alt='signup pics'/>
          </div>
          <form onSubmit={handleSubmit} className='handleSub'>
            <input 
            className='Optioname'
            type='text'
            placeholder='Input your name'
            onChange={(e) => setName(e.target.value)}
            required
            />

            <input
            type='text'
            className='optionemail'
            placeholder='input a valid email'
            onChange={(e) => setEmail(e.target.value)}
            required
             />
            <input
            type='password'
            className='Optionpass'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <select className='drpdwn'>
                <option value='jobseeker' className='jobseeker'>Job Seeker</option>
                <option value='company' className='company'>Company</option>
            </select>
            <button type='submit' className='sbit'>Signup</button>
          </form>
        </div>
  )
}
