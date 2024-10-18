import axios from "axios";

export const handleLogin = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });
    
    const data = response.data; // No need to await here since it's already resolved

    console.log('Login response:', data); // Log the response data

    if (data.token) { // Check if the token exists in the response
      localStorage.setItem('token', data.token); // Store the token in localStorage
      return { success: true, token: data.token, user_type: data.user_type, message: data.message }; // Return token and success message
    } else {
      return { success: false, message: data.message }; // Handle any unexpected structure
    }
  } catch (error) {
    console.error("Login error:", error.response ? error.response.data : error.message);
    return { success: false, message: 'Error signing in' };
  }
};
