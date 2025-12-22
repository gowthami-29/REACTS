import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Todos(){
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>setTodos(data.slice(0,10)))
    },[]);
    return(
            <div>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/todos">Todos</Link>
                </nav>
                <div className="todos-container">
                    <h2>Todos</h2>
                    <div className="todos-grid">
                        {todos.map((todo)=>(
                            <div className="todo-card"
                            key={todo.id}>
                                <h4>{todo.title}</h4>
                                <p>Status:<span className={todo.completed ? "done" :"pending"}>{todo.completed ?" completed" :"not completed"}</span></p>
                               
                                </div>
                        ))} 
                    </div>
                </div>
            </div>
            )
}
export default Todos;