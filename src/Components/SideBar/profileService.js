import React from 'react';
import axios from "axios";
import getUserIdFromToken from "../../auth/jwtDecode";


export const createProfile =  async (profileData) => {
  const user_id = getUserIdFromToken();

  if (!user_id) {
    throw new Error ("User ID not found.")
  }

  const updatedProfileData = {
    user_id,
    ...profileData
  };
  
  const token = localStorage.getItem('token');
  try {

    const response = await axios.post('http://localhost:5000/api/company', updatedProfileData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include your token here
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating profile:", error)
    throw error;
  }
  
};


export const fetchProfile = async (user_id) =>{
  try {
    const response = await axios.get (`http://localhost:5000/api/company/profile/${user_id}`);
    return response.data;
  } catch (error) {
    console.error ("Error fetching profile", error)
    throw error;
  }
};

export const editProfile = async (companyId, updatedData) => {
 try {
  const response = await axios.put(`http://localhost:5000/api/company/profile/${companyId}`, updatedData);
  return response.data;
 } catch (error) {
  console.error("Error Updating Profile", error)
  throw error;
 }
};
