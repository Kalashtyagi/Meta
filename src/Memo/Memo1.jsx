import React, { useState,useEffect } from "react";
import { useMemo } from "react";

export default function Memo1(){
    const [count,setCount] = useState(1);
    const [item,setItem] = useState(10);
    const [multi,setMulti] = useState(0)
    // console.log("memo")
    // const multiCountMemo = useMemo(
    //     function multiCount(){
    //     console.log("mul");
    //     return count*5;

    // },[count])
    useEffect(()=>{
        function multiCount(){
                console.log("mul");
                return count*5;
        }
        setMulti(multiCount());
    },[count])
    return(
        <>
        <h1>count:{count}</h1>
        <h1>item:{item}</h1>
        <h1>{multi}</h1>
        <button onClick={()=>setCount(count+1)}>update count</button>
        <button onClick={()=>setItem(item+1)}>update item</button>

        </>
    )
}