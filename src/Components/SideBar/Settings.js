import React, { useState } from 'react';
import "./Settings.css";

export const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Determine the new theme
    setTheme(newTheme); // Update the theme state
    document.body.className = newTheme; // Apply the new theme to the body
  };

  const handlePasswordChange = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("Password change coming soon!");
  };

  const handleAccountDeletion = () => {
    alert("You need to connect to the API");
  };

  return (
    <div className='settings'>
      <h4 className='set'> Welcome to Settings</h4>  

      <div className='theme'>
        <h3 className='themes'>Theme Settings</h3>
        <button  className='btn'onClick={handleThemeChange}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      <hr />
      <div className='password-setting'>
        <h5 className='chn-pass'>Change Password</h5>
        <form onSubmit={handlePasswordChange}>
          <input
            type='password'
            placeholder='Current Password'
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            className='form'
          />
          <input
            type='password'
            placeholder='New Password'
            value={newPassword} // Corrected here
            onChange={e => setNewPassword(e.target.value)} // Correctly set newPassword
            className='form'
          />
          <br />
          <button className='btn' type='submit'>Change Password</button>
        </form>
      </div>
      <hr />
      <div className='delete-account'>
        <h4>Delete Account</h4>
        <button  className='btn btn-danger'onClick={handleAccountDeletion}>Delete Account</button>
      </div>
    </div>
  );
};
