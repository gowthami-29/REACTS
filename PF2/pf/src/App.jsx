import { Suspense, useState } from "react"
import React from "react";
const HeavyComponent=React.lazy(()=>import("./HeavyComponent"))
function App(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>React.memo & lazy loading Example</h1>
      <h2>counter:{count}</h2>
      <button onClick={()=>setCount(count+1)}>increase</button>
      <Suspense fallback={<p>loading heavy com...</p>}><HeavyComponent/></Suspense>
    </div>
  )
}
export default App;