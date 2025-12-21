import Todos from "./components/Todos";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Protected from "./components/protected";
import TodoDetails from "./components/Todo.Details";
function App(){
  return(
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
       <Route path="/todos/" element={<Protected><Todos/></Protected>}/>
        <Route path="/todos/todoId" element={<Protected><TodoDetails/></Protected>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App;