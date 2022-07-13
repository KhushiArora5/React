import React, { useState } from "react";

export default function Apple()
{
    const [email,setEmail] = useState("");
    return(
        <div>
            <div className="text-center">Hi {localStorage.getItem("email").toUpperCase}</div> 
        </div>    
    )
}