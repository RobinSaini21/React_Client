import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
const Login = ({setLoginUser}) => {
const history = useNavigate();
    const [user,setUser] = useState({
        name:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,
    [name]:value
    })
    }

    const login =()=>{
        axios.post("http://localhost:4000/Login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
    history.push("/")})
    }
    return (
        <>
<div class="">
    <div class="">
        Login To Your Account
    </div>
    <div class="mt-8">
        <form action="#" autoComplete="off">
            <div class="">
                <div class="flex relative ">
                 
                    <input type="text" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" value={user.email}  onChange={handleChange} placeholder="Your email"/>
                    </div>
                </div>
                <div class="">
                    <div class=" ">
                    
                        <input type="password" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password}  onChange={handleChange} placeholder="Your password"/>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex ml-auto">
                            <a href="#" class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                                Forgot Your Password?
                            </a>
                        </div>
                    </div>
                    <div class="flex w-full">
                        <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={login}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div class="">
                {/* <a href="#" target="_blank" class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"  onClick={history.push("/Register")}>
                    <span class="ml-2">
                        You don&#x27;t have an account?
                    </span>
                </a> */}
            </div>
        </div>

        </>
    )
}
export default Login