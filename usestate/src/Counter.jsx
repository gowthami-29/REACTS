import { useState } from "react";

function Counter()
{
    const [count,setCount]=useState(0)
    return(
        <>
        <h3>COUNT: {count}</h3>
        <button onClick={()=>{setCount(count+1)}}>useState</button>
        </>
    )
}
export default Counter;