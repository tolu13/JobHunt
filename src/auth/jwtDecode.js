import { jwtDecode } from 'jwt-decode';

// Function to get userId from the decoded token
export const getUserIdFromToken = () => {
  const token = localStorage.getItem('token'); // Get token from localStorage
  if (token) {
    const decodedToken = jwtDecode(token); // Decode the token
    return decodedToken.userId; // Extract userId
  }
  return null; // Return null if no token is present
};

export default getUserIdFromToken; // Export the function for use in other files
