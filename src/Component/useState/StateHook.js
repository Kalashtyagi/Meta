import React,{useState} from "react";

export default function StateHook(){
    // const use = useState("lemon");
    // console.log(use);

    // const [count,setCount] = useState(0);
    const [greeting,setGreeting] = useState({
        greet:"hello",
        place: "delhi",
    })
    console.log("geerting",greeting,setGreeting);

    const updateGreet = () =>{
        // setGreeting({greet:"hi"});   //not recommened way to update the object state
        // const newGreeting = {...greeting}   //recommended way
        // newGreeting.greet = "hi";
        // setGreeting(newGreeting);

        setGreeting(prevState =>{            //update only one state while retain all state same
            return {...prevState,place:"noida"}
        })

    }
    return(
        <>
        <h1>React use State hook</h1>
        {/* <p>{count}</p> */}
        {/* <button onClick={()=>setCount(count+1)}>+</button> */}

        <p>{greeting.greet},{greeting.place}</p>
        <button onClick={updateGreet}>Update Greeting</button>
        </>
    )
}