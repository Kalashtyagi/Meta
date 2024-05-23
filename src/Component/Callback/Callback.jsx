import React, { useCallback } from "react";
import Child from "./Child";
import { useState } from "react";

function Callback(){
    const [count,setCount] = useState(1);
    const Learning = useCallback(() => {

    },[count])
    return(
        <>
        <Child Learning={Learning}/>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>count</button>
        </>
    )
}


export default Callback;