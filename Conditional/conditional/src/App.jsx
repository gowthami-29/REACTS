import { useState } from "react"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"

function App() {
  const [status,setStatus]=useState(false)
 return(
  <>
   {
    status?<ComponentA/>:<ComponentB />
  }
 
  <button onClick={()=>{setStatus(!status)}}>STATUS</button>
 
  </>
 )
  
}

export default App
