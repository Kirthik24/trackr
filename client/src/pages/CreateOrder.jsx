import React, { useContext } from 'react'
import { useState } from 'react';
import {
  Link, useNavigate
} from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../context/authContext';

axios.defaults.withCredentials = true;

const CreateOrder = () => {

  const {currentUser} = useContext(AuthContext);

  const [order, setOrder] = useState({
    owner_id: currentUser?.id,
    customer_id: "",
  })

  const [order_id, setOrderId] = useState("");

  const [step, setSteps] = useState({
    order_id: order_id,
    step:"",
    status: false,
  })

  const [err, setError] = useState(null)

  const navigate = useNavigate();


  const {login} = useContext(AuthContext);

  const handleIdChange = e =>{
    setOrder(prev=>({...prev, [e.target.name]: e.target.value,}))
  }
  const handleStepChange = e =>{
    setSteps(prev=>({...prev, order_id ,[e.target.name]: e.target.value}))
  }

  const handleSubmitOrder = async e=>{
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/order/createorder", order)
      handleGetOrderId();
      console.log(res)
    } catch (err) {
      setError(err.response.data);
    }
  }

  
  // const handleGetOrderId = async e=>{
  //   e.preventDefault()
  //   try {
  //     //const res = await axios.get("http://localhost:3000/api/order/getorderid")
  //     const res = await axios.get(`http://localhost:3000/api/order/getorderid/${order.owner_id}/${order.customer_id}`);
  //     //console.log(res.data[0].order_id);
  //     setOrderId(res.data[0].order_id);
  //     return res.data[0].order_id
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // }
  

  async function handleGetOrderId(){
    try {
      //const res = await axios.get("http://localhost:3000/api/order/getorderid")
      const res = await axios.get(`http://localhost:3000/api/order/getorderid/${order.owner_id}/${order.customer_id}`);
      //console.log(res.data[0].order_id);
      setOrderId(res.data[0].order_id);
      return res.data[0].order_id
    } catch (err) {
      setError(err.response.data);
    }
  }
  

  const handleAddStep = async e=>{
    e.preventDefault()
    try {
      handleGetOrderId();
      const res = await axios.post("http://localhost:3000/api/order/addstep", step)
      console.log(res)
    } catch (err) {
      setError(err.response.data);
    }
  }
  // const handleGetStep = async e=>{
  //   e.preventDefault()
  //   try {
  //     const res = await axios.get(`http://localhost:3000/api/order/getsteps/9`);
  //     console.log(res)
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // }

  // console.log(order.owner_id)
  // console.log(order.customer_id)
  console.log(order_id)
  console.log(step);

  return (
    <div className="auth">
      <h1>Create an Order</h1>
      <span>{currentUser?.id}</span>
      <form>
        <input required type="text" placeholder='customer_id' name = "customer_id" onChange={handleIdChange}/>
        <button onClick={handleSubmitOrder}>Create Order</button>
        <input required type="text" placeholder='Add Step' name = "step" onChange={handleStepChange}/>
        <button onClick={handleAddStep}>Add Step</button>
      </form>
    </div>
  )
} 

export default CreateOrder