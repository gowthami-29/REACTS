import Home from "./components/Home";
import About from "./components/About";
import Todos from "./components/Todos";
import Notfound from "./components/Notfound"
import {BrowserRouter, Routes,Route} from "react-router-dom"
function App(){
return(
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/aboutus" element={<About/>}/>
    <Route path="/todos" element={<Todos/>}/>
    <Route path="*" element={<Notfound/>}/>
  </Routes>
  
  </BrowserRouter>
)
}
export default App;