
import './App.css';
import {Header} from "./header/header"
import { Footer } from './footer/footer';
import { Login } from './login/login';
import { Register } from './register/register';
import { Route,Routes } from 'react-router-dom';
import { Forgot } from './forgot/forgot';
import { Changepassword } from './changepassword/chpassword';
import { Home } from './home/home';
import { ProtectRoute } from './protectRoutes';
function App() {
  return (
    <div>
 <Header/>
 <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/forgot" element={<Forgot/>}/>
   <Route path="/changepassword" element={<Changepassword/>}/>
   <Route element={<ProtectRoute/>}>
             <Route path="/home" element={<Home/>}/>
   </Route>
 </Routes>
<Footer/>
  </div>
  )
}



export default App;
