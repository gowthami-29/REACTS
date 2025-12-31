import React from "react";

function HeavyComponent(){
  console.log("HeavyComponent rendered!!!");
  return(
    <div style={{marginTop:"30px",padding:"20px",border:"2px solid black"}}>
      <h2>Heavy Component</h2>
      <p>This component is wrapped with react.memo and lazy loaded.</p>
    </div>
  )


}
export default React.memo(HeavyComponent);