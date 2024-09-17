import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const Navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser', { name, email, age })
            .then(() => {Navigate('/')
            alert('User Added Successfully')})
            .catch(error => console.log(error));
    };

    return (
        <div className="min-h-screen mx-auto flex items-center justify-center flex-col bg-blue-950">
            <h2 className="font-bold text-4xl my-8 text-white">Add User</h2>
            <div className="bg-white shadow-lg rounded-lg p-8 w-1/2 max-w-4xl">
                <form onSubmit={Submit}>
                    <div className="mb-4 flex flex-col">
                        <label className="block">Name</label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Enter Your Name"
                            onChange={(e) => setName(e.target.value)}
                            className="border p-2 rounded w-full"
                        />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label className="block">Email</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-2 rounded w-full"
                        />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label className="block">Age</label>
                        <input
                            type="number"
                            value={age}
                            placeholder="Enter Your Age"
                            onChange={(e) => setAge(e.target.value)}
                            className="border p-2 rounded w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center pt-4">
                        <button className="bg-green-900 text-white px-4 py-2 w-1/3 rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
