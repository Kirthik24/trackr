import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import {
  Link, useNavigate,useLocation
} from "react-router-dom";
import axios from "axios";
const Steps = () => {
  const [steps, setSteps] = useState([]);

  const [step_id, setStepId] = useState("20");

  const location = useLocation();

  const order_id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/order/getsteps/${order_id}`);
        setSteps(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  const navigate = useNavigate();

  const handleChangeStatus = async e=>{
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:3000/api/order/20}`)
      console.log(res)
    } catch (err) {
      setError(err.response.data);
    }
  }

  
  return (
    <div className="home">
      <div className="posts">

        {steps.map(step=>(
          <div className="post" key={step.order_steps_id}>
            <div className="content">
              <Link to={`/post/`} className="link">
                <h1>{step.step}</h1>
              </Link>
              <h3>Status : {step.status}</h3>
              <button onClick={handleChangeStatus}>Done</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Steps