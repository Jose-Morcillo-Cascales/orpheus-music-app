const fetchCreateUser = async (user = {}) => {
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        }
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/users`, options)
        const data = await res.json() 
        console.log('User successfully created:', data)
        return data

    } catch (err) {
        console.warn('An error occurred when creating the user');
    }
}

export default fetchCreateUser;
