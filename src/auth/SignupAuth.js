import React from 'react'

export const handleSignup = async ( name, email, password, user_type) => {
  try {
    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, password, user_type}),
    });
    const data = await response.json();

    if (data.success) {
        return {success: true};
    } else {
        return {success: false, message: data.message};
    }
  } catch (error) {
    return { success: false, message: 'Error signing up'};
  }
};
