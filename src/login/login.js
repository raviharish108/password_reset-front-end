import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
let baseurl="https://password-reset-ys5e.onrender.com"
export function Login(){
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const[busy,setbusy]=useState(false)
  const user={
               "email":email,
              "password":password
              }
   const navigate=useNavigate("")           
   const login=async()=>{
    try{
   await setbusy(true)
   const response= await axios.post(`${baseurl}/api/user/signin`,user)
   const token=await (response.data.user.token);
   if (!token) {
    alert('Unable to login. Please try after some time.');
    return;
    }
    await localStorage.clear();
    await localStorage.setItem('user-token', token);
    await navigate('/home');
    await setbusy(false)
  }catch(err){
    await setbusy(false)
     alert("invalid credentials")
  }  
}     
if(busy){
  return(
    <div>
      connecting...
    </div>
  )
}    
    return(
      <div >
        <div className='login-box'>
          <h1>login page</h1>
          <label>username</label>
          <input type="email" className='input' onChange={(e)=>{
               setemail(e.target.value);
          }}/>
          <label>password</label>
          <input  type="password" className='input' onChange={(e)=>{
            setpassword(e.target.value)
          }}/>
          <button className={busy ? "button_active" : "button"} onClick={()=>{
                  login()}}>login</button>
          <button className='button'><Link to="/register" style={{ textDecoration: 'none',color:'blue'}}>Register Now</Link></button>
          <button className='button'><Link to="/forgot" style={{ textDecoration: 'none',color:'blue'}}>Forgot Password</Link></button>
        </div>
      </div>
    )
  }