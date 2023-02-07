import { useEffect,useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Login } from "./login/login";
export function ProtectRoute(){
    const navigate=useNavigate();
    const[isloggedin,setisloggedin]=useState(false)
    const checkUserToken=()=>{
        const userToken=localStorage.getItem("user-token")
        if(!userToken||userToken==="undefined"){
            setisloggedin(false)
            return navigate("/")
        }
        setisloggedin(true)
    }

    useEffect(()=>{
       checkUserToken();
    },[isloggedin])
    return(
  
        isloggedin ? <Outlet/> :<Login/>
    
 
    )
}