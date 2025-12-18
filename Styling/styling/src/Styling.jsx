import { useState } from "react";

function Styling(){

    const [color,setColor]=useState(true)
return(
    <>
        <div style={{
                width:"200px",
                height:"100px",
                backgroundColor:color ? "red" :"blue",
                color:"white",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                marginBottom:"10px"

            }}>
             HELLO BUDDIE!    
        </div>
       
        <button onClick={()=>{setColor(!color)}}>COLOR</button>
   </>
)
}
export default Styling;