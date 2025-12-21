import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Todos(){
    const [todos,setTodos]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res)=>res.json())
        .then((data)=>setTodos(data.slice(0,10)));
    },[])
    const logout=()=>{
        localStorage.removeItem("islogged")
        navigate("/login")
    }
    return (
        <div>
         
                <h2>hgyihed</h2>
                <button onClick={logout}> Logout </button>
            
            <div>
                {
                    todos.map((todo)=>
                        <Link key={todo.id} to={`/todos/${todo.id}`} >{todo.title}- {todo?.
                        completed ? "True" :"False"}</Link>
                    )
                }
            </div>
            

        </div>
        
    )
}
export default Todos;