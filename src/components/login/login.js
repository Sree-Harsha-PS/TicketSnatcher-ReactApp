import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import TM from "./TM.png"
import {  useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const Navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3001/login", user)
        .then(res => {
            if(res.data == 'login'){
                Navigate("/home")
            }else{
                alert('login failed !!')
            }
        })
    }

    return (
    
        <div className="login">
            <div>
                <p id="title" style={{color:"black" , fontSize:"40px",fontFamily:"Impact"}}>ticketsnatcher</p>
                <p style={{color:"black",fontSize:"15px",fontFamily:"cursive",fontStyle:"italic"}}>snatch your tickets now</p>
    {/* <h1 id="title">ticketsnatcher</h1>  
    <br></br> */}
            </div>
    
            <h1>Login</h1>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => Navigate("/register")}>Register</div>
        </div>
    )
}

export default Login