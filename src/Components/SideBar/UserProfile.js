import React, { useEffect, useState } from 'react';
import { fetchProfile, createProfile, editProfile } from './profileService'; // Ensure correct path
import './UserProfile.css';
import getUserIdFromToken from '../../auth/jwtDecode';

export const UserProfile = () => {
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ user_id: '', name: '', industry: '', description: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [viewing, setViewing] = useState(false)

    // Fetch profile data on component mount
    useEffect(() => {
        const getProfile = async () => {
            try {
                const user_id = getUserIdFromToken();
                const fetchedProfile = await fetchProfile(user_id);
                console.log("this is fetched profile", fetchedProfile);
                if (fetchedProfile && fetchedProfile.company) {
                    setProfile(fetchedProfile  && fetchedProfile.company);
                    setFormData({
                        user_id: fetchedProfile.company.user_id,
                        name: fetchedProfile.company.name ,
                        industry: fetchedProfile.company.industry,
                        description: fetchedProfile.company.description,
                }); // Set form data for editing
                    console.log("form data set", formData);
                    setViewing(true);
                } else {
                    setViewing(false); // No profile found
                }
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setViewing(false); // 404 means no profile found
                } else {
                    setError('Error fetching profile');
                    console.error(err);
                }
            } finally {
                setLoading(false);
            }
        };

        getProfile();
    }, []);

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission for profile creation/updating
    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.user_id = getUserIdFromToken(); // Get user ID from token

        try {
            let result;
            if (isEditing) {
                result = await editProfile(formData); // Edit profile
            } else {
                result = await createProfile(formData); // Create profile
            }

            // Check the response and alert the user accordingly
            if (result &&  result.success) {
                alert(isEditing ? 'Profile updated successfully' : 'Profile created successfully');
                setProfile(result.profile || result.company); // Ensure profile is updated
                setIsEditing(false); // Reset editing state
                setViewing(true);
            } else {
                alert(isEditing ? 'Profile update failed' : 'Profile creation failed');
            }
        } catch (err) {
            // More detailed error handling
            if (err.response) {
                if (err.response.status === 409) {
                    alert('A profile for this company already exists.'); // Specific message for conflict
                } else {
                    alert('An error occurred while processing your request. Please try again.'); // General error message
                }
            } else {
                alert('Network error. Please check your connection.'); // Network error handling
            }
            console.error('Error handling profile:', err); // Log error for debugging
        }
    };

    if (loading) {
        return <div className='loading'>Loading profile...</div>;
    }

    if (error) {
        return <div className='error'>{error}</div>;
    }

    return (
        <div className='profile-section'>
             {viewing ?
              ( // Show profile details and edit button
                    <div className='Profile-details'>
                        <h2>Company Profile</h2>
                        <p className='profile'>Name: {profile.name}</p>
                        <p className='profile'>Industry: {profile.industry}</p>
                        <p className='profile'>Description: {profile.description}</p>
                        <button  className="Edit-profile" onClick={() => {
                            console.log("edit button clicked")
                            setIsEditing(true);
                            setFormData({ // Populate form data for editing
                                user_id: profile.user_id,
                                name: profile.name,
                                industry: profile.industry,
                                description: profile.description,});
                                }}>Edit Profile</button>
                    </div>
             ) : (
            <div className='header'>
                <h2>{isEditing || !profile ? 'Create Profile' : 'Profile'}</h2>
                  <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            placeholder="Name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="input-name"
                            required
                        />
                        <input
                            name="industry"
                            placeholder="Industry"
                            type="text"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="input-ind"
                            required
                        />
                        <input
                            name="description"
                            placeholder="Description"
                            type="text"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="input-des"
                            required
                        />
                        <button type="submit">{isEditing ? 'Update Profile' : 'Create Profile'}</button>
                    </form>
            </div>
             )}
        </div>
    );
};
