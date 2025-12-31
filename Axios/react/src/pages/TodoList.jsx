import { useEffect, useState } from "react";
import { getTodos } from "../api/todoService";
import {Link} from "react-router-dom";

function TodoList(){
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        getTodos().then(data=>setTodos(data.slice(0,20)));
    },[])
    return(
        <div>
            <h2>All Todos</h2>
            {todos.map(todo=>(
                <div><Link to={`/todo/${todo.id}`}>{todo.title}-{todo.completed?"completed":"pending" }</Link></div>

            ))}
        </div>
    )

}
export default TodoList;