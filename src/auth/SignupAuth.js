 import axios from "axios";
 export const handleSignup = async (name, email, password, user_type) => {
  try {
      console.log('Submitting signup request...');
      const response = await axios.post('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, user_type }),
      });

      const data = await response.json();
      console.log('Response from server:', data); // Log the response

      if (data.success) {
          return { success: true };
      } else {
          return { success: false, message: data.message };
      }
  } catch (error) {
      console.error('Error:', error); // Log the error
      return { success: false, message: 'Error signing up' };
  }
};
