import { useState } from "react";
import {useLocation,useNavigate} from "react-router-dom"

function UpdateRestaurant(){
    const {state}=useLocation();
    const navigate=useNavigate();
    const [form,setForm]=useState(state);
    const handleUpdate=()=>{
        const data=JSON.parse(localStorage.getItem("restaurant",JSON.stringify(updated)))
        alert("restaurant updated")
        navigate("/admin/dashboard");
    }
    return(
        <div>
            <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
             <input value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})} />
             <button onClick={handleUpdate}>Update</button>
        </div>
    )


}
export default UpdateRestaurant;