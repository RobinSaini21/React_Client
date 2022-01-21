import React , {useState} from 'react'
import axios from "axios";
import myReducer from '../../Store/Reducer';
import store from '../../Store';
import './Register.css';
const Register = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
//register function 
   const register = (e)=>{
    e.preventDefault();
    // store.dispatch({
    //     type: "ADD_NAME",
    //     payload:{
    //       name: user.name
    //     }
    //   })
      
    //   store.dispatch({
    //     type: "ADD_EMAIL",
    //     payload:{
    //       email: user.email
    //     }
    //   })
    //   store.dispatch({
    //     type: "ADD_PASSWORD",
    //     payload:{
    //       password: user.password
    //     }
    //   })
        store.dispatch({
        type: "ADD_DETAILS",
        payload:{
            name: user.name,
            email: user.email,
          password: user.password
        }
      })
    
   const {name,email,password} = user
   if (name && email && password){
    axios.post("http://localhost:5000/Register",user )
    .then(res=>console.log(res))
   }
   else{
       alert("invalid input")
   };
    
}
return (
    <>    
<div class="form">
{/* <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
    Create a new account
</div>
<span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
    Already have an account ?
    <a href="#" target="_blank" class="text-sm text-blue-500 underline hover:text-blue-700">
        Sign in
    </a>
</span> */}
<div className='title' >
    <h1>REGISTER</h1>
</div>
<div class="Reg_1">
    <form action="#">
       
                <input type="text" id="create-account-pseudo" className="int_1" name="name" value={user.name} onChange={handleChange} placeholder="FullName"/>
                <br/>
                    <input type="text" id="create-account-first-name" className="int_1" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
                    <br/>
                            <input type="password" id="create-account-email" className=" int_1" name="password" value={user.password} onChange={handleChange}    placeholder="Password"/>
                            <br/>
                            <button type="submit" className="btn" onClick={register} >
                            
                                Register
                          
                            </button>
                
    </form>

</div>
 
</div>

    </>
)
}
export default Register