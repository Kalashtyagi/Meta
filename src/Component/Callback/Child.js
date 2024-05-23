import { memo } from "react";
import React from "react";

const Child = () =>{
    console.log("Child compoent")
    return(
        <>
        </>
    )

}

export default memo(Child);