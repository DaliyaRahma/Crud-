import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get("https://crud-api-ochre.vercel.app")
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error));
    }, []);

    const handleDelete=(id)=>{
        axios.delete(`https://crud-api-ochre.vercel.app/${id}`)
        .then(res=>{console.log(res)
            window.location.reload()
            alert('user deleted successfully')
        })
        .catch(error=>console.log(error) )
    }
    return(
    <div className="min-h-screen mx-auto flex items-center justify-center flex-col bg-blue-950">
 
            <h2 className="font-bold text-4xl my-8 text-white">User Management System</h2>
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <Link to='/users/new' className= 'bg-green-900 text-white px-4 py-2 rounded' >
        Add +
        </Link>
        <table className="table-auto mt-5 w-full bg-white rounded-lg shadow-lg">
            <thead className="items-center justify-center">
                <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Age</th>
                    <th className="px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user) => (
            <tr key={user._id}>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2 text-center">{user.age}</td>
                    <td className="border px-4 py-4 text-center">
                    <div className="flex justify-center space-x-8">
                                        <Link to={`/users/${user._id}/edit`} className='bg-blue-950 text-white py-1 px-3 rounded'>
                                            Update
                                        </Link>
                                        <button className='bg-red-500 text-white py-1 px-3 rounded' onClick={(e)=>handleDelete(user._id)} c>
                                            Delete
                                        </button>
                                    </div>
                        </td>
                       
                        </tr>
                        
                    ))}
                  
            </tbody>

        </table>
        </div>
        </div>
    )

}
export default Users;
