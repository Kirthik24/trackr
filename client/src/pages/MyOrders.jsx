import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import {
  Link, useNavigate,useLocation
} from "react-router-dom";
import axios from "axios";

import { AuthContext } from '../context/authContext';

const MyOrders = () => {
    const {currentUser} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [owner_id, setOwnerId] = useState(currentUser?.id);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/order/getorders/${owner_id}`);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  const navigate = useNavigate();
  
  return (
    <div className="home"> 
      <div className="posts">
        {orders.map(order=>(
          <div className="post" key={order.order_id}>
            <div className="content">
              <Link to={`/steps/${order.order_id}`} className="link">
                <h1>Order ID : {order.order_id} </h1>
              </Link>
              <button></button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default MyOrders