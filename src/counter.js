//there are 2 types of components in react:
// 1. class - stateful(can update changes)
//2. function - stateless(cannot update changes) before but now have hooks
//hooks (special powers of class given to function in this form.)
//hooks used to change the state of the component

//PROJECT TO MAKE:incease or decrese the no.
import React, {useState} from "react";

function Counter()
{
    //useState
    const [count, setCount] = useState(0);

//for tailwindcss we use className="property"
    return (
    <div>
    COUNTER APP
        <div>
        <h2>{count}</h2> 
        </div>
        <div>
            <button onClick = {() => {
                setCount(count+1);
            }}>Increase</button>
            <button onClick = {() => {
                setCount(count-1);
            }}>Decrese</button>
        </div>
    </div>
    );
}

export default Counter;
//document.getElementbyId instead use useState.
//axion to fetch data 
//props- properties that are send to another.