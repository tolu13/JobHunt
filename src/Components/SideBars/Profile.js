import React from 'react'
import "./Profile.css";

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='form-container'>
        <h4 className='profile-c'> Welcome to jobhunt create your profile </h4>
      <form>
        <input
        type='text'
        placeholder='fullname'
        className='fullname'
         />

         <input
         type='text'
         placeholder='Email'
         className='Emaill'
          />

          <input
          type='text'
          placeholder='phone-number'
          className='phone-no'
           />
          
          <input
          type='text'
          placeholder='location'
          className='loc'
           />

          <input
          type='text'
          placeholder='skills'
          className='Skills'
           />

          <input
          type='text'
          placeholder='experience'
          className='experience'
           />

          <input
          type='text'
          placeholder='education'
          className='education'
           />

          <input
          type='text'
          placeholder='resume'
          className='resume'
           />

          <input
          type='text'
          placeholder='Linkedin'
          className='link'
           />

          <input
          type='text'
          placeholder='github'
          className='git'
           />

          <input
          type='text'
          placeholder='portfolio'
          className='port' />

          <button className='btn  btn-rof my-3 py-2'>create Profile</button>
      </form>
      </div>
    </div>
  )
}

export default Profile