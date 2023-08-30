import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const Me = () =>{
    const {id} = useParams();
    const [user,setUser] = useState();

    useEffect(()=>{
        const token = localStorage.getItem("jwToken")
        axios(`http://localhost:3001/${id}`,{
            headers:{
                token:token,
            }
        }).then(response=>{setUser(response.data)})
    },[id])
    
    console.log(id)
    return <div>Hello
        {console.log(user)}
    </div>
}