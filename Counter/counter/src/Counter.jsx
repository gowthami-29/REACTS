import { useEffect, useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        if(count%3===0){
            alert(`The current number ${count} is divisible by 3 `)
        }

    })

return(
    <>
    <h2>Count:{count}</h2>
    <button onClick={()=>{setCount(count+1)}}>Click</button>
    </>
)
}
export default Counter;