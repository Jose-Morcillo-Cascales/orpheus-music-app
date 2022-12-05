import { useId } from "react"

const createUser = async (user = {}) => {
    user.id = useId();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=utf-8' },
            body: JSON.stringify(user)
        }
        const res = await fetch('http://localhost:4000/users', options)
        console.log('User successfully created:', await res.json())
    } catch (err) {
        console.warn('An error occurred when creating the user');
    }
}

export default createUser
