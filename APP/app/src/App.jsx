import { useState } from "react";
import TodoList from "./components/TodoList";



function App(){

  const [showtool,setShowtool]=useState(true);
  return(
    <div>
      <h1>Todo App</h1>
      <button onClick={()=>{setShowtool(false)}}> Umount Todos</button>
      {
        showtool&&<TodoList/>
      }
    </div>
  ) 
}
export default App;