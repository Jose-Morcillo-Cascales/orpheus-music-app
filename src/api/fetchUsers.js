
const fetchUsers = async() => {
    try{
        const res = await fetch ("http://localhost:4001/api/v1/users")
        return res.json();
        
    } catch(e) {
        console.log("Fail fetching users")
    }
}
export default fetchUsers