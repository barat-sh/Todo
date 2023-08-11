import { useNavigate } from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate()
    return <div>
        <div className="text-2xl flex justify-center mt-6">
            <h2>ToDo Application</h2>
        </div>
    
    <div className="flex justify-center items-center mt-6">
        <div>
            {/* <Link to="/register" className="m-2"> */}
                <button className="m-2" onClick={()=>{
                    navigate("/register")
                }}>
                    <button type="submit" className="flex justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Register</button>
                </button>
            
            {/* </Link> */}
            {/* <Link to="/login" className="m-2"> */}
            
                <button className="m-2" onClick={()=>{
                    navigate("/login")
                }}>
                    <button type="submit" className="flex justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Login</button>
                </button>
            
            {/* </Link> */}
        </div> 
    </div>
</div>
}