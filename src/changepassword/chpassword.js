import queryString from "query-string"
import { useLocation } from "react-router-dom"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
let baseurl="https://password-reset-ys5e.onrender.com"
export function Changepassword(){
  const location=useLocation();
  const[busy,setbusy]=useState(true)
  // const [invalidUser,setinvalidUser]=useState(false)
  const[password,setpassword]=useState("")
  const[c_password,setC_password]=useState("")
  const navigate=useNavigate();
  const verifytoken=async()=>{
    try{
      const {token,id}=queryString.parse(location.search)
       await axios.get(`${baseurl}/api/user/valid?token=${token}&id=${id}`)
        setbusy(false)
    }catch(err){
      await alert(err.response.data.msg)
      await navigate("/forgot")
  }
  }
  useEffect(()=>{
    verifytoken();
  },[]);
 const navigate1=useNavigate();
  const submitt=async()=>{
    try{
      await setbusy(true)
      const{token,id}=queryString.parse(location.search)
      if(password!==c_password){
      alert("password does not match")
      }
      if(password===c_password){
         const data=  await axios.post(`${baseurl}/api/user/change?token=${token}&id=${id}`,{password})
        await alert(data.response.data.msg);
      };
       await setbusy(false);
      await navigate1("/");
    }catch(err){
         await setbusy(false);
         await alert(err.response.data.msg)
    }
  }
 
  if(busy){
    return(
      <div>
        <div>loading...</div>
      </div>
    )
  }
    return(
      <div>
        <div className='login-box'>
            <h1>change password</h1>
            <label>New Password</label>
            <input className='input'  type="text" onChange={(e)=>{
        e.preventDefault()
        setpassword(e.target.value)
      }  }/>
            <label>Confirmation Password</label>
            <input className='input' type="password" onChange={(e)=>{
        e.preventDefault()
        setC_password(e.target.value)
      }  }/>
            <button className='button' onClick={(e)=>{e.preventDefault()
              submitt();
             
            }}>Submit</button>
          </div>
      </div>
    )
  }
  