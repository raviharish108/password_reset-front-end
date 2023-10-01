import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export function Header() {
const navigate=useNavigate();
const token = localStorage.getItem('user-token');

 navigate("/home");
const logout = () => {
  localStorage.clear();
  navigate('/');
} 
    return (
      <div className='header_container'>
         <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/">Login</Link></li>
          {token?<li ><button onClick={()=>{logout() }}>Logout</button></li>:null}
          
         </ul>
    </div>
    )
  }