import { useState } from "react";

function Calculator(){
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const [operation,setOperation]=useState("add");
    const [results, setResults]=useState([]);

    const calculate=()=>{
        const a=Number(num1);
        const b=Number(num2);
        let result;
        if (operation ==="add") result=a+b;
        if (operation==="subtract") result=a-b;
        if (operation==="multiply") result=a*b;
        setResults([...results,`${a} ${operation} ${b} = ${result}`])
    }
    return(
        <div>
            
            <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)} placeholder="Number 1"/> <br /> <br />
            <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)} placeholder="Number 2"/> <br /> <br />
            <select value={operation} onChange={(e)=>setOperation(e.target.value)}> <br /> <br />
                <option value="add">select</option>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
            </select> <br />
            <br />
            <button onClick={calculate}>Actions</button>
            <ul>
                {results.map((res,index)=>(
                    <li key={index}>{res}</li>
                ))}
            </ul>
        </div>
    )
}
export default Calculator;