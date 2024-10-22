import axios from "axios";
import getUserIdFromToken from "../../auth/jwtDecode";

const fetchJobApplications = async (job_id) => {
    const user_id = getUserIdFromToken(); // Call the function to get user_id

    if (!user_id) {
        throw new Error("No user ID found in token");
    }

    const token = localStorage.getItem('token'); // Get token from local storage

    if (!token) {
        throw new Error("No token found");
    }

    // API request with the job_id and user_id
    const response = await axios.get(`http://localhost:5000/api/jobs/${job_id}/applications`, {
        headers: {
            'Authorization': `Bearer ${token}` // Include the token in the headers
        },
        params: {
            user_id: user_id // Pass the actual user_id in params
        }
    });

    return response.data.applications;
};

export default fetchJobApplications;
