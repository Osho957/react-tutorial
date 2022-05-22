import { useState } from "react";
import Button from "./Button";

export default function Form() {
    const [first,setFirst] = useState<number>(0);
    const [second,setSecond] = useState<number>(0);
    const [result,setResult] = useState<number>(0);
  return (
      <>
      <input type="number" placeholder="Enter First Number" value={first} onChange={(e)=>{setFirst(parseInt(e.target.value))}} />
      <input type="number" placeholder="Enter Second Number" value={second} onChange={(e)=>{setSecond(parseInt(e.target.value))}} />
      <Button text="add" className="addButton" onClick={()=>setResult(first+second)}/>
      <Button text="minus" className="minusButton" onClick={()=>setResult(first-second)}/>
      <label >{result}</label>
      
      </>
     
  )
}

