// login : (install tailwind)
//for bg import with full address
//import apple from "./assets/images/homepage/apple.png"
//<img src={apple}; />
import { useState } from "react"

//copy the code from web and make changes and align.
export default function Login()
{
    const [email,setEmail] = useState("");    //empty value is false.

    const handleLogin = () => {
        if(email&& password)
        {
            localStorage.setItem("email",email);
            window.location.href = "./apple";
        }
        else
        {
            window.location.href = "./mango";
        }
    }
    return (
        <div>
            <input onChange={(e) =>
            {
                setEmail(e.target.value);
            }}></input>

            <button onClick={handleLogin}>login</button>
        </div>
    )
}