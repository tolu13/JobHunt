import axios from "axios";

export const handleSignup = async (name, email, password, user_type) => {
  try {
    console.log('Submitting signup request...');
    
    // No need for method, headers, or manually stringifying the body
    const response = await axios.post('api/auth/register', {
      name,
      email,
      password,
      user_type: user_type === "job_seeker" ? "job_seeker" : "company"
    });

    // Axios automatically parses the JSON, no need for response.json()
    const data = response.data;
    console.log('Response from server:', data); // Log the response

    if (data.success !== undefined) {
      return { success: data.success , message: data.message};
    } else {
      return { success: false, message: 'Unexpected response structure'};
    }
  } catch (error) {
    console.log('Error during signup', error)
    if (error.response && error.response.data && error.response.data.message){
         return {success: false, message: error.response.data.message}
    } // Log the error
    return { success: false, message: 'Error signing up' };
  }
};
