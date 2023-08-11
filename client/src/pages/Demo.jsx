import { useState } from "react"
import axios from "axios";

export const Demo = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    return <div>
        <input type="text" onChange={(event)=>{setEmail(event.target.value)}} />
        <input type="password" onChange={(event)=>{setPassword(event.target.value)}}/>
        <button type="submit" onClick={()=>{
            const user = {
                email,
                password
            }
            axios.post("http://localhost:3001/user/login",user).then(response=>{
                if (response.data.id){
                    console.log(response.data.id)
                }else{
                    console.log(response.data.message)
                }
            })
           
        }}>submit</button>
    </div>
}