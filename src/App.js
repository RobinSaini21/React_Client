import React from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { useState } from 'react';
import Apidata from './ApiData/Apidata';
import MyGoolgeLogin from './components/GoogleLogin/GoolgeLogin';
import Facebook from './components/GoogleLogin/FacebookLogin';
import {
  BrowserRouter as Router, 
  Routes, 
  Route

} from "react-router-dom";


function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
      <h1>LOGIN AND REGISTER PAGE</h1>
{/* <Router>
  <Routes> */}
        {/* <Route exact path="/">
          {
            user && user._id ? <Homepage/>:<Login/>
          }<Homepage/></Route> */}
     
        {/* <Route  path="/Login" element={<Login/>}><Login setLoginUser={setLoginUser}/></Route> */}
        {/* <Route path="/Register"  element={<Register/>} ></Route> */}
     

{/* </Routes> 

 </Router> */}
<Register/>
<Apidata/>
<MyGoolgeLogin/>
{/* <Login/> */}
<Facebook/>
    </div>
  );
}

export default App;
