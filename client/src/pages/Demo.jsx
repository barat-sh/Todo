/* eslint-disable react/prop-types */
import axios from "axios";
import {useEffect, useState} from "react"


export const Demo = () => {
    const [list,setList] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/user/data").then(response=>{setList(response.data)})
    },[])

   
    return <div>
        {console.log(list[0])}
        {list.map((value,key)=>{
            return <div key={key}>
                <User email={value.email} name={value.name} id={value.id} />
            </div>
        })} 
    </div>
}

const User = (props) => {
    return <div>
        <h2>{props.name}</h2>
        <h2>{props.email}</h2>
    </div>
}