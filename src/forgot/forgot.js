import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";




let baseurl="https://password-reset-ys5e.onrender.com"

export function Forgot() {
    const[email,setemail]=useState("")
    const[busy,setbusy]=useState(false)
  const submit=async()=>{
   
    try{
      await setbusy(true)
      const result=await axios.post(`${baseurl}/api/user/reset`,{"email":email})
      await  alert(result.data.message);
      await setbusy(false);
    }catch(err){
      await setbusy(false);
       alert(err.response.data.msg)
    }
  }
  if(busy){
    return(
      <div>
      loading...
    </div>
    )
   
  }
    return (
      
        <div className='login-box'>
          {/* <div>{msg}</div> */}
          <h1>Forgot Password</h1>
          <label>email</label>
          <input  type="email" className='input' onChange={(e)=>{
                  setemail(e.target.value)
          }}/>
          <button className='button' onClick={()=>{
            submit()
          }}>submit</button>
          <button className='button'><Link to="/" style={{ textDecoration: 'none',color:'blue'}}>LogIN</Link></button>
          <button className='button'><Link to="/register" style={{ textDecoration: 'none',color:'blue'}}>Register Now</Link></button>
        </div>
    );
  }