import { useEffect,useState } from "react"
import axios from "axios";

export const Demo = () => {
    const [list,setList] = useState()
    // axios("http://localhost:3001/user/data").then(response=>{console.log(response.data)})
    useEffect(()=>{
        axios.get("http://localhost:3001/user/data").then(response=>{setList(response.data)})
    },[])
    
    return <div>
        {JSON.stringify(list)}
    </div>
}