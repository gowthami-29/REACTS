import { useState } from "react";
import { useParams } from "react-router-dom";

function TodoDetails(){
    const {todoId}=useParams()
    const [todo ,setTodo]=useState(null);

if(!todo){
    return <p>Loading....</p>
}
useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then((res)=>res.json())
        .then((data)=>setTodo(data.slice(0,10)));
    },[todoId])
    return(
        <div className="container card">
            <h2>hgiye</h2>
            <p>{todo.userId}</p>
            <p>title:{todo.title}</p>
            <p>
                Status :{todo.completed ? "completed" : "not completed"}
            </p>
        </div>
    )
}
export default TodoDetails;