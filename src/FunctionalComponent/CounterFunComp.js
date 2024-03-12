import { useState } from "react";

const CounterFuncComp=() => {
    const[count,setCount]=useState(0);
    

return(
    <div>
        <h2>Example of useState</h2>
        <p>{count}</p>
        {/* <p>{count1}</p> */}
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

    </div>) 
}

export default CounterFuncComp;