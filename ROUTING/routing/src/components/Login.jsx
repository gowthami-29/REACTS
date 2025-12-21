import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [Email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate()
    const handleLogin=()=>{
        if(Email==="admin@gmail.com" && password==="admin@123"){
            localStorage.setItem("islogged",true)
            navigate("/todos")
        }
        else{
            setError("Invalid email or password")
        }
    }
    return(
        <div style={{width:"40%", margin:"auto", marginTop:100}}>
            <h2>LOGIN</h2>
            <input type="text" placeholder="Enter Email" value={Email}  onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
            <button onClick={handleLogin}>Login</button>
            {
                error && <p style={{color:"red", fontSize:"20"}}>{error}</p>
            }
        </div>

    )
}
export default Login;