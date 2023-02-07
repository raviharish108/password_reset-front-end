import { useState } from "react"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
let baseurl="https://password-reset-ys5e.onrender.com"
export function Register(){
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const[busy,setbusy]=useState(false)

  const newuser={
                  "name":name,
                  "email":email,
                  "password":password
                }
  const navigate=useNavigate()
  const submitt=async()=>{
   
    try{
       await setbusy(true)
      await axios.post(`${baseurl}/api/user/signup`,newuser)
      await setbusy(false)
     await navigate("/")
    }catch(err){
      await setbusy(false)
      await alert(err.response.data.msg)
      }
    }
  
  if(busy){
   
    return(
      <div>
        loading...
      </div>
    )
  }
    return(
      <div >
        {/* <div>{msg}</div> */}
        <div className='login-box'>
          <h1>Registration Page</h1>
          <label>username</label>
          <input type="text" className='input' onChange={(e)=>{
            setname(e.target.value)
          }}/>
          <label>email</label>
          <input  type="email" className='input' onChange={(e)=>{
            setemail(e.target.value)
          }}/>
          <label>password</label>
          <input type="password" className='input' onChange={(e)=>{
            setpassword(e.target.value)
          }}/>
          <button className='button' onClick={(e)=>{
            e.preventDefault();
            submitt();
          }}>SignUp</button>
          <button className='button'><Link to="/" style={{ textDecoration: 'none',color:'blue'}}>LogIn</Link></button>
          <button className='button'><Link to="/forgot" style={{ textDecoration: 'none',color:'blue'}}>Forgot Password</Link></button>
         </div>
      </div>
    )
  }
  