import React, { useContext } from 'react'
import { useState } from 'react';
import {
  Link, useNavigate
} from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../context/authContext';


axios.defaults.withCredentials = true;

const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })

  const [err, setError] = useState(null)

  const navigate = useNavigate();

  // const {currentUser} = useContext(AuthContext);
  // console.log(currentUser);
  const {login} = useContext(AuthContext);

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e=>{
    e.preventDefault()
    try {
      //const res = await axios.post("http://localhost:3000/api/auth/login", inputs)
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  }

  console.log(inputs)

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' name = "username" onChange={handleChange}/>
        <input required type="password" placeholder='password' name = "password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have an account? <Link to="/register">Register here</Link></span>
      </form>
    </div>
  )
}

export default Login