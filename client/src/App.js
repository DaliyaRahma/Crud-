import { BrowserRouter,Route,Routes } from "react-router-dom";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser" 
import UpdateUser from "./components/UpdateUser" 
 

function App() {
  return (
    <div >

<BrowserRouter>
<Routes>
<Route exact path="/" element={<Users />} />
<Route exact path="users/new" element={<CreateUser />}/>
<Route exact path="users/:id/edit" element={<UpdateUser />}/>


</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
