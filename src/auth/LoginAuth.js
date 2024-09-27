
export const handleLogin = async (email, password) => {
 try {
    //still going to add http to the fetch 
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
    });
    const data = await response.json();

    if (data.success) {
        return {success: true};
    } else {
        return { success: false, message: data.message};
    }
 } catch (error) {
    return {success: false, messsage: 'Error signing up'}
 }
}
