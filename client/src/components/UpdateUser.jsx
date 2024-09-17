import { useEffect, useState  } from "react";
import {useNavigate, useParams } from "react-router-dom";
import axios from "axios";



const UpdateUser = () => {
    const {id} = useParams();
    const [name, setName]= useState();
    const[email,setEmail]=useState();
    const[age,setAge]=useState();
    const Navigate= useNavigate();

    useEffect (()=>{
        axios.get(`http://localhost:3001/users/${id}`)

        
        .then(response=>{console.log(response)
            
            setName(response.data.name);
            setEmail(response.data.email);
            setAge(response.data.age);
        })
        .catch(error=>console.log(error));
    },[id])

    const Submit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}` ,{name, email, age} )
        .then (()=>Navigate('/'))
        .catch(error=>console.log(error))

    }

  return (
    <div className="min-h-screen mx-auto flex items-center justify-center flex-col bg-blue-950">
 
    <h2 className="font-bold text-4xl my-8 text-white">Update User</h2>
    <div className="bg-white shadow-lg rounded-lg p-8 w-1/2 max-w-4xl ">
       
        <form onSubmit={Submit} >
            <div className="mb-4 flex flex-col">
                <label className="block">Name</label>
                <input type="text"
                value={name}
                onChange={(e=>setName(e.target.value))}
                className="border p-2 rounded w-full"
                ></input>
            </div>
            <div className="mb-4 flex flex-col">
                <label className="block">Email</label>
                <input type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="border p-2 rounded w-full">
                </input>
            <div className="mb-4 flex flex-col">
                <label classname="block">Age</label>
                <input type="number"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                className="border rounded p-2 w-full">
                </input>
            </div>
            <div className="flex flex-col justify-center items-center pt-4">
            <button className="bg-blue-950 text-white px-4 py-2 w-1/3 rounded">
                Update
            </button>
            </div>
            </div>

        </form>
      
    </div>
    </div>
  )
}

export default UpdateUser
